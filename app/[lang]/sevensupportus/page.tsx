import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import Link from 'next/link';
import ActionBanner from '../components/ActionBanner';
import { ColorProps, TextSizeProps } from '../themes';
import SevenInfoCard from '../components/SevenInfoCard';
import SevenSectionHeader from '../components/SevenSectionHeader';
import SevenFooter from '../SevenFooter';
import {
  SupportOurMissionIcon,
  HeroIcon,
} from '@/public/images/sevenSupportUs';

const unoptimized = process.env.NODE_ENV !== 'production';

const SevenSupportUs = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    sevensupportus: {
      introSection,
      impactSection,
      pillars,
      donateOptions,
      banner,
    },
  } = usei18n(lang);

  return (
    <main>
      {/* HERO */}
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 flex h-[600px] overflow-hidden">
          <ExportedImage
            src={HeroIcon}
            alt="background"
            fill
            priority
            basePath={basePath}
            unoptimized={unoptimized}
          />
        </div>

        {/* Hero content */}
        <section className="relative pb-24 pt-24 text-center">
          <div className="mx-auto flex flex-col items-center">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-4 pr-5 text-[#084b8a]">
              <ExportedImage
                src={SupportOurMissionIcon}
                alt="globe icon"
                height={17}
                width={17}
                className=""
                basePath={basePath}
                priority
                unoptimized={unoptimized}
              />
              &nbsp;
              {introSection.tag}
            </div>

            <h1 className="text-5xl font-semibold text-gray-700">
              {introSection.title.map((t, i) => (
                <span
                  key={i}
                  className="block text-6xl font-semibold last:bg-gradient-to-b last:from-blue-500 last:to-emerald-500 last:bg-clip-text last:text-transparent"
                >
                  {t}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[800px] text-lg text-gray-600">
              {introSection.text}
            </p>

            <Link
              href="/"
              className={`mt-8 inline-block whitespace-nowrap rounded-full px-6 py-3 ${TextSizeProps.p} ${ColorProps.bgGradientReverse} text-white`}
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
      </div>

      {/* Banner */}
      <section>
        <ActionBanner title={banner.title} text={banner.text[0]} />
      </section>

      <SevenFooter lang={lang} />
    </main>
  );
};

export default SevenSupportUs;
