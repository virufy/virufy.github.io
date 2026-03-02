'use client';

import { Fragment } from 'react';

import ExportedImage from 'next-image-export-optimizer';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { SplashBackground, WaveBackground } from '@/public/images/ai/index';
import { usei18n } from '../../i18n';
import AiCard from './AiCard';
import { type AiCard as AiCardProps } from '@/app/i18n/types/ai';

// Types

type TitleText = { type: string; text: string };

type CTA = { demoAppUrl?: string; joinUrl?: string };

type I18nReturn = {
  ai: {
    heroSection: {
      title: TitleText[];
      text: string;
      url: string;
      linkText: string;
    };
    aiSection: { title: string; aiCards: AiCardProps[] };
  };
  cta?: CTA;
};

// Page Component

export default function AiPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    ai: { heroSection, aiSection },
  } = usei18n(lang) as I18nReturn;

  return (
    <div className="relative">
      {/* HERO */}
      <section>
        <div className="relative bg-[#4883e3]">
          <ExportedImage
            className="absolute h-full w-full object-cover opacity-30"
            src={SplashBackground}
            alt=""
            priority
            basePath={basePath}
          />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 md:pb-28 md:pt-[250px]">
            <div className="text-center text-white md:self-center md:text-left">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {(heroSection.title as TitleText[]).map((t, i) =>
                  t.type === 'text' ? (
                    <Fragment key={i}>{t.text} </Fragment>
                  ) : (
                    <span key={i} className="font-extrabold text-[#1ecf7a]">
                      {t.text}
                    </span>
                  )
                )}
              </h1>

              <p className="mt-5 text-lg opacity-95 md:max-w-2xl">
                {heroSection.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="relative bg-[#255292]">
        <ExportedImage
          src={WaveBackground}
          alt=""
          className="pointer-events-none absolute h-full w-full object-cover opacity-40"
          priority
          basePath={basePath}
        />

        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          {/* Technology */}
          <div
            id="panel-technology"
            role="tabpanel"
            aria-labelledby="tab-technology"
            className="space-y-10"
          >
            <h2 className="text-center text-3xl font-semibold text-white md:text-center">
              {aiSection.title}
            </h2>

            <div className="grid gap-8 md:grid-cols-1">
              {aiSection.aiCards.map((card, idx) => (
                <div
                  key={card.title || idx}
                  className="rounded-2xl bg-white px-6 py-6 text-[#123465] shadow-xl md:px-10 md:py-8"
                >
                  <AiCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[98px] bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
}
