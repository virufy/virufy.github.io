'use client';

import { usePathname } from 'next/navigation';
import OldNavbar from './components/OldNavbar';
import NewNavbar from './components/NewNavbar';
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

  const useNewNav =
    (pathname.startsWith(`/${lang}/seven`) || pathname.startsWith('/seven')) &&
    (windowWidth === null || windowWidth >= 768); // Tailwind md breakpoint = 768px

  return useNewNav ? <NewNavbar lang={lang} /> : <OldNavbar lang={lang} />;
}
