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
    <div className="relative">
      {/* Gradient Background */}
      <div className="bg-gradient-to-b from-[#FBFEFF] to-[#EEF8FD] pb-24">
        {/* Title Section */}
        <section className="relative mx-auto max-w-[1440px] px-5">
          <div className="flex flex-col items-center justify-center pt-20 text-center md:pt-32">
            <Title
              H="h5Modals"
              Text={personalInfo.title}
              TitleClassProps="mx-auto text-[#16223A]"
            />
          </div>

          {/* Accordion Content */}
          <div className="mx-auto mt-12 flex w-full max-w-md flex-col gap-y-4 md:mt-16 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <div className="w-full rounded-lg border-b border-gray-400 text-sm last:border-b-0 md:text-base">
              {personalInfo.body.map((detail, index) => (
                <AccordionItem
                  key={index}
                  {...detail}
                  lang={lang}
                  className="!text-black"
                  isFaq={false}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DoNotSellMyDataPage;
