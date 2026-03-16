'use client';

import { i18n, type Locale } from '@/i18n-config';
import {
  JapanFlagIcon,
  USFlagIcon,
  ArabFlagIcon,
  SpainFlagIcon,
} from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';
import type { StaticImageData } from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from '../faq/ArrowIcon';

const localeRegex = new RegExp(`^/(${i18n.locales.join('|')})`);

const flagIcons: Record<Locale, StaticImageData> = {
  en: USFlagIcon,
  ja: JapanFlagIcon,
  ar: ArabFlagIcon,
  es: SpainFlagIcon,
};

type LocaleSelectProps = {
  isNavbar?: boolean;
  textColor?: string;
};

const LocaleSelect = ({
  isNavbar = false,
  textColor = 'white',
}: LocaleSelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currPath = usePathname() || ''; // Ensure currPath is always a string

  let locale: Locale = i18n.defaultLocale;
  const localeMatch = currPath.match(localeRegex);
  if (localeMatch) {
    locale = localeMatch[1] as Locale;
  }
  const handleLocaleChange = (newLocale: Locale) => {
    const newPath = currPath.replace(localeRegex, `/${newLocale}`);
    router.push(newPath);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle closing the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block lg:pr-6" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex ${isNavbar ? 'w-28' : 'w-40'} items-center bg-transparent pb-1 pt-2 text-xl font-bold text-white lg:p-3 lg:font-medium lg:text-${textColor} hover:font-bold focus:outline-none lg:w-12 lg:border-none lg:px-0 ${
          dropdownOpen ? 'border-l border-r border-t border-gray-500' : ''
        }`}
      >
        {/*
        <ExportedImage
          src={flagIcons[locale]}
          alt={`${locale} flag`}
          className={`mr-2 h-5 w-5 ${isNavbar ? 'ml-4' : 'ml-10 lg:ml-2'}`}
        /> changing for new navbar */}
        {locale.toUpperCase()}
        <ArrowIcon
          isActive={dropdownOpen}
          isNavbar={isNavbar}
          isWhite={textColor == 'white'}
        />
      </button>
      {dropdownOpen && (
        <div
          className={`absolute z-10 ${isNavbar ? 'w-28' : 'w-40'} border-b border-l border-r border-gray-500 bg-black shadow-md shadow-gray-500 lg:-left-2 lg:mt-0 lg:w-28 lg:border-none lg:bg-transparent lg:shadow-none`}
        >
          {i18n.locales
            .filter((localeOption) => localeOption !== locale)
            .map((localeOption) => (
              <button
                key={localeOption}
                onClick={() => handleLocaleChange(localeOption as Locale)}
                className={`flex w-[75px] items-center bg-black bg-opacity-50 px-3 py-2 text-left text-sm text-white lg:bg-white lg:bg-opacity-50 lg:text-${textColor} hover:font-bold`}
              >
                <ExportedImage
                  src={flagIcons[localeOption]}
                  alt={`${localeOption} flag`}
                  className={`mr-2 h-5 w-5 ${isNavbar ? 'ml-5' : 'ml-10 lg:ml-1'}`}
                />
                {localeOption.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSelect;
