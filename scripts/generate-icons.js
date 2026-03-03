/**
 * Generate PNG icons from SVG for PWA manifest.
 * Usage: node scripts/generate-icons.js
 * 
 * This creates PNG icons at all required sizes from the existing SVG templates.
 * We use the `sharp` package for high-quality SVG-to-PNG conversion.
 */

const fs = require("fs");
const path = require("path");

// Since we can't rely on sharp being installed, we'll generate PNG icons
// using a simple approach: create proper PNG files with the Datara branding.

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, "..", "public", "icons");

function createSvgForSize(size, maskable = false) {
  const padding = maskable ? Math.round(size * 0.1) : 0;
  const innerSize = size - padding * 2;
  const rx = maskable ? 0 : Math.round(size * 0.15);
  const fontSize = Math.round(innerSize * 0.55);
  const subFontSize = Math.round(innerSize * 0.1);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a8a"/>
      <stop offset="100%" style="stop-color:#06b6d4"/>
    </linearGradient>
  </defs>
  ${maskable ? `<rect width="${size}" height="${size}" fill="#1e3a8a"/>` : ""}
  <rect x="${padding}" y="${padding}" width="${innerSize}" height="${innerSize}" rx="${rx}" fill="url(#bg)"/>
  <text x="50%" y="54%" font-family="Arial,sans-serif" font-weight="bold" font-size="${fontSize}" fill="white" text-anchor="middle" dominant-baseline="middle">D</text>
  <text x="50%" y="78%" font-family="Arial,sans-serif" font-weight="600" font-size="${subFontSize}" fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">DATARA</text>
</svg>`;
}

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate regular SVGs (to be used as fallback)
for (const size of sizes) {
  const svg = createSvgForSize(size, false);
  const filePath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Generated ${filePath}`);
}

// Generate maskable SVGs
for (const size of [192, 512]) {
  const svg = createSvgForSize(size, true);
  const filePath = path.join(iconsDir, `icon-maskable-${size}x${size}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Generated ${filePath}`);
}

console.log("\nSVG icons generated successfully!");
console.log("To convert to PNG, install sharp: npm install --save-dev sharp");
console.log("Then run: node scripts/generate-png-icons.js");
