import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { SplashBackground, WaveBackground } from '@/public/images/ai/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import { usei18n } from '../../i18n';
import AiCard from './AiCard';

// Overwrite the MetaData for this page
export const metadata: Metadata = {
  title: 'Virufy: Our Technology',
  description:
    'A look at the science and technology behind Virufy including our AI and research',
  openGraph: {
    title: 'Virufy: Our Technology',
    description:
      'A look at the science and technology behind Virufy including our AI and research',
    url: 'http://localhost:3000/en/ai', // Replace with live URL
    type: 'website',
  },
  keywords: ['ai', 'technology', 'virufy technology', 'virufy ai'],
  alternates: {
    canonical: 'http://localhost:3000/en/ai', // Replace with live URL
  },
};

const AiPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    ai: { heroSection, aiSection },
  } = usei18n(lang);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section>
        <div className="relative bg-[#4883e3]">
          <ExportedImage
            className="absolute h-full w-full object-cover opacity-30"
            src={SplashBackground}
            alt=""
            priority
            basePath={basePath}
          />

          {/* Title, Text, Link Container */}
          <div className="relative flex flex-col items-center justify-center pb-40 pt-60 lg:right-[100px]">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl space-y-28 px-10 text-center text-white lg:max-w-3xl lg:text-left">
              <h2 className="text-4xl font-semibold lg:text-5xl lg:font-normal">
                {heroSection.title.map((text, i) =>
                  text.type === 'text' ? (
                    <Fragment key={i}>{text.text}</Fragment>
                  ) : (
                    <span key={i} className="font-bold text-green-400">
                      {text.text}
                    </span>
                  )
                )}
              </h2>

              {/* Text & Link Container */}
              <div className="space-y-16">
                <p className="text-xl">{heroSection.text}</p>
                <div>
                  <Link href={`/${lang}/${heroSection.url}`}>
                    <button
                      className="medium primary px-2 py-2 text-xs text-white md:px-16 md:py-4 md:text-base md:text-xl"
                      style={{
                        borderRadius: '50px',
                        background:
                          'linear-gradient(0deg, #19479c 0%, #2750a8 50%, #19479c 100%)',
                        border: '2px solid #3fcf94',
                      }}
                    >
                      {heroSection.linkText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative bg-[#255292]">
        <ExportedImage
          src={WaveBackground}
          alt=""
          className="absolute h-full w-full object-cover opacity-40"
          priority
          basePath={basePath}
        />

        {/* AI Section */}
        <section>
          {/* Title & Cards Container */}
          <div className="flex items-center justify-center py-24">
            {/* Spacing Container, shifts title to the left */}
            <div className="space-y-8 px-6">
              <h2 className="text-4xl font-normal text-white opacity-95">
                {aiSection.title}
              </h2>

              {/* Cards Container */}
              <div className="space-y-16 text-base md:text-xl">
                {aiSection.aiCards.map((card) => (
                  <AiCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="h-[98px] bg-gradient-to-b from-transparent to-black"></div>
      </div>
    </div>
  );
};

export default AiPage;
