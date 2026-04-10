'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import { type Locale } from '@/i18n-config';

export default function ConditionalFooter({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  // If the path ends with /sevensupportus (or contains it), hide the global footer
  const isSevenSupportUs = pathname?.includes('/sevensupportus');

  if (isSevenSupportUs) return null;
  return <Footer lang={lang} />;
}
