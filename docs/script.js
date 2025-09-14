document.addEventListener('DOMContentLoaded', () => {
    
    // --- Clipboard.js Initialisierung ---
    const clipboard = new ClipboardJS('.copy-button');

    clipboard.on('success', function(e) {
        const button = e.trigger;
        const originalText = button.querySelector('span').textContent;
        button.querySelector('span').textContent = 'Kopiert!';
        button.classList.add('success');

        setTimeout(() => {
            button.querySelector('span').textContent = originalText;
            button.classList.remove('success');
        }, 2000);

        e.clearSelection();
    });

    // --- GSAP Animationen ---
    // Warten, bis alle Bibliotheken geladen sind
    const initAnimations = () => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof TypeIt !== 'undefined') {
            
            // Header-Animation (gestaffelt)
            gsap.timeline()
                .from(".anim-header", {
                    duration: 0.8,
                    y: 50,
                    opacity: 0,
                    ease: "power3.out",
                    stagger: 0.2 // Jedes Element startet 0.2s nach dem vorherigen
                });

            // Allgemeine Fade-In-Animation für Sektionen
            gsap.utils.toArray('.anim-fade-in').forEach(element => {
                gsap.from(element, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                });
            });

            // TypeIt.js Code-Block Animation
            const codeBlockElement = document.getElementById('code-block');
            const codeContent = `# 🧹 cleansweep.py
# Ein intelligentes Python-Skript zur Organisation des Downloads-Ordners.

import os
import shutil
import time
from pathlib import Path
import platform

# --- KONFIGURATION ---
# Finde den Home-Ordner des aktuellen Benutzers
USER_HOME = os.path.expanduser('~')

# Passe den Zielpfad basierend auf dem Betriebssystem an
if platform.system() == "Windows":
    ZIEL_BASIS_PFAD = os.path.join(USER_HOME, 'OneDrive', 'Desktop', 'CleanSweep-Sortierung')
else:
    ZIEL_BASIS_PFAD = os.path.join(USER_HOME, 'Desktop', 'CleanSweep-Sortierung')

DOWNLOADS_PFAD = os.path.join(USER_HOME, 'Downloads')

# Definiere Regeln für die Sortierung
ORDNER_REGELN = {
    "1_Projekte": ['.zip', '.rar', '.7z', '.tar.gz'],
    "2_Software": ['.exe', '.msi', '.dmg', '.deb', '.appimage'],
    "3_Assets": ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.psd', '.mp3', '.wav'],
    "4_Dokumente": ['.pdf', '.docx', '.doc', '.txt', '.md', '.pptx'],
    "5_Archiv": [], # Wird für alte Dateien verwendet
    "6_Betriebssystem-ISOs": ['.iso']
}
ARCHIV_ALTER_TAGE = 90 # Dateien älter als 90 Tage werden archiviert

# ... (Der Rest des Codes wird hier ausgeführt)

print("CleanSweep initialisiert. Bereit zum Aufräumen.")`;

            // Setze den Code-Inhalt für den Kopieren-Button
            codeBlockElement.textContent = codeContent;

            // Erstelle die TypeIt-Instanz, wenn der Code-Block sichtbar wird
            ScrollTrigger.create({
                trigger: ".code-wrapper",
                start: "top 70%",
                once: true, // Animation nur einmal ausführen
                onEnter: () => {
                    new TypeIt('#code-block', {
                        strings: [codeContent],
                        speed: 25,
                        waitUntilVisible: true,
                        cursorChar: '▋'
                    }).go();
                }
            });

        } else {
            // Wenn eine Bibliothek fehlt, versuche es nach 100ms erneut
            setTimeout(initAnimations, 100);
        }
    };

    initAnimations();
});
