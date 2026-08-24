'use client';

import { useMemo, useState } from 'react';
import { type Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';
import BlogCard from './BlogCard';
import ActionBanner from '../components/ActionBanner';
import Link from 'next/link';
import { usei18n } from '@/app/i18n';
import type { Post } from '@/app/i18n/types/BlogPosts';

export default function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    blogPosts: { blogPosts: posts, blogPageContent: content },
  } = usei18n(lang);

  const postList = useMemo(() => Object.values(posts), [posts]);

  const heroTitleWords = useMemo(() => {
    const words = content.hero.title.trim().split(/\s+/);
    return words.filter(Boolean);
  }, [content.hero.title]);

  const extractYear = (dateStr?: string): number => {
    if (!dateStr) return 0;
    const match = dateStr.match(/\b(19|20)\d{2}\b/);
    return match ? Number.parseInt(match[0], 10) : 0;
  };

  const getSortableDate = (dateStr?: string): string => {
    if (!dateStr) return '2000-01-01';

    const normalizedDate = dateStr.replace(
      /\b(\d{1,2})(st|nd|rd|th)\b/gi,
      '$1'
    );

    const monthDayYearMatch = normalizedDate.match(
      /^(\w+)\s+(\d{1,2}),?\s+(\d{4})$/
    );
    if (monthDayYearMatch) {
      const month = monthDayYearMatch[1];
      const day = monthDayYearMatch[2].padStart(2, '0');
      const year = monthDayYearMatch[3];
      const monthIndex = new Date(`${month} 1, 2000`).getMonth();
      if (!Number.isNaN(monthIndex)) {
        return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${day}`;
      }
    }

    const monthYearMatch = normalizedDate.match(/^(\w+)\s+(\d{4})$/);
    if (monthYearMatch) {
      const month = monthYearMatch[1];
      const year = monthYearMatch[2];
      const monthIndex = new Date(`${month} 1, 2000`).getMonth();
      if (!Number.isNaN(monthIndex)) {
        return `${year}-${String(monthIndex + 1).padStart(2, '0')}-01`;
      }
    }

    const yearMatch = normalizedDate.match(/^\d{4}$/);
    if (yearMatch) {
      return `${yearMatch[0]}-12-31`;
    }

    return '2000-01-01';
  };

  const years = useMemo(() => {
    const yearSet = new Set<number>();
    postList.forEach((post) => {
      const year = extractYear(post.date);
      if (year) yearSet.add(year);
    });
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [postList]);

  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const filteredAndSortedPosts = useMemo(() => {
    let result: Post[] = [...postList];

    if (normalizedSearchQuery) {
      result = result.filter((post) => {
        const searchableText =
          `${post.title} ${post.description}`.toLowerCase();
        return searchableText.includes(normalizedSearchQuery);
      });
    }

    if (selectedYear !== 'all') {
      result = result.filter((post) => extractYear(post.date) === selectedYear);
    }

    result.sort((a, b) => {
      const dateA = getSortableDate(a.date);
      const dateB = getSortableDate(b.date);
      return sortBy === 'newest'
        ? dateB.localeCompare(dateA)
        : dateA.localeCompare(dateB);
    });

    return result;
  }, [postList, selectedYear, sortBy, normalizedSearchQuery]);
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
            unoptimized={true}
          />
        </div>

        <div className="relative mt-2 px-4 pb-12 pt-20 text-center sm:mt-3 sm:px-6 sm:pb-16 sm:pt-16 md:mt-4 md:pb-20 md:pt-20 lg:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-3 pr-4 text-xs text-[#084b8a] sm:mb-8 sm:py-1 sm:pl-4 sm:pr-5 sm:text-sm md:mb-10">
            {content.hero.tagIcon && (
              <ExportedImage
                src={content.hero.tagIcon}
                alt=""
                height={17}
                width={17}
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              />
            )}
            {content.hero.tag}
          </div>

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

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <div className="inline-flex rounded-full border border-gray-300 bg-white p-2 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.15)] ring-gray-200">
              {content.pillSelector.options.map((option) => {
                const isActive = option.id === 'blogs';
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

                let href = '';
                if (option.id === 'publications') {
                  href = `/${lang}/publications/`;
                } else if (option.id === 'blogs') {
                  href = `/${lang}/blog/`;
                } else {
                  href = `/${lang}/news`;
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

      <section className="w-full bg-gray-50 px-4 py-16 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:px-8 sm:py-20 md:px-16 md:py-24 lg:px-[120px] lg:py-[100px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="font-inter text-base font-medium leading-[24px] tracking-[-0.31px] text-gray-700">
                  {content.filters.filterByYearLabel}
                </span>
                <select
                  value={selectedYear}
                  onChange={(e) =>
                    setSelectedYear(
                      e.target.value === 'all' ? 'all' : Number(e.target.value)
                    )
                  }
                  className="font-inter appearance-none rounded-2xl border border-gray-300 bg-white bg-no-repeat px-4 py-1.5 pr-10 text-base font-normal leading-[24px] tracking-[-0.31px] text-gray-800 shadow-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%231F2937' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5rem 1.5rem',
                  }}
                >
                  <option value="all">{content.filters.allYearsOption}</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-inter text-base font-medium leading-[24px] tracking-[-0.31px] text-gray-700">
                  {content.filters.sortByLabel}
                </span>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as 'newest' | 'oldest')
                  }
                  className="font-inter appearance-none rounded-2xl border border-gray-300 bg-white bg-no-repeat px-4 py-1.5 pr-10 text-base font-normal leading-[24px] tracking-[-0.31px] text-gray-800 shadow-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-300"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%231F2937' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5rem 1.5rem',
                  }}
                >
                  <option value="newest">{content.filters.newestFirst}</option>
                  <option value="oldest">{content.filters.oldestFirst}</option>
                </select>
              </div>

              <div className="ml-auto flex min-w-[280px] flex-1 items-center gap-2 rounded-2xl border border-gray-300 bg-white px-4 py-2 shadow-lg sm:max-w-[360px]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={content.filters.searchPlaceholder}
                  aria-label={content.filters.searchPlaceholder}
                  className="font-inter w-full border-none bg-transparent text-base font-normal leading-[24px] tracking-[-0.31px] text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {filteredAndSortedPosts.length === 0 ? (
            <p className="text-center text-gray-500">{content.emptyMessage}</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} lang={lang} />
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
}
