'use client';

import { usePathname } from 'next/navigation';
import OldNavbar from './components/OldNavbar';
import NewNavbar from './components/NewNavbar';
import MobileNavbar from './components/MobileNavbar';
import { type Locale } from '@/i18n-config';
import { useEffect, useState } from 'react';

export default function Navbar({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // Track window width
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize(); // initialize
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isSevenPage =
    pathname.startsWith(`/${lang}/seven`) || pathname.startsWith('/seven');

  if (isSevenPage && windowWidth !== null && windowWidth < 1024) {
    // Small screen, seven page → MobileNavbar
    return <MobileNavbar lang={lang} />;
  }

  if (isSevenPage && windowWidth !== null && windowWidth >= 1024) {
    // Desktop/tablet seven page → NewNavbar
    return <NewNavbar lang={lang} />;
  }

  // All other pages → OldNavbar
  return <OldNavbar lang={lang} />;
}
