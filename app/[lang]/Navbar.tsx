'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  HamburgerMenuIcon,
  WhiteCloseMenuIcon,
  WhiteHamburgerMenuIcon,
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

  const [navbar, setNavbar] = useState(false); // Mobile navbar
  const [showModal, setShowModal] = useState(false); // Donate modal
  const [activeLink, setActiveLink] = useState('');

  const currPathname = usePathname();
  const { results, performSearch, clearResults, isReady } = useSearch(lang);
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const router = useRouter();
  const isRedirecting = useRef(false);

  const isHomePage = currPathname === `/${lang}/`;
  const [showSearch, setShowSearch] = useState(false);
  const handleNavClick = () => setNavbar(false);

  // Mobile search bar color configuration
  // Applies search bar color based on the current page
  const colors = {
    darkBlue: { bg: 'bg-[#11294f]', text: 'text-[#bdc1ca]', placeholder: 'placeholder-[#bdc1ca]', searchHover: 'hover:bg-[#0e2342]', searchTitle: '' },
    blue: { bg: 'bg-[#1e3c70]', text: 'text-[#bcc9d1]', placeholder: 'placeholder-[#bcc9d1]', searchHover: 'hover:bg-[#19345a]', searchTitle: ''},
    lightBlue: { bg: 'bg-[#276097]', text: 'text-[#c2cfdf]', placeholder: 'placeholder-[#c2cfdf]', searchHover: 'hover:bg-[#1f4c7f]', searchTitle: '' },
    white: { bg: 'bg-white', text: 'text-[#404040]', placeholder: 'placeholder-[#404040]', searchHover: 'hover:bg-[#f0f0f0]', searchTitle: 'text-black' },
    black: { bg: 'bg-black', text: 'text-[#b7b7b7]', placeholder: 'placeholder-[#b7b7b7]', searchHover: 'hover:bg-[#1a1a1a]', searchTitle: '' },
  };
  const pageToColor: Record<string, keyof typeof colors> = {
    '': 'darkBlue',
    'ai/': 'darkBlue',
    'story/': 'white',
    'advisors/': 'lightBlue',
    'supporters/': 'darkBlue',
    'one-young-world/': 'blue',
    'amils-story/': 'blue',
    'news/': 'darkBlue',
    'publications/': 'darkBlue',
    'faq/': 'blue',
    'join-us/': 'blue',
  };
  const pageColorKey = pageToColor[currPathname.slice(4)] || 'black';
  const pageColor = colors[pageColorKey];

  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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

  // Handles navbar and search bar visibility based on screen size and page navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setShowSearch(false);
        if (window.innerWidth >= SCREEN_SIZE) {
          setNavbar(false);
          setShowSearch(true);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [currPathname]);

  // Prevents scrolling main page on mobile if hamburger menu is open
  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = 'hidden'; // prevent scrolling
    } else {
      document.body.style.overflow = ''; // enable scrolling
    }
  }, [navbar]);

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
        if (window.innerWidth < SCREEN_SIZE) {
          setShowSearch(false);
        }
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
      className={`relative ${width} h-[30px] ${extraClass} search-input-container ${showSearch ? 'z-20' : ''}`}
    >
      {showSearch && (<input
        ref={inputRef}
        type="text"
        placeholder={searchPlaceholder}
        value={query}
        disabled={!isReady}
        autoFocus
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
        className={
          `h-full w-full z-10 focus:outline-none rounded-full p-5 border border-gray
          ${navbar ? `${colors['black'].bg} ${colors['black'].text} ${colors['black'].placeholder}` : `${pageColor.bg} ${pageColor.text} ${pageColor.placeholder}`}
          lg:p-0 lg:border-0 lg:border-b lg:border-black lg:rounded-none lg:bg-transparent lg:text-black lg:placeholder-black`
        }
      />)}
      {showSearch && query && (
        <div
          onClick={() => {
            setQuery('');
            clearResults();
            setHasSearched(false);
          }}
          className={`absolute -translate-y-1/2 cursor-pointer right-11 lg:right-7 top-5 lg:top-1/2`}
        >
          {/* SVG for "×" (close) button inside search bar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${navbar ? `${colors['black'].text}` : `${pageColor.text}`} lg:text-black`}
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
          className={`pointer-events-none h-[22px] w-[22px] lg:text-black ${navbar ? `${colors['black'].text}` : `${pageColor.text}`}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="6"  strokeWidth="2" />
          <line
            x1="14"
            y1="14"
            x2="20"
            y2="20"
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
    (hasSearched && showSearch) && (
      <ul
        ref={dropdownRef}
        className={`absolute left-1/2 top-[58px] z-50 max-h-96 w-[86vw] lg:w-[70vw] -translate-x-1/2 overflow-y-auto border border-gray lg:border-0 rounded-md ${navbar ? `${colors['black'].bg}` : `${pageColor.bg}`} lg:bg-white lg:bg-opacity-85 p-4 shadow-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        {results.filter((r) => r.url).length > 0 ? (
          results
            .filter((r) => r.url)
            .map((r) => (
              <li
                key={`${r.id}-${r.url}`}
                className={`cursor-pointer border-b px-4 py-2 last:border-b-0 ${navbar ? `${colors['black'].searchHover}` : `${pageColor.searchHover}`} lg:hover:bg-gray-100`}
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
                <div className={`font-semibold ${pageColor.searchTitle} lg:text-black`}>{r.title}</div>
                <div className={`mt-1 line-clamp-2 text-sm ${pageColor.text} lg:text-gray-700`}>
                  {r.content}
                </div>
              </li>
            ))
        ) : (
          <li className={`py-4 text-center ${pageColor.text} lg:text-gray-500`}>
            {noResultsPlaceholder}
          </li>
        )}
      </ul>
    );

  return (
    <div className={`w-full bg-transparent absolute ${navbar ? '' : 'p-2'} lg:p-0`}>
      <nav className={`sticky z-[100] w-full bg-opacity-80 rounded-full ${pageColor.bg} h-[50px] lg:bg-transparent`}>
        {/* donate modal */}
        {showModal ? (
          <div onClick={() => setShowModal(false)}>
            <DonateModal close={closeModal} title={donate.optionsTitle} />
          </div>
        ) : null}

        {/* Navbar container */}
        <div
          className={`lg:max-w-8lg justify-between ${navbar ? 'bg-black' : ''} lg:bg-transparent px-3 lg:mx-4 lg:flex lg:items-center lg:bg-transparent lg:px-2 xl:mx-9${navbar ? 'flex h-screen' : ''}`}
        >
          <div className="flex items-center justify-between lg:block lg:py-5">
            
            {/* Mobile Virufy Logo */}
            <Link
              href={`/${lang}`}
              onClick={handleNavClick}
              className={`absolute right-3 flex rounded-full bg-opacity-80 px-3 py-2 text-black lg:hidden z-10 mt-3 ${navbar ? 'mt-5 right-5' : ''}`}
            >
              {(!isHomePage || navbar) && (
                <ExportedImage
                  className="h-[48px] w-[100px]"
                  src={VirufyLogo}
                  alt="Virufy logo"
                  basePath={basePath}
                />
              )}
            </Link>

            {/* Desktop Virufy Logo */}
            <Link
              href={`/${lang}`}
              className="lg-space-x-6 hidden lg:flex lg:rounded-full lg:bg-white lg:bg-opacity-80 lg:p-2"
            >
              <ExportedImage
                className="h-[48px] w-[160px]"
                src={VirufyLogo}
                alt="Virufy logo"
                basePath={basePath}
              />
            </Link>

            {/* Mobile Donate Button, only appears on mobile homepage */}
            {isHomePage && !navbar && (
              <button
                onClick={() => setShowModal(true)}
                className={`absolute right-6 h-[26px] w-[100px] z-20 lg:hidden md:h-[42px] md:w-[125px] md:bg-opacity-80 lg:h-[68px] lg:w-[180px] ${ButtonType.primary} 
                ${navbar ? 'h-[42px] w-[125px] text-base font-semibold' : 'h-[30px] w-[125px] rounded-full text-base font-semibold mt-1'}`}
              >
                <Link href="#">{donate.buttonText}</Link>
              </button>
            )}

            {/* Mobile Search Bar */}
            <div className={`-mt-1 px-12 py-2 lg:hidden`}>
              <div className={`${navbar ? 'w-[90vw] mt-2' : 'w-[86vw]'} md:w-[250px]`}>
                {renderSearchInput('w-full -ml-9 md:ml-1')}
                {renderSearchDropdown()}
              </div>
            </div>

            {/* Hamburger Menu Toggle (mobile) */}
            <div className={`lg:hidden absolute left-3 ${navbar ? 'top-4 left-5' : 'top-2'}`}>
              <button
                className="rounded-lg p-2 text-gray-700 outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ExportedImage
                    className="h-[18px] w-[30px]"
                    src={WhiteCloseMenuIcon}
                    alt="close menu icon"
                    basePath={basePath}
                  />
                ) : (
                  <ExportedImage
                    className="h-[18px] w-[30px]"
                    src={pageColorKey !== 'white' ? WhiteHamburgerMenuIcon : HamburgerMenuIcon}
                    alt="hamburger menu icon"
                    basePath={basePath}
                  />
                )}
              </button>
            </div>
          </div>
          {/* Dropdown (mobile) and Desktop Nav Links */}
          <div className="">
            <div
              className={`${
                navbar
                  ? 'fixed top-20 bottom-0 right-0 left-0 bg-black overflow-y-auto'
                  : 'relative flex-1 justify-self-start pb-3 lg:mt-0 lg:block lg:pb-0 hidden'
              }`}
            >
              {/* desktop navbar links */}
              <ul
                className={`items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 xl:space-x-9 ${
                  navbar
                    ? 'flex-column w-full pb-5 pl-5 text-left text-[24px] md:text-[36px]'
                    : 'hidden'
                }`}
              >
                <div
                  className={`
                    lg:items-center justify-center space-y-8 lg:rounded-full bg-black lg:bg-white lg:bg-opacity-80 p-2 lg:flex lg:space-x-6 lg:space-y-0 lg:px-10 xl:space-x-9 
                    ${navbar ? '' : 'hidden'}                  
                    `}
                >
                  {/* Home */}
                  <li className={`${navbar ? 'text-white' : 'text-black'}`}>
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'Home'
                            ? 'solid border-b-2 py-2'
                            : `relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${navbar? '' : 'md:text-sm lg:text-lg'}`
                        }`}
                        href={`/${lang}`}
                        onClick={handleNavClick}
                      >
                        {home}
                      </Link>
                    </div>
                  </li>
                  {/* Technology */}
                  <li className={`${navbar ? 'text-white' : 'text-black'}`}>
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'Technology'
                            ? 'solid peer border-b-2 py-2'
                            : `peer relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${navbar? '' : 'md:text-sm lg:text-lg'}`
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

                  {/* About Us */}
                  <li className={`${navbar ? 'text-white' : 'text-black'}`}>
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'About Us'
                            ? 'solid peer border-b-2 py-2'
                            : `peer relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${navbar? '' : 'md:text-sm lg:text-lg'}`
                        } whitespace-nowrap`}
                        href={`/${lang}/story`}
                        onClick={handleNavClick}
                      >
                        {aboutUs?.section}
                      </Link>
                      
                      {/* Dropdown for About Us */}
                      <div
                        className={`absolute w-[200px] flex-col rounded-xl lg:bg-white/50 lg:drop-shadow-lg ${
                          navbar
                            ? 'relative z-10 flex transform sm:bg-white sm:bg-opacity-0 text-left text-[18px] md:text-[21px] font-light'
                            : 'ml-[-60px] text-center hidden'
                        } hover:flex peer-hover:flex`}
                      >
                        {/* Advisors */}
                        <Link
                          className="pb-1 pt-3 lg:pb-3 lg:pt-6 hover:font-bold"
                          href={`/${lang}/advisors`}
                          onClick={handleNavClick}
                        >
                          {aboutUs?.advisors}
                        </Link>

                        {/* Our Supporters */}
                        <Link
                          className="py-1 lg:py-3 hover:font-bold"
                          href={`/${lang}/supporters`}
                          onClick={handleNavClick}
                        >
                          {aboutUs?.ourSupporters}
                        </Link>

                        {/* One Young World */}
                        <Link
                          className="py-1 lg:py-3 hover:font-bold"
                          href={`/${lang}/one-young-world`}
                          onClick={handleNavClick}
                        >
                          {aboutUs?.oneYoungWorld}
                        </Link>
                      </div>
                    </div>
                  </li>

                  {/* Media */}
                  <li className={`${navbar ? 'text-white' : 'text-black'}`}>
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'Media'
                            ? 'solid peer border-b-2 py-2'
                            : `peer relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${navbar? '' : 'md:text-sm lg:text-lg'}`
                        } `}
                        href={`/${lang}/news`}
                        onClick={handleNavClick}
                      >
                        {media?.section}
                      </Link>

                      {/* Dropdown for Media */}
                      <div
                        className={`absolute w-[200px] flex-col rounded-xl lg:bg-white/50 lg:drop-shadow-lg ${
                          navbar
                            ? 'relative z-10 flex transform sm:bg-opacity-0 text-left text-[18px] md:text-[21px] font-light'
                            : 'ml-[-75px] text-center hidden'
                        } hover:flex peer-hover:flex`}
                      >
                        {/* News */}
                        <Link
                          className="pt-3 pb-1 lg:pb-3 lg:pt-6 hover:font-bold"
                          href={`/${lang}/news`}
                          onClick={handleNavClick}
                        >
                          {media?.pressReleases}
                        </Link>

                        {/* Publications */}
                        <Link
                          className="py-1 lg:py-3 hover:font-bold"
                          href={`/${lang}/publications`}
                          onClick={handleNavClick}
                        >
                          {media?.ourResearch}
                        </Link>
                      </div>
                    </div>
                  </li>

                  {/* FAQ */}
                  <li className={`${navbar ? 'text-white' : 'text-black'}`}>
                    <div>
                      <Link
                        className={`${navbar ? 'font-bold' : 'text-[18px] font-semibold'} ${
                          activeLink === 'FAQ'
                            ? 'solid peer border-b-2 py-2'
                            : `peer relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${navbar? '' : 'md:text-sm lg:text-lg'}`
                        }`}
                        href={`/${lang}/faq`}
                        onClick={handleNavClick}
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
                  
                  {/* Language Selector */}
                  <li className={`${navbar ? '-ml-3 relative top-[-24px]' : ''}`}>
                    <LocaleSelect isNavbar={navbar}/>
                  </li>
                </div>

                {/* Join Us and Donate Buttons */}
                <div className={`lg:flex ${navbar ? 'text-white pt-14 flex flex-row justify-center items-center gap-x-8 md:gap-x-20' : 'text-black'}`}>
                  {/* Join Us */}
                  <li className={`text-[#393939] lg:mx-5 ${navbar ? 'pb-10' : ''}`}>
                    <Link href={`/${lang}/join-us`} onClick={handleNavClick}>
                      <button
                        className={`md:bg-opacity-80 lg:h-[68px] lg:w-[180px] ${ButtonType.primary} ${navbar ? 'h-[42px] w-[125px] md:h-[60px] md:w-[180px] md:text-xl border border-solid text-base font-semibold' : 'h-[42px] w-[125px] rounded-full text-base font-semibold'}`}
                      >
                        {joinUs ? joinUs.buttonText : ''}
                      </button>
                    </Link>
                  </li>
                  
                  {/* Donate */}
                  <li className={`text-[#393939] ${navbar ? 'flex-column pb-10' : ''}`}>
                    <button
                      onClick={() => setShowModal(true)}
                      className={`md:h-[42px] md:w-[125px] md:bg-opacity-80 lg:h-[68px] lg:w-[180px] ${ButtonType.primary} ${navbar ? 'h-[42px] w-[125px] md:h-[60px] md:w-[180px] md:text-xl text-base font-semibold' : 'h-[42px] w-[125px] rounded-full text-base font-semibold'}`}
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
