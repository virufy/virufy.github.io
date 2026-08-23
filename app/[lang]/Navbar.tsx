'use client';

import NewNavbar from './components/NewNavbar';
import MobileNavbar from './components/MobileNavbar';
import { type Locale } from '@/i18n-config';

export default function Navbar({ lang }: { lang: Locale }) {
  /**
   * For "seven" pages:
   * Let CSS handle mobile vs desktop instead of JS window tracking.
   */
  return (
    <div className="navbar-font">
      <div className="block lg:hidden">
        <MobileNavbar lang={lang} />
      </div>

      <div className="hidden lg:block">
        <NewNavbar lang={lang} />
      </div>
    </div>
  );
}
