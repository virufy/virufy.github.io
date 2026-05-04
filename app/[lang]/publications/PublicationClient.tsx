'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  HexagonDottedBackground,
  PhoneHeader,
} from '@/public/images/publications/index';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import PublicationCard from './PublicationCard';
import Head from 'next/head';
import Link from 'next/link';

const PublicationsPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    publications: {
      publicationsSection,
      publicationsCards,
      collaborateSection,
    },
  } = usei18n(lang);

  return (
    <>
      <Head>
        <title>Publications - Virufy</title>
        <meta
          name="description"
          content="Explore Virufy's published research and scientific contributions to AI-driven healthcare solutions worldwide."
        />
      </Head>
      <div className="relative">
        {/* Hero Section */}
        <section>
          {/* Hero Container */}
          <div className="relative bg-[#255292]">
            <ExportedImage
              src={PhoneHeader}
              className="absolute h-full w-full object-cover opacity-30"
              alt=""
              priority
              basePath={basePath}
            />

            {/* Text Container */}
            <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 pb-40 pt-64 text-center font-medium opacity-95">
              <h1 className="text-4xl font-bold text-green-500 sm:text-5xl">
                {publicationsSection.title}
              </h1>
              {publicationsSection.texts.map((text: string, i: number) => (
                <p key={i} className="text-white">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Gradient Overlay Container */}
        <div className="relative bg-[#255292]">
          <ExportedImage
            src={HexagonDottedBackground}
            className="absolute h-full w-full object-cover opacity-30"
            alt=""
            priority
            basePath={basePath}
          />

          {/* Publications Section */}
          <section>
            {/* Cards Container */}
            <div className="relative flex flex-col items-center justify-center space-y-8 px-10 pt-28">
              {publicationsCards.map((publication, i) => (
                <div
                  key={i}
                  className="space-y-4 rounded-xl bg-[#00000060] px-10 py-8 text-left text-white sm:px-16 md:w-[700px] md:space-y-5"
                >
                  <PublicationCard {...publication} />
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team Section */}
          <section>
            <div className="relative mx-auto max-w-4xl space-y-24 px-8 py-40 text-center font-medium text-white md:space-y-14">
              <h2 className="mb-16 text-4xl leading-normal md:leading-relaxed">
                {collaborateSection.title}
              </h2>
              <Link href={`/${lang}/join-us`}>
                <button
                  className="medium primary p-6 px-2 py-2 text-xs text-white md:px-16 md:py-4 md:text-base md:text-xl"
                  style={{
                    borderRadius: '50px',
                    background:
                      'linear-gradient(0deg, #19479c 0%, #2750a8 50%, #19479c 100%)',
                    border: '2px solid #3fcf94',
                  }}
                >
                  {collaborateSection.linkText}
                </button>
              </Link>
            </div>
          </section>
          <div className="h-[98px] bg-gradient-to-b from-[#255292] to-black"></div>
        </div>
      </div>
    </>
  );
};

export default PublicationsPage;
