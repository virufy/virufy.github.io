'use client';

import { Fragment, useMemo, useCallback, Suspense } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { SplashBackground, WaveBackground } from '@/public/images/ai/index';
import { usei18n } from '../../i18n';
import AiCard from './AiCard';
import { type AiCard as AiCardProps } from '@/app/i18n/types/ai';

// Types 

type TabKey = 'technology' | 'research';

type TitleText = { type: string; text: string };

type PublicationsItem = {
  title: string;
  date: string; // e.g., 'October 2022'
  href: string;
  cta?: string;
};

type CTA = { demoAppUrl?: string; joinUrl?: string };

type I18nReturn = {
  ai: {
    heroSection: { title: TitleText[]; text: string; url: string; linkText: string };
    aiSection: { title: string; aiCards: AiCardProps[] };
  };
  cta?: CTA;
};

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(' ');
}

// Publications

const publicationsData: PublicationsItem[] = [
  {
    title: 'Hierarchical Multi-modal Transformer for Automatic Detection of COVID-19',
    date: 'October 2022',
    href: 'https://example.com/paper1',
    cta: 'Read More',
  },
  {
    title: 'Covid 10 Calculator – Positive U.S. Socio-Economic Impact',
    date: 'January 2022',
    href: 'https://example.com/paper2',
    cta: 'Read More',
  },
  {
    title: 'Using Deep Learning with Large Aggregated Datasets for Covid-19',
    date: 'January 2022',
    href: 'https://example.com/paper3',
    cta: 'Read More',
  },
  {
    title: 'Virufy: Global Applicability of Crowdsourced and Clinical Data sets for AI Detection',
    date: 'November 2022',
    href: 'https://example.com/paper4',
    cta: 'Read More',
  },
  {
    title: 'Challenges and Opportunities in the Deploying of COVID-19 Cough AI Systems',
    date: 'September 2021',
    href: 'https://example.com/paper5',
    cta: 'Read More',
  },
];

function PublicationCard({ title, date, href, cta = 'Read More' }: PublicationsItem) {
  return (
    <article className="rounded-2xl w-full md:w-[1172px] bg-white text-black shadow-xl">
      <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:gap-6 md:p-6">
        <div className="flex-1">
          <h3 className="text-base font-bold md:text-lg leading-snug">{title}</h3>
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
            className="inline-flex items-center justify-center rounded-full text-sm font-bold transition bg-[#0E3273] text-white hover:bg-[#0E3273]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600 px-6 py-2"
            aria-label={`${cta}: ${title}`}
          >
            {cta}
          </a>
        </div>
      </div>
    </article>
  );
}

// Tabbed Content

function TabbedContent({
  lang,
  heroSection,
  aiSection,
  cta,
}: {
  lang: Locale;
  heroSection: { title: TitleText[]; text: string; url: string; linkText: string };
  aiSection: { title: string; aiCards: AiCardProps[] };
  cta?: CTA;
}) {
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();

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

  return (
    <>
      {/* Tabs under hero section */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex justify-center md:justify-center">
          <nav role="tablist" aria-label="AI Tabs">
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
                    'w-32 h-9 font-bold transition border-b-2 bg-transparent',
                    active ? 'text-white border-[#30DA74]' : 'text-white/80 hover:text-white border-transparent'
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
        {/* Technology */}
        <div
          id="panel-technology"
          role="tabpanel"
          aria-labelledby="tab-technology"
          hidden={currentTab !== 'technology'}
          className="space-y-10"
        >
          <h2 className="text-center text-3xl font-semibold text-white md:text-center">{aiSection.title}</h2>

          <div className="grid gap-8 md:grid-cols-1">
            {aiSection.aiCards.map((card, idx) => (
              <div key={card.title || idx} className="rounded-2xl bg-white text-[#123465] shadow-xl px-6 py-6 md:px-10 md:py-8">
                <AiCard {...card} />
              </div>
            ))}

            {/* Centered CTA */}
            <div className="mt-10 flex justify-center">
              <div className="mt-4">
                <Link
                  href={`/${lang}/publications`}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-bold shadow-md bg-[#0E3273] text-white hover:opacity-90 transition"
                >
                  Demo App
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Research */}
        <div
          id="panel-research"
          role="tabpanel"
          aria-labelledby="tab-research"
          hidden={currentTab !== 'research'}
          className="space-y-8"
        >
          <h2 className="text-center text-3xl font-semibold text-white md:text-left">{heroSection.linkText || 'Our Research'}</h2>

          <div className="space-y-6">
            {publicationsData.map((p) => (
              <PublicationCard key={p.title} {...p} />
            ))}
          </div>

          {/* Bottom callout */}
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-white/90">Interested in collaborating on our research?</p>
            <div className="mt-4">
              <Link
                href={cta?.joinUrl || `/${lang}/join-us`}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-bold shadow-md bg-[#0E3273] text-white hover:opacity-90 transition"
              >
                Join our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Page Component

export default function AiPage({ params: { lang } }: { params: { lang: Locale } }) {
  const {
    ai: { heroSection, aiSection },
    cta,
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

          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 md:pb-28 md:pt-36">
            <div className="text-center text-white md:text-left md:self-center">
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

              <p className="mt-5 text-lg opacity-95 md:max-w-2xl">{heroSection.text}</p>
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

        {/* Everything using useSearchParams is inside Suspense */}
        <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-10 text-white">Loading…</div>}>
          <TabbedContent lang={lang} heroSection={heroSection} aiSection={aiSection} cta={cta} />
        </Suspense>

        <div className="h-[98px] bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
}
