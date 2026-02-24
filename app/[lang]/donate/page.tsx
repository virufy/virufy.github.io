'use client';

import { Globe, Microscope, ShieldCheck } from 'lucide-react';
import ExportedImage from 'next-image-export-optimizer';

import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
const icons = [Globe, Microscope, ShieldCheck];

// Page Component
const DonatePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    donate: { heroSection, donateSection, donationTransparencyBlock },
  } = usei18n(lang);
  const contentWithIcons = donateSection.contentBlocks.map((block, index) => ({
    ...block,
    Icon: icons[index],
  }));
  return (
    <div className="relative">
      {/* ================= HERO ================= */}
      <section>
        <div className="relative h-[400px] w-full overflow-hidden bg-[#010c1b] md:h-[500px]">
          {/* Hero Image (right aligned, no cropping) */}
          <div className="absolute inset-0 z-0">
            <ExportedImage
              src="/images/donate/Donatebackground.png"
              alt="Donate background"
              width={1080}
              height={720}
              priority
              className="h-full w-full object-contain object-right [-webkit-mask-image:linear-gradient(to_left,black_70%,transparent_100%)] [mask-image:linear-gradient(to_left,black_70%,transparent_100%)]"
            />
          </div>

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0b1c2d] via-[#0b1c2d]/80 to-transparent" />

          {/* Hero content */}
          <div className="relative z-20 mx-auto flex h-full w-full max-w-6xl items-center px-6">
            <div className="text-left text-white">
              <h1 className="mb-6 text-3xl font-semibold md:text-4xl">
                {heroSection.title[0].text}
              </h1>
              <p className="text-lg md:text-xl">{heroSection.title[1].text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BODY ================= */}
      <div className="relative bg-white">
        {/* Donate Section */}
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          <div className="space-y-10">
            <h2 className="text-3xl font-semibold text-green-700 md:mb-6 md:text-left md:text-4xl">
              {donateSection.title}
            </h2>

            <p className="mx-auto leading-loose text-green-900 md:px-0 md:text-left md:text-lg">
              {donateSection.text}
            </p>

            <div className="bo grid gap-10 md:grid-cols-2 md:items-start">
              {/* Left column */}
              <div className="space-y-6 text-black md:text-lg">
                {contentWithIcons.map(({ title, text, Icon }, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border-b pb-6 last:border-b-0"
                  >
                    <div className="space-y-1">
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        {title}
                        <Icon className="mt-1 flex h-5 w-5 shrink-0 text-gray-500" />
                      </h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="space-y-8 text-black md:text-lg">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {donateSection.optionsTitle}
                  </h3>
                  <p className="mb-6">{donateSection.optionsText}</p>
                </div>

                {donateSection.DonationsOptionsBlock.map(
                  (
                    option: {
                      optionTitle: string;
                      optionText: string;
                      buttonText: string;
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="flex flex-col rounded-lg border px-6 py-6 shadow-lg"
                    >
                      <h4 className="mb-2 text-lg font-semibold">
                        {option.optionTitle}
                      </h4>
                      <p className="mb-6 flex-grow">{option.optionText}</p>

                      <a
                        href={
                          index === 0
                            ? 'https://www.gofundme.com/f/donate-virufy'
                            : 'https://www.paypal.com/us/fundraiser/charity/4348461'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-fit rounded bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                      >
                        {option.buttonText}
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="mt-16 border-t pt-10 text-black">
            <h3 className="mb-4 py-2 text-3xl font-semibold text-green-700 md:text-left">
              {donationTransparencyBlock.title}{' '}
            </h3>
            <p className="mx-auto leading-loose text-green-900 md:text-left md:text-lg">
              {donationTransparencyBlock.text}
            </p>
          </div>
        </section>

        {/* Bottom fade */}
        <div className="h-[98px] bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
};

export default DonatePage;
