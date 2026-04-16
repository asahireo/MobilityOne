const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components/ui');
const filesToProcess = [
  'legal-page.tsx',
  'career.tsx',
  'payment-terminal-hero.tsx',
  'news.tsx',
  'contact.tsx',
  'investor-relations.tsx',
  'emoney-hero.tsx',
  'remittance-hero.tsx'
];

filesToProcess.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Common replacements
  content = content.replace(/text-white/g, 'text-black');
  content = content.replace(/border-white\/([0-9]+)/g, 'border-black/$1');
  content = content.replace(/bg-white\/\[([0-9.]+)\]/g, 'bg-black/[$1]');
  content = content.replace(/text-\[var\(--brand-gold\)\]/g, 'text-[var(--brand-amber)]');
  content = content.replace(/hover:text-white/g, 'hover:text-black');
  content = content.replace(/bg-\[var\(--brand-gold\)\]\/([0-9]+)/g, 'bg-[var(--brand-gold)]/$1');
  // special fix for emoney-hero background node color
  content = content.replace(/background: "#0d0d0e"/g, 'background: "#ffffff"');
  content = content.replace(/#1c1c1e/g, '#e5e7eb');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
});
