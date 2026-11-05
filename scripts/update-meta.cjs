const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/content="#0f766e"/g, 'content="#1d4ed8"');
fs.writeFileSync('index.html', html, 'utf8');

// 2. Update public/manifest.webmanifest
let pwa = fs.readFileSync('public/manifest.webmanifest', 'utf8');
pwa = pwa.replace(/"#0f766e"/g, '"#1d4ed8"');
pwa = pwa.replace(/"background_color": "#0f172a"/g, '"background_color": "#1e3a8a"');
pwa = pwa.replace(/Visakhapatnam \(Vizag\)[\s\S]*?local rentals\./, 'Premier 24/7 Kempegowda International Airport (BLR) taxi service in Bangalore. Instant airport pickups, outstation cabs to Mysore, Coorg & Nandi Hills, and local rentals.');
fs.writeFileSync('public/manifest.webmanifest', pwa, 'utf8');

console.log('Theme and manifest successfully updated!');

