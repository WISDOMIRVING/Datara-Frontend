// Generate PWA icons as simple SVG-to-PNG placeholders
// Run: node scripts/generate-icons.js

import { writeFileSync } from 'fs';

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

const generateSVG = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a8a"/>
      <stop offset="100%" style="stop-color:#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="url(#bg)"/>
  <text x="50%" y="54%" font-family="Arial,sans-serif" font-weight="bold" font-size="${size * 0.55}" fill="white" text-anchor="middle" dominant-baseline="middle">D</text>
  <text x="50%" y="78%" font-family="Arial,sans-serif" font-weight="600" font-size="${size * 0.1}" fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">DATARA</text>
</svg>`;

sizes.forEach(size => {
    const svg = generateSVG(size);
    writeFileSync(`public/icons/icon-${size}x${size}.svg`, svg);
    console.log(`Generated icon-${size}x${size}.svg`);
});

console.log('\nNote: For production, convert these SVGs to PNGs using a tool like sharp or an online converter.');
console.log('For now, update manifest.json to use .svg extension.');
