'use client';

import ModalCookie from './ModalCookie';
import { type Locale } from '@/i18n-config';

export default function ClientConsentWrapper({ lang }: { lang: Locale }) {
  return <ModalCookie lang={lang} />;
}
