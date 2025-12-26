const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeOgImage() {
  const publicDir = path.join(__dirname, '..', 'public');
  const inputPath = path.join(publicDir, 'og-image.png');
  const outputPathPng = path.join(publicDir, 'og-image-opt.png');
  const outputPathJpg = path.join(publicDir, 'og-image.jpg');

  if (!fs.existsSync(inputPath)) {
    console.error('❌ og-image.png not found');
    return;
  }

  try {
    // Get original info
    const metadata = await sharp(inputPath).metadata();
    console.log('\n📊 Original og-image.png:');
    console.log(`   Size: ${metadata.width}x${metadata.height}`);
    const originalSize = fs.statSync(inputPath).size;
    console.log(`   File size: ${(originalSize / 1024).toFixed(2)} KB`);

    // Option 1: Ultra-compressed PNG
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .png({
        quality: 70,
        compressionLevel: 9,
        palette: true,
        colors: 128 // Reduce color palette
      })
      .toFile(outputPathPng);

    const pngSize = fs.statSync(outputPathPng).size;
    console.log('\n🔧 Ultra-compressed PNG:');
    console.log(`   File size: ${(pngSize / 1024).toFixed(2)} KB`);
    console.log(`   Saved: ${((originalSize - pngSize) / 1024).toFixed(2)} KB`);

    // Option 2: High-quality JPEG
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 85,
        progressive: true,
        optimizeScans: true
      })
      .toFile(outputPathJpg);

    const jpgSize = fs.statSync(outputPathJpg).size;
    console.log('\n📸 JPEG (quality 85):');
    console.log(`   File size: ${(jpgSize / 1024).toFixed(2)} KB`);
    console.log(`   Saved: ${((originalSize - jpgSize) / 1024).toFixed(2)} KB`);

    // Recommendation
    console.log('\n💡 RECOMMENDATION:');
    if (jpgSize < pngSize && jpgSize / 1024 < 100) {
      console.log(`   ✅ Use JPEG (${(jpgSize / 1024).toFixed(2)} KB < 100 KB)`);
      console.log('   Run: mv public/og-image.jpg public/og-image.png');
      console.log('   Or: Update metadata to use og-image.jpg directly');
    } else if (pngSize / 1024 < 100) {
      console.log(`   ✅ Use PNG (${(pngSize / 1024).toFixed(2)} KB < 100 KB)`);
      console.log('   Run: mv public/og-image-opt.png public/og-image.png');
    } else {
      console.log(`   ⚠️  Both still over 100KB. JPEG is smaller.`);
      console.log(`   Consider using JPEG: mv public/og-image.jpg public/og-image.png`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

optimizeOgImage().catch(console.error);
