const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeOgImage() {
  const publicDir = path.join(__dirname, '..', 'public');
  const inputPath = path.join(publicDir, 'og-image.png');
  const outputPath = path.join(publicDir, 'og-image-optimized.png');

  if (!fs.existsSync(inputPath)) {
    console.error('❌ og-image.png not found');
    return;
  }

  try {
    // Get original info
    const metadata = await sharp(inputPath).metadata();
    console.log('\n📊 Original og-image.png:');
    console.log(`   Size: ${metadata.width}x${metadata.height}`);
    console.log(`   Format: ${metadata.format}`);

    const originalSize = fs.statSync(inputPath).size;
    console.log(`   File size: ${(originalSize / 1024).toFixed(2)} KB`);

    // Optimize for Open Graph (1200x630 recommended)
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .png({
        quality: 85,
        compressionLevel: 9,
        palette: true
      })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    console.log('\n✨ Optimized og-image:');
    console.log(`   File size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`   Saved: ${((originalSize - newSize) / 1024).toFixed(2)} KB (${((1 - newSize / originalSize) * 100).toFixed(1)}%)`);

    // Check if we hit the target
    if (newSize / 1024 < 100) {
      console.log('\n✅ Target achieved (<100KB)!');
    } else {
      console.log(`\n⚠️  Still ${(newSize / 1024 - 100).toFixed(2)} KB over target`);
    }

    console.log('\n📝 To replace the original file, run:');
    console.log('   mv public/og-image-optimized.png public/og-image.png');

  } catch (error) {
    console.error('❌ Error optimizing og-image:', error.message);
  }
}

optimizeOgImage().catch(console.error);
