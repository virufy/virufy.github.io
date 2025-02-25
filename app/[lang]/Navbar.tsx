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
          `/${lang}/story`,
          `/${lang}/advisors`,
          `/${lang}/supporters`,
          `/${lang}/one-young-world`,
          `/${lang}/amils-story`,
        ],
      },
      {
        label: 'Media',
        route: [
          `/${lang}/news`,
          `/${lang}/publications`,
        ],
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

  const SCREEN_SIZE = 976;

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
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-5 lg:space-y-0 xl:space-x-9">
                <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : 'text-xl font-bold'} ${
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
                      className={`${navbar ? 'font-bold' : 'text-xl font-bold'} ${
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
                    >
                      <Link
                        className="px-5 py-2 pt-5 text-[white] hover:font-bold"
                        href={`/${lang}/ai`}
                      >
                        {ourTechnology?.howItWorks}
                      </Link>
                    </div>
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
                      className={`${navbar ? 'font-bold' : 'text-xl font-bold'} ${
                        activeLink === 'About Us'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      } `}
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
                        href={`/${lang}/story`}
                      >
                        {aboutUs?.ourStory}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
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
                      className={`${navbar ? 'font-bold' : 'text-xl font-bold'} ${
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
                      className={`${navbar ? 'font-bold' : 'text-xl font-bold'} ${
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
                <li>
                  <LocaleSelect />
                </li>
                <li className={`text-[#393939] ${navbar ? 'pb-20' : ''}`}>
                <button
                  className={`${ButtonType.primary} ${navbar ? 'h-[42px] w-[125px] rounded-full text-base font-semibold' : 'h-[42px] w-[125px] rounded-full text-base font-semibold'}`}
                >
                  <Link href={`/${lang}/job-listing`}>{joinUs ? joinUs.buttonText : ''}</Link>
                </button>
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
