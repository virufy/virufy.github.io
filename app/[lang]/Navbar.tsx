'use client';

import { usePathname } from 'next/navigation';
import OldNavbar from './components/OldNavbar';
import NewNavbar from './components/NewNavbar';
import { type Locale } from '@/i18n-config';

export default function Navbar({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  const useNewNav =
    pathname.startsWith(`/${lang}/seven`) || pathname.startsWith('/seven');

  return useNewNav ? <NewNavbar lang={lang} /> : <OldNavbar lang={lang} />;
}
