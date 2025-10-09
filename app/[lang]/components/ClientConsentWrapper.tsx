'use client';

import { useState, useEffect } from 'react';
import ModalCookie from './ModalCookie';
import GoogleTag from './GoogleTag';
import { type Locale } from '@/i18n-config';

export default function ClientConsentWrapper({ lang }: { lang: Locale }) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('CookieConsent');
    setConsent(stored === 'accepted');
  }, []);

  return (
    <>
      {consent && <GoogleTag />}
      <ModalCookie lang={lang} onConsentChange={setConsent} />
    </>
  );
}
