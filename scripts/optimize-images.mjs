import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('assets-original/cards');
const outputDir = path.resolve('public/cards');
const supportedExtensions = /\.(png|jpg|jpeg|webp)$/i;

function normalizeOriginalName(file) {
  return file
    .replace(/#U00fc/g, 'ü')
    .replace(/R#U00fcckseite/g, 'Rückseite')
    .replace(/\(\d+\)/g, '')
    .replace(/Voderseite/g, 'Vorderseite')
    .replace(/Rueckseite/g, 'Rückseite')
    .replace(/Rückseite/g, 'Rückseite')
    .replace(/Ruckseite/g, 'Rückseite')
    .replace(/\s+/g, ' ')
    .trim();
}

function getOutputName(file) {
  const normalized = normalizeOriginalName(file);
  const idMatch = normalized.match(/Reflexionskarte\s+(\d+\.\d+)/i);
  const isFront = /Vorderseite/i.test(normalized);
  const isBack = /Rückseite|Rueckseite/i.test(normalized);

  if (!idMatch || (!isFront && !isBack)) {
    return null;
  }

  const id = idMatch[1].replace('.', '-');
  const side = isBack ? 'back' : 'front';
  return `card-${id}-${side}.webp`;
}

async function directoryExists(dir) {
  try {
    const stats = await fs.stat(dir);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

if (!(await directoryExists(inputDir))) {
  console.log('Keine Originalbilder gefunden. Überspringe Bildoptimierung.');
  process.exit(0);
}

await fs.mkdir(outputDir, { recursive: true });

const files = (await fs.readdir(inputDir)).filter((file) => supportedExtensions.test(file));

if (files.length === 0) {
  console.log('Keine unterstützten Bilddateien in assets-original/cards gefunden.');
  process.exit(0);
}

let optimized = 0;
let skipped = 0;

for (const file of files) {
  const outputName = getOutputName(file);

  if (!outputName) {
    console.warn(`Übersprungen, Dateiname nicht erkannt: ${file}`);
    skipped += 1;
    continue;
  }

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, outputName);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1400,
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(outputPath);

  optimized += 1;
  console.log(`${file} → ${outputName}`);
}

console.log(`Bildoptimierung abgeschlossen: ${optimized} optimiert, ${skipped} übersprungen.`);
