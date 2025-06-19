import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { Fragment } from 'react';
import { usei18n } from '../../i18n';

import { About_us_bg } from '@/public/images/story';

export const generateMetadata = () => {
  return {
    title: 'About Us - Virufy',
    description:
      "Learn about Virufy's mission, team, and our journey to leverage AI for global healthcare impact.",
  };
};

const StoryPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    story: { aboutUsSection, storySection, MissionSection, privacySection },
  } = usei18n(lang);

  return (
    <div className="relative pb-24">
      {/* About Us/Hero Section */}
      <section>
        <div className="relative w-full overflow-hidden py-[80px]">
          <ExportedImage
            className="fixed left-0 top-0 z-[-10] h-full w-full object-cover"
            src={About_us_bg}
            alt="About us background image"
            width={1512}
            height={9070}
            priority
            basePath={basePath}
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center sm:pt-[50px] lg:pt-[180px]">
            {/* Sizing & Spacing Container */}
            <div className="space-y-6 rounded-[64px] bg-white p-5 text-center font-medium text-black opacity-85 sm:w-[420px] sm:p-[40px] lg:w-full lg:max-w-2xl lg:px-10 lg:text-left">
              <div className="">
                <h2 className="flex items-center justify-center py-2 text-5xl font-normal">
                  {aboutUsSection.title}
                </h2>
                {aboutUsSection.texts.map((text, i) => (
                  <p
                    className="flex items-center justify-center py-5 text-center lg:text-xl"
                    key={i}
                  >
                    {text}
                  </p>
                ))}
              </div>
              {/* Story Text */}
              <div>
                <h2 className="pb-10 text-center text-5xl font-normal">
                  {storySection.title}
                </h2>
                {storySection.texts.map((el, i) => (
                  // render fragment or link component in paragraph element
                  <p
                    className="justify-center py-5 text-center lg:text-xl"
                    key={i}
                  >
                    {el.map((text, i) =>
                      text.type === 'text' ? (
                        <Fragment key={i}>{text.text}</Fragment>
                      ) : (
                        <Link
                          className="text-green-500"
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
              <div className="pb-10">
                <h2 className="mb-10 text-center text-4xl font-normal sm:text-5xl">
                  {MissionSection.title}
                </h2>
                <p className="mb-5 lg:text-xl">{MissionSection.statement}</p>
                {MissionSection.texts.map((text, i) => (
                  <li
                    className="mx-10 mb-5 leading-10 lg:text-lg lg:leading-normal"
                    key={i}
                  >
                    {text}
                  </li>
                ))}
              </div>
              <div className="pb-5">
                <h2 className="mb-10 text-center text-4xl font-normal sm:text-5xl">
                  {privacySection.title}
                </h2>
                {privacySection.texts.map((text, i) => (
                  <p
                    className="text-center leading-10 lg:text-xl lg:leading-normal"
                    key={i}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
