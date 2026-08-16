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
import { ChevronDown } from 'lucide-react';

const localeRegex = new RegExp(`^/(${i18n.locales.join('|')})`);

const flagIcons: Record<Locale, StaticImageData> = {
  en: USFlagIcon,
  ja: JapanFlagIcon,
  ar: ArabFlagIcon,
  es: SpainFlagIcon,
};

const fulllangnames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  ar: 'عربي',
  es: 'Español',
};

type LocaleSelectProps = {
  lang: Locale;
  onDropdownChange?: (open: boolean) => void;
};

const LocaleSelect = ({ lang, onDropdownChange }: LocaleSelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currPath = usePathname() || '';

  // Use passed-in lang as default
  let locale: Locale = lang;
  const localeMatch = currPath.match(localeRegex);
  if (localeMatch) {
    locale = localeMatch[1] as Locale;
  }

  const handleLocaleChange = (newLocale: Locale) => {
    const newPath = currPath.replace(localeRegex, `/${newLocale}`);
    router.push(newPath);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => {
      const next = !prev;
      onDropdownChange?.(next); // notify parent
      return next;
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        onDropdownChange?.(false); // notify parent
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onDropdownChange]);

  return (
    <div className="w-full md:relative md:inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center bg-transparent pb-1 pt-2 text-xl text-black focus:outline-none md:font-bold md:hover:font-bold lg:w-20 lg:border-none lg:p-3 lg:px-0 lg:font-medium lg:text-black ${
          dropdownOpen
            ? 'rounded-full border-2 border-sky-800 px-4'
            : 'rounded-full'
        }`}
      >
        {locale.toUpperCase()}
        <ChevronDown
          className={`ml-2 h-5 w-5 transition-transform ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {dropdownOpen && (
        <div
          className={`mt-2 flex rounded-xl text-black shadow-gray-500 lg:absolute lg:right-0 lg:block lg:border lg:border-none lg:border-gray-500 lg:bg-transparent lg:shadow-lg lg:shadow-md`}
        >
          {i18n.locales.map((localeOption) => (
            <button
              key={localeOption}
              onClick={() => handleLocaleChange(localeOption as Locale)}
              className={`flex w-full items-center border-gray-500 py-2 text-sm first:rounded-t-xl last:rounded-b-xl hover:font-bold md:px-3 lg:bg-white`}
            >
              <div className="grid grid-cols-[30px_50px] items-center rounded-full py-1 md:grid-cols-[30px_50px_25px] md:px-2">
                <ExportedImage
                  src={flagIcons[localeOption]}
                  alt={`${localeOption} flag`}
                  className="h-5 w-5"
                />
                <p>{fulllangnames[localeOption]}</p>
                <p className="hidden text-right md:block">
                  {localeOption.toUpperCase()}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSelect;
