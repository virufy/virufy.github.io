import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ActionBanner from '../components/ActionBanner';
import ExportedImage from 'next-image-export-optimizer';
const SevenSupporters = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    sevenwho_we_are: { introSection, banner },
  } = usei18n(lang);
  return (
    <main className="bg-[#F3F8FF]">
      {/* HERO */}
      <div className="relative w-full items-center overflow-hidden px-5 md:px-20">
        <div className="absolute inset-0 -my-12 flex h-[600px] max-h-[1024px] overflow-hidden md:my-0">
          <ExportedImage
            src="/images/sevenwho-we-are/HeroBG.png"
            alt="Who We Are Background"
            fill
            className=""
          />
        </div>
        <section className="relative my-24 overflow-hidden md:py-24">
          <div className="mx-auto flex flex-col text-center">
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
            <div className="text-gray-700">
              {introSection.title.map((p, i) => (
                <span
                  key={i}
                  className="inline text-4xl font-semibold last:bg-gradient-to-b last:from-blue-500 last:to-emerald-500 last:bg-clip-text last:text-transparent md:text-4xl"
                >
                  {p + ' '}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="relative w-full"></section>
      </div>
      <ActionBanner
        title={banner.title}
        text={banner.text[0]}
        buttonText={banner.buttontext}
        lang={lang}
        page={banner.link}
      />
    </main>
  );
};
export default SevenSupporters;
