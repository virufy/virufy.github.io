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
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usei18n } from '../i18n';
import LocaleSelect from './components/LocaleSelect';
import DonateModal from './components/navbar/DonateModal';
import { ButtonType } from './themes';



export default function Navbar({ lang }: { lang: Locale }) {
  const {
    navbar: { home, ourTechnology, aboutUs, media, faq, donate, joinUs }, // re add coughcheck here when needed
  } = usei18n(lang);

  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const currPathname = usePathname();

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

  const SCREEN_SIZE = 1150;

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

  const closeModal = () => setShowModal(false);

  return (
    <div className="bg-[#000]">
      <nav
        className={`sticky z-[100] w-full ${
          navbar ? 'bg-black' : 'bg-transparent'
        }`}
      >
        {/* donate modal */}
        {showModal ? (
          <div onClick={() => setShowModal(false)}>
            <DonateModal close={closeModal} title={donate.optionsTitle} />
          </div>
        ) : null}

        <div className="lg:max-w-8lg justify-between px-3 lg:mx-4 lg:flex lg:items-center lg:px-2 xl:mx-9">
          <div className="flex items-center justify-between py-3 lg:block lg:py-5">
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
            <div className="lg:hidden flex items-center justify-center w-full py-2">
                 <div className="relative w-[204px] h-[34px]" >
                     <input
                           type="text"
                           placeholder="Search..."
                           className="w-full h-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#717171] font-[Nunito Sans]"

                     />
                     { /* Inner Rectangle for Search Icon */ }
                     <div
                          className="absolute flex items-center justify-center right-0 top-0 h-full"
                          style={{
                               width: '34px',
                               height: '34px',
                               borderTopRightRadius: '100px',
                               borderBottomRightRadius: '100px',
                               background: 'linear-gradient(90deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)',
                               border: '1px solid black',
                          }}
                      >
                             <svg
                                 className="w-[22px] h-[22px] text-gray-900"
                        
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="10" cy="10" r="6" stroke="black" strokeWidth="2" />
                                 <line x1="14" y1="14" x2="20" y2="20" stroke="black" strokeWidth="2" />
                         
                             </svg>
                     </div>
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
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
                navbar
                  ? 'absolute left-0 top-6 block w-full bg-black text-center'
                  : 'hidden'
              }`}
            >
              {/* desktop navbar links */}
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 xl:space-x-9">
                <li className="text-white">
                  <div>
                    <Link
                        className={`${navbar ? 'font-bold' : 'text-[16px] font-bold'} ${
                        activeLink === 'Home'
                          ? 'solid border-b-2 py-2'
                          : 'relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      }`}
                      href={`/${lang}`}
                    >
                      {home}
                    </Link>
                  </div>
                </li>
                {/* technology link */}
                <li className="text-white">
                  <div>
                    <Link
                        className={`${navbar ? 'font-bold' : 'text-[16px] font-bold'} ${
                        activeLink === 'Technology'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
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
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
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
                        className={`${navbar ? 'font-bold' : 'text-[16px] font-bold'} ${
                        activeLink === 'About Us'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      } whitespace-nowrap`}
                      href={`/${lang}/story`}
                    >
                      {aboutUs?.section}
                    </Link>

                    <div
                      className={`absolute w-[200px] flex-col text-center drop-shadow-lg ${
                        navbar
                          ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform bg-black'
                          : 'ml-[-60px] hidden'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="pb-3 pt-6 text-white hover:font-bold"
                        href={`/${lang}/advisors`}
                      >
                        {aboutUs?.advisors}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
                        href={`/${lang}/supporters`}
                      >
                        {aboutUs?.ourSupporters}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
                        href={`/${lang}/one-young-world`}
                      >
                        {aboutUs?.oneYoungWorld}
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Media link */}
                <li className="text-white">
                  <div>
                    <Link
                        className={`${navbar ? 'font-bold' : 'text-[16px] font-bold'} ${
                        activeLink === 'Media'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      } `}
                      href={`/${lang}/news`}
                    >
                      {media?.section}
                    </Link>
                    <div
                      className={`absolute w-[200px] flex-col text-center drop-shadow-lg ${
                        navbar
                          ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform bg-black'
                          : 'ml-[-75px] hidden'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="pb-3 pt-6 text-white hover:font-bold"
                        href={`/${lang}/news`}
                      >
                        {media?.pressReleases}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
                        href={`/${lang}/publications`}
                      >
                        {media?.ourResearch}
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="text-white">
                  <div>
                    <Link
                        className={`${navbar ? 'font-bold' : 'text-[16px] font-bold'} ${
                        activeLink === 'FAQ'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      }`}
                      href={`/${lang}/faq`}
                    >
                      {faq}
                    </Link>
                  </div>
                </li>
                { /* Search bar for Desktop*/}
                <li className="hidden lg:flex items-center justify-center w-full py-2">
                    <div className="relative w-[204px] h-[34px]">
                        <input
                           type="text"
                           placeholder="Search..."
                           className="w-full h-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#717171] font-[Nunito Sans]"
                        />
                        {/* Inner Rectangle for Search Icon */}
                         <div
                             className="absolute flex items-center justify-center right-0 top-0 h-full"
                             style={{
                                 width: '34px',
                                 height: '34px',
                                 borderTopRightRadius: '100px',
                                 borderBottomRightRadius: '100px',
                                 background: 'linear-gradient(90deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)',
                                 border: '1px solid black',
                             }}
                             >
                             <svg
                                 className="w-[22px] h-[22px] text-gray-900"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                                 >
                                 <circle cx="10" cy="10" r="6" stroke="black" strokeWidth="2" />
                                 <line x1="14" y1="14" x2="20" y2="20" stroke="black" strokeWidth="2" />
                             </svg>
                         </div>
                    </div>
                </li>

                <li>
                  <LocaleSelect />
                </li>
                <li className={`text-[#393939] ${navbar ? 'pb-20' : ''}`}>
                  <Link href={`/${lang}/join-us`}>
                    <button
                      className={`${ButtonType.primary} ${navbar ? 'h-[42px] w-[125px] rounded-full text-base font-semibold' : 'h-[42px] w-[125px] rounded-full text-base font-semibold'}`}
                    >
                      {joinUs ? joinUs.buttonText : ''}
                    </button>
                  </Link>
                </li>

                <li className={`text-[#393939] ${navbar ? 'pb-20' : ''}`}>
                  <button
                    onClick={() => setShowModal(true)}
                    className={`${ButtonType.primary} ${navbar ? 'h-[42px] w-[125px] rounded-full text-base font-semibold' : 'h-[42px] w-[125px] rounded-full text-base font-semibold'}`}
                  >
                    <Link href="#">{donate.buttonText}</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
