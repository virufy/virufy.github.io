'use client';

import { useState, useEffect } from 'react';
import ModalCookie from './ModalCookie';
import { type Locale } from '@/i18n-config';

export default function ClientConsentWrapper({ lang }: { lang: Locale }) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const hasGpc =
      (navigator as Navigator & { globalPrivacyControl?: boolean })
        .globalPrivacyControl === true;
    if (hasGpc) {
      localStorage.setItem('CookieConsent', 'rejected');
      setConsent(false);
      return;
    }

    const stored = localStorage.getItem('CookieConsent');
    setConsent(stored === 'accepted');
  }, []);

  return (
    <>
      <ModalCookie lang={lang} onConsentChange={setConsent} />
    </>
  );
}
