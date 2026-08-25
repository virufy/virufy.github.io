'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import MainContent from './MainContent';
import { Globe2 } from 'lucide-react';
import ActionBanner from '../components/ActionBanner';

const OneYoungWorldPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    oneYoungWorld: { header, oyw, BannerSection },
  } = usei18n(lang);

  const titleWords = header.text.trim().split(/\s+/);

  return (
    <div className="relative">
      {/* Header/Hero Section */}
      <section className="relative min-h-[500px] w-full items-center overflow-hidden md:min-h-[600px] md:px-20 md:px-5">
        <div className="absolute inset-0 flex h-full">
          <ExportedImage
            className="scale-[1.50] object-cover min-[1680px]:scale-100"
            src={'/images/oneYoungWorld/OYW-Hero-BG.png'}
            alt={''}
            priority
            basePath={basePath}
            fill
          />
        </div>

        <div className="relative flex min-h-[500px] items-center py-12 md:min-h-[600px] md:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-3 pr-4 text-xs text-[#084b8a] sm:mb-8 sm:py-1 sm:pl-4 sm:pr-5 sm:text-sm md:mb-10">
              <Globe2
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              One Young World
            </div>
            <h1 className="text-4xl font-medium leading-tight text-gray-700 md:text-6xl">
              <span className="bg-gradient-to-r from-[#0E72C9] to-[#2A9D8F] bg-clip-text text-transparent">
                {titleWords[0]}
              </span>
              {titleWords.length > 1 && ` ${titleWords.slice(1).join(' ')}`}
            </h1>
            <p className="px-6 pt-10 text-center text-lg font-normal text-black md:px-0 md:text-xl">
              {header.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative bg-gradient-to-b from-[#F9FDFF] to-[#F0F6FF] shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <MainContent lang={lang} oyw={oyw} />
      </div>
      <ActionBanner
        title={BannerSection.title}
        text={BannerSection.text}
        buttonText={BannerSection.buttonText}
        page={`/${lang}/supporters`}
      />
    </div>
  );
};

export default OneYoungWorldPage;
