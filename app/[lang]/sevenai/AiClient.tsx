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
import { ColorProps } from '../themes';

// Page Component

export default function AiPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    sevenai: { heroSection, aiSection, banner },
  } = usei18n(lang);

  return (
    <div className="relative">
      {/* HERO */}
      <section>
        {/* Hero Background */}
        <div className="relative bg-white">
          <ExportedImage
            className="absolute h-full w-full object-cover"
            src={CrossBackground}
            alt=""
            priority
            basePath={basePath}
          />

          {/* Content */}
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 md:pb-28 md:pt-36">
            {/* Heading, description, and carousel*/}
            <div className="text-center text-black md:self-center md:text-left">
              <span className="inline-block pl-4 pr-5 py-1 mb-10 border border-[#bcc7d4] rounded-full text-[#084b8a] bg-[#d9eaf8]">
                <ExportedImage
                  className="inline"
                  src={AiIcon}
                  alt="AI Icon"
                  basePath={basePath}
                />
                &nbsp; {heroSection.tag}
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl pb-2">
                {heroSection.title.map((part, i) => {
                  if (part.type === "span") {
                    return (
                      <span key={i} className={ColorProps.textGradient}>
                        {part.text}
                      </span>
                    );
                  }
                  return <span key={i}>{part.text}</span>;
                })}
              </h1>

              <p className={`mt-5 mb-10 text-lg ${ColorProps.textGray}`}>
                {heroSection.text}
              </p>

              <AiCarousel slides={heroSection.aiSlides} />
            </div>
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
            <h2 className={`text-3xl font-semibold ${ColorProps.textGreenDark}`}>
              {aiSection.title}
            </h2>
            <p className={`${ColorProps.textGray} my-10`}>{aiSection.text}</p>

            {/* Top 3 cards */}
            <div className="grid grid-cols-6 gap-6 justify-center">
              {aiSection.aiCards.slice(0, 3).map((card, i) => (
                <div key={i} className="col-span-2 flex flex-col items-center">
                  <AiCard {...card} />
                  <div className={`mt-10 w-[16px] h-[12px] ${ColorProps.bgGradientReverse} [clip-path:polygon(50%_0%,0%_100%,100%_100%)]`} />
                </div>
              ))}
            </div>
            <div className="my-4 h-[4px] w-full bg-gradient-to-r from-[#0E72C9]/30 to-[#2A9D8F]/30 rounded-full" />

            {/* Bottom 2 cards */}
            <div className="grid grid-cols-6 gap-6 justify-center">
              <div/>
              {aiSection.aiCards.slice(3).map((card, i) => (
                <div key={i} className="col-span-2 flex flex-col items-center">
                  <div className={`text-center mb-10 w-[16px] h-[12px] ${ColorProps.bgGradient} [clip-path:polygon(0%_0%,100%_0%,50%_100%)]`} />
                  <AiCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ActionBanner title={banner.title} text={banner.text} buttonText={banner.buttonText} lang={lang} page={banner.url}/>
    </div>
  );
}
