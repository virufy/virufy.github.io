import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import Link from 'next/link';
import ActionBanner from '../components/ActionBanner';
import { ColorProps, TextSizeProps } from '../themes';
import SevenInfoCard from '../components/SevenInfoCard';
import SevenSectionHeader from '../components/SevenSectionHeader';

import {
  SupportOurMissionIcon,
  HeroIcon,
} from '@/public/images/sevenSupportUs';

const unoptimized = process.env.NODE_ENV !== 'production';

const SevenSupportUs = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    donate: { introSection, impactSection, pillars, donateOptions, banner },
  } = usei18n(lang);

  return (
    <main>
      {/* HERO */}
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 flex h-[400px] overflow-hidden sm:h-[500px] md:h-[550px] lg:h-[600px]">
          <ExportedImage
            src={HeroIcon}
            alt="background"
            fill
            priority
            className="object-cover"
            basePath={basePath}
            unoptimized={unoptimized}
          />
        </div>

        {/* Hero content */}
        <section className="relative mt-2 px-4 pb-12 pt-12 text-center sm:mt-3 sm:px-6 sm:pb-16 sm:pt-16 md:mt-4 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-3 pr-4 text-xs text-[#084b8a] sm:mb-8 sm:py-1 sm:pl-4 sm:pr-5 sm:text-sm md:mb-10">
              <ExportedImage
                src={SupportOurMissionIcon}
                alt="globe icon"
                height={17}
                width={17}
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                basePath={basePath}
                priority
                unoptimized={unoptimized}
              />
              &nbsp;{introSection.tag}
            </div>

            <h1 className="font-semibold text-gray-700">
              {introSection.title.map((t, i) => (
                <span
                  key={i}
                  className={`block text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${
                    i === introSection.title.length - 1
                      ? 'bg-gradient-to-b from-blue-500 to-emerald-500 bg-clip-text text-transparent'
                      : ''
                  }`}
                >
                  {t}
                </span>
              ))}
            </h1>

            <p className="mt-4 max-w-[800px] text-sm text-gray-600 sm:mt-5 sm:text-base md:mt-6 md:text-lg">
              {introSection.text}
            </p>

            <Link
              href="/"
              className={`mt-6 inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm sm:mt-7 sm:px-5 sm:py-2.5 sm:text-base md:mt-8 md:px-6 md:py-3 ${TextSizeProps.p} ${ColorProps.bgGradientReverse} text-white`}
            >
              {introSection.buttonText}
            </Link>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <div className="w-full bg-[#F3F8FF]">
          <section className="relative mx-auto max-w-6xl px-6 pb-28 pt-10 md:pb-28 md:pt-32">
            <div className="mx-auto max-w-[1000px]">
              <SevenSectionHeader
                title={impactSection.title}
                subtitle={impactSection.description}
              />

              <div className="my-16 grid gap-8 md:grid-cols-3">
                {pillars.map((pillar, idx) => (
                  <SevenInfoCard
                    key={idx}
                    title={pillar.title}
                    text={pillar.description}
                    icon={pillar.icon}
                  />
                ))}
              </div>

              <SevenSectionHeader
                title={donateOptions.title}
                subtitle={donateOptions.subtitle}
              />

              <div className="flex flex-col gap-8 md:flex-row md:justify-center">
                {donateOptions.options.map((option, idx) => (
                  <SevenInfoCard
                    key={idx}
                    title={option.name}
                    text={option.description}
                  >
                    <div className="flex items-center gap-3">
                      <Link
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 ${TextSizeProps.p} ${ColorProps.bgGradientReverse} text-white`}
                      >
                        {option.buttonText}
                        {option.icon && (
                          <ExportedImage
                            src={option.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="brightness-0 invert"
                            basePath={basePath}
                            priority
                            unoptimized={unoptimized}
                          />
                        )}
                      </Link>
                    </div>
                  </SevenInfoCard>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Banner */}
        <section>
          <ActionBanner title={banner.title} text={banner.text[0]} />
        </section>
      </div>
    </main>
  );
};

export default SevenSupportUs;
