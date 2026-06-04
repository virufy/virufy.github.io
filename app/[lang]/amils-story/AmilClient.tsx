'use client';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import { BgHeader, AmilHeadshot } from '@/public/images/amilsStory/index';
import InfoIcon from '@/public/icons/icon-info-blue-tag.png';
import { ColorProps, TextSizeProps } from '../themes';
import ActionBanner from '../components/ActionBanner';
import AmilTimeline from './AmilTimeline';
import { useState, useRef } from 'react';
import ArrowDownIcon from '@/public/icons/icon-arrow-down.png';

export default function AmilsStoryPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    amilsStory: {
      heroSection,
      storySection,
      milestoneSection,
      oywSection,
      banner,
    },
  } = usei18n(lang);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* HERO */}
      <section>
        {/* Hero Background */}
        <div className="relative bg-white">
          <ExportedImage
            className="absolute h-full w-full opacity-20"
            fill
            src={BgHeader}
            alt="world map background image"
            priority
            basePath={basePath}
          />

          {/* Meet Our Founder*/}
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center border-b border-[#bcc7d4] px-6 pb-12 pt-28 md:border-0 md:pb-28 md:pt-36">
            <div className="flex text-center text-black md:self-center md:text-left">
              <div className="mr-10 hidden w-1/3 items-center md:flex">
                <ExportedImage
                  className="aspect-square w-full max-w-xs rounded-2xl object-cover"
                  src={AmilHeadshot}
                  alt="Amil's Headshot"
                  basePath={basePath}
                />
              </div>
              <div className="md:w-2/3">
                <span className="mb-10 inline-block rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-4 pr-5 text-[#084b8a]">
                  <ExportedImage
                    className="inline"
                    src={InfoIcon}
                    alt="Info Icon"
                    basePath={basePath}
                  />
                  &nbsp; {heroSection.tag}
                </span>

                <div className="flex justify-center md:hidden">
                  <ExportedImage
                    className="aspect-square w-full max-w-xs rounded-2xl object-cover"
                    src={AmilHeadshot}
                    alt="Amil's Headshot"
                    basePath={basePath}
                  />
                </div>

                <h1 className={`${TextSizeProps.h1} pb-10 pt-4`}>
                  {heroSection.title.map((part, i) => {
                    if (part.type === 'span') {
                      return (
                        <span key={i} className={ColorProps.textGradient}>
                          {part.text}
                        </span>
                      );
                    }
                    return <span key={i}>{part.text}</span>;
                  })}
                </h1>

                <p className={`mt-1 ${TextSizeProps.p} ${ColorProps.textGray}`}>
                  {heroSection.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amil's Story */}
      <div className="relative bg-gradient-to-b from-[#FBFEFF] to-[#EEF8FD] text-black">
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          <div className="">
            <h2
              className={`text-center md:text-left ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}
            >
              {storySection.title}
            </h2>
            {/* Amil's Story Paragraph */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:max-h-full ${open ? 'max-h-[1000px]' : 'max-h-[300px]'}`}
              ref={ref}
            >
              {storySection.texts.map((text, i) => (
                <p
                  key={i}
                  className={`my-5 text-center md:text-left ${ColorProps.textGray} ${TextSizeProps.p}`}
                >
                  {text}
                </p>
              ))}

              {/* Button */}
              <button
                onClick={() => setOpen(!open)}
                className={`sm:text-md absolute bottom-12 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center rounded-full border px-8 py-4 text-sm font-semibold ${ColorProps.bgGradientReverse} text-white shadow-sm transition hover:bg-gray-100 md:hidden`}
              >
                {open ? 'See Less' : 'Read More'}
                <ExportedImage
                  height={10}
                  width={10}
                  src={ArrowDownIcon}
                  alt="arrow"
                  basePath={basePath}
                  className={`ml-2.5 h-4 w-4 brightness-0 invert transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Key Milestones */}
      <div className="relative bg-[#F9FDFF] text-black">
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          <div className="">
            <h2
              className={`text-center md:text-left ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}
            >
              {milestoneSection.title}
            </h2>
            <p
              className={`mb-10 mt-5 text-center md:text-left ${TextSizeProps.p} ${ColorProps.textGray}`}
            >
              {milestoneSection.text}
            </p>
            {/* Animated Timeline */}
            <AmilTimeline cards={milestoneSection.milestoneCards} />
          </div>
        </section>
      </div>

      {/* One Young World */}
      <div className="relative bg-gradient-to-b from-[#FBFEFF] to-[#EEF8FD] text-black">
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          <div className="">
            <h2 className={`${TextSizeProps.h2} pb-2`}>
              {oywSection.title.map((part, i) => {
                if (part.type === 'span') {
                  return (
                    <span key={i} className={ColorProps.textGradient}>
                      {part.text}
                    </span>
                  );
                }
                return <span key={i}>{part.text}</span>;
              })}
            </h2>
            <p
              className={`mb-10 mt-5 ${TextSizeProps.p} ${ColorProps.textGray}`}
            >
              {oywSection.text}
            </p>

            <div className="h-64 overflow-hidden rounded-2xl md:h-auto">
              <ExportedImage
                className="h-full w-full object-cover"
                fill
                src={oywSection.image}
                alt="Global Network"
                basePath={basePath}
              />
            </div>
          </div>
        </section>
      </div>

      <ActionBanner
        title={banner.title}
        text={banner.text}
        buttonText={banner.buttonText}
        page={banner.url}
      />
    </div>
  );
}
