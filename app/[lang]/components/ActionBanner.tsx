import { type Locale } from '@/i18n-config';
import Link from 'next/link';

import { ColorProps } from '../themes';

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
      <div className={`flex items-center px-6 relative mx-auto max-w-6xl py-20 md:py-24`}>
        <div>
          <h3 className={`pb-6 text-3xl font-semibold ${ColorProps.textGreenDark}`}>{title}</h3>
          <p className={`${ColorProps.textGray}`}>{text}</p>
        </div>
        <button className={`whitespace-nowrap px-6 py-3 rounded-full ml-6 ${ColorProps.bgGradientReverse}`}>
          <Link href={`/${lang}/${page}`}>
            {buttonText}
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ActionBanner;
