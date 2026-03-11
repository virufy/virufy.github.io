import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import Link from 'next/link';
const unoptimized = process.env.NODE_ENV !== 'production';
import ActionBanner from '../components/ActionBanner';
const SevenSupporters = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    sevensupporters: { introSection, banner, SupporterImg },
  } = usei18n(lang);
  return (
    <main className="">
      {/* HERO */}
      <div className="relative w-full items-center overflow-hidden px-5 md:px-20">
        <div className="absolute inset-0 flex h-[600px] overflow-hidden">
          <ExportedImage
            src="/images/sevensupporters/HeroBG.png"
            alt="Your health background"
            fill
            className=""
          />
        </div>
        <section className="relative my-24 overflow-hidden md:py-24">
          <div className="mx-auto flex flex-col items-center text-center">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-4 pr-5 text-[#084b8a]">
              <ExportedImage
                src="/icons/globe-supporters.png"
                alt="globe icon"
                height={17}
                width={17}
                className=""
              />
              &nbsp;
              {introSection.tag}
            </div>
            <div className="text-gray-700">
              {introSection.title.map((p, i) => (
                <span
                  key={i}
                  className="inline text-4xl font-semibold last:bg-gradient-to-b last:from-blue-500 last:to-emerald-500 last:bg-clip-text last:text-transparent md:text-6xl"
                >
                  {p + ' '}
                </span>
              ))}
            </div>
            <div className="mx-auto">
              <h2 className="pt-10 text-center text-lg font-normal text-gray-700 md:mb-6 md:text-xl lg:w-[1000px]">
                {introSection.text}
              </h2>
            </div>
          </div>
        </section>
        <section className="to-[#EEF8FD relative w-full bg-gradient-to-b from-[#FBFEFF] pb-12">
          <div className="mx-auto max-w-[1440px] px-4">
            <ul className="grid grid-cols-2 justify-center gap-4 md:grid-cols-4 md:gap-8">
              {SupporterImg.map(({ img, alt, link }) => (
                <li
                  key={alt}
                  className="aspect-square h-[120px] w-[150px] md:h-[200px] md:w-[252px]"
                >
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={alt}
                    className="relative block h-full w-full"
                  >
                    <ExportedImage
                      src={img}
                      alt={alt}
                      basePath={basePath}
                      fill
                      priority
                      unoptimized={unoptimized}
                      className="h-full w-full rounded-3xl border border-2 object-contain p-2 shadow shadow-lg"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <section className="relative w-full">
        <ActionBanner
          title={banner.title}
          text={banner.text[0]}
          buttonText={banner.buttontext}
          lang={lang}
          page={banner.link}
        />
      </section>
    </main>
  );
};
export default SevenSupporters;
