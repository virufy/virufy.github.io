'use client';
import ExportedImage from 'next-image-export-optimizer';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { usei18n } from '../../i18n';

import AiCard from './AiCard';
import AiCarousel from './AiCarousel';
import ActionBanner from '../components/ActionBanner';

import { CrossBackground } from '@/public/images/ai/index';
import AiIcon from '@/public/icons/icon-ai.png';
import { ColorProps, TextSizeProps } from '../themes';

export default function AiPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    ai: { heroSection, aiSection, banner },
  } = usei18n(lang);

  return (
    <div className="relative">
      {/* HERO */}
      <section>
        {/* Hero Background */}
        <div className="relative bg-white">
          <ExportedImage
            className="absolute hidden h-full w-full object-cover md:block"
            src={CrossBackground}
            alt=""
            priority
            basePath={basePath}
          />

          {/* Content */}
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center border-b border-[#bcc7d4] px-6 pb-12 pt-28 md:border-0 md:pb-28 md:pt-36">
            {/* Heading, description, and carousel*/}
            <div className="text-center text-black md:self-center md:text-left">
              <span className="mb-10 inline-block rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-4 pr-5 text-[#084b8a]">
                <ExportedImage
                  className="inline"
                  src={AiIcon}
                  alt="AI Icon"
                  basePath={basePath}
                />
                &nbsp; {heroSection.tag}
              </span>
              <h1 className={`${TextSizeProps.h1} pb-2`}>
                {heroSection.title.map((part, i) => {
                  if (part.type === 'span') {
                    return (
                      <span key={i} className={ColorProps.textGradient}>
                        {part.text}
                      </span>
                    );
                  }
                  return <span key={i}>{part.text}</span>;
                })}
              </h1>

              <p
                className={`mb-10 mt-5 ${TextSizeProps.p} ${ColorProps.textGray}`}
              >
                {heroSection.text}
              </p>
            </div>
            <AiCarousel slides={heroSection.aiSlides} />
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="relative bg-white text-black">
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          {/* Technology */}
          <div
            id="panel-technology"
            role="tabpanel"
            aria-labelledby="tab-technology"
            className=""
          >
            <h2
              className={`text-center md:text-left ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}
            >
              {aiSection.title}
            </h2>
            <p
              className={`my-10 text-center md:text-left ${ColorProps.textGray} ${TextSizeProps.p}`}
            >
              {aiSection.text}
            </p>

            {/* Desktop AI Cards */}
            <div className="hidden grid-cols-6 justify-center gap-x-6 gap-y-3 md:grid">
              {/* Top 3 cards */}
              {aiSection.aiCards
                .filter((_, i) => i % 2 === 0)
                .map((card, i) => (
                  <div
                    key={i}
                    className="col-span-2 flex flex-col items-center"
                  >
                    <AiCard {...card} />
                    <div
                      className={`mt-10 h-[12px] w-[16px] ${ColorProps.bgGradientReverse} [clip-path:polygon(50%_0%,0%_100%,100%_100%)]`}
                    />
                  </div>
                ))}
              <div className="col-span-6 h-[4px] w-full rounded-full bg-gradient-to-r from-[#0E72C9]/30 to-[#2A9D8F]/30" />
              <div />
              {/* Bottom 2 cards */}
              {aiSection.aiCards
                .filter((_, i) => i % 2 === 1)
                .map((card, i) => (
                  <div
                    key={i}
                    className="col-span-2 flex flex-col items-center"
                  >
                    <div
                      className={`mb-10 h-[12px] w-[16px] text-center ${ColorProps.bgGradient} [clip-path:polygon(0%_0%,100%_0%,50%_100%)]`}
                    />
                    <AiCard {...card} />
                  </div>
                ))}
            </div>

            {/* Mobile AI Cards */}
            <div className="block md:hidden">
              {aiSection.aiCards.map((card, i) => (
                <div key={i} className="flex flex-col items-center">
                  <AiCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ActionBanner
        title={banner.title}
        text={banner.text}
        buttonText={banner.buttonText}
        page={`/${lang}/donate`}
      />
    </div>
  );
}
