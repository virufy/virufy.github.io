'use client';

import NewLocale from './NewLocaleSelect';
import OldLocale from './OldLocaleSelect';
import { type Locale } from '@/i18n-config';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  lang: Locale;
  onDropdownChange?: (open: boolean) => void; // optional callback to parent
};

export default function Navbar({ lang, onDropdownChange }: NavbarProps) {
  const pathname = usePathname();
  const useNewNav =
    pathname?.startsWith(`/${lang}/seven`) || pathname?.startsWith('/seven');

  return useNewNav ? (
    <NewLocale lang={lang} onDropdownChange={onDropdownChange} />
  ) : (
    <OldLocale />
  );
}
