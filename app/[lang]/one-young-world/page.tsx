'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import MainContent from './MainContent';

const OneYoungWorldPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    oneYoungWorld: { header, navbarTexts, oyw },
    teamLeads,
  } = usei18n(lang);

  return (
    <div className="relative">
      {/* Header/Hero Section */}
      <section>
        <div className="relative bg-[#1F376A]">
          <ExportedImage
            className="absolute object-cover opacity-30"
            src={header.image}
            alt={header.altText}
            priority
            basePath={basePath}
            fill
            sizes="100vw"
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center pb-12 pt-32 md:pb-48 md:pt-72">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl px-8 text-center font-medium text-white md:max-w-4xl">
              <h1 className="text-2xl font-medium leading-loose md:text-3xl md:leading-normal">
                {header.text}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative bg-[#255292]">
        <MainContent
          lang={lang}
          teamLeads={teamLeads}
          oyw={oyw}
          navbarTexts={navbarTexts}
        />
      </div>
    </div>
  );
};

export default OneYoungWorldPage;
