'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player').then(mod => mod.default), { ssr: false });

export default function Video({ width, height, url }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Esta lógica solo se ejecutará en el lado del cliente
    setIsClient(true);
  }, []);

  return (
    <>{isClient && <ReactPlayer width={width} height={height} url={url} />}</>
  );
}
