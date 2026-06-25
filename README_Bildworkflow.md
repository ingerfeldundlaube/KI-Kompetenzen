# Bildworkflow für die Reflexionskarten

Die großen Originalbilder werden separat in `assets-original/cards/` abgelegt. Diese Dateien werden nicht in Git übernommen.

Aus den Originalen erzeugt das Script `scripts/optimize-images.mjs` automatisch kleinere WebP-Dateien für die App:

```bash
npm run optimize:images
```

Ausgabeordner:

```text
public/cards/
```

Die App erwartet technische Dateinamen nach folgendem Muster:

```text
card-1-1-front.webp
card-1-1-back.webp
card-1-2-front.webp
card-1-2-back.webp
```

Beim Build wird die Bildoptimierung automatisch mit ausgeführt:

```bash
npm run build
```

Aktuelle Optimierung:

- maximale Breite: 1400 px
- Format: WebP
- Qualität: 82
- EXIF-Rotation wird berücksichtigt

Wichtig: Die Originalbilder können ihre bisherigen Namen behalten, z. B. `Reflexionskarte 1.1 Vorderseite(1).png`. Das Script normalisiert die Namen und erzeugt daraus die stabilen App-Dateinamen.
