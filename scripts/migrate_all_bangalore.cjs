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

// 1. App.tsx
replaceInFile('src/App.tsx', [
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
    `'cab service in vizag'`,
    `'bangalore airport taxi'`
  ],
  [
    `'taxi in visakhapatnam'`,
    `'airport cab bangalore'`
  ],
  [
    `'vizag cabs'`,
    `'kempegowda airport taxi'`
  ],
  [
    `'airport taxi vizag'`,
    `'blr airport cab'`
  ],
  [
    `'bhogapuram airport cab'`,
    `'bangalore airport drop'`
  ],
  [
    `'vizag to araku cab'`,
    `'airport taxi bangalore to electronic city'`
  ],
  [
    `'outstation cab vizag'`,
    `'airport cab bangalore to whitefield'`
  ],
  [
    `'local cabs vizag'`,
    `'outstation cabs bangalore'`
  ],
  [
    `'taxi near me vizag'`,
    `'bangalore to mysore cab'`
  ]
]);

// 2. AirportTaxiPage.tsx
replaceInFile('src/pages/AirportTaxiPage.tsx', [
  [
    `title="Vizag Airport Taxi & Cab Booking | Bhogapuram ASI & VTZ Transfers"`,
    `title="Bangalore Airport Taxi | Kempegowda Airport BLR Cabs Booking"`
  ],
  [
    `description="Reliable 24/7 airport taxi in Visakhapatnam for VTZ and Bhogapuram International Airport (ASI). Flight delay tracking, doorstep pickup, and fixed transparent fares."`,
    `description="Book reliable 24/7 Bangalore airport taxi to & from Kempegowda International Airport (BLR T1 & T2). Flight delay tracking, doorstep pickup, fixed transparent rates."`
  ],
  [
    `canonicalPath="/airport-taxi-vizag"`,
    `canonicalPath="/airport-taxi-bangalore"`
  ],
  [
    `{ name: 'Airport Taxi', item: '/airport-taxi-vizag' }`,
    `{ name: 'Airport Taxi', item: '/airport-taxi-bangalore' }`
  ],
  [
    `title="Airport Taxi Service (Bhogapuram ASI & VTZ)"`,
    `title="Bangalore Airport Taxi Service (Kempegowda BLR T1 & T2)"`
  ],
  [
    `NH16 Tolls & Parking Included`,
    `Tolls & Airport Parking Included`
  ],
  [
    `'airport taxi vizag'`,
    `'bangalore airport taxi'`
  ],
  [
    `'vizag airport cab'`,
    `'airport cab bangalore'`
  ],
  [
    `'bhogapuram airport cab'`,
    `'kempegowda airport cab'`
  ],
  [
    `'bhogapuram airport taxi fare'`,
    `'blr airport taxi booking'`
  ],
  [
    `'visakhapatnam airport taxi'`,
    `'bangalore airport to whitefield cab'`
  ],
  [
    `'airport transfer vizag'`,
    `'airport taxi bangalore electronic city'`
  ],
  [
    `'vtz airport taxi'`,
    `'blr terminal 2 cab'`
  ],
  [
    "How do I book an airport taxi in Visakhapatnam with Tiyanshi Airport Taxi?",
    "How do I book an airport taxi in Bangalore with Tiyanshi Airport Taxi?"
  ],
  [
    "Do you provide cab transfers to the new Bhogapuram International Airport (ASI)?",
    "Do you serve Kempegowda International Airport (BLR) Terminal 1 and Terminal 2?"
  ],
  [
    "Yes. Tiyanshi Airport Taxi operates dedicated express airport transfers between Visakhapatnam city center, Siripuram, MVP Colony, Rushikonda, Gajuwaka, and the upcoming Bhogapuram International Airport (ASI) along the NH-16 corridor.",
    "Yes. Tiyanshi Airport Taxi provides 24/7 dedicated pickups and drop-offs at both Kempegowda International Airport (BLR) Terminal 1 and Terminal 2, connecting to Whitefield, Electronic City, Indiranagar, Koramangala, Manyata Tech Park, and all Bangalore neighborhoods."
  ],
  [
    "Are NH-16 highway tolls and airport parking included in the fare?",
    "Are Bangalore airport tolls and terminal parking included in the fare?"
  ],
  [
    "from: 'Bhogapuram Airport (ASI)', \n      to: 'Siripuram Circle & Beach Road'",
    "from: 'Kempegowda Airport (BLR)', \n      to: 'Indiranagar & MG Road'"
  ],
  [
    "from: 'Bhogapuram Airport (ASI)', \n      to: 'Rushikonda Beach & IT SEZ'",
    "from: 'Kempegowda Airport (BLR)', \n      to: 'Whitefield IT Hub (EPIP / ITPL)'"
  ],
  [
    "from: 'Bhogapuram Airport (ASI)', \n      to: 'Gajuwaka & Steel Plant'",
    "from: 'Kempegowda Airport (BLR)', \n      to: 'Electronic City (Phase 1 & 2)'"
  ],
  [
    "from: 'Bhogapuram Airport (ASI)', \n      to: 'Vizianagaram Fort Town'",
    "from: 'Kempegowda Airport (BLR)', \n      to: 'Koramangala & HSR Layout'"
  ],
  [
    "from: 'Bhogapuram Airport (ASI)', \n      to: 'Srikakulam Town'",
    "from: 'Kempegowda Airport (BLR)', \n      to: 'Manyata Tech Park & Hebbal'"
  ],
  [
    "from: 'Visakhapatnam Airport (VTZ)', \n      to: 'Siripuram / MVP Colony'",
    "from: 'Kempegowda Airport (BLR)', \n      to: 'Mysore City (Expressway Link)'"
  ]
]);

// 3. AboutUsPage.tsx
replaceInFile('src/pages/AboutUsPage.tsx', [
  [
    `title="About Tiyanshi Airport Taxi | Visakhapatnam's Trusted Taxi Service"`,
    `title="About Tiyanshi Airport Taxi | Bangalore's Trusted Airport Cab Service"`
  ],
  [
    `description="Learn about Tiyanshi Airport Taxi, Visakhapatnam's premier taxi company. Serving travelers with zero surge pricing, verified commercial drivers, and punctual 24/7 airport transfers."`,
    `description="Learn about Tiyanshi Airport Taxi, Bengaluru's premier taxi company. Serving Kempegowda Airport (BLR), outstation trips to Mysore and Coorg, with zero surge pricing and verified chauffeurs."`
  ],
  [
    `canonicalPath="/about-us"`,
    `canonicalPath="/about-us"`
  ],
  [
    `'Tiyanshi Airport Taxi visakhapatnam'`,
    `'Tiyanshi Airport Taxi bangalore'`
  ],
  [
    `'taxi company vizag'`,
    `'taxi company bangalore'`
  ],
  [
    `'visakhapatnam cab service provider'`,
    `'bangalore airport cab service provider'`
  ],
  [
    `'reliable taxi vizag'`,
    `'reliable airport taxi bangalore'`
  ],
  [
    "The trusted mobility partner of Visakhapatnam. Delivering punctual airport transfers, premium outstation travel, and transparent fares with verified local chauffeurs.",
    "The trusted mobility partner of Bengaluru. Delivering punctual Kempegowda airport transfers, premium outstation travel across Karnataka, and transparent fares with verified local chauffeurs."
  ],
  [
    "Pioneering Andhra's Coastal Mobility",
    "Pioneering Bengaluru & Karnataka Airport Mobility"
  ],
  [
    "Reliable, Transparent, and Safe Cab Travel in the City of Destiny",
    "Reliable, Transparent, and Safe Airport Cab Travel in Bengaluru"
  ],
  [
    "Founded in Visakhapatnam, <strong className=\"text-slate-900\">Tiyanshi Airport Taxi</strong> was born out of frustration with predatory surge pricing, unexpected ride cancellations, and substandard vehicles.",
    "Founded in Bengaluru, <strong className=\"text-slate-900\">Tiyanshi Airport Taxi</strong> was born out of frustration with predatory surge pricing, unexpected ride cancellations, and substandard vehicles on airport and outstation routes."
  ],
  [
    "Today, as Visakhapatnam gears up with the world-class <strong className=\"text-teal-700\">Alluri Sitharama Raju International Airport (ASI) in Bhogapuram</strong> and continues to grow as Andhra Pradesh’s economic capital, our fleet of 150+ commercially certified vehicles provides seamless connectivity 24 hours a day, 365 days a year.",
    "Today, serving India's tech capital and the world-class <strong className=\"text-teal-700\">Kempegowda International Airport (BLR Terminals 1 & 2)</strong>, our fleet of 150+ commercially certified vehicles provides seamless connectivity 24 hours a day, 365 days a year across Bengaluru and Karnataka."
  ],
  [
    "We monitor incoming flights into Bhogapuram ASI & VTZ. If flight timings shift, cab arrival synchronizes automatically.",
    "We monitor incoming flights into Kempegowda International Airport (BLR). If flight timings shift, cab arrival synchronizes automatically."
  ],
  [
    "Talk directly with our Visakhapatnam dispatch desk via phone or WhatsApp. No automated chatbot frustration.",
    "Talk directly with our Bengaluru 24/7 dispatch desk via phone or WhatsApp. No automated chatbot frustration."
  ],
  [
    "Andhra Pradesh Wide Network",
    "Karnataka & South India Wide Network"
  ],
  [
    "Serving Over 40+ Mandals and Districts",
    "Serving Over 40+ Tech Hubs, Towns & Karnataka Districts"
  ],
  [
    "From urban Visakhapatnam to remote Eastern Ghats hamlets and south coastal arterial highways.",
    "From urban Bengaluru and tech parks to Mysore, Nandi Hills, Coorg coffee plantations, and intercity highways."
  ],
  [
    "Ready to travel with Visakhapatnam's highest-rated taxi service?",
    "Ready to travel with Bangalore's highest-rated airport taxi service?"
  ],
  [
    "hub: 'Bhogapuram Airport ASI Corridor'",
    "hub: 'Kempegowda Airport BLR Corridor'"
  ],
  [
    "hub: 'Visakhapatnam Urban limits'",
    "hub: 'Bengaluru Tech & Urban Corridors'"
  ],
  [
    "coverage: 'Siripuram, MVP Colony, Gajuwaka, Madhurawada, Rushikonda IT SEZ.'",
    "coverage: 'Whitefield, Electronic City, Indiranagar, Koramangala, Manyata Tech Park, Hebbal.'"
  ],
  [
    "hub: 'Eastern Ghats Tourist Circuit'",
    "hub: 'Karnataka Heritage & Hill Circuit'"
  ],
  [
    "coverage: 'Araku Valley, Borra Caves, Tyda, Lambasingi & Katiki Waterfalls.'",
    "coverage: 'Mysore Palace, Nandi Hills, Coorg, Kabini, Chikmagalur & Ooty.'"
  ],
  [
    "coverage: 'Kakinada Port, Rajahmundry, Vijayawada, Srikakulam & Berhampur.'",
    "coverage: 'Mysore, Hassan, Mangalore, Tirupati, Coimbatore & Chennai.'"
  ],
  [
    "Araku Ghat hairpin roads & long-distance interstate tours.",
    "Karnataka Western Ghats, Nandi Hills, Coorg & interstate highway tours."
  ],
  [
    "Trained specifically in defensive hairpin curve navigation on Araku, Lambasingi, and Ananthagiri passes.",
    "Trained specifically in defensive mountain curve navigation on Nandi Hills, Coorg, and Nilgiri ghats."
  ]
]);

// 4. LocalRentalsPage.tsx
replaceInFile('src/pages/LocalRentalsPage.tsx', [
  [
    `title="Local Cab Rentals in Vizag | 4hr, 8hr & 12hr Hourly Packages"`,
    `title="Local Cab Rentals in Bangalore | 4hr, 8hr & 12hr Hourly Packages"`
  ],
  [
    `description="Rent a private chauffeur-driven cab in Visakhapatnam on flexible hourly packages. Ideal for city meetings, beach visits, temple tours, and shopping. Zero surge pricing."`,
    `description="Rent a private chauffeur-driven cab in Bangalore on flexible hourly packages. Ideal for tech park meetings, Whitefield, Electronic City, shopping & sightseeing. Zero surge pricing."`
  ],
  [
    `canonicalPath="/local-rentals-vizag"`,
    `canonicalPath="/local-rentals-bangalore"`
  ],
  [
    `{ name: 'Local Rentals', item: '/local-rentals-vizag' }`,
    `{ name: 'Local Rentals', item: '/local-rentals-bangalore' }`
  ],
  [
    `title="Hourly Local Cab Rentals in Visakhapatnam"`,
    `title="Hourly Local Cab Rentals in Bengaluru (Bangalore)"`
  ],
  [
    `subtitle="Book chauffeur-driven AC cars by the hour in Vizag. Multiple stops, waiting included, and zero surge pricing for business, sightseeing, or shopping."`,
    `subtitle="Book chauffeur-driven AC cars by the hour in Bengaluru. Multiple stops, waiting included, and zero surge pricing for business meetings, tech hubs, or city sightseeing."`
  ],
  [
    `'local cab rentals vizag'`,
    `'local cab rentals bangalore'`
  ],
  [
    `'hourly car rental visakhapatnam'`,
    `'hourly car rental bangalore'`
  ],
  [
    `'vizag sightseeing cab'`,
    `'bangalore sightseeing cab'`
  ],
  [
    `'full day taxi vizag'`,
    `'full day taxi bangalore'`
  ],
  [
    `'car hire with driver vizag'`,
    `'car hire with driver bangalore'`
  ],
  [
    `Visakhapatnam`,
    `Bengaluru`
  ],
  [
    `Vizag`,
    `Bangalore`
  ]
]);

// 5. OutstationCabsPage.tsx
replaceInFile('src/pages/OutstationCabsPage.tsx', [
  [
    `title="Outstation Cabs from Vizag | One-Way & Round-Trip Taxi Booking"`,
    `title="Outstation Cabs from Bangalore | One-Way & Round-Trip Taxi Booking"`
  ],
  [
    `description="Book verified outstation cabs from Visakhapatnam to Araku, Lambasingi, Kakinada, Rajahmundry, Vijayawada, and Srikakulam. Lowest per-km tariffs and professional drivers."`,
    `description="Book verified outstation cabs from Bangalore to Mysore, Coorg, Ooty, Nandi Hills, Chikmagalur, and Tirupati. Lowest per-km tariffs and verified highway chauffeurs."`
  ],
  [
    `canonicalPath="/outstation-cabs-vizag"`,
    `canonicalPath="/outstation-cabs-bangalore"`
  ],
  [
    `{ name: 'Outstation Cabs', item: '/outstation-cabs-vizag' }`,
    `{ name: 'Outstation Cabs', item: '/outstation-cabs-bangalore' }`
  ],
  [
    `title="Outstation Cab Services from Visakhapatnam"`,
    `title="Outstation Cab Services from Bengaluru (Bangalore)"`
  ],
  [
    `subtitle="Travel beyond Vizag with trusted commercial chauffeurs. Transparent per-KM pricing, all-inclusive toll estimates, and verified sanitised cars for intercity journeys."`,
    `subtitle="Travel beyond Bangalore with trusted commercial chauffeurs. Transparent per-KM pricing, all-inclusive toll estimates, and verified sanitised cars for intercity journeys across Karnataka & South India."`
  ],
  [
    `'outstation cabs vizag'`,
    `'outstation cabs bangalore'`
  ],
  [
    `'outstation taxi visakhapatnam'`,
    `'outstation taxi bangalore'`
  ],
  [
    `'vizag to araku cab'`,
    `'bangalore to mysore cab'`
  ],
  [
    `'vizag to kakinada cab'`,
    `'bangalore to coorg cab'`
  ],
  [
    `'vizag to vijayawada taxi'`,
    `'bangalore to ooty cab'`
  ],
  [
    `'one way cab vizag'`,
    `'one way cab bangalore'`
  ]
]);

// 6. OutstationPage.tsx
replaceInFile('src/pages/OutstationPage.tsx', [
  [
    `canonicalPath="/outstation"`,
    `canonicalPath="/outstation-cabs-bangalore"`
  ],
  [
    `Visakhapatnam`,
    `Bengaluru`
  ],
  [
    `Vizag`,
    `Bangalore`
  ]
]);

// 7. PackagesPage.tsx
replaceInFile('src/pages/PackagesPage.tsx', [
  [
    `Visakhapatnam`,
    `Bengaluru`
  ],
  [
    `Vizag`,
    `Bangalore`
  ]
]);

// 8. OneWayTripsPage.tsx & RoundTripsPage.tsx
replaceInFile('src/pages/OneWayTripsPage.tsx', [
  [
    `canonicalPath="/one-way-trips"`,
    `canonicalPath="/one-way-trips"`
  ],
  [
    `Visakhapatnam`,
    `Bengaluru`
  ],
  [
    `Vizag`,
    `Bangalore`
  ]
]);

replaceInFile('src/pages/RoundTripsPage.tsx', [
  [
    `canonicalPath="/round-trips"`,
    `canonicalPath="/round-trips"`
  ],
  [
    `Visakhapatnam`,
    `Bengaluru`
  ],
  [
    `Vizag`,
    `Bangalore`
  ]
]);

// 9. VizagToArakuPage.tsx -> Bangalore to Mysore
replaceInFile('src/pages/VizagToArakuPage.tsx', [
  [
    `title="Vizag to Araku Cab Booking | Safe Ghat Road Drivers & Fares"`,
    `title="Bangalore to Mysore Cab Booking | Expressway Cabs & Sightseeing"`
  ],
  [
    `description="Book verified cabs from Visakhapatnam to Araku Valley and Borra Caves. Experienced hill chauffeurs, scenic stops at Tyda and Katiki, one-way drops, and same-day sightseeing."`,
    `description="Book verified cabs from Bangalore to Mysore via the 10-lane Expressway. Chauffeur-driven sedans & SUVs, stops at Srirangapatna, Mysore Palace & Chamundi Hills, one-way drops & day tours."`
  ],
  [
    `canonicalPath="/vizag-to-araku-cab"`,
    `canonicalPath="/bangalore-to-mysore-cab"`
  ],
  [
    `{ name: 'Vizag to Araku Cab', item: '/vizag-to-araku-cab' }`,
    `{ name: 'Bangalore to Mysore Cab', item: '/bangalore-to-mysore-cab' }`
  ],
  [
    `{ name: 'Outstation Cabs', item: '/outstation-cabs-vizag' }`,
    `{ name: 'Outstation Cabs', item: '/outstation-cabs-bangalore' }`
  ],
  [
    `title="Vizag to Araku Valley Cab Service & Sightseeing"`,
    `title="Bangalore to Mysore Cab Service & Sightseeing Tour"`
  ],
  [
    `subtitle="115 KM scenic journey through the Eastern Ghats with verified hill chauffeurs, stops at Borra Caves & Tyda, and transparent pricing."`,
    `subtitle="145 KM fast expressway journey with verified highway chauffeurs, stops at Ramanagara, Srirangapatna & Mysore Palace, and transparent pricing."`
  ],
  [
    `{ label: 'Vizag to Araku Cab' }`,
    `{ label: 'Bangalore to Mysore Cab' }`
  ],
  [
    `ctaText="Book Araku Cab Now"`,
    `ctaText="Book Mysore Cab Now"`
  ],
  [
    `'vizag to araku cab'`,
    `'bangalore to mysore cab'`
  ],
  [
    `'araku cab from vizag'`,
    `'bangalore to mysore taxi fare'`
  ],
  [
    `'vizag to araku cab fare'`,
    `'bangalore mysore expressway cab'`
  ],
  [
    `'borra caves cab'`,
    `'mysore sightseeing car rental'`
  ],
  [
    `'vizag to araku taxi package'`,
    `'innova for mysore trip bangalore'`
  ]
]);

// 10. BookingPage.tsx
replaceInFile('src/pages/BookingPage.tsx', [
  [
    `if (p.includes('araku') || d.includes('araku')) return 115;`,
    `if (p.includes('mysore') || d.includes('mysore')) return 145;
    if (p.includes('nandi') || d.includes('nandi')) return 60;
    if (p.includes('coorg') || d.includes('coorg')) return 260;
    if (p.includes('ooty') || d.includes('ooty')) return 275;
    if (p.includes('whitefield') || d.includes('whitefield')) return 25;
    if (p.includes('electronic') || d.includes('electronic')) return 32;`
  ],
  [
    `if (p.includes('bhogapuram') || d.includes('bhogapuram')) return 42;`,
    `if (p.includes('airport') || d.includes('airport') || p.includes('kempegowda') || d.includes('kempegowda')) return 38;`
  ]
]);

// 11. Backend server files
replaceInFile('server/services/aiService.ts', [
  [
    `You are the Chief Travel & Fleet Specialist for Tiyanshi Airport Taxi in Visakhapatnam, Andhra Pradesh.`,
    `You are the Chief Travel & Fleet Specialist for Tiyanshi Airport Taxi in Bengaluru (Bangalore), Karnataka. You specialize in Kempegowda International Airport (BLR) transfers, Bangalore tech corridor routes, and Karnataka outstation tours to Mysore, Nandi Hills, Coorg, and Ooty.`
  ],
  [
    `Visakhapatnam International Airport (VTZ) and the upcoming Bhogapuram Greenfield International Airport`,
    `Kempegowda International Airport (BLR Terminals 1 & 2)`
  ],
  [
    `['VTZ Departure Gate', 'Bhogapuram Aerocity Corridor', 'Rushikonda IT SEZ', 'City Center']`,
    `['BLR Terminal 1 & 2', 'Whitefield ITPL', 'Electronic City Phase 1', 'MG Road / Indiranagar']`
  ]
]);

replaceInFile('server/routes.ts', [
  [
    `pickupLocation = 'Visakhapatnam Airport (VTZ)',\n    dropoffLocation = 'Beach Road, Vizag',`,
    `pickupLocation = 'Kempegowda International Airport (BLR)',\n    dropoffLocation = 'MG Road, Bangalore',`
  ]
]);

console.log('All migrations executed successfully!');
