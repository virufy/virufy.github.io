'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/jobListing';
import ExportedImage from 'next-image-export-optimizer';
import { useState, useEffect, useCallback } from 'react';
import { usei18n } from '@/app/i18n';
import ReactGA from 'react-ga4';
import { usePathname } from 'next/navigation';

interface CookieBannerProps {
  lang: Locale;
  onConsentChange: (consent: boolean) => void;
}

const CookieBanner = ({ lang, onConsentChange }: CookieBannerProps) => {
  const pathname = usePathname();
  const dateAccessed = new Date().toISOString();

  const {
    cookieModal: { text, yes, no },
  } = usei18n(lang);

  const [showBanner, setShowBanner] = useState(false);

  /**
   * Initialize GA once
   */
  useEffect(() => {
    ReactGA.initialize('G-ZV5G86ZDRG');
  }, []);

  /**
   * Track pageview if consent is accepted
   */
  const trackPageview = useCallback(
    (url: string) => {
      ReactGA.send({
        hitType: 'pageview',
        page: url,
        date_accessed: dateAccessed,
      });
    },
    [dateAccessed]
  );

  /**
   * On load:
   * - Show banner if no decision
   * - Track if already accepted
   */
  useEffect(() => {
    const consent = localStorage.getItem('CookieConsent');

    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      trackPageview(pathname);
      onConsentChange(true);
    } else {
      onConsentChange(false);
    }
  }, [pathname, trackPageview, onConsentChange]);

  const acceptCookies = () => {
    localStorage.setItem('CookieConsent', 'accepted');
    setShowBanner(false);
    trackPageview(pathname);
    onConsentChange(true);
  };

  const rejectCookies = () => {
    localStorage.setItem('CookieConsent', 'rejected');
    setShowBanner(false);
    onConsentChange(false);
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
