'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { PressReleasesBackground } from '@/public/images/pressReleases';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import NewsCard from './NewsCard';
import Head from 'next/head';

const NewsPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    pressReleases: { pressReleaseSection, pressReleaseCards },
  } = usei18n(lang);

  return (
    <>
      <Head>
        <title>News - Virufy</title>
        <meta
          name="description"
          content="Stay updated with the latest news and press releases about Virufy's advancements in AI healthcare innovation."
        />
      </Head>

      <div className="relative -top-24">
        {/* Hero Section */}
        <section>
          <div className="relative bg-[#2b5290]">
            <ExportedImage
              className="absolute h-full w-full object-cover opacity-30"
              src={PressReleasesBackground}
              alt=""
              priority
              basePath={basePath}
            />

            <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 py-64 text-center font-medium opacity-95">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                {pressReleaseSection.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <div className="relative -mb-24 bg-[#255292] pb-24">
          <section className="flex justify-center">
            {/* Cards Container */}
            <div className="grid gap-8 px-10 pt-28 lg:grid-cols-2 lg:px-16">
              {pressReleaseCards.map((pressRelease, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white px-10 py-8 text-left text-white"
                >
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
