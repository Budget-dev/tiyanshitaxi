const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

// BookingModal.tsx
const bmPath = path.join(rootDir, 'src/components/BookingModal.tsx');
let bmContent = fs.readFileSync(bmPath, 'utf8');
bmContent = bmContent
  .replace('Quick Vizag & Transit Hubs:', 'Quick Bengaluru Transit Hubs:')
  .replace("label: '✈️ Bhogapuram Airport (ASI)', loc: 'Alluri Sitharama Raju International Airport (ASI), Bhogapuram'", "label: '✈️ Kempegowda Airport (BLR T1)', loc: 'Kempegowda International Airport Terminal 1, Devanahalli, Bengaluru'")
  .replace("label: '✈️ Vizag Airport (VTZ)', loc: 'Visakhapatnam International Airport (VTZ), NAD Junction'", "label: '✈️ Kempegowda Airport (BLR T2)', loc: 'Kempegowda International Airport Terminal 2, Devanahalli, Bengaluru'")
  .replace("label: '🚆 Visakhapatnam Junction', loc: 'Visakhapatnam Junction Railway Station (VSKP)'", "label: '🚆 KSR Bengaluru Majestic', loc: 'KSR Bengaluru City Railway Station (Majestic)'")
  .replace("label: '🏖️ Rushikonda Beach & IT SEZ', loc: 'Rushikonda Beach & IT SEZ Hill, Visakhapatnam'", "label: '🏢 Whitefield ITPL & EPIP', loc: 'Whitefield ITPL & EPIP Zone, Bengaluru'")
  .replace("label: '🏢 Siripuram / Waltair Uplands', loc: 'Siripuram Circle & Waltair Uplands, Visakhapatnam'", "label: '🏢 Electronic City Phase 1', loc: 'Electronic City Phase 1, Bengaluru'")
  .replace("label: '⛰️ Araku Valley', loc: 'Araku Valley Hill Station & Tribal Museum'", "label: '⛰️ Mysore & Nandi Hills', loc: 'Mysore Palace & Srirangapatna Heritage Route'");
fs.writeFileSync(bmPath, bmContent, 'utf8');
console.log('BookingModal updated!');

// AiTripPlannerModal.tsx
const aiPath = path.join(rootDir, 'src/components/AiTripPlannerModal.tsx');
let aiContent = fs.readFileSync(aiPath, 'utf8');
aiContent = aiContent
  .replace('<option value="Araku Valley">Araku Valley & Borra Caves</option>', '<option value="Mysore Palace">Mysore Palace & Srirangapatna</option>')
  .replace('<option value="Lambasingi">Lambasingi (Fog Valley)</option>', '<option value="Nandi Hills">Nandi Hills (Sunrise Cloudbed)</option>')
  .replace('<option value="Bhogapuram Airport">Bhogapuram International Airport</option>', '<option value="Kempegowda Airport">Kempegowda International Airport (BLR)</option>')
  .replace('<option value="Visakhapatnam City Tour">Visakhapatnam Coastal City Tour</option>', '<option value="Bengaluru City Tour">Bengaluru City & Garden Tour</option>')
  .replace('<option value="Annavaram">Annavaram Temple & Kakinada</option>', '<option value="Coorg Hills">Coorg (Coffee Hills & Abbey Falls)</option>')
  .replace('<option value="Srikakulam Arasavalli">Srikakulam Sun Temple</option>', '<option value="Ooty">Ooty & Nilgiri Hills</option>');
fs.writeFileSync(aiPath, aiContent, 'utf8');
console.log('AiTripPlannerModal updated!');
