'use client';

import { useState, useMemo } from 'react';
import Head from 'next/head';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { PressReleasesBackground } from '@/public/images/pressReleases';
import { usei18n } from '../../i18n';
import NewsCard from './NewsCard';

type Props = { params: { lang: Locale } };

const NewsPage = ({ params: { lang } }: Props) => {
  const {
    pressReleases: { pressReleaseSection, pressReleaseCards },
  } = usei18n(lang);

  // Collect unique, sorted years
  const years = useMemo(() => {
    const ys = Array.from(
      new Set(
        pressReleaseCards
          .map((card) => {
            if (typeof card.date === 'string' && !isNaN(Date.parse(card.date))) {
              return new Date(card.date).getFullYear();
            }
            return card.year;
          })
          .filter(Boolean) as number[]
      )
    ).sort((a, b) => b - a);
    return ys;
  }, [pressReleaseCards]);

  const [selectedYear, setSelectedYear] = useState<number>(years[0] ?? new Date().getFullYear());

  // Filter cards by selected year
  const displayedCards = useMemo(() => {
    return pressReleaseCards.filter((card) => {
      const y =
        typeof card.date === 'string' && !isNaN(Date.parse(card.date))
          ? new Date(card.date).getFullYear()
          : card.year;
      return y === selectedYear;
    });
  }, [pressReleaseCards, selectedYear]);

  return (
    <>
      <Head>
        <title>News - Virufy</title>
        <meta
          name="description"
          content="Stay updated with the latest news and press releases about Virufy's advancements in AI healthcare innovation."
        />
      </Head>

      <div className="relative">
        {/* Hero Section */}
        <section>
          <div className="relative bg-[#2b5290]">
            <ExportedImage
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              src={PressReleasesBackground}
              alt=""
              priority
              basePath={basePath}
            />

            <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-10 py-64 text-center font-medium opacity-95">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                {pressReleaseSection.title}
              </h1>
            </div>

            {/* Dropdown: half-rectangle, centered, bottom flush with divider */}
            {/* Dropdown: centered on divider, with chevron cap like the screenshot */}
            {years.length > 0 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
                <div className="relative w-[289px] h-[26px]">
                  {/* The select */}
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    className="
          w-[289px] h-[26px]
          [appearance:none] [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden
          bg-[#154498] text-white text-sm text-center
          leading-[26px] px-4 pr-12     /* reserve space for the cap + chevron */
          rounded-t-[13px] rounded-b-none               /* half-rectangle; use rounded-full for full pill */
          focus:outline-none focus:ring-0
          cursor-pointer
        "
                  >
                    {years.map((y) => (
                      <option key={y} value={y} className="text-center w-[51px] h-[24px]">
                        {y}
                      </option>
                    ))}
                  </select>

                  {/* Right 'cap' behind the chevron (gives that rounded darker end) */}
                  

                  {/* Chevron inside the cap */}
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                    width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Press Releases Section */}
        <div className="relative -mb-24 bg-[#255292] pb-24">
          <section className="flex justify-center">
            {/* spacing so cards don’t collide with the dropdown edge */}
            <div className="grid gap-8 px-10 pt-16 lg:grid-cols-2 lg:px-16">
              {displayedCards.map((pressRelease, i) => (
                <div key={i} className="rounded-xl bg-white px-10 py-8 text-left">
                  <NewsCard {...pressRelease} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
