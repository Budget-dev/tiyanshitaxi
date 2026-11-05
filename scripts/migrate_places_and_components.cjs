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

// 1. src/utils/placesService.ts
replaceInFile('src/utils/placesService.ts', [
  [
    "lat=17.72&lon=83.31&location_bias_scale=0.8",
    "lat=13.1986&lon=77.7066&location_bias_scale=0.8"
  ],
  [
    "cityBias = 'Visakhapatnam'",
    "cityBias = 'Bengaluru'"
  ],
  [
    "export const CURATED_AP_LOCATIONS: PlaceResult[] = [\n  // Airports & Major Transit",
    `export const CURATED_AP_LOCATIONS: PlaceResult[] = [
  // Bangalore Kempegowda Airport & Major Karnataka Transit Hubs
  {
    id: 'curated-blr-t1',
    name: 'Kempegowda International Airport Terminal 1 (BLR)',
    address: 'KIAL Road, Devanahalli, Bengaluru, Karnataka 560300',
    category: 'airport',
    categoryLabel: 'International Airport T1',
    lat: 13.1986,
    lng: 77.7066,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-blr-t2',
    name: 'Kempegowda International Airport Terminal 2 (BLR)',
    address: 'Terminal 2 Garden Terminal, Devanahalli, Bengaluru, Karnataka 560300',
    category: 'airport',
    categoryLabel: 'International Airport T2',
    lat: 13.1930,
    lng: 77.7090,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-majestic',
    name: 'KSR Bengaluru City Railway Station (Majestic)',
    address: 'Kempegowda, Sevashrama, Bengaluru, Karnataka 560023',
    category: 'transit',
    categoryLabel: 'Central Railway Station',
    lat: 12.9767,
    lng: 77.5713,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-whitefield',
    name: 'Whitefield ITPL & EPIP Zone',
    address: 'International Tech Park Bangalore (ITPL), Whitefield, Bengaluru 560066',
    category: 'industrial',
    categoryLabel: 'Major IT Corridor',
    lat: 12.9855,
    lng: 77.7289,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-ecity',
    name: 'Electronic City Phase 1 & 2',
    address: 'Electronic City, Hosur Road, Bengaluru, Karnataka 560100',
    category: 'industrial',
    categoryLabel: 'Tech Corridor',
    lat: 12.8452,
    lng: 77.6602,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-indiranagar',
    name: 'Indiranagar 100ft Road & Metro',
    address: '100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
    category: 'landmark',
    categoryLabel: 'Commercial & Metro Hub',
    lat: 12.9784,
    lng: 77.6408,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-koramangala',
    name: 'Koramangala 4th / 5th Block',
    address: '80 Feet Road, Koramangala, Bengaluru, Karnataka 560034',
    category: 'landmark',
    categoryLabel: 'Startup & Dining Hub',
    lat: 12.9352,
    lng: 77.6245,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-mgroad',
    name: 'MG Road & Brigade Road',
    address: 'Mahatma Gandhi Road, Bengaluru, Karnataka 560001',
    category: 'landmark',
    categoryLabel: 'City Center Hub',
    lat: 12.9756,
    lng: 77.6066,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-manyata',
    name: 'Manyata Tech Park & Hebbal',
    address: 'Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045',
    category: 'industrial',
    categoryLabel: 'Tech Park Hub',
    lat: 13.0475,
    lng: 77.6214,
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-nandihills',
    name: 'Nandi Hills Viewpoint',
    address: 'Nandi Hills, Chikkaballapur District, Karnataka 562101',
    category: 'tourist',
    categoryLabel: 'Sunrise Hill Station',
    lat: 13.3702,
    lng: 77.6835,
    district: 'Chikkaballapur',
    state: 'Karnataka',
    source: 'curated',
  },
  {
    id: 'curated-mysore-palace',
    name: 'Mysore Palace & Chamundi Hills',
    address: 'Sayyaji Rao Road, Agrahara, Chamrajpura, Mysuru, Karnataka 570001',
    category: 'tourist',
    categoryLabel: 'Heritage Palace',
    lat: 12.3051,
    lng: 76.6552,
    district: 'Mysuru',
    state: 'Karnataka',
    source: 'curated',
  },
  // Airports & Major Transit`
  ]
]);

// 2. src/components/LeafletRouteMap.tsx
replaceInFile('src/components/LeafletRouteMap.tsx', [
  [
    `// Major Regional Transit Hubs in Visakhapatnam & North Andhra
export const REGIONAL_HUBS: RegionalTransitHub[] = [
  {
    id: 'hub-asi',
    name: 'Bhogapuram Airport (ASI)',
    short: 'ASI Airport',
    type: 'airport',
    lat: 18.0267,
    lng: 83.4984,
    badge: 'Under Construction (Open 2026)',
    activeCabs: 38
  },
  {
    id: 'hub-vtz',
    name: 'Visakhapatnam Airport (VTZ)',
    short: 'VTZ Airport',
    type: 'airport',
    lat: 17.7215,
    lng: 83.2245,
    badge: 'Operational 24/7',
    activeCabs: 45
  },
  {
    id: 'hub-vskp',
    name: 'Visakhapatnam Junction (VSKP)',
    short: 'Railway Station',
    type: 'railway',
    lat: 17.7285,
    lng: 83.2985,
    badge: 'Central Station',
    activeCabs: 28
  },
  {
    id: 'hub-city',
    name: 'Siripuram / Beach Road',
    short: 'City Center',
    type: 'city',
    lat: 17.7230,
    lng: 83.3185,
    badge: 'Downtown Hub',
    activeCabs: 52
  },
  {
    id: 'hub-rushikonda',
    name: 'Rushikonda IT SEZ',
    short: 'IT Hub',
    type: 'city',
    lat: 17.7818,
    lng: 83.3768,
    badge: 'Coastal IT Park',
    activeCabs: 22
  }
];`,
    `// Major Regional Transit Hubs in Bengaluru & Karnataka
export const REGIONAL_HUBS: RegionalTransitHub[] = [
  {
    id: 'hub-blr-t1',
    name: 'Kempegowda Int\\'l Airport Terminal 1',
    short: 'BLR Airport T1',
    type: 'airport',
    lat: 13.1986,
    lng: 77.7066,
    badge: 'Operational 24/7',
    activeCabs: 48
  },
  {
    id: 'hub-blr-t2',
    name: 'Kempegowda Int\\'l Airport Terminal 2',
    short: 'BLR Airport T2 (Garden Terminal)',
    type: 'airport',
    lat: 13.1930,
    lng: 77.7090,
    badge: 'Operational 24/7',
    activeCabs: 42
  },
  {
    id: 'hub-majestic',
    name: 'KSR Bengaluru Majestic Station',
    short: 'Majestic Central',
    type: 'railway',
    lat: 12.9767,
    lng: 77.5713,
    badge: 'Central Station',
    activeCabs: 35
  },
  {
    id: 'hub-mgroad',
    name: 'MG Road / Indiranagar',
    short: 'Downtown Hub',
    type: 'city',
    lat: 12.9756,
    lng: 77.6066,
    badge: 'City Center Hub',
    activeCabs: 56
  },
  {
    id: 'hub-whitefield',
    name: 'Whitefield ITPL',
    short: 'IT Corridor',
    type: 'city',
    lat: 12.9855,
    lng: 77.7289,
    badge: 'Tech Park Hub',
    activeCabs: 38
  },
  {
    id: 'hub-ecity',
    name: 'Electronic City Phase 1',
    short: 'E-City Hub',
    type: 'city',
    lat: 12.8452,
    lng: 77.6602,
    badge: 'Tech Corridor',
    activeCabs: 30
  }
];`
  ],
  [
    "cityCenter = { lat: 17.6868, lng: 83.2185 }",
    "cityCenter = { lat: 12.9716, lng: 77.5946 }"
  ]
]);

// 3. src/components/BookingModal.tsx
replaceInFile('src/components/BookingModal.tsx', [
  [
    `if (p.includes('araku') || d.includes('araku')) return 115;
    if (p.includes('vijayawada') || d.includes('vijayawada')) return 350;
    if (p.includes('rajahmundry') || d.includes('rajahmundry')) return 190;
    if (p.includes('kakinada') || d.includes('kakinada')) return 155;
    if (p.includes('srikakulam') || d.includes('srikakulam')) return 105;
    if (p.includes('annavaram') || d.includes('annavaram')) return 125;
    if (p.includes('bhogapuram') || d.includes('bhogapuram')) return 42;
    if (p.includes('rushikonda') || d.includes('rushikonda')) return 24;
    if (p.includes('gajuwaka') || d.includes('gajuwaka')) return 22;
    if (p.includes('airport') || d.includes('airport')) return 32;`,
    `if (p.includes('mysore') || d.includes('mysore')) return 145;
    if (p.includes('nandi') || d.includes('nandi')) return 60;
    if (p.includes('coorg') || d.includes('coorg')) return 260;
    if (p.includes('ooty') || d.includes('ooty')) return 275;
    if (p.includes('whitefield') || d.includes('whitefield')) return 25;
    if (p.includes('electronic') || d.includes('electronic')) return 32;
    if (p.includes('airport') || d.includes('airport') || p.includes('kempegowda') || d.includes('kempegowda') || p.includes('blr') || d.includes('blr')) return 38;`
  ],
  [
    `<div className="text-[11px] font-bold text-slate-500 mb-1.5">Quick Vizag & Transit Hubs:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: '✈️ Bhogapuram Airport (ASI)', loc: 'Alluri Sitharama Raju International Airport (ASI), Bhogapuram' },
                      { label: '✈️ Vizag Airport (VTZ)', loc: 'Visakhapatnam International Airport (VTZ), NAD Junction' },
                      { label: '🚆 Visakhapatnam Junction', loc: 'Visakhapatnam Junction Railway Station (VSKP)' },
                      { label: '🏖️ Rushikonda Beach & IT SEZ', loc: 'Rushikonda Beach & IT SEZ Hill, Visakhapatnam' },
                      { label: '🏢 Siripuram / Waltair Uplands', loc: 'Siripuram Circle & Waltair Uplands, Visakhapatnam' },
                      { label: '⛰️ Araku Valley', loc: 'Araku Valley Hill Station & Tribal Museum' },
                    ]`,
    `<div className="text-[11px] font-bold text-slate-500 mb-1.5">Quick Bengaluru Transit Hubs:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: '✈️ Kempegowda Airport (BLR T1)', loc: 'Kempegowda International Airport Terminal 1, Devanahalli, Bengaluru' },
                      { label: '✈️ Kempegowda Airport (BLR T2)', loc: 'Kempegowda International Airport Terminal 2, Devanahalli, Bengaluru' },
                      { label: '🚆 KSR Bengaluru Majestic', loc: 'KSR Bengaluru City Railway Station (Majestic)' },
                      { label: '🏢 Whitefield ITPL & EPIP', loc: 'ITPL Main Road, Whitefield, Bengaluru' },
                      { label: '🏢 Electronic City Phase 1', loc: 'Electronic City Phase 1, Hosur Road, Bengaluru' },
                      { label: '🌆 MG Road / Indiranagar', loc: 'MG Road Metro Station, Bengaluru' },
                      { label: '⛰️ Nandi Hills / Mysore', loc: 'Mysore Palace & Srirangapatna Heritage Route' },
                    ]`
  ]
]);

// 4. src/components/FastBookingBar.tsx
replaceInFile('src/components/FastBookingBar.tsx', [
  [
    "const [pickup, setPickup] = useState('Alluri Sitharama Raju International Airport ASI , Bhogapuram');\n  const [dropoff, setDropoff] = useState('Siripuram Circle, Visakhapatnam');",
    "const [pickup, setPickup] = useState('Kempegowda International Airport (BLR), Bengaluru');\n  const [dropoff, setDropoff] = useState('MG Road / Indiranagar, Bengaluru');"
  ]
]);

// 5. src/components/ContactSection.tsx
replaceInFile('src/components/ContactSection.tsx', [
  [
    "Have questions regarding Bhogapuram Airport terminal pickups, outstation tariffs, corporate GST invoicing, or custom Araku packages? Connect directly with our dispatch supervisors.",
    "Have questions regarding Kempegowda Airport terminal pickups, outstation tariffs, corporate GST invoicing, or custom Mysore packages? Connect directly with our dispatch supervisors."
  ]
]);

// 6. src/components/AboutSection.tsx (line 112)
replaceInFile('src/components/AboutSection.tsx', [
  [
    "<p className=\"text-[11px] text-slate-500 leading-snug\">VTZ & Bhogapuram international routes</p>",
    "<p className=\"text-[11px] text-slate-500 leading-snug\">Kempegowda BLR Airport (T1 & T2) routes</p>"
  ]
]);

// 7. src/components/CustomerReviewsSection.tsx
replaceInFile('src/components/CustomerReviewsSection.tsx', [
  [
    "const [location, setLocation] = useState<string>('Visakhapatnam');",
    "const [location, setLocation] = useState<string>('Bengaluru');"
  ]
]);

// 8. src/components/BlogSection.tsx
replaceInFile('src/components/BlogSection.tsx', [
  [
    `title: 'Complete Guide to Bhogapuram Airport (ASI) Transfers: Fares, Route & Timings',
    excerpt: 'Everything you need to know about reaching the upcoming Alluri Sitharama Raju International Airport with dedicated express cab bookings.',
    content: \`The upcoming Bhogapuram International Airport (ASI) is set to become the premier aviation gateway for Andhra Pradesh. Located approximately 42 kilometers northeast of Visakhapatnam city center along NH-16, planning your airport commute in advance ensures a hassle-free trip.`,
    `title: 'Complete Guide to Kempegowda BLR Airport Transfers: Fares, Route & Timings',
    excerpt: 'Everything you need to know about reaching Kempegowda International Airport (BLR T1 & T2) with dedicated express cab bookings.',
    content: \`Kempegowda International Airport (BLR) in Devanahalli is the premier aviation gateway for Bengaluru and Karnataka. Located approximately 36 to 45 kilometers from the city center, planning your airport commute with an authorized cab service ensures a punctual, stress-free flight catch.`
  ],
  [
    `title: 'Vizag to Araku Valley Road Trip: 7 Scenic Stops, Borra Caves & Coffee Trails',
    excerpt: 'Discover the winding Eastern Ghats with our curated 2-day cab itinerary covering Tyda, Katiki Waterfalls, and Chaparai rapids.',
    content: \`A road trip from Visakhapatnam to Araku Valley through the misty Eastern Ghats is one of South India's most celebrated road journeys. Covering 115 kilometers of smooth ghat roads, this tour is best enjoyed with an experienced local driver.`,
    `title: 'Bangalore to Mysore Expressway Road Trip: Top Scenic Stops & Heritage Guide',
    excerpt: 'Discover the rapid 10-lane expressway with our curated day-trip cab itinerary covering Ramanagara, Srirangapatna, and Mysore Palace.',
    content: \`A road trip from Bengaluru to Mysore via the new 10-lane expressway is one of South India's smoothest journeys. Covering 145 kilometers in just over 2 hours, this tour gives total freedom to explore palaces, temples, and craft villages.`
  ],
  [
    `placeholder="e.g. Navigating Bhogapuram Airport Transfers: Fares & Timings"`,
    `placeholder="e.g. Navigating Kempegowda BLR Airport Transfers: Fares & Timings"`
  ]
]);

// 9. src/components/AdminPanel.tsx
replaceInFile('src/components/AdminPanel.tsx', [
  [
    "const [dispatchPickup, setDispatchPickup] = useState<string>('Visakhapatnam Airport (ASI / VTZ)');\n  const [dispatchDropoff, setDispatchDropoff] = useState<string>('Siripuram Circle, Visakhapatnam');",
    "const [dispatchPickup, setDispatchPickup] = useState<string>('Kempegowda International Airport (BLR)');\n  const [dispatchDropoff, setDispatchDropoff] = useState<string>('MG Road / Indiranagar, Bengaluru');"
  ],
  [
    "city: 'Visakhapatnam, IN',",
    "city: 'Bengaluru, IN',"
  ]
]);

// 10. src/components/AiTripPlannerModal.tsx
replaceInFile('src/components/AiTripPlannerModal.tsx', [
  [
    `<option value="Araku Valley">Araku Valley & Borra Caves</option>
                  <option value="Lambasingi">Lambasingi (Fog Valley)</option>
                  <option value="Bhogapuram Airport">Bhogapuram International Airport</option>
                  <option value="Visakhapatnam City Tour">Visakhapatnam Coastal City Tour</option>
                  <option value="Annavaram">Annavaram Temple & Kakinada</option>
                  <option value="Srikakulam Arasavalli">Srikakulam Sun Temple</option>`,
    `<option value="Mysore Palace">Mysore Palace & Srirangapatna</option>
                  <option value="Nandi Hills">Nandi Hills (Sunrise Cloudbed)</option>
                  <option value="Kempegowda Airport">Kempegowda International Airport (BLR)</option>
                  <option value="Bengaluru City Tour">Bengaluru City & Garden Tour</option>
                  <option value="Coorg Hills">Coorg (Coffee Hills & Abbey Falls)</option>
                  <option value="Ooty">Ooty & Nilgiri Hills</option>`
  ]
]);

// 11. src/components/BackendTelemetryModal.tsx
replaceInFile('src/components/BackendTelemetryModal.tsx', [
  [
    "Bhogapuram & VTZ Airport Transfer SLA",
    "Kempegowda BLR Airport (T1 & T2) Transfer SLA"
  ]
]);

console.log('Places and remaining UI components migrated successfully!');
