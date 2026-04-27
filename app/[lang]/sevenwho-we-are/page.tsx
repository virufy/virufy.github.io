'use client';
import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ActionBanner from '../components/ActionBanner';
import ExportedImage from 'next-image-export-optimizer';
import StoryCard from './storycard';
import React, { useRef, useState } from 'react'; // Fix React import and add useState

const SevenSupporters = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    sevenwho_we_are: { introSection, banner, section2, section3, section4 },
  } = usei18n(lang);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <main className="bg-[#F3F8FF]">
      {/* HERO */}
      <div className="px-auto relative w-full items-center overflow-hidden">
        <div className="absolute inset-0 -mx-2 -my-12 mb-5 flex max-h-[1024px] overflow-hidden">
          {/*
          image is slightly rounded using -mx-2 to fill it
          */}
          <ExportedImage
            src="/images/sevenwho-we-are/HeroBG.png"
            alt="Who We Are Background"
            fill
            className=""
          />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-[#F3F8FF] via-[#F3F8FF]/80 to-transparent" />
        </div>
        <section className="relative my-24 overflow-hidden md:px-20 md:pt-24">
          <div className="mx-auto flex flex-col items-center px-5 text-center md:items-start md:px-10 md:text-left lg:max-w-7xl">
            <div className="mb-10 inline-flex w-[165px] items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-4 pr-5 text-[#084b8a]">
              <ExportedImage
                src="/icons/InfoVector.png"
                alt="globe icon"
                height={17}
                width={17}
                className=""
              />
              &nbsp;
              {introSection.tag}
            </div>
            <div className="pb-[100px] text-center text-black md:pb-2 md:text-left">
              {introSection.title.map((p, i) => (
                <span
                  key={i}
                  className={`inline text-3xl font-semibold md:text-4xl ${
                    i === 1
                      ? 'bg-gradient-to-b from-blue-500 to-emerald-500 bg-clip-text text-transparent'
                      : ''
                  }`}
                >
                  {p + ' '}
                </span>
              ))}
            </div>
            <div className="pb-[100px] text-center text-lg text-gray-700 md:pb-2 md:text-left">
              {introSection.text}
            </div>
          </div>
          <div className="hidden w-full items-center justify-center py-4 md:flex">
            <ExportedImage
              src="/images/sevenwho-we-are/amil-in-lab.png"
              alt="Amil in lab"
              width={1221}
              height={412}
              className=""
            />
          </div>
          <div className="w-full items-center justify-center rounded-lg px-5 md:flex md:hidden">
            <ExportedImage
              src="/images/sevenwho-we-are/Mobile-Amil-In-Lab.png"
              alt="Amil in lab"
              width={1221}
              height={412}
              className="rounded-xl object-cover"
            />
          </div>
        </section>
      </div>
      <div className="relative w-full overflow-hidden bg-gradient-to-t from-[#FBFEFF] to-[#EEF8FD]">
        <div className="mx-auto w-full px-5 md:max-w-7xl md:px-10 lg:max-w-[1500px] lg:px-16 xl:px-20">
          <section className="relative mb-10 w-full pb-5 pt-5">
            <div className="flex flex-col items-start gap-10 py-2 md:flex-row">
              {/* LEFT: Title + Text */}
              <div className="w-full md:w-1/2">
                <div className="mb-4 text-center text-3xl font-semibold text-[#1B6E64] md:text-left md:text-4xl">
                  {section2.title}
                </div>

                <div className="relative">
                  <div
                    className={`z-10 space-y-6 text-lg text-gray-600 md:max-h-full md:max-w-2xl lg:max-w-4xl lg:text-xl ${
                      open ? 'max-h-full' : 'max-h-[300px]'
                    } overflow-hidden pb-16 transition-all duration-300`}
                    ref={ref}
                  >
                    {section2.text.map((p, i) => (
                      <p
                        key={i}
                        className="py-2 text-left font-normal text-gray-700 md:text-lg lg:text-xl"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent md:hidden" />
                  <button
                    onClick={() => setOpen(!open)}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 items-center rounded-full border border-blue-500 bg-white px-8 py-4 text-sm font-semibold text-blue-500 shadow-sm transition hover:bg-gray-100 md:hidden"
                  >
                    {open ? 'See Less ▲' : 'Read More ▼'}
                  </button>
                </div>
              </div>

              {/* RIGHT: Image */}
              <div className="flex w-full justify-center md:w-1/2">
                <ExportedImage
                  src="/images/sevenwho-we-are/Amil-Award.png"
                  alt="Descriptive alt"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-[#EEF8FD] via-[#FBFEFF]/80 to-transparent" />
      </div>

      <div className="relative w-full overflow-hidden bg-gradient-to-t from-[#FBFEFF] to-[#EEF8FD]">
        <div className="mx-auto w-full px-5 md:max-w-7xl lg:max-w-[1500px] lg:px-16 xl:px-20">
          <section className="my-10 md:mt-24">
            <div className="mb-4 text-center text-2xl font-semibold text-[#1B6E64] md:text-left md:text-4xl">
              {section3.title}
            </div>
            <div className="text-left text-center text-lg font-normal text-gray-700 md:py-2 md:text-left md:text-2xl">
              {section3.subtitle}
            </div>
            <div className="grid grid-cols-1 gap-6 md:my-10 md:grid-cols-2">
              {section3.StoryCard.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start shadow-sm md:p-6"
                >
                  <StoryCard
                    title={`${card.title}`}
                    icon={`${card.icon}`}
                    text={`${card.text}`}
                    style={`${card.style}`}
                  ></StoryCard>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="relative w-full overflow-hidden bg-gradient-to-t from-[#FBFEFF] to-[#EEF8FD]">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-16 xl:px-20">
          <section className="my-10 mt-24">
            <div className="mb-4 text-center text-2xl font-semibold text-[#1B6E64] md:text-left md:text-4xl">
              {section4.title}
            </div>
            <div className="py-2 text-left text-center text-lg font-normal text-gray-700 md:my-5 md:text-left md:text-2xl">
              {section4.subtitle}
            </div>
            <div className="my-5 grid grid-cols-2 gap-2 md:my-20 md:grid-cols-4 md:gap-6">
              {section4.cardtitle.map((title, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl border border-[#bcc7d4] p-2 text-center shadow-sm shadow-xl md:my-0 md:max-w-[276px] md:items-start md:p-6 md:text-left"
                >
                  <h1 className="bg-gradient-to-b from-[#2A9D8F] to-[#0E72C9] bg-clip-text text-center text-[42px] font-semibold text-transparent md:text-left md:text-[48px]">
                    {title}
                  </h1>
                  <p className="text-black">{section4.cardtext[i]}</p>
                  <span className="my-3 text-gray-700">
                    {section4.cardsubtext[i]}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <section className="relative w-full">
        <ActionBanner
          title={banner.title}
          text={banner.text[0]}
          buttonText={banner.buttontext}
          page={banner.link}
        />
      </section>
    </main>
  );
};
export default SevenSupporters;
