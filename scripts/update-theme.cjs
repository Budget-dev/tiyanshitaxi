const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Replace theme block
css = css.replace(
  /--color-brand-teal: #0f766e;[\s\S]*?--color-brand-gold: #f59e0b;/,
  `--color-brand-primary: #1d4ed8;
  --color-brand-primary-dark: #1e3a8a;
  --color-brand-primary-light: #3b82f6;
  --color-brand-teal: #1d4ed8;
  --color-brand-teal-dark: #1e3a8a;
  --color-brand-teal-light: #3b82f6;
  --color-brand-gold: #f59e0b;
  --color-brand-amber: #f59e0b;

  --color-teal-50: #eff6ff;
  --color-teal-100: #dbeafe;
  --color-teal-200: #bfdbfe;
  --color-teal-300: #93c5fd;
  --color-teal-400: #60a5fa;
  --color-teal-500: #3b82f6;
  --color-teal-600: #2563eb;
  --color-teal-700: #1d4ed8;
  --color-teal-800: #1e40af;
  --color-teal-900: #1e3a8a;
  --color-teal-950: #0f172a;`
);

// Replace :root variables
css = css.replace(/--wt-teal: #0f766e;/g, '--wt-teal: #1d4ed8;');
css = css.replace(/--wt-teal-dark: #115e59;/g, '--wt-teal-dark: #1e3a8a;');
css = css.replace(/--wt-teal-light: #14b8a6;/g, '--wt-teal-light: #3b82f6;');

// Replace ::selection
css = css.replace(/background: #0f766e;/g, 'background: #1d4ed8;');

// Replace :focus-visible
css = css.replace(/outline: 2px solid #0d9488;/g, 'outline: 2px solid #2563eb;');

// Replace framer-btn-primary
css = css.replace(
  /linear-gradient\(135deg, #0f766e 0%, #0d9488 50%, #115e59 100%\)/g,
  'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)'
);
css = css.replace(/rgba\(15, 118, 110, 0\.4\)/g, 'rgba(29, 78, 216, 0.4)');
css = css.replace(/rgba\(15, 118, 110, 0\.5\)/g, 'rgba(29, 78, 216, 0.5)');
css = css.replace(/rgba\(15, 118, 110, 0\.25\)/g, 'rgba(29, 78, 216, 0.25)');
css = css.replace(/background: #0f766e;/g, 'background: #1d4ed8;');
css = css.replace(/border-color: #0f766e;/g, 'border-color: #1d4ed8;');

fs.writeFileSync('src/index.css', css, 'utf8');
console.log('src/index.css successfully updated to Royal Aviation Blue theme!');
