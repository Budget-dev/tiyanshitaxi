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

// 1. src/components/AboutSection.tsx
replaceInFile('src/components/AboutSection.tsx', [
  [
    "title: 'Bhogapuram Express',\n      desc: 'Dedicated round-the-clock connectivity to Bhogapuram ASI Airport.',",
    "title: 'Kempegowda BLR Express',\n      desc: 'Dedicated round-the-clock connectivity to Kempegowda BLR Airport (T1 & T2).',"
  ],
  [
    "<span>Visakhapatnam's Dedicated Cab Network</span>",
    "<span>Bangalore's Dedicated Airport Cab Network</span>"
  ],
  [
    "Setting New Standards for Airport & Intercity Travel in Andhra Pradesh",
    "Setting New Standards for Airport & Intercity Travel in Bengaluru & Karnataka"
  ],
  [
    "Whether landing at Bhogapuram International Airport (ASI) or touring Araku Valley, we guarantee punctuality, safety, and fixed transparent tariffs.",
    "Whether landing at Kempegowda International Airport (BLR) or touring Mysore and Nandi Hills, we guarantee punctuality, safety, and fixed transparent tariffs."
  ]
]);

// 2. src/components/ServicesSection.tsx
replaceInFile('src/components/ServicesSection.tsx', [
  [
    "badge: 'ASI Bhogapuram & VTZ',",
    "badge: 'Kempegowda BLR (T1 & T2)',"
  ],
  [
    "desc: 'Comfortable sedans & SUVs across AP',",
    "desc: 'Comfortable sedans & SUVs across Karnataka',"
  ]
]);

// 3. src/components/PopularRoutesAndPackages.tsx
replaceInFile('src/components/PopularRoutesAndPackages.tsx', [
  [
    "plus all-inclusive holiday packages for Araku Valley and Lambasingi.",
    "plus all-inclusive holiday packages for Mysore Palace, Nandi Hills, and Coorg."
  ]
]);

// 4. src/data/mockData.ts
replaceInFile('src/data/mockData.ts', [
  [
    `    id: 'araku-borra-caves',
    title: 'Araku Valley & Borra Caves Scenic Explorer',
    subtitle: 'Misty hills, coffee plantations, waterfalls & 1-million-year-old caves',
    duration: 'Full Day (12-14 Hours)',
    distance: '240 km Roundtrip',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 342,
    highlights: ['Borra Caves Stalactite Wonders', 'Katiki Waterfalls Trek', 'Padmapuram Botanical Gardens', 'Tribal Museum & Coffee House', 'Ananthagiri Hills Coffee Viewpoints'],
    itinerary: [
      '06:30 AM: Pickup from Bangalore hotel/home',
      '08:30 AM: Scenic ghat road breakfast break at Tyda',
      '10:00 AM: Guided tour of million-year-old Borra Caves',
      '12:30 PM: Katiki Waterfalls jeep & trek (Optional)',
      '01:30 PM: Authentic bamboo chicken & Andhra lunch in Araku',
      '03:00 PM: Padmapuram Gardens & Araku Coffee Museum',
      '05:00 PM: Sunset view at Galikonda viewpoint',
      '08:30 PM: Return drop at your doorstep in Bengaluru'
    ],
    vehicleIncluded: 'Sedan / SUV / Innova as selected',
    category: 'hills'`,
    `    id: 'mysore-palace-heritage',
    title: 'Mysore Palace & Srirangapatna Heritage Explorer',
    subtitle: 'Grand palaces, Chamundi Hills, Tipu Sultan Fort & Brindavan Gardens',
    duration: 'Full Day (12-14 Hours)',
    distance: '310 km Roundtrip',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1600100397608-f010e42e0988?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 428,
    highlights: ['Mysore Palace Grand Royal Architecture', 'Chamundeshwari Temple Hilltop Darshan', 'Srirangapatna Tipu Sultan Summer Palace', 'Brindavan Gardens Musical Dancing Fountains', 'Channapatna Wooden Toys Craft Village'],
    itinerary: [
      '06:30 AM: Doorstep pickup from Bangalore hotel/residence',
      '08:30 AM: Breakfast halt on Bangalore-Mysore Expressway (Bidadi/Maddur)',
      '10:30 AM: Historic Srirangapatna Fort & Dariya Daulat Bagh',
      '12:00 PM: Guided tour of magnificent Mysore Palace',
      '01:30 PM: Traditional Mysuru thali lunch & Mysore Pak tasting',
      '03:30 PM: Panoramic Chamundi Hills & Nandi Bull Statue',
      '05:30 PM: Evening stroll at illuminated Brindavan Gardens',
      '09:30 PM: Safe return drop at your residence in Bengaluru'
    ],
    vehicleIncluded: 'Sedan / SUV / Innova as selected',
    category: 'heritage'`
  ],
  [
    `    id: 'Bangalore-city-coastal',
    title: 'Bangalore Coastal City & Heritage Grand Tour',
    subtitle: 'Rishikonda beach, submarine museum, aircraft museum, Kailasagiri & Thotlakonda',
    duration: '8 Hours (80 km)',
    distance: '80 km Included',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 512,
    highlights: ['INS Kursura Real Submarine Museum', 'TU-142 Aircraft War Museum', 'Kailasagiri Ropeway & Shiva Parvathi Statues', 'Rishikonda Blue Flag Beach', 'Thotlakonda Ancient Buddhist Heritage'],
    itinerary: [
      '09:00 AM: Home/hotel pickup anywhere in Bangalore',
      '09:30 AM: Kailasagiri Hilltop panoramic bay view & ropeway',
      '11:30 AM: TU-142 Aircraft Museum & Kursura Submarine Museum',
      '01:30 PM: Coastal sea-facing lunch on Beach Road',
      '03:00 PM: Thotlakonda / Bavikonda Buddhist Monastery ruins',
      '04:30 PM: Rishikonda Beach water sports & sunset stroll',
      '06:30 PM: Drop back at your location'
    ],
    vehicleIncluded: 'AC Sedan or SUV',
    category: 'beaches'`,
    `    id: 'bangalore-garden-city',
    title: 'Bengaluru Garden City & Heritage Grand Tour',
    subtitle: 'Bangalore Palace, Lalbagh Glass House, Cubbon Park & Vidhana Soudha',
    duration: '8 Hours (80 km)',
    distance: '80 km Included',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 512,
    highlights: ['Bangalore Palace Tudor Royal Architecture', 'Lalbagh Botanical Gardens & Historic Glass House', 'Vidhana Soudha & High Court Landmark Photo Stops', 'Cubbon Park Lush Greenery & Museum', 'Commercial Street / MG Road Silk Shopping'],
    itinerary: [
      '09:00 AM: Home/hotel pickup anywhere in Bengaluru',
      '09:45 AM: Royal tour of majestic Bangalore Palace',
      '11:30 AM: Vidhana Soudha & High Court architectural photography',
      '01:00 PM: Authentic South Indian filter coffee & dosa lunch in Gandhi Bazaar',
      '02:30 PM: Lalbagh Botanical Gardens & iconic Glasshouse',
      '04:30 PM: Bull Temple (Dodda Basavana Gudi) & heritage walk',
      '06:30 PM: Comfortable drop at your hotel or residence'
    ],
    vehicleIncluded: 'AC Sedan or SUV',
    category: 'heritage'`
  ],
  [
    `    id: 'simhachalam-annavaram',
    title: 'Sacred Temple Circuit (Simhachalam & Annavaram)',
    subtitle: 'Divine darshan of Lord Varaha Lakshmi Narasimha & Sri Satyanarayana Swamy',
    duration: '10 Hours',
    distance: '260 km Roundtrip',
    price: 3799,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 220,
    highlights: ['Simhachalam 11th-century Kalinga architecture', 'Annavaram Ratnagiri Hilltop Temple', 'Pampa River Ghats', 'Special Darshan assistance coordination', 'Experienced devout driver'],
    itinerary: [
      '06:00 AM: Early morning pickup from Bangalore',
      '07:00 AM: Simhachalam Temple Darshan & Chandanotsavam shrine',
      '09:30 AM: Highway drive towards Annavaram with breakfast break',
      '11:30 AM: Reach Ratnagiri Hills, Annavaram Satyanarayana Vratham & Darshan',
      '01:30 PM: Temple Prasadam & Andhra meal',
      '03:00 PM: Scenic coastal drive return',
      '06:00 PM: Comfortable drop at your residence'
    ],
    vehicleIncluded: 'AC Sedan / SUV',
    category: 'temples'`,
    `    id: 'nandi-hills-sunrise',
    title: 'Nandi Hills Cloud-Bed Sunrise & Temple Tour',
    subtitle: 'Breathtaking sunrise above the clouds, Tipu\'s Drop & Bhoga Nandeeshwara Temple',
    duration: '7 Hours (120 km)',
    distance: '120 km Roundtrip',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 380,
    highlights: ['Panoramic Sea of Clouds Sunrise', 'Tipu\'s Summer Lodge & Tipu\'s Drop Point', '1000-year-old Dravidian Bhoga Nandeeshwara Temple', 'Scenic Hairpin Bend Mountain Drive', 'Highway Thatte Idli Breakfast Halt'],
    itinerary: [
      '04:30 AM: Early morning pickup from Bangalore',
      '06:00 AM: Reach Nandi Hills viewpoint to catch the golden sunrise',
      '07:30 AM: Stroll through Tipu Sultan\'s Summer Residence & gardens',
      '08:45 AM: Famous Nandi Upachar highway breakfast',
      '10:00 AM: Explore exquisite sculptures at Bhoga Nandeeshwara Temple',
      '11:30 AM: Comfortable return drop to your doorstep'
    ],
    vehicleIncluded: 'AC Sedan / SUV',
    category: 'hills'`
  ],
  [
    `    id: 'lambasingi-misty-hills',
    title: 'Lambasingi "Kashmir of Andhra" Winter Tour',
    subtitle: 'Sub-zero morning mist, strawberry farms, Kothapalli waterfalls & apple orchards',
    duration: 'Full Day (14 Hours)',
    distance: '300 km Roundtrip',
    price: 4199,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 185,
    highlights: ['Morning dew & frost views', 'Kothapalli cascading waterfalls', 'Organic Strawberry fruit picking', 'Pine forest photo spots', 'Tribal night market'],
    itinerary: [
      '05:00 AM: Early departure to catch misty morning clouds',
      '08:00 AM: Reach Lambasingi Ghats, fog view & hot coffee',
      '09:30 AM: Visit fresh strawberry plantations & organic farms',
      '11:30 AM: Kothapalli Waterfalls hike & bamboo bridges',
      '02:00 PM: Traditional hill-station tribal lunch',`,
    `    id: 'coorg-coffee-hills',
    title: 'Coorg "Scotland of India" Coffee & Waterfalls Tour',
    subtitle: 'Abbey Falls, Raja\'s Seat, Golden Temple Namdroling & lush coffee plantations',
    duration: '2 Days / 1 Night',
    distance: '520 km Roundtrip',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 310,
    highlights: ['Namdroling Golden Temple Tibetan Monastery', 'Abbey Falls cascading rainforest views', 'Raja\'s Seat magnificent sunset vista', 'Arabica & Robusta Coffee Estate Walk', 'Madikeri Fort & Heritage Museum'],
    itinerary: [
      '06:00 AM: Early departure from Bengaluru',
      '10:30 AM: Visit Namdroling Monastery (Golden Temple) in Bylakuppe',
      '01:00 PM: Traditional Kodava lunch & resort check-in',
      '03:30 PM: Abbey Falls nature walk & coffee estate tour',
      '05:30 PM: Sunset view at Raja\'s Seat',`
  ],
  [
    `  {
    id: 'bhogapuram-Bangalore',
    from: 'Bhogapuram Int\'l Airport (ASI)',
    to: 'Bangalore City Center / Siripuram',
    distance: '42 km',
    duration: '45 mins',
    startingPrice: 899,
    category: 'airport',
    description: 'Fast expressway connection with zero waiting charges on flight delays.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'Bangalore-araku',
    from: 'Bengaluru',
    to: 'Araku Valley',
    distance: '115 km',
    duration: '3 hrs 15 mins',
    startingPrice: 2499,
    category: 'outstation',
    description: 'Breathtaking ghat road journey through Ananthagiri hills with expert drivers.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'Bangalore-vijayawada',
    from: 'Bengaluru',
    to: 'Vijayawada',
    distance: '348 km',
    duration: '6 hrs 30 mins',
    startingPrice: 5200,
    category: 'outstation',
    description: 'Smooth NH16 highway ride with hygienic food stops and toll assistance.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'Bangalore-rajahmundry',
    from: 'Bengaluru',
    to: 'Rajahmundry',
    distance: '190 km',
    duration: '3 hrs 45 mins',
    startingPrice: 3100,
    category: 'outstation',
    description: 'Fast door-to-door cab with comfortable sanitized sedans and SUVs.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'Bangalore-srikakulam',
    from: 'Bengaluru',
    to: 'Srikakulam',
    distance: '105 km',
    duration: '2 hrs 15 mins',
    startingPrice: 1950,
    category: 'outstation',
    description: 'Reliable one-way or roundtrip transfers for business and pilgrimage.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'Bangalore-kakinada',
    from: 'Bengaluru',
    to: 'Kakinada',
    distance: '152 km',
    duration: '3 hrs 10 mins',
    startingPrice: 2600,
    category: 'outstation',
    description: 'Comfortable commute to Kakinada port & industrial corridor.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80'
  }`,
    `  {
    id: 'blr-airport-mgroad',
    from: 'Kempegowda Int\\'l Airport (BLR)',
    to: 'MG Road & Indiranagar',
    distance: '36 km',
    duration: '45 mins',
    startingPrice: 999,
    category: 'airport',
    description: 'Express airport connection via Bellary Road with zero waiting charges on flight delays.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blr-airport-whitefield',
    from: 'Kempegowda Int\\'l Airport (BLR)',
    to: 'Whitefield IT Hub (ITPL / EPIP)',
    distance: '44 km',
    duration: '50 mins',
    startingPrice: 1199,
    category: 'airport',
    description: 'Direct airport cab to IT parks and tech campuses with luggage assistance.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blr-airport-ecity',
    from: 'Kempegowda Int\\'l Airport (BLR)',
    to: 'Electronic City (Phase 1 & 2)',
    distance: '54 km',
    duration: '65 mins',
    startingPrice: 1399,
    category: 'airport',
    description: 'Toll-inclusive express ride via NICE Road or Elevated Expressway.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bangalore-mysore',
    from: 'Bengaluru',
    to: 'Mysore (Heritage City)',
    distance: '145 km',
    duration: '2 hrs 15 mins',
    startingPrice: 2499,
    category: 'outstation',
    description: 'Swift 10-lane Bangalore-Mysore Expressway drive with verified chauffeurs.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e42e0988?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bangalore-nandihills',
    from: 'Bengaluru',
    to: 'Nandi Hills',
    distance: '60 km',
    duration: '1 hr 15 mins',
    startingPrice: 1799,
    category: 'outstation',
    description: 'Scenic sunrise mountain road trip with skilled hill drivers.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bangalore-coorg',
    from: 'Bengaluru',
    to: 'Coorg (Madikeri)',
    distance: '260 km',
    duration: '5 hrs 30 mins',
    startingPrice: 4800,
    category: 'outstation',
    description: 'Comfortable family SUV ride through lush Western Ghats coffee estates.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80'
  }`
  ],
  [
    `Traveled from Dwaraka Nagar to Kempegowda BLR Airport (ASI). Chauffeur was punctual, AC was powerful in the Bangalore traffic, and the fare was exactly what was confirmed on WhatsApp. Zero hidden charges!`,
    `Traveled from Indiranagar to Kempegowda BLR Airport Terminal 2. Chauffeur was punctual, AC was powerful in the Bangalore traffic, and the fare was exactly what was confirmed on WhatsApp. Zero hidden charges!`
  ],
  [
    `serviceUsed: 'Lambasingi & Borra Caves Package',`,
    `serviceUsed: 'Nandi Hills Sunrise & Temple Tour',`
  ],
  [
    `Hired an Ertiga for outstation trip to Lambasingi & Borra Caves. The chauffeur Chaitanya was punctual, soft-spoken and very familiar with Eastern Ghat roads. Safe and comfortable ride for families!`,
    `Hired an Ertiga for an early morning outstation trip to Nandi Hills. The chauffeur Manjunath was punctual at 4:30 AM, soft-spoken and drove very safely up the hairpin bends. Safe and comfortable ride for our family!`
  ],
  [
    `serviceUsed: 'Bangalore to Kakinada Outstation',`,
    `serviceUsed: 'Bangalore to Mysore Expressway Outstation',`
  ],
  [
    `Frequent business commuter between Bangalore and Kakinada. Tiyanshi Airport Taxi is my trusted cab partner. Well-maintained cars, professional drivers in uniform, and courteous customer support 24/7.`,
    `Frequent business commuter between Bangalore and Mysore. Tiyanshi Airport Taxi is my trusted cab partner. Well-maintained cars, professional drivers in uniform, and courteous customer support 24/7.`
  ],
  [
    `title: '✈️ Kempegowda BLR Airport Express',\n    message: 'Express cabs for Bhogapuram International Airport pickups & drops with zero delay surcharges. Custom quotes on request.',`,
    `title: '✈️ Kempegowda BLR Airport Express',\n    message: 'Express cabs for Kempegowda International Airport (BLR T1 & T2) pickups & drops with zero delay surcharges. Fixed upfront tariffs.',`
  ],
  [
    `title: '⛰️ Araku Weekend Special',\n    message: 'Special rates on Araku full-day Innova & SUV package bookings. Inquire via WhatsApp for custom quote.',`,
    `title: '⛰️ Mysore & Nandi Hills Weekend Special',\n    message: 'Special rates on Mysore & Nandi Hills full-day Innova & sedan package bookings. Instant confirmation via WhatsApp.',`
  ],
  [
    `Over 140 cabs currently active across Bengaluru, Rushikonda, and Highway zones.`,
    `Over 150 cabs currently active across Kempegowda Airport, Whitefield, Electronic City, and Highway corridors.`
  ],
  [
    `title: 'Complete Guide to Kempegowda BLR Airport (ASI) Transfers: Fares, Route & Timings',
    excerpt: 'Everything you need to know about reaching the upcoming Alluri Sitharama Raju International Airport with dedicated express cab bookings.',
    content: \`The upcoming Bhogapuram International Airport (ASI) is set to become the premier aviation gateway for Andhra Pradesh. Located approximately 42 kilometers northeast of Bengaluru city center along NH-16, planning your airport commute in advance ensures a hassle-free trip.

### Why Pre-Booking Your Airport Cab Matters
1. **Distance & Travel Time:** The commute from Siripuram, Gajuwaka, or Rushikonda takes roughly 45 to 65 minutes depending on traffic. Pre-booking guarantees on-time doorstep pickup.
2. **Fixed Toll-Inclusive Pricing:** Tiyanshi Airport Taxi offers transparent upfront pricing with zero surge charges and toll inclusions for the Tagarapuvalasa plaza.
3. **Flight Delay Adjustments:** Our dispatch team monitors incoming flight tracking so your chauffeur is stationed at the arrivals bay even if your flight lands ahead or behind schedule.

### Recommended Vehicle Classes
* **Sedan (Dzire / Etios):** Ideal for solo travelers and couples with up to 2 large suitcases.
* **Innova Crysta / SUV:** Perfect for families or business delegates carrying excess luggage.`,
    `title: 'Complete Guide to Kempegowda BLR Airport Transfers: Fares, Route & Timings',
    excerpt: 'Everything you need to know about reaching Kempegowda International Airport (BLR T1 & T2) with dedicated express cab bookings.',
    content: \`Kempegowda International Airport (BLR) in Devanahalli is the primary international aviation gateway for Bengaluru and Karnataka. Located approximately 36 to 45 kilometers from the city center, planning your airport commute with a verified airport taxi ensures a punctual, stress-free flight catch.

### Why Pre-Booking Your Airport Cab Matters
1. **Distance & Travel Time:** The commute from Whitefield, Indiranagar, or Electronic City takes between 45 and 75 minutes. Pre-booking guarantees on-time doorstep pickup.
2. **Fixed Toll-Inclusive Pricing:** Tiyanshi Airport Taxi offers transparent upfront pricing with zero surge charges and Trumpet / Airport Toll inclusions.
3. **Flight Delay Adjustments:** Our dispatch team monitors incoming flight radar in real-time so your chauffeur is waiting at the arrivals terminal even if your flight is delayed.

### Recommended Vehicle Classes
* **Sedan (Dzire / Aura):** Ideal for solo travelers and couples with up to 2 large suitcases.
* **Innova Crysta / Ertiga:** Perfect for families or business delegates carrying excess luggage and golf bags.\``
  ],
  [
    `tags: ['Bhogapuram', 'Airport Taxi', 'Bangalore Airport', 'Travel Tips']`,
    `tags: ['Kempegowda Airport', 'Airport Taxi Bangalore', 'BLR Airport', 'Travel Tips']`
  ],
  [
    `q: 'How do I book a taxi to Alluri Sitharama Raju Int\\'l Airport (ASI), Bhogapuram?',
    a: 'You can select "Airport Taxi" on our booking widget, choose "Airport Drop" or "Airport Pickup", select Kempegowda BLR Airport, pick your date & time, and click Search & Book. You will receive an instant confirmation SMS & WhatsApp with driver details.'`,
    `q: 'How do I book a taxi to Kempegowda International Airport (BLR) Terminal 1 or 2?',
    a: 'You can select "Airport Taxi" on our booking widget, choose "Airport Drop" or "Airport Pickup", enter your location in Bengaluru, pick your flight date & time, and click Search & Book. You will receive an instant confirmation SMS & WhatsApp with verified driver details and live GPS tracking.'`
  ]
]);

console.log('mockData and component updates executed successfully!');
