"use client";

import { type Locale } from '@/i18n-config.ts';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import AccordionItem  from '../components/AccordionItem';

const CookiePolicyPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
      footer: { cookiePolicy },
    } = usei18n(lang);

  return (
    <>
      {/*container*/}
      <div className="relative mt-[-6rem] py-20 flex flex-col items-center 
      px-5 bg-gradient-to-b from-[#25497d] via-[#3468b2] to-[#3468b2]">
        {/*header*/}
        <div className="py-20">
          <Title
            H="h5Modals"
            Text={cookiePolicy.title}
            TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
          />
        </div>
        {/*cookie policy content*/}
        <div className="w-full max-w-md rounded-lg border-b bg-black bg-opacity-[28%] 
        text-xs last:border-b-0 md:max-w-2xl md:text-base lg:max-w-4xl xl:max-w-5xl">
          {cookiePolicy.body.map((detail, index) => (
            <AccordionItem {...detail} lang={lang} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;