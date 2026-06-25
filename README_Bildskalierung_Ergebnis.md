# Ergebnis der Bildskalierung

Die 44 Kartenbilder wurden erfolgreich verarbeitet.

## Einstellungen
- Format: WebP
- Zielbreite: 1400 px
- Qualität: 82
- Sharp `effort`: 6

## Ergebnis
- Originalbilder: ca. 66,27 MB gesamt
- Optimierte Bilder: ca. 6,79 MB gesamt
- Durchschnitt pro Originalbild: ca. 1,5 MB
- Durchschnitt pro optimiertem Bild: ca. 158 KB

## Hinweise
- Die optimierten Dateien liegen unter `public/cards/`.
- Die App verwendet nur die optimierten WebP-Dateien.
- Für eine erneute Verarbeitung können die Originalbilder in `assets-original/cards/` abgelegt und mit `npm run optimize:images` neu erzeugt werden.
- In diesem Paket sind die optimierten Bilder enthalten. Die hochgeladenen großen Originalbilder sind **nicht** nochmals im ZIP enthalten, damit das Paket kompakt bleibt.
