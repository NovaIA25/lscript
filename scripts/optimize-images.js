const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const sizeBefore = (stats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPath);

    const statsAfter = fs.statSync(outputPath);
    const sizeAfter = (statsAfter.size / 1024).toFixed(2);
    const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)}: ${sizeBefore}KB → ${sizeAfter}KB (${saved}% économisé)`);
  } catch (error) {
    console.error(`✗ Erreur avec ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Optimisation des images...\n');

  const images = [
    'logo.png',
    'logo1200.png',
    'logo48.png',
    'lscript32.png',
    'og-image.png',
  ];

  for (const image of images) {
    const inputPath = path.join(publicDir, image);
    const tempPath = path.join(publicDir, `temp-${image}`);

    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, tempPath);

      // Replace original with optimized version
      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, inputPath);
    } else {
      console.log(`⚠️  ${image} non trouvé`);
    }
  }

  console.log('\n✅ Optimisation terminée !');
}

optimizeAllImages().catch(console.error);
