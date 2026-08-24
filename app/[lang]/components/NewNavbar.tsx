'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { usei18n } from '../../i18n';
import LocaleSelect from './LocaleSelect';
import useSearch from '@/utils/useSearch';
import debounce from 'lodash.debounce';
import NavbarDropdown from './NavbarDropdown';

export default function Navbar({ lang }: { lang: Locale }) {
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

  /** State */
  const [localeOpen, setLocaleOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  /** Hooks */
  const currPathname = usePathname();
  const router = useRouter();

  const isRedirecting = useRef(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const { results, performSearch, clearResults, isReady } = useSearch(lang);

  /** Constants */
  const SCREEN_SIZE = 1265;
  const DEBOUNCE_DELAY = 400;

  /** Helpers */
  const normalizePath = (path: string) => path.replace(/\/+$/, '');

  const handleNavClick = () => {
    setNavbar(false);
  };

  const closeSearch = useCallback(() => {
    setQuery('');
    clearResults();
    setHasSearched(false);
    setShowSearch(false);
  }, [clearResults]);

  /** Determine active navbar item */
  useEffect(() => {
    const links = [
      {
        label: 'Home',
        route: [`/${lang}`],
      },
      {
        label: 'Technology',
        route: [`/${lang}/ai`],
      },
      {
        label: 'About Us',
        route: [
          `/${lang}/story`,
          `/${lang}/advisors`,
          `/${lang}/supporters`,
          `/${lang}/one-young-world`,
          `/${lang}/amils-story`,
        ],
      },
      {
        label: 'Media',
        route: [`/${lang}/news`, `/${lang}/publications`, `/${lang}/blog`],
      },
      {
        label: 'Join Us',
        route: [`/${lang}/join-us`],
      },
      {
        label: 'Donate',
        route: [`/${lang}/donate`],
      },
      {
        label: 'FAQ',
        route: [`/${lang}/faq`],
      },
    ];

    let matched = '';

    links.forEach((link) => {
      if (
        link.route.some(
          (route) => normalizePath(route) === normalizePath(currPathname)
        )
      ) {
        matched = link.label;
      }
    });

    setActiveLink(matched);
  }, [currPathname, lang]);

  /** Close mobile navbar when route changes */
  useEffect(() => {
    setNavbar(false);
  }, [currPathname]);

  /** Handle resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= SCREEN_SIZE) {
        setNavbar(false);
      }

      if (window.innerWidth < SCREEN_SIZE) {
        setShowSearch(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /** Prevent body scrolling when mobile navbar is open */
  useEffect(() => {
    document.body.style.overflow = navbar ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [navbar]);

  /** Close search/dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isRedirecting.current) {
        return;
      }

      const target = event.target as HTMLElement;

      const clickedInsideSearch = searchContainerRef.current?.contains(target);

      if (!clickedInsideSearch) {
        closeSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSearch]);

  /** Focus search input when search opens */
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  /** Debounced search */
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

  /** Cleanup debounce */
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  /** Search input */
  const renderSearchInput = () => (
    <div className="search-input-container relative w-[160px] min-[1310px]:w-[180px] min-[1380px]:w-[220px]">
      <input
        ref={inputRef}
        type="text"
        placeholder={searchPlaceholder}
        value={query}
        disabled={!isReady}
        onChange={(event) => {
          const value = event.target.value;

          setQuery(value);

          if (value.trim() === '') {
            clearResults();
            setHasSearched(false);
          } else {
            debouncedSearch(value);
          }
        }}
        className="h-[40px] w-full rounded-full border border-[#4fa8d8] bg-white px-4 pr-10 text-[14px] text-[#26364b] outline-none transition placeholder:text-[#9aa6b2] focus:border-[#0879d1]"
      />

      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery('');
            clearResults();
            setHasSearched(false);
          }}
          className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#64748b] transition-colors hover:text-[#0879d1]"
          aria-label="Clear search"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );

  /** Search dropdown */
  const renderSearchDropdown = () => {
    if (!hasSearched || !showSearch) {
      return null;
    }

    return (
      <ul
        ref={dropdownRef}
        className="absolute right-[42px] top-[48px] z-[200] max-h-96 w-[400px] max-w-[90vw] overflow-y-auto rounded-md border border-gray-200 bg-white p-2 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {results.filter((result) => result.url).length > 0 ? (
          results
            .filter((result) => result.url)
            .map((result) => (
              <li
                key={`${result.id}-${result.url}`}
                className="cursor-pointer border-b border-gray-100 px-4 py-3 last:border-b-0 hover:bg-gray-50"
                onMouseDown={() => {
                  isRedirecting.current = true;
                }}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();

                  try {
                    router.push(result.url);

                    setTimeout(() => {
                      setQuery('');
                      clearResults();
                      setHasSearched(false);
                      setShowSearch(false);
                      isRedirecting.current = false;
                    }, 300);
                  } catch {
                    window.location.href = result.url;
                  }
                }}
              >
                <div className="font-semibold text-[#26364b]">
                  {result.title}
                </div>

                <div className="mt-1 line-clamp-2 text-sm text-gray-600">
                  {result.content}
                </div>
              </li>
            ))
        ) : (
          <li className="py-5 text-center text-sm text-gray-500">
            {noResultsPlaceholder}
          </li>
        )}
      </ul>
    );
  };

  /** Search icon */
  const SearchIcon = () => (
    <svg
      className="h-[21px] w-[21px]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="6" strokeWidth="2" />

      <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="w-full">
      <nav className="fixed left-0 top-0 z-[100] w-full">
        {/* ========================================================= */}
        {/* NAVBAR CONTAINER                                         */}
        {/* ========================================================= */}

        <div className="relative flex h-[86px] w-full items-center bg-gradient-to-r from-[#d7e2eb]/90 via-[#f2f4f8]/90 to-[#d7e2eb]/90 px-8">
          {/* ===================================================== */}
          {/* LOGO                                                   */}
          {/* ===================================================== */}

          <Link
            href={`/${lang}`}
            onClick={handleNavClick}
            className="absolute left-8 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-90"
          >
            <ExportedImage
              src={VirufyLogo}
              alt="Virufy logo"
              basePath={basePath}
              className="h-[48px] w-[140px] object-contain"
            />
          </Link>

          {/* ===================================================== */}
          {/* DESKTOP NAVIGATION                                    */}
          {/* ===================================================== */}

          <div
            className={`absolute top-1/2 hidden -translate-y-1/2 lg:block ${
              showSearch ? 'left-[44%] min-[1600px]:left-1/2' : 'left-1/2'
            } -translate-x-1/2`}
          >
            <ul className="flex items-center gap-[29px] whitespace-nowrap">
              {/* Home */}
              <li>
                <Link
                  href={`/${lang}`}
                  onClick={handleNavClick}
                  className={`py-2 text-[16px] font-semibold transition-colors duration-200 lg:text-[18px] ${
                    activeLink === 'Home'
                      ? 'text-blue-600'
                      : 'text-black hover:text-blue-600'
                  } `}
                >
                  {home}
                </Link>
              </li>

              {/* Technology */}
              <li>
                <Link
                  href={`/${lang}/ai`}
                  onClick={handleNavClick}
                  className={`py-2 text-[16px] font-semibold transition-colors duration-200 lg:text-[18px] ${
                    activeLink === 'Technology'
                      ? 'text-blue-600'
                      : 'text-black hover:text-blue-600'
                  } `}
                >
                  {ourTechnology?.section}
                </Link>
              </li>

              {/* About Us */}
              <li>
                <NavbarDropdown
                  label={aboutUs?.section}
                  links={[
                    {
                      label: aboutUs?.section,
                      href: `/${lang}/story`,
                      subtext: aboutUs.sectionsubtext,
                    },
                    {
                      label: aboutUs?.advisors,
                      href: `/${lang}/advisors`,
                      subtext: aboutUs.advisorsubtext,
                    },
                    {
                      label: aboutUs?.ourFounder,
                      href: `/${lang}/amils-story`,
                      subtext: aboutUs.foundersubtext,
                    },
                    {
                      label: aboutUs?.ourSupporters,
                      href: `/${lang}/supporters`,
                      subtext: aboutUs.supportersubtext,
                    },
                    {
                      label: aboutUs?.oneYoungWorld,
                      href: `/${lang}/one-young-world`,
                      subtext: aboutUs.oymsubtext,
                    },
                  ]}
                  activePath={currPathname}
                />
              </li>

              {/* Media */}
              <li>
                <NavbarDropdown
                  label={media.section}
                  links={[
                    {
                      label: media.ourResearch,
                      href: `/${lang}/publications`,
                      subtext: media.presssubtext,
                    },
                    {
                      label: media.pressReleases,
                      href: `/${lang}/news`,
                      subtext: media.researchsubtext,
                    },
                    {
                      label: media.blog,
                      href: `/${lang}/blog`,
                      subtext: media.blogsubtext,
                    },
                  ]}
                  activePath={currPathname}
                />
              </li>

              {/* FAQ */}
              <li>
                <Link
                  href={`/${lang}/faq`}
                  onClick={handleNavClick}
                  className={`py-2 text-[16px] font-semibold transition-colors duration-200 lg:text-[18px] ${
                    activeLink === 'FAQ'
                      ? 'text-blue-600'
                      : 'text-black hover:text-blue-600'
                  } `}
                >
                  {faq}
                </Link>
              </li>

              {/* Join */}
              <li>
                <Link
                  href={`/${lang}/join-us`}
                  onClick={handleNavClick}
                  className={`py-2 text-[16px] font-semibold transition-colors duration-200 lg:text-[18px] ${
                    activeLink === 'Join Us'
                      ? 'text-blue-600'
                      : 'text-black hover:text-blue-600'
                  } `}
                >
                  {joinUs?.buttonText}
                </Link>
              </li>

              {/* Support / Donate */}
              <li>
                <Link
                  href={`/${lang}/donate`}
                  onClick={handleNavClick}
                  className={`py-2 text-[16px] font-semibold transition-colors duration-200 lg:text-[18px] ${
                    activeLink === 'Donate'
                      ? 'text-blue-600'
                      : 'text-black hover:text-blue-600'
                  } `}
                >
                  {donate?.buttonText}
                </Link>
              </li>
            </ul>
          </div>

          {/* ===================================================== */}
          {/* RIGHT SIDE                                             */}
          {/* ===================================================== */}

          <div className="absolute right-8 top-1/2 flex -translate-y-1/2 items-center gap-4">
            {/* ================================================= */}
            {/* SEARCH                                             */}
            {/* ================================================= */}

            <div
              ref={searchContainerRef}
              className="relative flex items-center"
            >
              {showSearch ? (
                <>
                  {/* Search input */}
                  {renderSearchInput()}

                  {/* Search button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (query.trim()) {
                        performSearch(query);
                        setHasSearched(true);
                      }
                    }}
                    className="ml-1 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#0879d1] bg-white text-[#26364b] transition-all duration-200 hover:bg-[#0879d1] hover:text-white"
                    aria-label="Search"
                  >
                    <SearchIcon />
                  </button>

                  {renderSearchDropdown()}
                </>
              ) : (
                /* Closed search */
                <button
                  type="button"
                  onClick={() => {
                    setShowSearch(true);
                  }}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-[#26364b] transition-colors duration-200 hover:text-[#0879d1]"
                  aria-label="Open search"
                >
                  <SearchIcon />
                </button>
              )}
            </div>

            {/* ================================================= */}
            {/* LANGUAGE SELECTOR                                 */}
            {/* ================================================= */}

            <div className="rounded-full bg-gradient-to-b from-[#2a9d8f] to-[#0e72c9] p-[1px]">
              <div
                className={`flex h-[42px] items-center rounded-full border border-[#0879d1] pl-4 text-[14px] font-medium text-[#26364b] ${
                  localeOpen ? 'bg-white' : 'bg-[#f5f8fa]'
                } `}
              >
                <LocaleSelect
                  lang={lang}
                  onDropdownChange={(open) => setLocaleOpen(open)}
                />
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* MOBILE NAV                                           */}
          {/* ===================================================== */}

          <div className="flex w-full items-center justify-end lg:hidden">
            <button
              type="button"
              onClick={() => setNavbar((previous) => !previous)}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full text-[#26364b]"
              aria-label="Toggle navigation"
              aria-expanded={navbar}
            >
              {navbar ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ======================================================= */}
        {/* MOBILE MENU                                             */}
        {/* ======================================================= */}

        {navbar && (
          <div className="fixed left-0 top-[86px] z-[99] h-[calc(100vh-86px)] w-full overflow-y-auto bg-gradient-to-b from-[#d7e2eb] via-[#f2f4f8] to-[#d7e2eb] px-8 py-8 xl:hidden">
            <div className="flex flex-col gap-6">
              {/* Mobile Home */}
              <Link
                href={`/${lang}`}
                onClick={handleNavClick}
                className={`text-lg font-semibold ${
                  activeLink === 'Home' ? 'text-[#0879d1]' : 'text-[#26364b]'
                } `}
              >
                {home}
              </Link>

              {/* Mobile Technology */}
              <Link
                href={`/${lang}/ai`}
                onClick={handleNavClick}
                className={`text-lg font-semibold ${
                  activeLink === 'Technology'
                    ? 'text-[#0879d1]'
                    : 'text-[#26364b]'
                } `}
              >
                {ourTechnology?.section}
              </Link>

              {/* Mobile About */}
              <div className="flex flex-col gap-3">
                <div
                  className={`text-lg font-semibold ${
                    activeLink === 'About Us'
                      ? 'text-[#0879d1]'
                      : 'text-[#26364b]'
                  } `}
                >
                  {aboutUs?.section}
                </div>

                <div className="ml-4 flex flex-col gap-3">
                  <Link
                    href={`/${lang}/story`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {aboutUs?.section}
                  </Link>

                  <Link
                    href={`/${lang}/advisors`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {aboutUs?.advisors}
                  </Link>

                  <Link
                    href={`/${lang}/amils-story`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {aboutUs?.ourFounder}
                  </Link>

                  <Link
                    href={`/${lang}/supporters`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {aboutUs?.ourSupporters}
                  </Link>

                  <Link
                    href={`/${lang}/one-young-world`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {aboutUs?.oneYoungWorld}
                  </Link>
                </div>
              </div>

              {/* Mobile Media */}
              <div className="flex flex-col gap-3">
                <div
                  className={`text-lg font-semibold ${
                    activeLink === 'Media' ? 'text-[#0879d1]' : 'text-[#26364b]'
                  } `}
                >
                  {media.section}
                </div>

                <div className="ml-4 flex flex-col gap-3">
                  <Link
                    href={`/${lang}/publications`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {media.ourResearch}
                  </Link>

                  <Link
                    href={`/${lang}/news`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {media.pressReleases}
                  </Link>

                  <Link
                    href={`/${lang}/blog`}
                    onClick={handleNavClick}
                    className="text-[#26364b]"
                  >
                    {media.blog}
                  </Link>
                </div>
              </div>

              {/* Mobile FAQ */}
              <Link
                href={`/${lang}/faq`}
                onClick={handleNavClick}
                className={`text-lg font-semibold ${
                  activeLink === 'FAQ' ? 'text-[#0879d1]' : 'text-[#26364b]'
                } `}
              >
                {faq}
              </Link>

              {/* Mobile Join */}
              <Link
                href={`/${lang}/join-us`}
                onClick={handleNavClick}
                className={`text-lg font-semibold ${
                  activeLink === 'Join Us' ? 'text-[#0879d1]' : 'text-[#26364b]'
                } `}
              >
                {joinUs?.buttonText}
              </Link>

              {/* Mobile Donate / Support */}
              <Link
                href={`/${lang}/donate`}
                onClick={handleNavClick}
                className={`text-lg font-semibold ${
                  activeLink === 'Donate' ? 'text-[#0879d1]' : 'text-[#26364b]'
                } `}
              >
                {donate?.buttonText}
              </Link>

              {/* Mobile search */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder={searchPlaceholder}
                      value={query}
                      disabled={!isReady}
                      onChange={(event) => {
                        const value = event.target.value;

                        setQuery(value);

                        if (value.trim() === '') {
                          clearResults();
                          setHasSearched(false);
                        } else {
                          debouncedSearch(value);
                        }
                      }}
                      className="h-[44px] w-full rounded-full border border-[#4fa8d8] bg-white px-4 text-sm outline-none focus:border-[#0879d1]"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (query.trim()) {
                        performSearch(query);
                        setHasSearched(true);
                      }
                    }}
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#0879d1] bg-white text-[#26364b]"
                    aria-label="Search"
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>

              {/* Mobile locale */}
              <div className="mt-2 flex justify-start">
                <div className="rounded-full bg-gradient-to-b from-[#2a9d8f] to-[#0e72c9] p-[1px]">
                  <div className="flex h-[42px] items-center rounded-full border border-[#0879d1] bg-white pl-4 pr-2 text-sm font-semibold text-[#26364b]">
                    <LocaleSelect
                      lang={lang}
                      onDropdownChange={(open) => setLocaleOpen(open)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
