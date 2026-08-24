import type { OywSection } from '@/app/i18n/types/oneYoungWorld';
import { type Locale } from '@/i18n-config';
import OneYoungWorld from './OneYoungWorld';

interface Props {
  lang: Locale;
  oyw: OywSection;
}

const MainContent = ({ lang, oyw }: Props) => {
  return (
    <>
      <main>
        <OneYoungWorld lang={lang} oywSection={oyw} />
      </main>
    </>
  );
};

export default MainContent;
