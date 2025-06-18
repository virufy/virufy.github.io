'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  CloseMenuIcon,
  HamburgerMenuIcon,
  VirufyLogo,
} from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useMemo } from 'react';
import { usei18n } from '../i18n';
import LocaleSelect from './components/LocaleSelect';
import DonateModal from './components/navbar/DonateModal';
import { ButtonType } from './themes';
import useSearch from '@/utils/useSearch';
import debounce from 'lodash.debounce';

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

  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const currPathname = usePathname();
  const { results, performSearch, clearResults, isReady } = useSearch(lang);
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const router = useRouter();
  const isRedirecting = useRef(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const DEBOUNCE_DELAY = 400;

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

    links.forEach((link) => {
      if (link.route.some((r) => r === currPathname)) {
        setActiveLink(link.label);
      }
    });
  }, [currPathname, lang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNavbar(false);
    }
  }, [currPathname]);

  const SCREEN_SIZE = 1265;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth >= SCREEN_SIZE) {
          setNavbar(false);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        if (isReady) {
          performSearch(value);
          setHasSearched(true);
        }
      }, DEBOUNCE_DELAY),
    [isReady]
  );

  // Collapse dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isRedirecting.current) {
        return;
      }
      const target = event.target as HTMLElement;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !target.closest('.search-input-container')
      ) {
        clearResults();
        setHasSearched(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeModal = () => setShowModal(false);

  {
    /* Renders the search input field with search and clear icons */
  }
  const renderSearchInput = (width: string, extraClass = '') => (
    <div
      className={`relative ${width} h-[30px] ${extraClass} search-input-container`}
    >
      <input
        type="text"
        placeholder={searchPlaceholder}
        value={query}
        disabled={!isReady}
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
        className="h-full w-full border-0 border-b border-black bg-transparent text-black placeholder-black focus:outline-none focus:ring-0"
      />
      {query && (
        <div
          onClick={() => {
            setQuery('');
            clearResults();
            setHasSearched(false);
          }}
          className="absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {/* SVG for "×" (close) button inside search bar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
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
      <div className="absolute right-0 top-0 flex h-full items-center justify-center">
        {/* SVG for search icon inside search bar */}
        <svg
          className="pointer-events-none h-[22px] w-[22px] text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="2" />
          <line
            x1="14"
            y1="14"
            x2="20"
            y2="20"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );

  {
    /* Displays search results in a dropdown; clicking a result navigates to its URL */
  }
  const renderSearchDropdown = () =>
    hasSearched && (
      <ul
        ref={dropdownRef}
        className="absolute left-1/2 top-[42px] z-50 max-h-96 w-[70vw] -translate-x-1/2 overflow-y-auto rounded-md bg-white bg-opacity-85 p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {results.filter((r) => r.url).length > 0 ? (
          results
            .filter((r) => r.url)
            .map((r) => (
              <li
                key={`${r.id}-${r.url}`}
                className="cursor-pointer border-b px-4 py-2 last:border-b-0 hover:bg-gray-100"
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
                <div className="font-semibold text-black">{r.title}</div>
                <div className="mt-1 line-clamp-2 text-sm text-gray-700">
                  {r.content}
                </div>
              </li>
            ))
        ) : (
          <li className="py-4 text-center text-gray-500">
            {noResultsPlaceholder}
          </li>
        )}
      </ul>
    );

  return (
    <div className="bg-transparent">
      <nav className={`sticky z-[100] w-full bg-transparent`}>
        {/* donate modal */}
        {showModal ? (
          <div onClick={() => setShowModal(false)}>
            <DonateModal close={closeModal} title={donate.optionsTitle} />
          </div>
        ) : null}

        <div
          className={`lg:max-w-8lg justify-between px-3 lg:mx-4 lg:flex lg:items-center lg:px-2 xl:mx-9${navbar ? 'flex h-screen' : ''}`}
        >
          <div className="flex items-center justify-between lg:block lg:py-5">
            <Link href={`/${lang}`} className="flex lg:hidden">
              <ExportedImage
                className="h-[48px] w-[100px]"
                src={VirufyLogo}
                alt="Virufy logo"
                basePath={basePath}
              />
            </Link>
            <Link href={`/${lang}`} className="hidden lg:flex">
              <ExportedImage
                className="h-[48px] w-[160px]"
                src={VirufyLogo}
                alt="Virufy logo"
                basePath={basePath}
              />
            </Link>
            {/* Mobile Search Bar */}
            <div className="mt-2 flex items-center justify-start py-2 lg:hidden">
              <div className="relative mb-4 w-[125px]">
                {renderSearchInput('w-full')}
                {renderSearchDropdown()}
              </div>
            </div>

            {/* // hamburger and x button */}
            <div className="lg:hidden">
              <button
                className="rounded-lg p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ExportedImage
                    className="h-[18px] w-[30px]"
                    src={CloseMenuIcon}
                    alt="close menu icon"
                    basePath={basePath}
                  />
                ) : (
                  <ExportedImage
                    className="h-[18px] w-[30px]"
                    src={HamburgerMenuIcon}
                    alt="hamburger menu icon"
                    basePath={basePath}
                  />
                )}
              </button>
            </div>
          </div>
          {/* dropdown for mobile */}
          <div className="">
            <div
              className={`relative flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
                navbar
                  ? 'flex-column h-full overflow-hidden text-center'
                  : 'hidden'
              }`}
            >
              {/* desktop navbar links */}
              <ul
                className={`items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 xl:space-x-9 ${
                  navbar
                    ? 'flex-column w-full bg-white pb-5 text-center'
                    : 'hidden'
                }`}
              >
                <div
                  className={`lg: items-center justify-center space-y-8 rounded-full bg-white bg-opacity-80 p-2 lg:flex lg:space-x-6 lg:space-y-0 lg:px-10 xl:space-x-9 ${
                    navbar ? '' : 'hidden'
                  }`}
                >
                  <li className="text-black">
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'Home'
                            ? 'solid border-b-2 py-2'
                            : 'relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-sm lg:text-lg'
                        }`}
                        href={`/${lang}`}
                      >
                        {home}
                      </Link>
                    </div>
                  </li>
                  {/* technology link */}
                  <li className="text-black">
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'Technology'
                            ? 'solid peer border-b-2 py-2 text-black'
                            : 'peer relative py-2 text-black before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-sm lg:text-lg'
                        }`}
                        href={`/${lang}/ai`}
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
                  {/* coughcheck app link */}
                  {/* <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : ''} ${
                        activeLink === 'CoughCheck App'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-sm lg:text-lg'
                      } `}
                      href={`/${lang}/covid19`}
                    >
                      {coughCheckApp?.section}
                    </Link>
                    <div
                      className={`absolute w-[200px] flex-col text-center drop-shadow-lg ${
                        navbar
                          ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform bg-black'
                          : 'ml-[-35px] hidden'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="px-5 py-2 pt-5 text-[white] hover:font-bold"
                        href={`/${lang}/covid19`}
                      >
                        {coughCheckApp?.covid19}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/flu`}
                      >
                        {coughCheckApp?.flu}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/copd`}
                      >
                        {coughCheckApp?.copd}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/rsv`}
                      >
                        {coughCheckApp?.rsv}
                      </Link>
                    </div>
                  </div>
                  </li> */}

                  {/* about us link */}
                  <li className="text-white">
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'About Us'
                            ? 'solid peer border-b-2 py-2 text-black'
                            : 'peer relative py-2 text-black before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-sm lg:text-lg'
                        } whitespace-nowrap`}
                        href={`/${lang}/story`}
                      >
                        {aboutUs?.section}
                      </Link>

                      <div
                        className={`absolute w-[200px] flex-col rounded-xl bg-white bg-opacity-50 text-center drop-shadow-lg ${
                          navbar
                            ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform sm:bg-white sm:bg-opacity-0'
                            : 'ml-[-60px] hidden'
                        } hover:flex peer-hover:flex`}
                      >
                        <Link
                          className="pb-3 pt-6 text-black hover:font-bold"
                          href={`/${lang}/advisors`}
                        >
                          {aboutUs?.advisors}
                        </Link>
                        <Link
                          className="py-3 text-black hover:font-bold"
                          href={`/${lang}/supporters`}
                        >
                          {aboutUs?.ourSupporters}
                        </Link>
                        <Link
                          className="py-3 text-black hover:font-bold"
                          href={`/${lang}/one-young-world`}
                        >
                          {aboutUs?.oneYoungWorld}
                        </Link>
                      </div>
                    </div>
                  </li>

                  {/* Media link */}
                  <li className="text-black">
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'Media'
                            ? 'solid peer border-b-2 py-2 text-black'
                            : 'peer relative py-2 text-black before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-sm lg:text-lg'
                        } `}
                        href={`/${lang}/news`}
                      >
                        {media?.section}
                      </Link>
                      <div
                        className={`absolute w-[200px] flex-col rounded-xl bg-white bg-opacity-50 text-center drop-shadow-lg ${
                          navbar
                            ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform sm:bg-opacity-0'
                            : 'ml-[-75px] hidden'
                        } hover:flex peer-hover:flex`}
                      >
                        <Link
                          className="pb-3 pt-6 text-black hover:font-bold"
                          href={`/${lang}/news`}
                        >
                          {media?.pressReleases}
                        </Link>
                        <Link
                          className="py-3 text-black hover:font-bold"
                          href={`/${lang}/publications`}
                        >
                          {media?.ourResearch}
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="text-black">
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'FAQ'
                            ? 'solid peer border-b-2 py-2 text-black'
                            : 'peer relative py-2 text-black before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 md:text-sm lg:text-lg'
                        }`}
                        href={`/${lang}/faq`}
                      >
                        {faq}
                      </Link>
                    </div>
                  </li>
                  {/* Search bar for Desktop*/}
                  <li className="hidden items-center justify-center py-2 lg:flex">
                    <div className="relative w-[175px]">
                      {renderSearchInput('w-full')}
                      {renderSearchDropdown()}
                    </div>
                  </li>

                  <li>
                    <LocaleSelect />
                  </li>
                </div>
                <div className="sm:flex-column lg:flex">
                  <li
                    className={`text-[#393939] lg:mx-5 ${navbar ? 'pb-20' : ''}`}
                  >
                    <Link href={`/${lang}/join-us`}>
                      <button
                        className={`md:bg-opacity-80 lg:h-[68px] lg:w-[180px] ${ButtonType.primary} ${navbar ? 'h-[42px] w-[125px] rounded-full text-base font-semibold' : 'h-[42px] w-[125px] rounded-full text-base font-semibold'}`}
                      >
                        {joinUs ? joinUs.buttonText : ''}
                      </button>
                    </Link>
                  </li>

                  <li
                    className={`text-[#393939] ${navbar ? 'flex-columnpb-20' : ''}`}
                  >
                    <button
                      onClick={() => setShowModal(true)}
                      className={`md:h-[42px] md:w-[125px] md:bg-opacity-80 lg:h-[68px] lg:w-[180px] ${ButtonType.primary} ${navbar ? 'h-[42px] w-[125px] rounded-full text-base font-semibold' : 'h-[42px] w-[125px] rounded-full text-base font-semibold'}`}
                    >
                      <Link href="#">{donate.buttonText}</Link>
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
