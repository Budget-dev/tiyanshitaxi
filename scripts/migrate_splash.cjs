const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const splashPath = path.join(rootDir, 'src/components/TravelSplashScreen.tsx');
let splashContent = fs.readFileSync(splashPath, 'utf8');
splashContent = splashContent
  .replace('ESTD. VISAKHAPATNAM • ANDHRA PRADESH', 'ESTD. BENGALURU • KARNATAKA')
  .replace('<MapPin className="w-3 h-3 text-teal-400" /> VTZ Airport', '<MapPin className="w-3 h-3 text-teal-400" /> Kempegowda BLR')
  .replace('Siripuram Hub', 'MG Road / Tech Hubs')
  .replace('Araku Valley <Navigation className="w-2.5 h-2.5 text-amber-300 rotate-45" />', 'Nandi Hills & Mysore <Navigation className="w-2.5 h-2.5 text-amber-300 rotate-45" />')
  .replace('Curating your premium Vizag journey...', 'Curating your premium Bengaluru journey...')
  .replace('Welcome to Visakhapatnam', 'Welcome to Bengaluru (Bangalore)')
  .replace('17.7208° N, 83.3184° E • BAY OF BENGAL', '13.1986° N, 77.7066° E • KEMPEGOWDA BLR');

fs.writeFileSync(splashPath, splashContent, 'utf8');
console.log('TravelSplashScreen updated!');
