import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgBody, BgHeader } from '@/public/images/story';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { Fragment } from 'react';
import { usei18n } from '../../i18n';
import ValuesCard from './ValuesCard';

export const generateMetadata = () => {
  return {
    title: "About Us - Virufy",
    description: "Learn about Virufy's mission, team, and our journey to leverage AI for global healthcare impact.",
  };
};

const StoryPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    story: { aboutUsSection, storySection, valuesSection, privacySection },
  } = usei18n(lang);

  return (
    <div className="relative -top-24">
      {/* About Us/Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-[#1b3f6f] to-[#1b3b6f]">
          <ExportedImage
            className="absolute h-full w-full object-cover opacity-40"
            src={BgHeader}
            alt=""
            priority
            basePath={basePath}
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center py-60 lg:right-28">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl space-y-6 px-10 text-center font-medium text-white lg:max-w-2xl lg:text-left">
              <h2 className="text-5xl font-normal">{aboutUsSection.title}</h2>
              {aboutUsSection.texts.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative bg-[#3468b2]">
        <ExportedImage
          src={BgBody}
          alt=""
          className="absolute h-full w-full object-cover opacity-40"
          basePath={basePath}
        />

        {/* Story, Values, and Privacy Container */}
        <div className="-mb-24 py-40">
          {/* Story Section */}
          <section className="mb-40">
            {/* Story Container */}
            <div className="relative flex items-center justify-center lg:right-28">
              {/* Sizing & Spacing Container */}
              <div className="max-w-xl space-y-6 px-10 text-center font-medium text-white opacity-95 lg:max-w-2xl lg:text-left">
                <h2 className="text-5xl font-normal">{storySection.title}</h2>
                {storySection.texts.map((el, i) => (
                  // render fragment or link component in paragraph element
                  <p key={i}>
                    {el.map((text, i) =>
                      text.type === 'text' ? (
                        <Fragment key={i}>{text.text}</Fragment>
                      ) : (
                        <Link
                          className={
                            text.className || 
                            (!text.style?.color ? "text-blue-500" : "")
                          }
                          style={text.style || {}}
                          key={i}
                          href={`/${lang}${text.url}`}
                        >
                          {text.text}
                        </Link>
                      )
                    )}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-40">
            {/* Values Container */}
            <div className="flex items-center justify-center">
              {/* Sizing & Spacing Container */}
              <div className="max-w-3xl space-y-6 px-10 text-left font-medium text-white opacity-95 lg:max-w-4xl">
                <h2 className="text-center text-5xl font-normal lg:text-left">
                  {valuesSection.title}
                </h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 grid-rows-6 gap-y-6 rounded-3xl bg-[#132d62] px-8 py-16 sm:px-16 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-20 lg:gap-y-16 lg:space-y-0 lg:px-20">
                  {valuesSection.cards.map((card) => (
                    <div key={card.title}>
                      <ValuesCard {...card} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Section */}
          <section>
            {/* Privacy Container */}
            <div className="mx-auto max-w-xl px-10 text-center font-medium text-white opacity-95 lg:max-w-2xl">
              <h2 className="mb-10 text-4xl font-normal sm:text-5xl">
                {privacySection.title}
              </h2>
              {privacySection.texts.map((text, i) => (
                <p className="leading-10 lg:leading-normal" key={i}>
                  {text}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
