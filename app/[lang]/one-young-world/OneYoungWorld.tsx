import { type OywSection } from '@/app/i18n/types/oneYoungWorld';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import TestimonialSlider from './TestimonialSlider';

type OywProps = {
  oywSection: OywSection;
  lang: Locale;
};

const WhyOywCard = ({
  card,
}: {
  card: OywSection['whyOyw']['cards'][number];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-[#1B6E64]">
      {/* Mobile */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          className="flex w-full items-center gap-4 text-left"
        >
          <ExportedImage
            className="h-[60px] w-[60px] shrink-0 object-contain"
            src={card.image}
            alt={card.altText}
            basePath={basePath}
            width={100}
            height={100}
            unoptimized
          />

          <h3 className="flex-1 text-lg font-medium text-[#273344]">
            {card.title}
          </h3>

          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-blue-500 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <p className="pl-[76px] pr-2 text-sm text-[#273344]">{card.text}</p>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden items-center gap-4 md:flex">
        <ExportedImage
          className="h-[100px] w-[100px] shrink-0"
          src={card.image}
          alt={card.altText}
          basePath={basePath}
          width={100}
          height={100}
          unoptimized
        />

        <div>
          <h3 className="text-xl font-bold">{card.title}</h3>
          <p className="mt-3 text-base">{card.text}</p>
        </div>
      </div>
    </div>
  );
};

const OneYoungWorld = ({
  oywSection: {
    virufyAndOyw: { texts /*videoUrl, videoTitle*/ },
    whyOyw: { title: whyOywTitle, cards },
    volunteerStories: {
      title: volunteerTitle,
      text,
      testimonials,
      readMoreText,
    },
  },
}: OywProps) => {
  return (
    <article>
      <div className="mx-auto max-w-5xl">
        {/* One Young World Section */}
        <section>
          <div className="flex flex-col items-center justify-center px-8 py-12 text-[#1B6E64] md:py-0 md:pt-20">
            <div>
              <h2 className="mb-8 text-center text-2xl font-bold md:text-left md:text-3xl md:font-medium">
                {whyOywTitle}
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

            {/* <iframe
            {/* <iframe
              className="aspect-video w-full px-4 py-1 md:px-16 md:py-9"
              src={videoUrl}
              title={videoTitle}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe> */}
          </div>
        </section>

        {/* Why OYW Section */}
        <section className="mb-16">
          <div className="mx-8 flex flex-col text-[#1B6E64]">
            <h2 className="text-center text-2xl font-bold md:text-3xl md:font-bold"></h2>

            {/* Cards Container */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-6 md:rounded-3xl md:border md:border-[#D9E5EF] md:bg-white md:p-4 md:shadow-[0_14px_36px_rgba(15,23,42,0.28)]">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#D9E5EF] bg-white p-4 shadow-[0_8px_20px_rgba(15,23,42,0.15)] md:border-0 md:p-0 md:shadow-none"
                >
                  <WhyOywCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="pb-14">
          <div className="mx-8 flex flex-col items-center space-y-10 text-[#1B6E64]">
            <div className="md:pb-12">
              <h2 className="my-12 text-center text-2xl font-bold md:mb-6 md:mt-16 md:text-3xl md:font-bold">
                {volunteerTitle}
              </h2>
              <p className="text-sm font-medium leading-relaxed md:text-base">
                {text}
              </p>
            </div>
            <p className="mt-4 text-center text-xs font-medium text-[#1B6E64] md:hidden">
              {readMoreText}
            </p>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
      </div>
    </article>
  );
};

export default OneYoungWorld;
