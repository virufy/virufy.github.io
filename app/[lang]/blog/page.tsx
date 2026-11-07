'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { type Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';
import BlogCard from './BlogCard';
import ActionBanner from '../components/ActionBanner';
import Link from 'next/link';
import { usei18n } from '@/app/i18n';
import type { Post } from '@/app/i18n/types/BlogPosts';

type CategoryKey =
  | 'research'
  | 'technology'
  | 'productUpdates'
  | 'community'
  | 'partnerships';

const categoryBySlug: Record<string, CategoryKey> = {
  'silent-smog-hidden-impact': 'research',
  'screen-early-live-better': 'technology',
  'world-no-tobacco-day': 'community',
  'the-next-step-in-respiratory-public-health': 'research',
  'the-future-of-digital-solutions': 'productUpdates',
  'bringing-respiratory-screening-to-the-communities-that-need-it-most': 'partnerships',
  'building-ai-for-healthcare-what-makes-medtech-different': 'technology',
  'the-science-of-sound-and-health': 'research',
  'world-lung-day': 'community',
  'how-to-stay-competitive-in-the-booming-era-of-medical-technology': 'technology',
};

const desktopCategories = [
  'all',
  'research',
  'technology',
  'productUpdates',
  'community',
  'partnerships',
];

// The mobile design uses shorter editorial groupings. These map to the same
// post taxonomy while keeping the touch targets and labels shown in the mockup.
const mobileCategoryGroups: Record<string, CategoryKey[]> = {
  research: ['research'],
  engineering: ['technology'],
  design: ['technology', 'productUpdates'],
  marketing: ['community', 'partnerships'],
  operations: ['productUpdates', 'partnerships'],
};

const mobileCategories = ['all', ...Object.keys(mobileCategoryGroups)];

const getSortableDate = (dateValue?: string): string => {
  if (!dateValue) return '2000-01-01';

  const normalized = dateValue.replace(/\b(\d{1,2})(st|nd|rd|th)\b/gi, '$1');
  const parsedDate = new Date(normalized);
  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.toISOString().slice(0, 10);
  }

  const monthYear = normalized.match(/^(\w+)\s+(\d{4})$/);
  if (monthYear) {
    const month = new Date(`${monthYear[1]} 1, ${monthYear[2]}`);
    if (!Number.isNaN(month.getTime())) return month.toISOString().slice(0, 10);
  }

  return '2000-01-01';
};

export default function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    blogPosts: { blogPosts: posts, blogPageContent: content },
  } = usei18n(lang);

  const postList = useMemo(() => Object.values(posts), [posts]);
  const heroTitleWords = useMemo(() => content.hero.title.trim().split(/\s+/).filter(Boolean), [content.hero.title]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedSearchQuery = searchQuery.trim().toLocaleLowerCase();
  const filteredPosts = useMemo(() => {
    const categoryMatches = (post: Post) => {
      const category = categoryBySlug[post.slug] ?? 'research';
      if (selectedCategory === 'all') return true;
      const desktopMatch = desktopCategories.includes(selectedCategory)
        ? category === selectedCategory
        : (mobileCategoryGroups[selectedCategory] ?? []).includes(category);
      return desktopMatch;
    };

    return postList
      .filter((post) => {
        const searchableText = `${post.title} ${post.description} ${post.content.replace(/<[^>]*>/g, ' ')}`.toLocaleLowerCase();
        return categoryMatches(post) && (!normalizedSearchQuery || searchableText.includes(normalizedSearchQuery));
      })
      .sort((a, b) => getSortableDate(b.date).localeCompare(getSortableDate(a.date)));
  }, [postList, selectedCategory, normalizedSearchQuery]);

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const updateSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <main>
      <section className="relative w-full overflow-hidden border-b border-[#d5e2e9] md:shadow-xl">
        <div className="absolute inset-0 overflow-hidden">
          <ExportedImage
            src={content.hero.bgImage}
            alt=""
            fill
            priority
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="relative px-4 pb-8 pt-8 text-center sm:px-6 sm:pb-12 sm:pt-12 lg:pb-16 lg:pt-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] px-3 py-1.5 text-xs text-[#084b8a] sm:mb-6 sm:px-4 sm:text-sm">
            {content.hero.tagIcon && (
              <ExportedImage src={content.hero.tagIcon} alt="" height={17} width={17} className="h-4 w-4" />
            )}
            {content.hero.tag}
          </div>

          <h1 className="font-montserrat text-[34px] font-normal tracking-[0.26px] text-black sm:text-5xl md:text-[52px] md:leading-[1.2]">
            {heroTitleWords.length > 1 && <span>{heroTitleWords.slice(0, -1).join(' ')} </span>}
            <span className="bg-gradient-to-r from-[#0E72C9] to-[#2A9D8F] bg-clip-text text-transparent">
              {heroTitleWords[heroTitleWords.length - 1] ?? ''}
            </span>
          </h1>
          <p className="font-inter mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base md:text-xl md:leading-8">
            {content.hero.subtitle}
          </p>

          <nav aria-label="News sections" className="mt-6 flex justify-center sm:mt-8">
            <div className="inline-flex rounded-full border border-[#d2dce5] bg-white p-1 shadow-[0_3px_5px_rgba(0,0,0,0.16)]">
              {content.pillSelector.options.map((option) => {
                const isActive = option.id === 'blogs';
                const href = option.id === 'publications'
                  ? `/${lang}/publications/`
                  : option.id === 'blogs'
                    ? `/${lang}/blog/`
                    : `/${lang}/news/`;
                const classes = 'rounded-full px-4 py-2 text-sm font-medium transition sm:px-6 sm:py-2.5 sm:text-base';
                return isActive ? (
                  <span key={option.id} aria-current="page" className={`${classes} bg-gradient-to-r from-[#0E72C9] to-[#2A9D8F] text-white shadow-md`}>
                    {option.label}
                  </span>
                ) : (
                  <Link key={option.id} href={href} className={`${classes} text-[#2C3540] hover:bg-gray-100`}>
                    {option.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#fbfeff] to-[#edf8fc] px-6 py-8 sm:px-8 sm:py-14 lg:px-16 lg:py-[76px]">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-7 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-center lg:gap-5">
            <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2 lg:flex-nowrap lg:gap-3">
              {desktopCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selectedCategory === category}
                  onClick={() => selectCategory(category)}
                  className={`hidden min-h-10 whitespace-nowrap rounded-full border px-5 text-sm shadow-[0_2px_3px_rgba(25,47,65,0.18)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1689c5] lg:inline-flex lg:items-center ${selectedCategory === category ? 'border-transparent bg-gradient-to-r from-[#087dc9] to-[#20a38e] text-white' : 'border-[#d6e0e7] bg-white text-[#36414d] hover:border-[#82b8d3]'}`}
                >
                  {content.categories[category as keyof typeof content.categories]}
                </button>
              ))}
              {mobileCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selectedCategory === category}
                  onClick={() => selectCategory(category)}
                  className={`inline-flex min-h-10 items-center whitespace-nowrap rounded-full border px-4 text-sm shadow-[0_2px_3px_rgba(25,47,65,0.18)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1689c5] lg:hidden ${selectedCategory === category ? 'border-transparent bg-gradient-to-r from-[#087dc9] to-[#20a38e] text-white' : 'border-[#d6e0e7] bg-white text-[#36414d] hover:border-[#82b8d3]'}`}
                >
                  {content.categories[category as keyof typeof content.categories]}
                </button>
              ))}
            </div>

            <label className="flex min-h-12 w-full items-center gap-3 rounded-full border border-[#cbd8e2] bg-white px-4 shadow-[0_2px_4px_rgba(25,47,65,0.18)] focus-within:border-[#1689c5] focus-within:ring-2 focus-within:ring-[#1689c5]/20 lg:ml-auto lg:max-w-[370px]">
              <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-[#485663]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => updateSearch(event.target.value)}
                placeholder={content.filters.searchPlaceholder}
                aria-label="Search through blogs"
                className="w-full border-0 bg-transparent text-sm text-[#253341] outline-none placeholder:text-[#aab9c9] focus:ring-0 sm:text-base"
              />
            </label>
          </div>

          {filteredPosts.length === 0 ? (
            <p role="status" className="py-8 text-center text-gray-600">{content.emptyMessage}</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-7">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} lang={lang} category={content.categories[categoryBySlug[post.slug] ?? 'research']} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ActionBanner
        title={content.section5.title}
        text={content.section5.text}
        buttonText={content.section5.button}
        page={`/${lang}/join-us/`}
        leftAligned
      />
    </main>
  );
}
