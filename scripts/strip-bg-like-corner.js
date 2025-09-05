import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const SRC = 'public/logos';
const DST = 'public/logos_transparent';
const FILES = [
  'aws.webp','drive.webp','h4r.webp','pillsbury.webp','spi.webp','devlights.webp','fenwick.webp',
  'idime.webp','sherlock-communications.webp','cj-partners.webp','locked-jar.webp','nuvu.webp',
  'olarte-moure.webp','one-young-world.webp','university-fukui.webp','xoor.webp'
];

fs.mkdirSync(DST, { recursive: true });

const dist = (r,g,b, R,G,B) => {
  const dr=r-R,dg=g-G,db=b-B; return Math.sqrt(dr*dr+dg*dg+db*db);
};

function pickBg(img){
  const { width:w, height:h, data } = img.bitmap;
  const s=8;
  const sample=(x0,y0,dx,dy)=>{
    let r=0,g=0,b=0,c=0;
    for(let y=y0;y<y0+dy;y++){
      for(let x=x0;x<x0+dx;x++){
        const i=(y*w+x)<<2; r+=data[i]; g+=data[i+1]; b+=data[i+2]; c++;
      }
    }
    return [Math.round(r/c),Math.round(g/c),Math.round(b/c)];
  };
  const a=sample(0,0,s,s), b=sample(w-s,0,s,s), c=sample(0,h-s,s,s), d=sample(w-s,h-s,s,s);
  return [
    Math.round((a[0]+b[0]+c[0]+d[0])/4),
    Math.round((a[1]+b[1]+c[1]+d[1])/4),
    Math.round((a[2]+b[2]+c[2]+d[2])/4),
  ];
}

async function processOne(name, tol=58){
  const src = path.join(SRC, name);
  if(!fs.existsSync(src)){ console.warn('skip', name); return; }
  const base = path.parse(name).name;
  const out  = path.join(DST, `${base}.png`);

  const img = await Jimp.read(src);
  const { width:w, height:h, data } = img.bitmap;

  const [br,bg,bb] = pickBg(img);

  const vis = new Uint8Array(w*h);
  const q = new Int32Array(w*h*2); let qs=0, qe=0;
  const tryPush = (x,y)=>{
    const id=y*w+x, i=id<<2;
    if(vis[id]) return;
    if(dist(data[i],data[i+1],data[i+2], br,bg,bb) <= tol){
      vis[id]=1; q[qe++]=x; q[qe++]=y;
    }
  };

  for(let x=0;x<w;x++){ tryPush(x,0); tryPush(x,h-1); }
  for(let y=0;y<h;y++){ tryPush(0,y); tryPush(w-1,y); }

  while(qs<qe){
    const x=q[qs++], y=q[qs++], id=y*w+x, i=id<<2;
    data[i+3]=0;
    if(x>0) tryPush(x-1,y);
    if(x+1<w) tryPush(x+1,y);
    if(y>0) tryPush(x,y-1);
    if(y+1<h) tryPush(x,y+1);
  }

  const toClear=[];
  for(let y=1;y<h-1;y++){
    for(let x=1;x<w-1;x++){
      const id=y*w+x, i=id<<2;
      if(data[i+3]===0) continue;
      const neigh=[((y*w+x-1)<<2)+3,((y*w+x+1)<<2)+3,(((y-1)*w+x)<<2)+3,(((y+1)*w+x)<<2)+3];
      const nearT = neigh.some(a=>data[a]===0);
      const r=data[i], g=data[i+1], b=data[i+2];
      if(nearT && dist(r,g,b, br,bg,bb) <= tol+8) toClear.push(i+3);
    }
  }
  toClear.forEach(a=>{ data[a]=0; });

  await img.write(out);
  console.log('Saved:', out);
}

for(const f of FILES){ await processOne(f); }
console.log('Done');
