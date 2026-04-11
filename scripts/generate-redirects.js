import fs from 'fs';
import path from 'path';

//Note: to get these to work you need to do npm run build, then npm run preview


const redirects = [
  { from: 'null', to: 'en' },//just in case the language check doesnt work correctly
  { from: 'team', to: 'en/advisors' },
  { from: 'team/', to: 'en/advisors/' },
  { from: 'opportunities', to: 'en/join-us' },
  { from: 'fukuoka', to: 'en/fukuoka' },
  { from: 'join', to: 'en/join-us' },
  {from: 'halfmydaf', to: 'en/halfmydaf'},
   {from: 'donate', to: 'en/donate'},
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
  { from: 'join-jp', to: 'https://forms.gle/nxGbL1pd1R8Q27qe7' },
  { from: 'apply', to: 'https://docs.google.com/forms/d/e/1FAIpQLSdmlecMmXr3FqO1HajJFBmfpji8Blyjfs9U5jK3WT6BrSmDAA/viewform' },
  {from: 'oyw', to: 'en/one-young-world'},
  {from: 'partners', to: 'en/advisors'},
  {from: 'amil-jp-degree', to: 'https://docs.google.com/document/d/1DtRBgO_oS_hR4CU-xktEE-nPB-LPH_rCW9QeEYjkNeQ/edit?tab=t.0'},
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