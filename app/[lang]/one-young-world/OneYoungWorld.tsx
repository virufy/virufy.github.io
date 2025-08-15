import { type OywSection } from '@/app/i18n/types/oneYoungWorld';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import TestimonialSlider from './TestimonialSlider';

type OywProps = {
  oywSection: OywSection;
  lang: Locale;
};

const OneYoungWorld = ({
  lang,
  oywSection: {
    virufyAndOyw: { subTitle, texts, videoUrl, videoTitle },
    whyOyw: { title: whyOywTitle, cards },
    volunteerStories: { title: volunteerTitle, text, testimonials, buttonText },
  },
}: OywProps) => {
  return (
    <article>
      <div className="mx-auto max-w-5xl">
        {/* One Young World Section */}
        <section>
          <div className="flex flex-col items-center justify-center px-8 py-12 text-white opacity-95 md:py-0 md:pt-20">
            <div>
              <h2 className="mb-8 text-center text-2xl font-bold md:text-left md:text-3xl md:font-medium">
                {subTitle}
              </h2>

              <div className="mb-12 space-y-8">
                {texts.map((text, i) => (
                  <p
                    key={i}
                    className="text-sm font-medium leading-relaxed md:text-base"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            <iframe
              className="aspect-video w-full px-4 py-1 md:px-16 md:py-9"
              src={videoUrl}
              title={videoTitle}
              allow="fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </section>

        {/* Why OYW Section */}
        <section className="mb-16 md:opacity-95">
          <div className="mx-8 flex flex-col text-white">
            <h2 className="my-14 text-center text-2xl font-bold md:my-10 md:text-3xl md:font-bold">
              {whyOywTitle}
            </h2>

            {/* Cards Container */}
            <div className="space-y-0 rounded-2xl bg-white pl-4 pr-4 font-medium md:grid md:grid-cols-2 md:space-x-0 md:py-0">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="flex justify-center space-x-2 bg-white p-4 text-black md:px-12"
                >
                  <ExportedImage
                    className="my-auto mr-4 h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
                    src={card.image}
                    alt={card.altText}
                    basePath={basePath}
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold md:text-xl">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="pb-14 md:opacity-95">
          <div className="mx-8 flex flex-col items-center space-y-10 text-white">
            <div className="md:pb-12">
              <h2 className="my-12 text-center text-2xl font-bold md:mb-6 md:mt-16 md:text-3xl md:font-bold">
                {volunteerTitle}
              </h2>
              <p className="text-sm font-medium leading-relaxed md:text-base">
                {text}
              </p>
            </div>

            <TestimonialSlider testimonials={testimonials} />

            {/* Updated Button Style */}
            <Link
              href={`/${lang}/join-us`}
              className="inline-block rounded-full border-2 border-white bg-gradient-to-br from-[#1c3f94] to-[#2a5bd7] px-6 py-3 text-sm font-medium text-white shadow-md transition-transform duration-300 hover:scale-105 md:px-12 md:py-4 md:text-base"
            >
              {buttonText}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};

export default OneYoungWorld;
