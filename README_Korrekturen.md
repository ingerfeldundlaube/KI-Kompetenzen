# Korrekturpaket – KI-Kompetenzen

Dieses Paket enthält die ersten Korrekturen, bevor die Bildskalierung eingerichtet wird.

## Geändert

- `FlipCard.jsx`: versehentliche Markdown-Codezäune entfernt; Komponente ist wieder buildfähig.
- `FlipCard.jsx`: Wechsel zwischen Vorderseite und Rückseite stabilisiert.
- `FlipCard.jsx`: Beim Wechsel auf eine andere Karte wird wieder die Vorderseite angezeigt.
- `FlipCard.jsx`: Fehlende Bilder werden sichtbar als Hinweis angezeigt, inklusive erwartetem Pfad.
- `cards.js`: Dateinamen werden nicht mehr automatisch um `(1)`, `(2)`, `(3)` bereinigt. Dadurch passen die Pfade zunächst zu den tatsächlich bereitgestellten Bilddateien.
- `reflexionen.js`: Platzhalterdatei ergänzt, damit der Import funktioniert.
- `index.html`: vollständige HTML-Struktur ergänzt.
- `deploy.yml`: robuster formatiert und Bildkopie auf png/jpg/jpeg/webp erweitert.
- `styles.css`: Styles für Kartenbild und Bild-Fehlerhinweis ergänzt.

## Getestet

`npm install` und `npm run build` wurden erfolgreich ausgeführt.

## Nächster Schritt

Die Bilddateien können anschließend über einen separaten Workflow in `public/cards` oder `dist/cards` optimiert bereitgestellt werden. Dafür sollte im nächsten Schritt ein Sharp-Script ergänzt werden.
