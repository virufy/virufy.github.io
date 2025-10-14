'use client';

import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { PressReleasesBackground } from '@/public/images/pressReleases';
import { usei18n } from '../../i18n';
import NewsCard from './NewsCard';

type Props = { params: { lang: Locale } };

// Safely derive a 4-digit year from diverse date strings or a numeric year field.
const safeYear = (card: { date?: string; year?: number | string }) => {
  // Prefer explicit numeric year if present
  if (card?.year != null && Number.isFinite(Number(card.year))) {
    return Number(card.year);
  }

  const d = card?.date;
  if (typeof d === 'string') {
    // ISO-like: 2020-08-01 / 2020-08 / 2020-08-01T...
    const iso = d.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?(?:[T ].*)?$/);
    if (iso) return Number(iso[1]);

    // Free text like "Aug 2020", "Released in 2020", or ranges "2019–2020"
    // Find all 4-digit years and pick the latest (so "2019–2020" -> 2020)
    const matches = Array.from(d.matchAll(/\b(19|20)\d{2}\b/g)).map((m) =>
      Number(m[0])
    );
    if (matches.length) return Math.max(...matches);
  }

  return undefined;
};

const NewsPage = ({ params: { lang } }: Props) => {
  const {
    pressReleases: { pressReleaseSection, pressReleaseCards },
  } = usei18n(lang);

  // Unique years, desc, using safeYear (no Date.parse)
  const years = useMemo(() => {
    return Array.from(
      new Set(
        (pressReleaseCards || [])
          .map(safeYear)
          .filter((y): y is number => Number.isFinite(y))
      )
    ).sort((a, b) => b - a);
  }, [pressReleaseCards]);

  // Default to latest available year; sync if years change
  const [selectedYear, setSelectedYear] = useState<number | null>(
    years[0] ?? null
  );
  useEffect(() => {
    if (
      years.length > 0 &&
      (selectedYear == null || !years.includes(selectedYear))
    ) {
      setSelectedYear(years[0]);
    }
  }, [years]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cards for the chosen year (again via safeYear)
  const displayedCards = useMemo(() => {
    if (selectedYear == null) return pressReleaseCards;
    return (pressReleaseCards || []).filter(
      (card) => safeYear(card) === selectedYear
    );
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
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" // don't block taps
              src={PressReleasesBackground}
              alt=""
              priority
              basePath={basePath}
              aria-hidden
            />

            <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-10 py-64 text-center font-medium opacity-95">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                {pressReleaseSection.title}
              </h1>
            </div>

            {/* Dropdown: centered on divider */}
            {years.length > 0 && (
              <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
                <div className="relative h-[26px] w-[289px]">
                  <select
                    value={selectedYear ?? ''}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    className="h-[26px] w-[289px] cursor-pointer rounded-b-none rounded-t-[13px] bg-[#154498] px-4 pr-12 text-center text-sm leading-[26px] text-white [-moz-appearance:none] [-webkit-appearance:none] [appearance:none] focus:outline-none focus:ring-0 [&::-ms-expand]:hidden"
                    aria-label="Filter press releases by year"
                  >
                    {years.map((y) => (
                      <option
                        key={y}
                        value={y}
                        className="h-[24px] w-[51px] text-center"
                      >
                        {y}
                      </option>
                    ))}
                  </select>

                  {/* Chevron */}
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </section>

      
        <div className="h-[98px] bg-gradient-to-b from-[#255292] to-black"></div>
      </div>
    </>
  );
};

export default NewsPage;
