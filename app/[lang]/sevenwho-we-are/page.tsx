import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ActionBanner from '../components/ActionBanner';
import ExportedImage from 'next-image-export-optimizer';
import StoryCard from './storycard';

const SevenSupporters = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    sevenwho_we_are: { introSection, banner, section2, section3, section4 },
  } = usei18n(lang);
  return (
    <main className="bg-[#F3F8FF]">
      {/* HERO */}
      <div className="relative w-full items-center overflow-hidden px-5 md:px-[260px]">
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
          <div className="mx-auto flex flex-col px-10 text-center">
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
            <div className="pb-2 text-left text-black">
              {introSection.title.map((p, i) => (
                <span
                  key={i}
                  className={`inline text-4xl font-semibold md:text-4xl ${
                    i === 1
                      ? 'bg-gradient-to-b from-blue-500 to-emerald-500 bg-clip-text text-transparent'
                      : ''
                  }`}
                >
                  {p + ' '}
                </span>
              ))}
            </div>
            <div className="text-left text-2xl text-gray-700">
              {introSection.text}
            </div>
          </div>
          <div className="flex w-full items-center justify-center py-4">
            <ExportedImage
              src="/images/sevenwho-we-are/amil-in-lab.png"
              alt="Amil in lab"
              width={1221}
              height={412}
              className=""
            />
          </div>
        </section>
      </div>
      <div className="relative w-full items-center overflow-hidden bg-gradient-to-t from-[#FBFEFF] to-[#EEF8FD] px-5 md:px-[260px]">
        <section className="relative mb-10 w-full pb-5 pt-5">
          <div className="flex flex-col items-start gap-10 py-2 md:flex-row">
            {/* LEFT: Title + Text */}
            <div className="w-full md:w-1/2">
              <div className="mb-4 text-4xl font-semibold text-[#1B6E64]">
                {section2.title}
              </div>

              {section2.text.map((p, i) => (
                <p
                  key={i}
                  className="py-2 text-left text-2xl font-normal text-gray-700"
                >
                  {p}
                </p>
              ))}
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
        <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-[#EEF8FD] via-[#FBFEFF]/80 to-transparent" />
      </div>

      <div className="relative w-full items-center overflow-hidden bg-gradient-to-t from-[#FBFEFF] to-[#EEF8FD] px-5 md:px-[260px]">
        <section className="my-10 mt-24">
          <div className="mb-4 text-4xl font-semibold text-[#1B6E64]">
            {section3.title}
          </div>
          <div className="py-2 text-left text-2xl font-normal text-gray-700">
            {section3.subtitle}
          </div>
          <div className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {section3.StoryCard.map((card, i) => (
              <div key={i} className="flex flex-col items-start p-6 shadow-sm">
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
      <div className="relative w-full items-center overflow-hidden bg-gradient-to-t from-[#FBFEFF] to-[#EEF8FD] px-5 md:px-[260px]">
        <section className="my-10 mt-24">
          <div className="mb-4 text-4xl font-semibold text-[#1B6E64]">
            {section4.title}
          </div>
          <div className="my-5 py-2 text-left text-2xl font-normal text-gray-700">
            {section4.subtitle}
          </div>
          <div className="my-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {section4.cardtitle.map((title, i) => (
              <div
                key={i}
                className="flex w-[276px] flex-col items-start rounded-2xl rounded-xl border border-[#bcc7d4] p-5 p-6 shadow-sm shadow-xl md:my-0"
              >
                <h1 className="bg-gradient-to-b from-[#2A9D8F] to-[#0E72C9] bg-clip-text text-[48px] font-semibold text-transparent">
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
