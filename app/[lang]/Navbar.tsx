'use client';

import { usePathname } from 'next/navigation';
import OldNavbar from './components/OldNavbar';
import NewNavbar from './components/NewNavbar';
import MobileNavbar from './components/MobileNavbar';
import { type Locale } from '@/i18n-config';
import { useMemo } from 'react';

export default function Navbar({ lang }: { lang: Locale }) {
  const pathname = usePathname() ?? '';

  const isSevenPage = useMemo(() => {
    return (
      pathname.startsWith(`/${lang}/seven`) || pathname.startsWith('/seven')
    );
  }, [pathname, lang]);

  // Default: all non-seven pages
  if (!isSevenPage) {
    return <OldNavbar lang={lang} />;
  }

  /**
   * For "seven" pages:
   * Let CSS handle mobile vs desktop instead of JS window tracking.
   */
  return (
    <>
      <div className="block lg:hidden">
        <MobileNavbar lang={lang} />
      </div>

      <div className="hidden lg:block">
        <NewNavbar lang={lang} />
      </div>
    </>
  );
}
