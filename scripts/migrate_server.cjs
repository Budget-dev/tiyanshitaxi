const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function replaceInFile(relativePath, replacements) {
  const filePath = path.join(rootDir, relativePath);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [target, replacement] of replacements) {
    if (typeof target === 'string') {
      content = content.split(target).join(replacement);
    } else if (target instanceof RegExp) {
      content = content.replace(target, replacement);
    }
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${relativePath}`);
  } else {
    console.log(`No changes needed for: ${relativePath}`);
  }
}

// 1. server/routes.ts
replaceInFile('server/routes.ts', [
  [
    "pickupLocation = 'Visakhapatnam Airport (VTZ)'",
    "pickupLocation = 'Kempegowda International Airport (BLR)'"
  ],
  [
    "dropoffLocation = 'Beach Road, Vizag'",
    "dropoffLocation = 'MG Road, Bengaluru'"
  ]
]);

// 2. server/services/fareEngine.ts
replaceInFile('server/services/fareEngine.ts', [
  [
    "airportFlatVizag: number;",
    "airportFlatVizag: number;\n    airportFlatBLR: number;"
  ],
  [
    "airportFlatBhogapuram: 1200,",
    "airportFlatBhogapuram: 1200,\n    airportFlatBLR: 1100,"
  ],
  [
    "airportFlatBhogapuram: 1700,",
    "airportFlatBhogapuram: 1700,\n    airportFlatBLR: 1600,"
  ],
  [
    "airportFlatBhogapuram: 2200,",
    "airportFlatBhogapuram: 2200,\n    airportFlatBLR: 2200,"
  ],
  [
    "airportFlatBhogapuram: 1050,",
    "airportFlatBhogapuram: 1050,\n    airportFlatBLR: 900,"
  ],
  [
    "airportFlatBhogapuram: 3000,",
    "airportFlatBhogapuram: 3000,\n    airportFlatBLR: 2800,"
  ],
  [
    "baseFare = isBhogapuram ? category.airportFlatBhogapuram : category.airportFlatVizag;",
    "const isBLR = request.pickupLocation.toLowerCase().includes('kempegowda') || request.pickupLocation.toLowerCase().includes('blr') || request.dropoffLocation.toLowerCase().includes('kempegowda') || request.dropoffLocation.toLowerCase().includes('blr');\n      baseFare = isBLR ? (category.airportFlatBLR || 1100) : (isBhogapuram ? category.airportFlatBhogapuram : category.airportFlatVizag);\n      tollEstimate = isBLR ? 115 : (isBhogapuram ? 120 : 60);\n      minKmCharged = isBLR ? 40 : (isBhogapuram ? 55 : 25);"
  ],
  [
    "if (p.includes('airport') || d.includes('airport')) {",
    "if (p.includes('airport') || d.includes('airport') || p.includes('kempegowda') || d.includes('kempegowda') || p.includes('blr') || d.includes('blr')) {\n      if (p.includes('blr') || d.includes('blr') || p.includes('kempegowda') || d.includes('kempegowda')) return 38;"
  ],
  [
    "if (d.includes('araku')) return 115;",
    "if (d.includes('mysore')) return 145;\n    if (d.includes('nandi')) return 60;\n    if (d.includes('coorg')) return 260;\n    if (d.includes('araku')) return 115;"
  ]
]);

// 3. server/services/routeService.ts
replaceInFile('server/services/routeService.ts', [
  [
    "// Airport Routes",
    `// Bangalore Kempegowda Airport Routes
  'kempegowda_airport_blr:mg_road': { km: 36, mins: 45, tolls: 1, ghat: false, scenic: true },
  'kempegowda_airport_blr:indiranagar': { km: 38, mins: 48, tolls: 1, ghat: false, scenic: true },
  'kempegowda_airport_blr:whitefield': { km: 44, mins: 55, tolls: 1, ghat: false, scenic: false },
  'kempegowda_airport_blr:electronic_city': { km: 54, mins: 65, tolls: 2, ghat: false, scenic: false },
  'kempegowda_airport_blr:koramangala': { km: 41, mins: 50, tolls: 1, ghat: false, scenic: false },
  'kempegowda_airport_blr:manyata': { km: 28, mins: 35, tolls: 1, ghat: false, scenic: false },
  'kempegowda_airport_blr:nandi_hills': { km: 35, mins: 45, tolls: 0, ghat: true, scenic: true },
  'bangalore:mysore': { km: 145, mins: 135, tolls: 2, ghat: false, scenic: true },
  'bangalore:nandi_hills': { km: 60, mins: 75, tolls: 1, ghat: true, scenic: true },
  'bangalore:coorg': { km: 260, mins: 330, tolls: 3, ghat: true, scenic: true },
  'bangalore:ooty': { km: 275, mins: 360, tolls: 4, ghat: true, scenic: true },
  // Airport Routes`
  ],
  [
    "if (l.includes('vtz') || (l.includes('visakhapatnam') && l.includes('airport'))) return 'visakhapatnam_airport_vtz';",
    `if (l.includes('blr') || l.includes('kempegowda') || (l.includes('bangalore') && l.includes('airport'))) return 'kempegowda_airport_blr';
    if (l.includes('vtz') || (l.includes('visakhapatnam') && l.includes('airport'))) return 'visakhapatnam_airport_vtz';`
  ],
  [
    "if (l.includes('araku')) return 'araku_valley';",
    `if (l.includes('mysore')) return 'mysore';
    if (l.includes('nandi')) return 'nandi_hills';
    if (l.includes('coorg')) return 'coorg';
    if (l.includes('araku')) return 'araku_valley';`
  ]
]);

// 4. server/db/fileDb.ts
replaceInFile('server/db/fileDb.ts', [
  [
    `pickupLocation: 'Alluri Sitharama Raju International Airport ASI , Bhogapuram',\n      dropoffLocation: 'Siripuram Circle & Waltair Uplands, Visakhapatnam',`,
    `pickupLocation: 'Kempegowda International Airport (BLR), Terminal 1',\n      dropoffLocation: 'MG Road & Indiranagar, Bengaluru',`
  ],
  [
    `city: 'Visakhapatnam, IN',`,
    `city: 'Bengaluru, IN',`
  ],
  [
    `pickupLocation: 'Rushikonda Beach Road, Visakhapatnam',\n      dropoffLocation: 'Visakhapatnam Airport (VTZ)',`,
    `pickupLocation: 'Whitefield ITPL Main Road, Bengaluru',\n      dropoffLocation: 'Kempegowda International Airport (BLR)',`
  ],
  [
    `pickupLocation: 'Visakhapatnam Airport (ASI / VTZ)',\n      dropoffLocation: 'Dwaraka Nagar, Visakhapatnam',`,
    `pickupLocation: 'Kempegowda International Airport (BLR), Terminal 2',\n      dropoffLocation: 'Koramangala 4th Block, Bengaluru',`
  ],
  [
    `pickupLocation: 'Siripuram, Vizag',\n      dropoffLocation: 'Araku Valley Sightseeing, Vizag',`,
    `pickupLocation: 'MG Road, Bengaluru',\n      dropoffLocation: 'Mysore Palace & Chamundi Hills Heritage Tour',`
  ]
]);

console.log('Server migration executed successfully!');
