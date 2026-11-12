'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/jobListing';
import ExportedImage from 'next-image-export-optimizer';
import { useState, useEffect, useRef } from 'react';
import { usei18n } from '@/app/i18n';
import ReactGA from 'react-ga4';
import { usePathname } from 'next/navigation';

const CookieBanner = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();

  const {
    cookieModal: { text, yes, no },
  } = usei18n(lang);

  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const analyticsInitialized = useRef(false);

  /**
   * On load:
   * - Show banner if no decision
   * - Track if already accepted
   */
  useEffect(() => {
    const hasGpc =
      (navigator as Navigator & { globalPrivacyControl?: boolean })
        .globalPrivacyControl === true;
    if (hasGpc) {
      localStorage.setItem('CookieConsent', 'rejected');
      setShowBanner(false);
      setHasConsent(false);
      return;
    }

    const consent = localStorage.getItem('CookieConsent');

    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      setHasConsent(true);
    } else {
      setShowBanner(false);
      setHasConsent(false);
    }
  }, []);

  useEffect(() => {
    if (!hasConsent) return;

    if (!analyticsInitialized.current) {
      ReactGA.initialize('G-ZV5G86ZDRG', {
        gtagOptions: {
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          send_page_view: false,
        },
      });
      analyticsInitialized.current = true;
    }

    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [hasConsent, pathname]);

  const acceptCookies = () => {
    localStorage.setItem('CookieConsent', 'accepted');
    setShowBanner(false);
    setHasConsent(true);
  };

  const rejectCookies = () => {
    localStorage.setItem('CookieConsent', 'rejected');
    setShowBanner(false);
    setHasConsent(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-black to-[#4167AD] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 md:flex-row md:justify-between">
        {/* Logo + Text */}
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
          <ExportedImage
            className="h-8 w-auto"
            src={VirufyLogo}
            alt="Virufy logo"
            priority
            basePath={basePath}
          />
          <p className="max-w-2xl text-sm md:text-base">{text}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="rounded-xl bg-white px-5 py-2 font-semibold text-black transition hover:bg-gray-200"
            onClick={acceptCookies}
          >
            {yes}
          </button>

          <button
            className="rounded-xl border border-red-400 px-5 py-2 font-semibold text-red-300 transition hover:bg-red-900/30"
            onClick={rejectCookies}
          >
            {no}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
