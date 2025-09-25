
'use client';
import { Fragment, useMemo, useCallback } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { SplashBackground, WaveBackground } from '@/public/images/ai/index'

import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Fragment } from 'react';

import { usei18n } from '../../i18n';
import AiCard from './AiCard';

type TabKey = 'technology' | 'research';

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(' ');
}

/** Inline publications list (keeps ai.ts untouched) */
const publicationsData: Array<{
  title: string;
  date: string; // e.g., "October 2022"
  href: string;
  cta?: string;
}> = [
    {
      title:
        'Hierarchical Multi-modal Transformer for Automatic Detection of COVID-19',
      date: 'October 2022',
      href: 'https://example.com/paper1',
      cta: 'Read More',
    },
    {
      title:
        'Covid 10 Calculator – Positive U.S. Socio-Economic Impact',
      date: 'January 2022',
      href: 'https://example.com/paper2',
      cta: 'Read More',
    },
    {
      title:
        'Using Deep Learning with Large Aggregated Datasets for Covid-19',
      date: 'January 2022',
      href: 'https://example.com/paper3',
      cta: 'Read More',
    },
    {
      title:
        'Virufy: Global Applicability of Crowdsourced and Clinical Data sets for AI Detection',
      date: 'November 2022',
      href: 'https://example.com/paper4',
      cta: 'Read More',
    },
    {
      title:
        'Challenges and Opportunities in the Deploying of COVID-19 Cough AI Systems',
      date: 'September 2021',
      href: 'https://example.com/paper5',
      cta: 'Read More',
    },
  ];

function PublicationCard({
  title,
  date,
  href,
  cta = 'Read More',
}: (typeof publicationsData)[number]) {
  return (
    <article className="rounded-2xl w-[1172px] h-[184px] bg-white text-black shadow-xl">
      <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:gap-6 md:p-6">
        <div className="flex-1">
          <h3 className="text-base font-bold md:text-lg leading-snug">
            {title}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-xs font-bold text-black/70 md:text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-black/70" />
            <span>{date}</span>
          </div>
        </div>
        <div className="shrink-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex w-[213px] h-[42px] items-center justify-center rounded-full text-sm font-bold transition
           bg-[#0E3273] text-white hover:bg-[#0E3273] 
           focus-visible:outline-none w-[103px] h-[27px] focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600"
            aria-label={`${cta}: ${title}`}
          >
            {cta}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function AiPage({ params: { lang } }: { params: { lang: Locale } }) {
  const {
    ai: { heroSection, aiSection },
    cta, // optional i18n: { demoAppUrl, joinUrl }
  } = usei18n(lang);

  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();

  // URL-synced tabs (default Technology)
  const currentTab: TabKey = useMemo(() => {
    const q = (search.get('tab') || '').toLowerCase();
    return q === 'research' ? 'research' : 'technology';
  }, [search]);

  const setTab = useCallback(
    (t: TabKey) => {
      const params = new URLSearchParams(search.toString());
      params.set('tab', t);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, search]
  );

  // Style
  return (
    <div className="relative">
      {/* =================== HERO =================== */}
      <section>
        <div className="relative bg-[#4883e3]">
          <ExportedImage
            className="absolute h-full w-full object-cover opacity-30"
            src={SplashBackground}
            alt=""
            priority
            basePath={basePath}
          />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 md:pb-28 md:pt-36">
            <div className="text-center text-white md:text-left md:self-center">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {heroSection.title.map((t: any, i: number) =>
                  t.type === 'text' ? (
                    <Fragment key={i}>{t.text} </Fragment>
                  ) : (
                    <span key={i} className="font-extrabold text-[#1ecf7a]">
                      {t.text}
                    </span>
                  )
                )}
              </h1>
              <p className="mt-5 text-lg opacity-95 md:max-w-2xl">{heroSection.text}</p>


            </div>
          </div>
        </div>
      </section>

      {/* =================== BODY =================== */}
      <div className="relative bg-[#255292]">
        <ExportedImage
          src={WaveBackground}
          alt=""
          className="pointer-events-none absolute h-full w-full object-cover opacity-40"
          priority
          basePath={basePath}
        />

        {/* Tabs under hero */}
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex justify-center md:justify-center">
            <nav
              role="tablist"
              aria-label="AI Tabs"

            >
              {(['technology', 'research'] as TabKey[]).map((key) => {
                const active = currentTab === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls={`panel-${key}`}
                    id={`tab-${key}`}
                    onClick={() => setTab(key)}
                    className={cx(
                      'w-32 h-9 text-h3 font-bold transition border-b-2 bg-transparent', // no fill
                      active
                        ? 'text-white border-[#30DA74]'                 // white text + blue underline
                        : 'text-white/80 hover:text-white border-transparent' // white-ish text, no underline
                    )}
                  >
                    {key === 'technology' ? 'Technology' : heroSection.linkText || 'Our Research'}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          {/* ========== Technology (default) ========== */}
          <div
            id="panel-technology"
            role="tabpanel"
            aria-labelledby="tab-technology"
            hidden={currentTab !== 'technology'}
            className="space-y-10"
          >
            <h2 className="text-center text-3xl font-semibold text-white md:text-center">
              {aiSection.title}
            </h2>

            {/* bolder/recolored boxes */}
            <div className="grid gap-8 md:grid-cols-1">
              {aiSection.aiCards.map((card: any, idx: number) => (
                <div key={card.title || idx} className="rounded-2xl bg-white text-[#123465] shadow-xl px-6 py-6 md:px-10 md:py-8">
                  <AiCard {...card} />
                </div>
              ))}
              <div className="mt-10 w-705 h-149 text-center">
              <div className="mt-4">
                <Link
                  href={ `/${lang}/publications`}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-bold shadow-md
                             bg-[#0E3273] text-white hover:opacity-90 transition"
                >
                  Demo App
                </Link>
              </div>
            </div>
            </div>
          </div>

          {/* ========== Our Research (Publications inline) ========== */}
          <div
            id="panel-research"
            role="tabpanel"
            aria-labelledby="tab-research"
            hidden={currentTab !== 'research'}
            className="space-y-8"
          >
            <h2 className="text-center text-3xl font-semibold text-white md:text-left">
              {heroSection.linkText || 'Our Research'}
            </h2>

            <div className="space-y-6">
              {publicationsData.map((p) => (
                <PublicationCard key={p.title} {...p} />
              ))}
            </div>

            {/* “Join our team” callout at bottom like your mock */}
            <div className="mt-10 w-705 h-149 text-center">
              <p className="text-white/90">
                Interested in collaborating on our research?
              </p>
              <div className="mt-4">
                <Link
                  href={cta?.joinUrl || `/${lang}/join-us`}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-bold shadow-md
                             bg-[#0E3273] text-white hover:opacity-90 transition"
                >
                  Join our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[98px] bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
}
