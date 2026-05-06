'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/navbar/index';
import ArrowDownIcon from '@/public/icons/icon-arrow-down.png';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useMemo } from 'react';
import { usei18n } from '../../i18n';
import LocaleSelect from './LocaleSelect';
import useSearch from '@/utils/useSearch';
import debounce from 'lodash.debounce';

interface AccordionItem {
  label: string;
  links: { label: string; href: string }[];
}

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
      noResultsPlaceholder,
    },
  } = usei18n(lang);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [localeOpen, setLocaleOpen] = useState(false);
  const currPathname = usePathname();
  const router = useRouter();
  const isRedirecting = useRef(false);
  const { results, performSearch, clearResults, isReady } = useSearch(lang);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const DEBOUNCE_DELAY = 400;
  /** Effects */
  const normalizePath = (p: string) => p.replace(/\/+$/, ''); // removes trailing slashes
  useEffect(() => {
    const links = [
      { label: 'Home', route: [`/${lang}`] },
      { label: 'Technology', route: [`/${lang}/ai`] },
      {
        label: 'CoughCheck App',
        route: [
          `/${lang}/covid19`,
          `/${lang}/flu`,
          `/${lang}/copd`,
          `/${lang}/rsv`,
        ],
      },
      {
        label: 'About Us',
        route: [
          `/${lang}/sevenwho-we-are`,
          `/${lang}/advisors`,
          `/${lang}/supporters`,
          `/${lang}/one-young-world`,
          `/${lang}/amils-story`,
        ],
      },
      {
        label: 'Media',
        route: [`/${lang}/news`, `/${lang}/publications`],
      },
      { label: 'FAQ', route: [`/${lang}/faq`] },
    ];

    let matched = '';
    links.forEach((link) => {
      if (
        link.route.some((r) => normalizePath(r) === normalizePath(currPathname))
      ) {
        matched = link.label; // now this will match
      }
    });

    setActiveLink(matched);
    console.log('Current pathname:', currPathname, 'Matched link:', matched);
  }, [currPathname, lang]);

  // Prevent body scroll when navbar is open
  useEffect(() => {
    document.body.style.overflow = navbarOpen ? 'hidden' : '';
  }, [navbarOpen]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isRedirecting.current) return;
      const target = event.target as HTMLElement;
      if (
        (dropdownRef.current && !dropdownRef.current.contains(target)) ||
        (inputRef.current && !inputRef.current.contains(target))
      ) {
        clearResults();
        setHasSearched(false);
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [clearResults]);

  // Focus input when search is shown
  useEffect(() => {
    if (showSearch && inputRef.current) inputRef.current.focus();
  }, [showSearch]);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        if (isReady) {
          performSearch(value);
          setHasSearched(true);
        }
      }, DEBOUNCE_DELAY),
    [isReady, performSearch]
  );

  const handleNavClick = () => setNavbarOpen(false);

  const toggleAccordion = (label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  };

  const renderSearchInput = () => (
    <div className="relative ml-2">
      <input
        ref={inputRef}
        type="text"
        placeholder={searchPlaceholder}
        value={query}
        autoFocus
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          if (value.trim() === '') {
            clearResults();
            setHasSearched(false);
          } else debouncedSearch(value);
        }}
        className="w-40 rounded-full border border-black px-10 py-1 text-black placeholder-black focus:outline-none sm:w-52"
      />
      {/* Search icon inside input */}
      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="10" cy="10" r="6" strokeWidth="2" />
          <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
        </svg>
      </div>

      {/* X to close */}
      <div
        onClick={() => {
          setShowSearch(false);
          setQuery('');
          clearResults();
          setHasSearched(false);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  );

  const renderSearchDropdown = () =>
    hasSearched &&
    showSearch && (
      <ul
        ref={dropdownRef}
        className="mt-1 max-h-64 overflow-y-auto rounded-md border border-black bg-white p-2 text-black shadow-lg"
      >
        {results.filter((r) => r.url).length > 0 ? (
          results
            .filter((r) => r.url)
            .map((r) => (
              <li
                key={`${r.id}-${r.url}`}
                className="cursor-pointer border-b py-2 text-black last:border-b-0"
                onMouseDown={() => (isRedirecting.current = true)}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  try {
                    router.push(r.url);
                    setTimeout(() => {
                      setQuery('');
                      clearResults();
                      setHasSearched(false);
                      isRedirecting.current = false;
                    }, 300);
                  } catch {
                    window.location.href = r.url;
                  }
                }}
              >
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm">{r.content}</div>
              </li>
            ))
        ) : (
          <li className="py-4 text-center text-black">
            {noResultsPlaceholder}
          </li>
        )}
      </ul>
    );

  const accordions: AccordionItem[] = [
    {
      label: aboutUs?.section || 'About Us',
      links: [
        { label: aboutUs?.section || '', href: `/${lang}/sevenwho-we-are` },
        { label: aboutUs?.advisors || '', href: `/${lang}/advisors` },
        { label: aboutUs?.ourFounder || '', href: `/${lang}/amils-story` },
        { label: aboutUs?.ourSupporters || '', href: `/${lang}/supporters` },
        {
          label: aboutUs?.oneYoungWorld || '',
          href: `/${lang}/one-young-world`,
        },
      ],
    },
    {
      label: media?.section || 'Media',
      links: [
        { label: media?.ourResearch || '', href: `/${lang}/news` },
        { label: media?.pressReleases || '', href: `/${lang}/publications` },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full rounded-b-3xl bg-white p-3 px-5 text-black shadow-md">
      <div className="flex items-center justify-between pt-2">
        {/* Left: Hamburger + Search */}
        <div className="flex items-center gap-2">
          {/* Hamburger */}
          <div
            onClick={() => setNavbarOpen((prev) => !prev)}
            className="cursor-pointer text-black"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  navbarOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </div>

          {/* Search icon / input */}
          {showSearch ? (
            renderSearchInput()
          ) : (
            <div
              onClick={() => setShowSearch(true)}
              className="cursor-pointer text-black"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="10" cy="10" r="6" strokeWidth="2" />
                <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
              </svg>
            </div>
          )}
        </div>

        {/* Right: Logo */}
        <Link href={`/${lang}`} className="flex items-center justify-center">
          <ExportedImage
            src={VirufyLogo}
            alt="Virufy logo"
            basePath={basePath}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {showSearch && renderSearchDropdown()}

      {/* Mobile menu */}
      {navbarOpen && (
        <div className="mt-3 max-h-[calc(100dvh-80px)] overflow-y-auto">
          <ul className="mt-3 flex flex-col gap-3 text-lg">
            <li>
              <Link
                href={`/${lang}`}
                onClick={handleNavClick}
                className={`block w-full ${activeLink === 'Home' ? 'font-bold' : ''}`}
              >
                {home}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/ai`}
                onClick={handleNavClick}
                className={`block w-full ${activeLink === 'Technology' ? 'font-bold' : ''}`}
              >
                {ourTechnology?.section}
              </Link>
            </li>

            {accordions.map((section) => {
              const isSectionActive = section.links.some(
                (link) =>
                  normalizePath(link.href) === normalizePath(currPathname)
              );

              return (
                <li key={section.label}>
                  <button
                    onClick={() => toggleAccordion(section.label)}
                    className={`flex w-full items-center justify-between ${
                      isSectionActive
                        ? 'font-semibold text-blue-600'
                        : 'text-black'
                    }`}
                  >
                    {section.label}
                    <span>
                      <ExportedImage
                        src={ArrowDownIcon}
                        alt="arrow"
                        basePath={basePath}
                        className={`h-3 w-3 transition-transform ${
                          openAccordion === section.label ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {openAccordion === section.label && (
                    <ul className="ml-4 mt-1 flex flex-col gap-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={handleNavClick}
                            className={`block w-full ${
                              normalizePath(link.href) ===
                              normalizePath(currPathname)
                                ? 'border-l-2 border-blue-600 pl-2 font-semibold text-blue-600'
                                : 'text-black'
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}

            <li>
              <Link
                href={`/${lang}/join-us`}
                onClick={handleNavClick}
                className="block w-full text-black"
              >
                {joinUs?.buttonText}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/donate`}
                onClick={handleNavClick}
                className="block w-full text-black"
              >
                {donate?.buttonText}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/faq`}
                onClick={handleNavClick}
                className="block w-full text-black"
              >
                {faq}
              </Link>
            </li>

            <div
              className={
                localeOpen
                  ? 'bg-gradient-to-b from-[#2A9D8F] to-[#0E72C9]'
                  : 'w-[90px] rounded-full border-2 border-sky-800'
              }
            >
              <li
                className={`w-full text-sm font-semibold text-black ${localeOpen ? 'bg-white' : 'rounded-full bg-white pl-4'}`}
                //make sure to match locale select styles when open vs closed
              >
                <LocaleSelect
                  lang={lang}
                  onDropdownChange={(open) => setLocaleOpen(open)}
                />
              </li>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
