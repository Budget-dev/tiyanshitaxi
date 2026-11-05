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

// 1. Hero.tsx
replaceInFile('src/components/Hero.tsx', [
  [
    `    } else if (category === 'outstation') {
      newSub = 'oneway';
      newPickup = 'Bengaluru City Center';
      setSubType('oneway');
      setPickupLocation(newPickup);
      setPickupCoords({ lat: 17.7217, lng: 83.2929 });
      newDropoff = 'Mysore Palace Heritage City';
      setDropoffLocation(newDropoff);
      setDropoffCoords({ lat: 18.3273, lng: 82.8775 });
    } else if (category === 'local') {
      newSub = 'local_8hr';
      newPickup = 'Bengaluru (Within City Limits)';
      setSubType('local_8hr');
      setPickupLocation(newPickup);
      setPickupCoords({ lat: 17.7217, lng: 83.2929 });
      newDropoff = 'City Sightseeing & Full Day Rental (80 km / 8 hrs)';
      setDropoffLocation(newDropoff);
      setDropoffCoords({ lat: 17.7819, lng: 83.3853 });
    }`,
    `    } else if (category === 'outstation') {
      newSub = 'oneway';
      newPickup = 'Bengaluru City Center (MG Road / Majestic)';
      setSubType('oneway');
      setPickupLocation(newPickup);
      setPickupCoords({ lat: 12.9716, lng: 77.5946 });
      newDropoff = 'Mysore Palace Heritage City';
      setDropoffLocation(newDropoff);
      setDropoffCoords({ lat: 12.3051, lng: 76.6552 });
    } else if (category === 'local') {
      newSub = 'local_8hr';
      newPickup = 'Bengaluru (Within City Limits)';
      setSubType('local_8hr');
      setPickupLocation(newPickup);
      setPickupCoords({ lat: 12.9716, lng: 77.5946 });
      newDropoff = 'Bengaluru City Sightseeing & Tech Hubs (80 km / 8 hrs)';
      setDropoffLocation(newDropoff);
      setDropoffCoords({ lat: 12.9756, lng: 77.6066 });
    }`
  ],
  [
    `                    {[
                      { name: '✈️ Bhogapuram ASI', loc: 'Alluri Sitharama Raju International Airport (ASI), Bhogapuram', coords: { lat: 13.1986,
    lng: 77.7066 } },
                      { name: '✈️ Vizag VTZ', loc: 'Visakhapatnam International Airport (VTZ), NAD Junction', coords: { lat: 17.7215, lng: 83.2245 } },
                      { name: '🚆 VSKP Station', loc: 'Visakhapatnam Junction Railway Station (VSKP)', coords: { lat: 17.7217, lng: 83.2929 } },
                      { name: '🏖️ Rushikonda', loc: 'Rushikonda Beach & IT SEZ, Visakhapatnam', coords: { lat: 17.7819, lng: 83.3853 } },
                      { name: '⛰️ Araku Valley', loc: 'Araku Valley Hill Station & Tribal Museum', coords: { lat: 18.3273, lng: 82.8775 } },
                    ]}`,
    `                    {[
                      { name: '✈️ Kempegowda BLR T1', loc: 'Kempegowda International Airport Terminal 1, Devanahalli, Bengaluru', coords: { lat: 13.1986, lng: 77.7066 } },
                      { name: '✈️ Kempegowda BLR T2', loc: 'Kempegowda International Airport Terminal 2, Devanahalli, Bengaluru', coords: { lat: 13.1930, lng: 77.7090 } },
                      { name: '🚆 KSR Majestic Station', loc: 'KSR Bengaluru City Railway Station (Majestic)', coords: { lat: 12.9767, lng: 77.5713 } },
                      { name: '🏢 Whitefield ITPL', loc: 'Whitefield ITPL & EPIP Zone, Bengaluru', coords: { lat: 12.9855, lng: 77.7289 } },
                      { name: '🏢 Electronic City', loc: 'Electronic City Phase 1 & 2, Bengaluru', coords: { lat: 12.8452, lng: 77.6602 } },
                      { name: '⛰️ Nandi Hills / Mysore', loc: 'Nandi Hills Viewpoint / Mysore Palace Route', coords: { lat: 13.3702, lng: 77.6835 } },
                    ]}`
  ],
  [
    `              <p className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed pt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-medium">
                Experience seamless rides across Visakhapatnam, express transfers to Bhogapuram International Airport (ASI), and serene tours to Araku Valley with vetted professional chauffeurs.
              </p>`,
    `              <p className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed pt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-medium">
                Experience seamless rides across Bengaluru, express transfers to Kempegowda International Airport (BLR Terminals 1 & 2), and scenic tours to Mysore, Nandi Hills, and Coorg with vetted professional chauffeurs.
              </p>`
  ]
]);

// 2. BookingPage.tsx
replaceInFile('src/pages/BookingPage.tsx', [
  [
    `        title="Book Cab Online in Vizag | Airport Taxi, Outstation & Sightseeing | Tiyanshi Airport Taxi"
        description="Book verified cabs in Visakhapatnam online: Bhogapuram airport drops, Araku Valley packages, outstation one-way taxis and hourly rentals with zero advance payment."
        canonicalPath="/booking"
        keywords={["book cab vizag", "online taxi booking visakhapatnam", "vizag airport cab booking", "Tiyanshi Airport Taxi booking"]}`,
    `        title="Book Bangalore Airport Taxi Online | Kempegowda BLR Airport Cabs | Tiyanshi Airport Taxi"
        description="Book verified Bangalore airport taxis online: Kempegowda BLR Airport pickups & drops, Mysore outstation cabs, Nandi Hills packages, and local hourly rentals with zero surge pricing."
        canonicalPath="/booking"
        keywords={["book airport taxi bangalore", "kempegowda airport cab booking", "blr airport taxi", "bangalore airport drop cab", "Tiyanshi Airport Taxi booking"]}`
  ],
  [
    `                  {/* Quick Vizag Hubs */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-500 block mb-1.5">Popular Quick Stops:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: '✈️ Bhogapuram Airport (ASI)', loc: 'Alluri Sitharama Raju International Airport (ASI), Bhogapuram', coords: { lat: 18.0267, lng: 83.4984 } },
                        { label: '✈️ Vizag Airport (VTZ)', loc: 'Visakhapatnam International Airport (VTZ), NAD Junction', coords: { lat: 17.7215, lng: 83.2245 } },
                        { label: '🚆 Vizag Railway Station', loc: 'Visakhapatnam Junction Railway Station (VSKP)', coords: { lat: 17.7217, lng: 83.2929 } },
                        { label: '🏖️ Rushikonda Beach & IT SEZ', loc: 'Rushikonda Beach & IT SEZ Hill, Visakhapatnam', coords: { lat: 17.7819, lng: 83.3853 } },
                        { label: '🏢 Siripuram Circle', loc: 'Siripuram Circle & Waltair Uplands, Visakhapatnam', coords: { lat: 17.7217, lng: 83.3150 } },
                        { label: '⛰️ Araku Valley', loc: 'Araku Valley Hill Station & Tribal Museum', coords: { lat: 18.3273, lng: 82.8775 } },
                      ]}`,
    `                  {/* Quick Bengaluru Hubs */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-500 block mb-1.5">Popular Bengaluru Hubs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: '✈️ Kempegowda BLR T1', loc: 'Kempegowda International Airport Terminal 1, Devanahalli, Bengaluru', coords: { lat: 13.1986, lng: 77.7066 } },
                        { label: '✈️ Kempegowda BLR T2', loc: 'Kempegowda International Airport Terminal 2, Devanahalli, Bengaluru', coords: { lat: 13.1930, lng: 77.7090 } },
                        { label: '🚆 KSR Majestic Station', loc: 'KSR Bengaluru City Railway Station (Majestic)', coords: { lat: 12.9767, lng: 77.5713 } },
                        { label: '🏢 Whitefield ITPL', loc: 'Whitefield ITPL Main Road, Bengaluru', coords: { lat: 12.9855, lng: 77.7289 } },
                        { label: '🏢 Electronic City', loc: 'Electronic City Phase 1 & 2, Bengaluru', coords: { lat: 12.8452, lng: 77.6602 } },
                        { label: '🌆 MG Road / Indiranagar', loc: 'MG Road & Indiranagar, Bengaluru', coords: { lat: 12.9756, lng: 77.6066 } },
                        { label: '⛰️ Nandi Hills / Mysore', loc: 'Nandi Hills Viewpoint / Mysore Palace', coords: { lat: 13.3702, lng: 77.6835 } },
                      ]}`
  ],
  [
    `                  {/* Quick Transit Hub Buttons */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 mb-1.5">Quick Vizag Hubs:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: '✈️ Bhogapuram Airport (ASI)', loc: 'Alluri Sitharama Raju International Airport (ASI), Bhogapuram', coords: { lat: 18.0267, lng: 83.4984 } },
                        { label: '✈️ Vizag Airport (VTZ)', loc: 'Visakhapatnam International Airport (VTZ), NAD Junction', coords: { lat: 17.7215, lng: 83.2245 } },
                        { label: '🚆 Vizag Railway Station', loc: 'Visakhapatnam Junction Railway Station (VSKP)', coords: { lat: 17.7217, lng: 83.2929 } },
                        { label: '🏖️ Rushikonda Beach & IT SEZ', loc: 'Rushikonda Beach & IT SEZ Hill, Visakhapatnam', coords: { lat: 17.7819, lng: 83.3853 } },
                        { label: '🏢 Siripuram / Waltair Uplands', loc: 'Siripuram Circle & Waltair Uplands, Visakhapatnam', coords: { lat: 17.7217, lng: 83.3150 } },
                        { label: '⛰️ Araku Valley', loc: 'Araku Valley Hill Station & Tribal Museum', coords: { lat: 18.3273, lng: 82.8775 } },
                      ]}`,
    `                  {/* Quick Transit Hub Buttons */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 mb-1.5">Quick Bengaluru Transit Hubs:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: '✈️ Kempegowda BLR T1', loc: 'Kempegowda International Airport Terminal 1, Devanahalli, Bengaluru', coords: { lat: 13.1986, lng: 77.7066 } },
                        { label: '✈️ Kempegowda BLR T2', loc: 'Kempegowda International Airport Terminal 2, Devanahalli, Bengaluru', coords: { lat: 13.1930, lng: 77.7090 } },
                        { label: '🚆 KSR Majestic Station', loc: 'KSR Bengaluru City Railway Station (Majestic)', coords: { lat: 12.9767, lng: 77.5713 } },
                        { label: '🏢 Whitefield ITPL', loc: 'Whitefield ITPL Main Road, Bengaluru', coords: { lat: 12.9855, lng: 77.7289 } },
                        { label: '🏢 Electronic City', loc: 'Electronic City Phase 1 & 2, Bengaluru', coords: { lat: 12.8452, lng: 77.6602 } },
                        { label: '🌆 MG Road / Indiranagar', loc: 'MG Road & Indiranagar, Bengaluru', coords: { lat: 12.9756, lng: 77.6066 } },
                        { label: '⛰️ Nandi Hills / Mysore', loc: 'Nandi Hills Viewpoint / Mysore Palace', coords: { lat: 13.3702, lng: 77.6835 } },
                      ]}`
  ]
]);

// 3. Remove all sirv.com and old Waltair logo fallbacks
const allComponentFiles = [
  'src/components/AdminPanel.tsx',
  'src/components/AuthModal.tsx',
  'src/components/BookingModal.tsx',
  'src/components/Footer.tsx',
  'src/components/ManageBookingModal.tsx',
  'src/components/Navbar.tsx',
  'src/pages/AboutUsPage.tsx',
  'src/pages/BookingPage.tsx'
];

allComponentFiles.forEach(file => {
  replaceInFile(file, [
    [
      "https://waltairtravelsandcabs.sirv.com/Waltair%20Cabs%20Coastal%20Travel%20Badge.png",
      "/logo.png"
    ],
    [
      "Waltair Uplands, Visakhapatnam",
      "Kempegowda International Airport Terminal Road, Devanahalli, Bengaluru"
    ],
    [
      "Siripuram Circle & Waltair Uplands, Visakhapatnam",
      "Kempegowda International Airport Terminal Road, Devanahalli, Bengaluru"
    ]
  ]);
});

// 4. AdminPanel.tsx WhatsApp message fallbacks
replaceInFile('src/components/AdminPanel.tsx', [
  [
    "${lead.pickupLocation || 'Vizag'}",
    "${lead.pickupLocation || 'Bengaluru Airport'}"
  ]
]);

// 5. mockData.ts
replaceInFile('src/data/mockData.ts', [
  [
    "'Siripuram Circle & Waltair Uplands',",
    "'Kempegowda International Airport (BLR)',"
  ]
]);

console.log('Hero, BookingPage, and component cleanups complete!');
