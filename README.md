# 🧹 Project CleanSweep

Ein intelligentes Python-Skript zur automatischen Organisation des `Downloads`-Ordners. Dieses Tool sortiert Dateien basierend auf ihrem Typ und Alter in vordefinierte Kategorien, um Ordnung zu schaffen und die digitale Hygiene zu wahren.

---

## ✨ Features

- **Automatische Sortierung:** Verschiebt Dateien (Software, Dokumente, Bilder etc.) in dedizierte Ordner.
- **Intelligente Archivierung:** Verschiebt automatisch Dateien, die älter als 90 Tage sind, in ein Archiv.
- **Selbstheilend:** Erstellt automatisch alle benötigten Zielordner, falls diese nicht existieren.
- **Plattformunabhängig:** Erkennt automatisch das Betriebssystem (Windows/Linux) und passt die Dateipfade an.
- **Anpassbar:** Ordnerregeln und Dateitypen können einfach in der Konfigurationssektion des Skripts erweitert werden.

---

## 🚀 Anwendung

1.  **Python installieren:** Stelle sicher, dass [Python 3](https://www.python.org/downloads/ ) auf deinem System installiert ist.
2.  **Skript anpassen (optional):** Öffne die `cleansweep.py`-Datei und passe bei Bedarf die Pfade `DOWNLOADS_PFAD` und `ZIEL_BASIS_PFAD` sowie die `ORDNER_REGELN` an.
3.  **Ausführen:** Öffne ein Terminal oder eine Kommandozeile, navigiere zum Ordner des Skripts und führe es aus mit:
    ```bash
    python cleansweep.py
    ```

---

## 🛠️ Gebaut mit

- **Python 3**
  - `os`
  - `shutil`
  - `pathlib`
  - `platform`

Dieses Projekt wurde als Übung in der prozeduralen Programmierung und im Umgang mit dem Dateisystem entwickelt.
