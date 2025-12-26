const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeLogo(inputPath, outputPath, targetSize) {
  try {
    // Get original info
    const metadata = await sharp(inputPath).metadata();
    console.log(`\n${path.basename(inputPath)}:`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);

    const originalSize = fs.statSync(inputPath).size;
    console.log(`  Original size: ${(originalSize / 1024).toFixed(2)} KB`);

    // Optimize the image
    await sharp(inputPath)
      .resize(targetSize, targetSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({
        quality: 90,
        compressionLevel: 9,
        palette: true // Use palette-based PNG for smaller file size
      })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    console.log(`  Optimized size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`  Saved: ${((originalSize - newSize) / 1024).toFixed(2)} KB (${((1 - newSize / originalSize) * 100).toFixed(1)}%)`);

    return { originalSize, newSize };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  const optimizations = [
    { input: 'logo48.png', output: 'logo48-optimized.png', size: 48 },
    { input: 'lscript32.png', output: 'lscript32-optimized.png', size: 32 },
  ];

  let totalOriginal = 0;
  let totalNew = 0;

  console.log('Starting logo optimization...');

  for (const opt of optimizations) {
    const inputPath = path.join(publicDir, opt.input);
    const outputPath = path.join(publicDir, opt.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`\nSkipping ${opt.input} - file not found`);
      continue;
    }

    const result = await optimizeLogo(inputPath, outputPath, opt.size);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
    }
  }

  console.log('\n=== TOTAL ===');
  console.log(`Original total: ${(totalOriginal / 1024).toFixed(2)} KB`);
  console.log(`Optimized total: ${(totalNew / 1024).toFixed(2)} KB`);
  console.log(`Total saved: ${((totalOriginal - totalNew) / 1024).toFixed(2)} KB (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);

  console.log('\n✅ Optimization complete!');
  console.log('\nTo replace the original files, run:');
  optimizations.forEach(opt => {
    console.log(`  mv public/${opt.output} public/${opt.input}`);
  });
}

main().catch(console.error);
