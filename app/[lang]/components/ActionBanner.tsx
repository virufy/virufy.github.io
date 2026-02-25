import { type Locale } from '@/i18n-config';
import Link from 'next/link';

import { ColorProps, TextSizeProps } from '../themes';

const ActionBanner = ({ 
  title, 
  text, 
  buttonText,
  lang,
  page,
} : {
  title: string;
  text: string;
  buttonText: string;
  lang: Locale;
  page: string;
}) => {
  return (
    <section className={`${ColorProps.bgBlueGlow} border-2 border-y-[#bcc7d4]`}>
      <div className={`flex flex-col items-center md:flex-row px-6 relative mx-auto max-w-6xl py-16 md:py-20 md:py-24`}>
        <div>
          <h2 className={`pb-6 text-center md:text-left ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}>{title}</h2>
          <p className={`text-center md:text-left ${TextSizeProps.p} ${ColorProps.textGray}`}>{text}</p>
        </div>
        <button className={`whitespace-nowrap px-6 py-3 rounded-full ml-6 mt-10 ${TextSizeProps.p} ${ColorProps.bgGradientReverse}`}>
          <Link href={`/${lang}${page}`}>
            {buttonText}
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ActionBanner;
