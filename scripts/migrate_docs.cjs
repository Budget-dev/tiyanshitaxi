const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const docs = [
  'docs/seo-audit.md',
  'docs/seo-keywords.md',
  'docs/seo-site-architecture.md',
  'docs/seo-implementation-log.md'
];

docs.forEach((docRel) => {
  const docPath = path.join(rootDir, docRel);
  if (!fs.existsSync(docPath)) return;
  let content = fs.readFileSync(docPath, 'utf8');
  content = content
    .split('Visakhapatnam, Andhra Pradesh').join('Bengaluru, Karnataka')
    .split('Visakhapatnam / Vizag, Andhra Pradesh').join('Bengaluru / Bangalore, Karnataka')
    .split('Visakhapatnam').join('Bengaluru')
    .split('Vizag').join('Bangalore')
    .split('Bhogapuram ASI').join('Kempegowda BLR')
    .split('Bhogapuram International Airport (ASI)').join('Kempegowda International Airport (BLR)')
    .split('Bhogapuram Airport').join('Kempegowda Airport')
    .split('Bhogapuram').join('Kempegowda BLR Airport')
    .split('Alluri Sitharama Raju International Airport').join('Kempegowda International Airport')
    .split('Araku Valley').join('Mysore & Nandi Hills')
    .split('Araku').join('Mysore')
    .split('airport-taxi-vizag').join('airport-taxi-bangalore')
    .split('outstation-cabs-vizag').join('outstation-cabs-bangalore')
    .split('local-rentals-vizag').join('local-rentals-bangalore')
    .split('vizag-to-araku-cab').join('bangalore-to-mysore-cab')
    .split('17.6868').join('12.9716')
    .split('83.2185').join('77.5946')
    .split('17.7208').join('13.1986')
    .split('83.3184').join('77.7066')
    .split('IN-AP').join('IN-KA')
    .split('530003').join('560300');
  fs.writeFileSync(docPath, content, 'utf8');
  console.log(`Updated ${docRel}`);
});
