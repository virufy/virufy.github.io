import fs from 'fs';
import path from 'path';




const redirects = [
  { from: 'team', to: 'en/advisors' },
  { from: 'opportunities', to: 'en/join-us' },
  { from: 'fukuoka', to: 'en/fukuoka' },
  { from: 'join', to: 'en/join-us' },
  {from: 'halfmydaf', to: 'en/halfmydaf'},
  {from: 'donate', to: 'https://www.gofundme.com/f/donate-virufy'},
  {from: 'dubai-jp', to: 'en/dubai-jp'},
  {from: 'news/uae-adghw-apr-2025', to: 'en/news/uae-adghw-apr-2025'},
  {from: 'paper', to: 'en/paper'},
  {from: 'press', to: 'en/news'},
  {from: 'privacy_policy', to: 'en/privacy-policy'},
  {from: 'uae-adghw-apr-2025', to: 'en/news/uae-adghw-apr-2025'},
  {from: 'virumap-msg', to: 'https://docs.google.com/document/d/1e6p9TAd5NC4W7Lp58oxIp3FhUDGMexXXPL-f4--hhKk/edit?usp=sharing'},
  {from: 'virumap-msg-jp', to: 'https://docs.google.com/document/d/1HLQ7ZNMR1wO3BdaWnfQw3_yyhBfNBJGYz8zWN25gA8o/edit?usp=sharing'},
  {from: 'virumap-slides', to: 'https://docs.google.com/presentation/d/1Sb3WXxKrJPbdKkKH9IXV4iWCd3b5iSz5f_92UuJbYZc/edit?usp=sharing'},
  {from: 'virumap-slides-jp', to: 'https://docs.google.com/presentation/d/1GqNirFzOrWsLoLaH5hSe8YVXTMMrWZ1gW5d56jICs30/edit?usp=sharing'},
  // add more here
];

const outDir = path.resolve(process.cwd(), 'out');

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Generate redirect HTML files for static hosts like GitHub Pages
redirects.forEach(({ from, to }) => {
  const redirectFolder = path.join(outDir, from);
  fs.mkdirSync(redirectFolder, { recursive: true });

  const finalUrl = to.startsWith('http') ? to : `/${to}/`;

  const redirectHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="refresh" content="0; url=${finalUrl}" />
    <script>location.href='${finalUrl}'</script>
  </head>
  <body></body>
</html>
  `.trim();

  fs.writeFileSync(path.join(redirectFolder, 'index.html'), redirectHtml);
});

// 2. Generate redirects.json (optional)
const jsonPath = path.join(outDir, 'redirects.json');
fs.writeFileSync(jsonPath, JSON.stringify(redirects, null, 2), 'utf8');
console.log(`Generated ${jsonPath}`);

// 3. Generate Netlify _redirects file
const redirectsLines = redirects.map(({ from, to }) => `/${from} /${to} 301!`);
const redirectsFilePath = path.join(outDir, '_redirects');
fs.writeFileSync(redirectsFilePath, redirectsLines.join('\n'), 'utf8');
console.log(`Generated ${redirectsFilePath}`);