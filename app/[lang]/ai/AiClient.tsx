'use client';
import PublicationCard from './PublicationCard';
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

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(' ');
}

// Publications

// Tabbed Content

function TabbedContent({
  lang,
  heroSection,
  aiSection,
  cta,
}: {
  lang: Locale;
  heroSection: {
    title: TitleText[];
    text: string;
    url: string;
    linkText: string;
  };
  aiSection: { title: string; aiCards: AiCardProps[] };
  cta?: CTA;
}) {
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();
  const {
    publications: { publicationsCards },
  } = usei18n(lang);
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
                    'h-9 w-32 border-b-2 bg-transparent font-bold transition',
                    active
                      ? 'border-[#30DA74] text-white'
                      : 'border-transparent text-white/80 hover:text-white'
                  )}
                >
                  {key === 'technology'
                    ? 'Technology'
                    : heroSection.linkText || 'Our Research'}
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
           
            {/* commenting the button 
            <div className="mt-10 flex justify-center">
              <div className="mt-4">
                <Link
                  href={`/${lang}/publications`}
                  className="inline-flex items-center justify-center rounded-full bg-[#0E3273] px-6 py-3 text-base font-bold text-white shadow-md transition hover:opacity-90"
                >
                  Demo App
                </Link>
              </div>
            </div> */}
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
          <h2 className="text-center text-3xl font-semibold text-white md:text-left">
            {heroSection.linkText || 'Our Research'}
          </h2>

          {publicationsCards.map((publication, i) => (
            <div key={i} className=" ">
              <PublicationCard {...publication} />
            </div>
          ))}

          {/* Bottom callout */}
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-white/90">
              Interested in collaborating on our research?
            </p>
            <div className="mt-4">
              <Link
                href={cta?.joinUrl || `/${lang}/join-us`}
                className="inline-flex items-center justify-center rounded-full bg-[#0E3273] px-6 py-3 text-base font-bold text-white shadow-md transition hover:opacity-90"
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

export default function AiPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
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

        {/* Everything using useSearchParams is inside Suspense */}
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-6 py-10 text-white">
              Loading…
            </div>
          }
        >
          <TabbedContent
            lang={lang}
            heroSection={heroSection}
            aiSection={aiSection}
            cta={cta}
          />
        </Suspense>

        <div className="h-[98px] bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
}
