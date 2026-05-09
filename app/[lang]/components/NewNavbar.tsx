'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useMemo } from 'react';
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
    }, // re add coughcheck here when needed
  } = usei18n(lang);
  /** State variables */
  const [localeOpen, setLocaleOpen] = useState(false);

  const [navbar, setNavbar] = useState(false); // Mobile navbar open/close
  const [showSearch, setShowSearch] = useState(false); // Mobile search bar visibility
  const [activeLink, setActiveLink] = useState(''); // Current active navbar link
  const [query, setQuery] = useState(''); // Search query text
  const [hasSearched, setHasSearched] = useState(false);

  /** Hooks */
  const currPathname = usePathname();
  const router = useRouter();
  const isRedirecting = useRef(false);
  const { results, performSearch, clearResults, isReady } = useSearch(lang);

  /** Refs */
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /** Constants */
  const SCREEN_SIZE = 1265;
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
          `/${lang}/story`,
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
  }, [currPathname, lang]);
  // Close mobile navbar on route change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNavbar(false);
    }
  }, [currPathname]);

  // Handle resize events (search bar and navbar)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        // always close search when resizing; desktop will remain closed until user clicks
        setShowSearch(false);
        if (window.innerWidth >= SCREEN_SIZE) {
          setNavbar(false);
          // do not automatically open search on wide screen
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [currPathname]);

  // Prevent body scroll when mobile navbar is open
  useEffect(() => {
    document.body.style.overflow = navbar ? 'hidden' : '';
  }, [navbar]);

  // Collapse dropdown and search bar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isRedirecting.current) {
        return;
      }
      const target = event.target as HTMLElement;
      if (
        (dropdownRef.current &&
          !dropdownRef.current.contains(target) &&
          !target.closest('.search-input-container')) ||
        (inputRef.current &&
          !inputRef.current.contains(target) &&
          !target.closest('.search-input-container'))
      ) {
        clearResults();
        setHasSearched(false);
        // always collapse search when clicking outside
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clearResults]);

  // focus the input when the search bar opens
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  /** Helpers */
  const handleNavClick = () => setNavbar(false);

  /** Debounce search */
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

  /** Search rendering */
  {
    /* Renders the search input field with search and clear icons */
  }
  const renderSearchInput = (width: string, extraClass = '') => (
    <div
      className={`relative ${width} h-[30px] ${extraClass} search-input-container ${showSearch ? 'z-20' : ''}`}
    >
      {showSearch && (
        <input
          ref={inputRef}
          type="text"
          placeholder={searchPlaceholder}
          value={query}
          disabled={!isReady}
          autoFocus={window.innerWidth < SCREEN_SIZE || showSearch}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            if (value.trim() === '') {
              clearResults();
              setHasSearched(false);
            } else {
              debouncedSearch(value);
            }
          }}
          className={`border-gray lg:placeholder z-10 h-full w-full rounded-full border p-5 focus:outline-none lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:p-0`}
        />
      )}
      {showSearch && query && (
        <div
          onClick={() => {
            setQuery('');
            clearResults();
            setHasSearched(false);
          }}
          className={`absolute right-11 top-5 -translate-y-1/2 cursor-pointer lg:right-7 lg:top-1/2`}
        >
          {/* SVG for "×" (close) button inside search bar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      )}
      <div
        className={`absolute top-2.5 flex h-full lg:right-0 lg:top-1 ${showSearch ? 'right-4 top-2.5' : `left-9 md:-left-1 ${navbar ? 'left-[2.75rem] md:left-1' : ''}`}`}
        onClick={() => {
          if (window.innerWidth < SCREEN_SIZE) {
            setShowSearch((prev) => !prev);
          }
        }}
      >
        {/* SVG for search icon inside search bar */}
        <svg
          className={`pointer-events-none h-[22px] w-[22px]`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="6" strokeWidth="2" />
          <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );

  /* Displays search results in a dropdown; clicking a result navigates to its URL */
  const renderSearchDropdown = () =>
    hasSearched &&
    showSearch && (
      <ul
        ref={dropdownRef}
        className={`border-gray absolute right-0 top-full z-50 mt-2 max-h-96 w-[400px] max-w-[90vw] overflow-y-auto rounded-md border p-4 shadow-lg lg:border lg:bg-white lg:bg-opacity-95`}
        onClick={(e) => e.stopPropagation()}
      >
        {results.filter((r) => r.url).length > 0 ? (
          results
            .filter((r) => r.url)
            .map((r) => (
              <li
                key={`${r.id}-${r.url}`}
                className={`cursor-pointer border-b px-4 py-2 last:border-b-0 lg:hover:bg-gray-100`}
                onMouseDown={() => {
                  isRedirecting.current = true;
                }}
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
                <div className={`font-semibold lg:text-black`}>{r.title}</div>
                <div className={`mt-1 line-clamp-2 text-sm lg:text-gray-700`}>
                  {r.content}
                </div>
              </li>
            ))
        ) : (
          <li className={`py-4 text-center lg:text-gray-500`}>
            {noResultsPlaceholder}
          </li>
        )}
      </ul>
    );

  return (
    <div className="w-full lg:p-0">
      <nav className="fixed top-0 z-[100] h-[50px] w-full rounded-full">
        {/* Navbar container */}
        <div
          className={`mx-auto flex items-center justify-between bg-gradient-to-r from-[#D7E2EB]/60 via-[#F2F4F8]/60 to-[#D7E2EB]/60 px-2 px-3`}
        >
          <div
            className={`flex items-center justify-between py-5 ${showSearch ? 'h-[108px]' : ''}`}
          >
            {/* Desktop Virufy Logo */}
            <Link href={`/${lang}`} className={`lg-space-x-6 flex p-2`}>
              <ExportedImage
                className={`h-[48px] w-[160px] ${showSearch ? ' ' : ''}`}
                src={VirufyLogo}
                alt="Virufy logo"
                basePath={basePath}
              />
            </Link>
          </div>
          {/* Dropdown (mobile) and Desktop Nav Links */}
          <div className="flex w-full items-center justify-between lg:flex">
            <div
              className={`relative mt-0 flex flex-1 items-center justify-center justify-self-start pb-0 pb-3 transition-all duration-300 ease-out ${showSearch ? 'max-w-[calc(100%-200px)]' : 'max-w-full'} `}
            >
              {/* desktop navbar links */}
              <ul
                className={`flex w-full flex-1 items-center justify-center space-x-6 space-x-9 space-y-0 space-y-8`}
              >
                <div
                  className={`mx-auto flex w-full flex-row justify-center space-y-8 bg-transparent lg:items-center lg:space-x-6 lg:space-y-0 lg:rounded-full xl:space-x-9`}
                >
                  <div
                    className={`mx-auto flex w-full items-center justify-center space-x-6 space-y-0 lg:rounded-full lg:bg-transparent xl:space-x-9`}
                    style={{
                      transform: showSearch
                        ? 'lg:translateX(77px)' // shift right when search is open (adjust 90px to your search bar width/spacing)
                        : 'translateX(0)',
                    }}
                  >
                    {/* Home */}
                    <li>
                      <div>
                        <Link
                          className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                            activeLink === 'Home'
                              ? 'text-blue-600'
                              : `relative py-2 text-black hover:text-blue-600`
                          } `}
                          href={`/${lang}`}
                          onClick={handleNavClick}
                        >
                          {home}
                        </Link>
                      </div>
                    </li>
                    {/* Technology */}
                    <li>
                      <div>
                        <Link
                          className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                            activeLink === 'Technology'
                              ? 'text-blue-600'
                              : `relative py-2 text-black hover:text-blue-600`
                          }`}
                          href={`/${lang}/ai`}
                          onClick={handleNavClick}
                        >
                          {ourTechnology?.section}
                        </Link>

                        <div
                          className={`absolute w-[200px] flex-col text-center drop-shadow-lg ${
                            navbar
                              ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform bg-black'
                              : 'ml-[-60px] hidden'
                          } hover:flex peer-hover:flex`}
                        ></div>
                      </div>
                    </li>

                    {/* About Us */}
                    <li>
                      <div>
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
                      </div>
                    </li>

                    {/* Media */}
                    <li>
                      <div>
                        <NavbarDropdown
                          label={media.section}
                          links={[
                            {
                              label: media.ourResearch,
                              href: `/${lang}/news`,
                              subtext: media.presssubtext,
                            },
                            {
                              label: media.pressReleases,
                              href: `/${lang}/publications`,
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
                      </div>
                    </li>

                    {/* Join Us */}
                    <li>
                      <div>
                        <Link
                          className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                            activeLink === 'Join Us'
                              ? 'solid peer border-b-2 py-2 text-blue-600'
                              : `relative py-2 text-black hover:text-blue-600`
                          }`}
                          href={`/${lang}/join-us`}
                          onClick={handleNavClick}
                        >
                          {joinUs ? joinUs.buttonText : ''}
                        </Link>
                      </div>
                    </li>
                    {/* Donate */}
                    <li>
                      <div>
                        <Link
                          className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                            activeLink === 'Donate'
                              ? 'peer border-b-2 py-2 text-blue-600'
                              : `relative py-2 text-black hover:text-blue-600`
                          }`}
                          href={`/${lang}/donate`}
                          onClick={handleNavClick}
                        >
                          {donate ? donate.buttonText : ''}
                        </Link>
                      </div>
                    </li>

                    {/* FAQ */}
                    <li>
                      <div>
                        <Link
                          className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                            activeLink === 'FAQ'
                              ? 'solid peer border-b-2 py-2 text-blue-600'
                              : `relative py-2 text-black hover:text-blue-600`
                          }`}
                          href={`/${lang}/faq`}
                          onClick={handleNavClick}
                        >
                          {faq}
                        </Link>
                      </div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="flex justify-end">
              {/* Search and Locale */}
              <div
                className={`lg:ml-auto lg:flex ${navbar ? 'flex flex-row items-center justify-center gap-x-8 pt-14 text-white md:gap-x-20' : 'pl-10 text-black'}`}
              >
                <ul className="mx-2 flex items-center gap-x-4">
                  {/* Search bar for Desktop*/}
                  <li className="flex items-center justify-center py-2 lg:ml-[100px]">
                    <div
                      className={`relative flex justify-center ${showSearch ? 'w-[175px]' : 'w-auto'}`}
                    >
                      {showSearch ? (
                        <>
                          {renderSearchInput('w-full')}
                          {renderSearchDropdown()}
                        </>
                      ) : (
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            setShowSearch((prev) => {
                              const next = !prev;
                              if (!next) {
                                clearResults();
                                setHasSearched(false);
                              }
                              return next;
                            });
                          }}
                        >
                          {/* magnifying glass icon */}
                          <svg
                            className={`h-[22px] w-[22px]`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="6" strokeWidth="2" />
                            <line
                              x1="14"
                              y1="14"
                              x2="20"
                              y2="20"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </li>
                  <div className="rounded-full bg-gradient-to-b from-[#2A9D8F] to-[#0E72C9] p-[1px]">
                    {/* Language Selector */}
                    <li
                      className={`rounded-full border border-2 border-sky-800 pl-4 text-sm font-semibold text-black ${localeOpen ? 'bg-white' : 'bg-white bg-opacity-80'}`}
                    >
                      <LocaleSelect
                        lang={lang}
                        onDropdownChange={(open) => setLocaleOpen(open)}
                      />
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
