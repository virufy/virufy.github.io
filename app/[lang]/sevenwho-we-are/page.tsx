import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ActionBanner from '../components/ActionBanner';
const SevenSupporters = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    sevenwho_we_are: { introSection, banner },
  } = usei18n(lang);
  return (
    <main className="">
      {/* HERO */}
      <div className="relative w-full items-center overflow-hidden px-5 md:px-20">
        {introSection.tag}
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
