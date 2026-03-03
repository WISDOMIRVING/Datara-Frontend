/**
 * Convert SVG icons to PNG for PWA manifest.
 * Usage: node scripts/generate-png-icons.js
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const iconsDir = path.join(__dirname, "..", "public", "icons");
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

function createSvg(size, maskable = false) {
    const padding = maskable ? Math.round(size * 0.1) : 0;
    const innerSize = size - padding * 2;
    const rx = maskable ? 0 : Math.round(size * 0.15);
    const fontSize = Math.round(innerSize * 0.55);
    const subFontSize = Math.round(innerSize * 0.1);

    return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
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
</svg>`);
}

async function generateIcons() {
    if (!fs.existsSync(iconsDir)) {
        fs.mkdirSync(iconsDir, { recursive: true });
    }

    // Generate regular PNG icons
    for (const size of sizes) {
        const svgBuffer = createSvg(size, false);
        const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
        await sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toFile(outputPath);
        console.log(`✓ icon-${size}x${size}.png`);
    }

    // Generate maskable PNG icons
    for (const size of [192, 512]) {
        const svgBuffer = createSvg(size, true);
        const outputPath = path.join(iconsDir, `icon-maskable-${size}x${size}.png`);
        await sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toFile(outputPath);
        console.log(`✓ icon-maskable-${size}x${size}.png`);
    }

    console.log("\n✅ All PNG icons generated successfully!");
}

generateIcons().catch(console.error);
