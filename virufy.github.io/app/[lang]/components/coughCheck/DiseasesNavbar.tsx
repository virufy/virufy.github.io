'use client';

import { type Locale } from '@/i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DiseasesNavbar = ({ lang }: { lang: Locale }) => {
  const activePath = usePathname();

  return (
    <nav className="flex justify-around border-b border-t border-gray-500 text-white md:items-center md:justify-center md:gap-x-24 md:border-none md:pt-2 md:font-semibold md:opacity-95">
      <NavItem
        href={`/${lang}/covid19`}
        text="COVID-19"
        activePath={activePath ?? ''}
      />
      <NavItem href={`/${lang}/copd`} text="COPD" activePath={activePath  ?? ''} />
      <NavItem href={`/${lang}/flu`} text="FLU" activePath={activePath  ?? ''} />
      <NavItem href={`/${lang}/rsv`} text="RSV" activePath={activePath  ?? ''} />
    </nav>
  );
};

const NavItem = ({
  href,
  text,
  activePath,
}: {
  href: string;
  text: string;
  activePath: string;
}) => {
  const isActive = href === activePath;
  const activeStyle =
    'bg-green-800 font-bold md:border-b-2 md:border-[#30DA74] md:font-semibold';
  const inActiveStyle =
    'hover:border-[#30DA74] md:border-b-2 md:border-transparent';
  const mobileStyle =
    'w-full py-4 text-center border-gray-500 border-r md:w-auto md:bg-inherit md:text-xl md:border-l-0 md:border-r-0'; // mobile style with vertical borders

  return (
    <Link href={href} legacyBehavior>
      <a className={`${isActive ? activeStyle : inActiveStyle} ${mobileStyle}`}>
        {text}
      </a>
    </Link>
  );
};

export default DiseasesNavbar;
