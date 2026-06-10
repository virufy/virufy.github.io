'use client';

import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import AccordionItem from '../components/AccordionItem';

const DoNotSellMyDataPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    footer: { personalInfo },
  } = usei18n(lang);

  return (
    <div className="relative mt-[-6rem] flex flex-col items-center bg-gradient-to-b from-[#25497d] via-[#3468b2] to-[#3468b2] px-5 py-20">
      {/* Title */}
      <div className="py-20">
        <Title
          H="h5Modals"
          Text={personalInfo.title}
          TitleClassProps="mt-[30px] mx-auto mb-[30px] text-white"
        />
      </div>

      {/* Accordion Content */}
      <div className="w-full max-w-md rounded-lg border-b bg-black bg-opacity-[28%] text-xs last:border-b-0 md:max-w-2xl md:text-base lg:max-w-4xl xl:max-w-5xl">
        {personalInfo.body.map((detail, index) => (
          <AccordionItem key={index} {...detail} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default DoNotSellMyDataPage;
