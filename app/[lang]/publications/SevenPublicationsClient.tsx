'use client';

import { useState, useMemo } from 'react';
import { type Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import NewsCard from './NewsCard';
import ActionBanner from '../components/ActionBanner';
import FilterSortControls from '../components/FilterSortControls';
import Link from 'next/link';
import type { PublicationsPage } from '@/app/i18n/types/publications';

type Props = {
  params: { lang: Locale };
  content: PublicationsPage;
};

const unoptimized = process.env.NODE_ENV !== 'production';

// Helper to extract year from date strings like "October 2025", "February 2023", "2020"
const extractYear = (dateStr: string): number => {
  const match = dateStr.match(/\b(19|20)\d{2}\b/);
  return match ? parseInt(match[0], 10) : 0;
};

const SevenPublicationsClient = ({ content, params }: Props) => {
  const heroTitleWords = useMemo(() => {
    const words = content.hero.title.trim().split(/\s+/);
    return words.filter(Boolean);
  }, [content.hero.title]);

  const newsCards = useMemo(
    () =>
      content.newsCards.filter((card) => card.contentType === 'publications'),
    [content.newsCards]
  );

  // Extract unique years from newsCards
  const years = useMemo(() => {
    const yearSet = new Set<number>();
    newsCards.forEach((card) => {
      const year = extractYear(card.date);
      if (year) yearSet.add(year);
    });
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [newsCards]);

  // Filter & sort state
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  // Filter and sort cards
  const filteredAndSortedCards = useMemo(() => {
    let result = [...newsCards];

    // Filter by year
    if (selectedYear !== 'all') {
      result = result.filter((card) => extractYear(card.date) === selectedYear);
    }

    // Keep the canonical newest-first order from the translated data files,
    // as the news page does, so dates written in any script sort the same.
    return sortBy === 'newest' ? result : result.reverse();
  }, [newsCards, selectedYear, sortBy]);

  return (
    <main>
      <section className="relative w-full md:shadow-xl">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <ExportedImage
            src={content.hero.bgImage}
            alt="background"
            fill
            priority
            className="object-cover"
            basePath={basePath}
            unoptimized={unoptimized}
          />
        </div>

        {/* Hero content */}
        <div className="relative mt-2 px-4 pb-12 pt-20 text-center sm:mt-3 sm:px-6 sm:pb-16 sm:pt-16 md:mt-4 md:pb-20 md:pt-20 lg:py-28">
          {/* Tag pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-3 pr-4 text-xs text-[#084b8a] sm:mb-8 sm:py-1 sm:pl-4 sm:pr-5 sm:text-sm md:mb-10">
            {content.hero.tagIcon && (
              <ExportedImage
                src={content.hero.tagIcon}
                alt=""
                height={17}
                width={17}
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                basePath={basePath}
                unoptimized={unoptimized}
              />
            )}
            {content.hero.tag}
          </div>

          {/* Title */}
          <h1 className="font-montserrat text-4xl font-normal tracking-[0.26px] text-black sm:text-5xl md:text-[52px] md:leading-[75px]">
            {heroTitleWords.length > 1 && (
              <span className="text-black">
                {heroTitleWords.slice(0, -1).join(' ')}
              </span>
            )}
            {heroTitleWords.length > 1 && ' '}
            <span className="bg-gradient-to-r from-[#0E72C9] to-[#2A9D8F] bg-clip-text text-transparent">
              {heroTitleWords[heroTitleWords.length - 1] ?? ''}
            </span>
          </h1>
          <p className="font-inter mx-auto mt-4 max-w-2xl text-base font-normal leading-[32.5px] tracking-[-0.45px] text-gray-600 sm:text-xl">
            {content.hero.subtitle}
          </p>

          {/* Pill Selector: News | Publications | Blogs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <div className="inline-flex rounded-full border border-gray-300 bg-white p-2 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.15)] ring-gray-200">
              {content.pillSelector.options.map((option) => {
                const isActive = option.id === 'publications';
                const baseClasses =
                  'font-inter rounded-full px-6 py-3 text-base font-medium leading-[24px] tracking-[-0.31px] transition';

                if (isActive) {
                  return (
                    <span
                      key={option.id}
                      className={`${baseClasses} scale-105 bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]`}
                    >
                      {option.label}
                    </span>
                  );
                }
                // Map option.id to the correct URL
                let href = '';
                if (option.id === 'news') {
                  href = `/${params.lang}/news/`;
                } else if (option.id === 'blogs') {
                  href = `/${params.lang}/blog/`;
                } else {
                  href = `/${params.lang}/publications/${option.id}`; // fallback
                }

                return (
                  <Link
                    key={option.id}
                    href={href}
                    className={`${baseClasses} bg-white text-[#2C3540] hover:bg-gray-200`}
                  >
                    {option.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* News Cards Section - Responsive Padding + Shadow */}
      <section className="w-full bg-gray-50 px-4 py-16 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:px-8 sm:py-20 md:px-16 md:py-24 lg:px-[120px] lg:py-[100px]">
        <div className="mx-auto max-w-7xl">
          <FilterSortControls
            selectedYear={selectedYear}
            years={years}
            onYearChange={(year) =>
              setSelectedYear(year === 'all' ? 'all' : Number(year))
            }
            sortOrder={sortBy}
            onSortOrderChange={setSortBy}
            labels={content.filters}
          />

          {/* Card Grid */}
          {filteredAndSortedCards.length === 0 ? (
            <p className="text-center text-gray-500">{content.emptyMessage}</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedCards.map((item, idx) => (
                <NewsCard
                  key={idx}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  subtitle={item.subText}
                  url={item.url}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <ActionBanner
          title={content.section5.title}
          text={content.section5.text}
          buttonText={content.section5.button}
          page="/en/join-us/"
        />
      </section>
    </main>
  );
};

export default SevenPublicationsClient;
