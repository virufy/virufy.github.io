'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usei18n } from '../../i18n';

export default function MobileNavbar({ lang }: { lang: Locale }) {
  const {
    navbar: {
      home,
      ourTechnology,
      aboutUs,
      media,
      faq,
      donate,
      joinUs,
      searchPlaceholder,
    },
  } = usei18n(lang);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [accordionOpen, setAccordionOpen] = useState<{
    [key: string]: boolean;
  }>({});
  const pathname = usePathname() || '';

  const toggleAccordion = (key: string) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    setNavbarOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Hamburger + Search */}
        <div className="flex items-center space-x-2">
          {/* Hamburger */}
          <button
            onClick={() => setNavbarOpen((prev) => !prev)}
            className="flex flex-col justify-center space-y-1 p-2"
          >
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
          </button>

          {/* Search */}
          <div className="relative">
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center justify-center p-2"
              >
                <svg
                  className="h-5 w-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="10" r="6" strokeWidth="2" />
                  <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
                </svg>
              </button>
            ) : (
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-64 rounded-full border border-gray-300 py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <svg
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="10" r="6" strokeWidth="2" />
                  <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
                </svg>
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
                  onClick={() => {
                    setQuery('');
                    setSearchOpen(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Logo (hidden when search is open) */}
        {!searchOpen && (
          <Link href={`/${lang}`} className="flex-shrink-0">
            <ExportedImage
              src={VirufyLogo}
              alt="Virufy logo"
              basePath={basePath}
              className="h-10 w-auto"
            />
          </Link>
        )}
      </div>

      {/* Accordion menu */}
      {navbarOpen && (
        <div className="px-4 pb-4">
          <ul className="space-y-2 text-black">
            <li>
              <Link
                href={`/${lang}`}
                className={`block rounded px-3 py-2 hover:bg-gray-100 ${
                  pathname === `/${lang}` ? 'font-bold text-blue-600' : ''
                }`}
                onClick={() => setNavbarOpen(false)}
              >
                {home}
              </Link>
            </li>

            {/* Technology Accordion */}
            <li>
              <button
                onClick={() => toggleAccordion('technology')}
                className="flex w-full justify-between rounded px-3 py-2 hover:bg-gray-100"
              >
                {ourTechnology?.section}
                <span>{accordionOpen['technology'] ? '-' : '+'}</span>
              </button>
              {accordionOpen['technology'] && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href={`/${lang}/ai`}
                      className="block rounded px-2 py-1 hover:bg-gray-100"
                      onClick={() => setNavbarOpen(false)}
                    >
                      AI
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* About Accordion */}
            <li>
              <button
                onClick={() => toggleAccordion('about')}
                className="flex w-full justify-between rounded px-3 py-2 hover:bg-gray-100"
              >
                {aboutUs?.section}
                <span>{accordionOpen['about'] ? '-' : '+'}</span>
              </button>
              {accordionOpen['about'] && (
                <ul className="ml-4 mt-1 space-y-1">
                  {[
                    {
                      label: aboutUs?.section,
                      href: `/${lang}/sevenwho-we-are`,
                    },
                    { label: aboutUs?.advisors, href: `/${lang}/advisors` },
                    {
                      label: aboutUs?.ourFounder,
                      href: `/${lang}/amils-story`,
                    },
                    {
                      label: aboutUs?.ourSupporters,
                      href: `/${lang}/supporters`,
                    },
                    {
                      label: aboutUs?.oneYoungWorld,
                      href: `/${lang}/one-young-world`,
                    },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded px-2 py-1 hover:bg-gray-100"
                        onClick={() => setNavbarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Media Accordion */}
            <li>
              <button
                onClick={() => toggleAccordion('media')}
                className="flex w-full justify-between rounded px-3 py-2 hover:bg-gray-100"
              >
                {media.section}
                <span>{accordionOpen['media'] ? '-' : '+'}</span>
              </button>
              {accordionOpen['media'] && (
                <ul className="ml-4 mt-1 space-y-1">
                  {[
                    { label: media.ourResearch, href: `/${lang}/news` },
                    {
                      label: media.pressReleases,
                      href: `/${lang}/publications`,
                    },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded px-2 py-1 hover:bg-gray-100"
                        onClick={() => setNavbarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href={`/${lang}/join-us`}
                className="block rounded px-3 py-2 hover:bg-gray-100"
                onClick={() => setNavbarOpen(false)}
              >
                {joinUs?.buttonText}
              </Link>
            </li>

            <li>
              <Link
                href={`/${lang}/donate`}
                className="block rounded px-3 py-2 hover:bg-gray-100"
                onClick={() => setNavbarOpen(false)}
              >
                {donate?.buttonText}
              </Link>
            </li>

            <li>
              <Link
                href={`/${lang}/faq`}
                className="block rounded px-3 py-2 hover:bg-gray-100"
                onClick={() => setNavbarOpen(false)}
              >
                {faq}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
