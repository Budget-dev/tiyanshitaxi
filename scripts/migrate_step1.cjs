const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
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
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`No changes needed for: ${filePath}`);
  }
}

// 1. App.tsx
replaceInFile(path.join(__dirname, 'src/App.tsx'), [
  ["'airport-taxi': '/airport-taxi-vizag'", "'airport-taxi': '/airport-taxi-bangalore'"],
  ["'vizag-to-araku-cab': '/vizag-to-araku-cab'", "'vizag-to-araku-cab': '/bangalore-to-mysore-cab'"],
  ["'outstation-cabs': '/outstation-cabs-vizag'", "'outstation-cabs': '/outstation-cabs-bangalore'"],
  ["'local-rentals': '/local-rentals-vizag'", "'local-rentals': '/local-rentals-bangalore'"],
  [
    "if (pathname === 'airport-taxi-vizag' || pathname === 'airport-taxi') return 'airport-taxi';",
    "if (pathname === 'airport-taxi-bangalore' || pathname === 'airport-taxi' || pathname === 'airport-taxi-vizag') return 'airport-taxi';"
  ],
  [
    "if (pathname === 'vizag-to-araku-cab' || pathname === 'araku-cab') return 'vizag-to-araku-cab';",
    "if (pathname === 'bangalore-to-mysore-cab' || pathname === 'bangalore-to-nandi-hills-cab' || pathname === 'vizag-to-araku-cab' || pathname === 'araku-cab' || pathname === 'mysore-cab') return 'vizag-to-araku-cab';"
  ],
  [
    "if (pathname === 'outstation-cabs-vizag' || pathname === 'outstation-cabs') return 'outstation-cabs';",
    "if (pathname === 'outstation-cabs-bangalore' || pathname === 'outstation-cabs-vizag' || pathname === 'outstation-cabs') return 'outstation-cabs';"
  ],
  [
    "if (pathname === 'local-rentals-vizag' || pathname === 'local-rentals') return 'local-rentals';",
    "if (pathname === 'local-rentals-bangalore' || pathname === 'local-rentals-vizag' || pathname === 'local-rentals') return 'local-rentals';"
  ],
  [
    "const [currentCity, setCurrentCity] = useState<string>('Visakhapatnam, IN');",
    "const [currentCity, setCurrentCity] = useState<string>('Bengaluru, IN');"
  ],
  [
    "Alluri Sitharama Raju International Airport ASI , Bhogapuram",
    "Kempegowda International Airport (BLR), Bengaluru"
  ],
  [
    "Siripuram Circle, Visakhapatnam",
    "MG Road / Indiranagar, Bengaluru"
  ],
  [
    "Visakhapatnam City Center",
    "Bengaluru City Center (MG Road / Majestic)"
  ],
  [
    "Araku Valley (Hill Station)",
    "Mysore Palace & Chamundi Hills"
  ],
  [
    "Araku Valley & Borra Caves (Sightseeing Tour)",
    "Mysore Palace & Chamundi Hills (Heritage Tour)"
  ],
  [
    "Local Visakhapatnam Sightseeing (8 Hrs / 80 KM)",
    "Bengaluru City Sightseeing & Tech Hubs (8 Hrs / 80 KM)"
  ],
  [
    "Visakhapatnam (Doorstep Pickup)",
    "Bengaluru (Doorstep Pickup)"
  ],
  [
    `title="Tiyanshi Airport Taxi | Premier Taxi & Cab Service in Visakhapatnam (Vizag)"`,
    `title="Tiyanshi Airport Taxi | Bangalore Airport Taxi & Cabs (Kempegowda BLR Airport)"`
  ],
  [
    `description="Book verified cabs in Visakhapatnam with Tiyanshi Airport Taxi. 24/7 airport taxi to VTZ & Bhogapuram ASI, outstation rides to Araku, local hourly rentals, and zero surge pricing."`,
    `description="Book 24/7 verified Bangalore Airport Taxi with Tiyanshi Airport Taxi. Instant Kempegowda Airport (BLR) pickups & drops, outstation cabs to Mysore, Coorg, Nandi Hills, local rentals, fixed rates & zero surge pricing."`
  ],
  [
    `keywords={[
                    'cab service in vizag',
                    'taxi in visakhapatnam',
                    'vizag cabs',
                    'airport taxi vizag',
                    'bhogapuram airport cab',
                    'vizag to araku cab',
                    'outstation cab vizag',
                    'local cabs vizag',
                    'taxi near me vizag'
                  ]}`,
    `keywords={[
                    'bangalore airport taxi',
                    'airport cab bangalore',
                    'kempegowda airport taxi',
                    'blr airport cab',
                    'bangalore airport drop',
                    'airport taxi bangalore to electronic city',
                    'airport cab bangalore to whitefield',
                    'outstation cabs bangalore',
                    'bangalore to mysore cab',
                    'airport taxi karnataka'
                  ]}`
  ]
]);

console.log('App.tsx migration done.');
