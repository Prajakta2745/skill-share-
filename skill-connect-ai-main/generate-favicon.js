const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create a simple SVG-based favicon with SkillShare colors
const svgFavicon = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Blue circle top-left -->
  <circle cx="10" cy="8" r="2.5" fill="#4A90E2"/>
  
  <!-- Green circle top-right -->
  <circle cx="22" cy="8" r="2.5" fill="#7ED321"/>
  
  <!-- Blue interlocking shape -->
  <path d="M 8 14 Q 8 10, 12 10 L 12 16 Q 12 20, 8 20 Z" fill="#4A90E2"/>
  <path d="M 12 14 L 12 16 L 16 16 L 16 14 Z" fill="#4A90E2"/>
  
  <!-- Green interlocking shape -->
  <path d="M 20 14 Q 20 10, 24 10 L 24 16 Q 24 20, 20 20 Z" fill="#7ED321"/>
  <path d="M 16 14 L 16 16 L 20 16 L 20 14 Z" fill="#7ED321"/>
  
  <!-- Heart accent -->
  <path d="M 12 16 Q 16 19, 20 16" stroke="#4A90E2" stroke-width="1" fill="none" stroke-linecap="round"/>
</svg>
`;

async function generateFavicon() {
  try {
    // Convert SVG to ICO
    const icoPath = path.join(__dirname, 'public', 'favicon.ico');
    
    await sharp(Buffer.from(svgFavicon))
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(icoPath);
    
    console.log('✅ Favicon generated successfully at:', icoPath);
    console.log('💡 Tip: Hard refresh your browser (Ctrl+Shift+R) to see the new favicon');
  } catch (err) {
    console.error('❌ Error generating favicon:', err);
    process.exit(1);
  }
}

generateFavicon();
