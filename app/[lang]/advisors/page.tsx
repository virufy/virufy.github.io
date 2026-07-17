import { type Locale } from '@/i18n-config.ts';

import { usei18n } from '../../i18n';
import Title from '../components/Title';

import AdvisorsGrid from './AdvisorsGrid';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

//use this list to reorder
const advisorOrder = [
  'kara',
  'les',
  'jesse',
  'jure',
  'zafar',
  'melissa',
  'kutsuna',
  'glenn',
  'thomas',
  'madhav',
  'may',
  'rafi',
  'nobuyo',
  'hiroyuki',
  'fumihiko',
  'ronan',
  'mark',
  'faisal',
  'mert',
  'victor',
  'adam',
  'rok',
  'richard',
  'khwaja',
  'ayomide',
  'tsutomu',
  'kohei',
  'tamer',
  'shirin',
  'maurino',
  'amir',
  'ohmori',
  'tomohiro',
  'okazaki',
  'junpei',
  'peter',
  'yasuko',
];

export const metadata = {
  title: 'Virufy Advisors | Global Experts Supporting AI in Healthcare',
  description:
    'Meet the Virufy advisors — global leaders and experts guiding our mission to harness AI for healthcare innovation.',
};
const AdvisorsPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    people: { titleImage, sectionAdvisors },
  } = usei18n(lang);

  return (
    <div className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_140%_100%_at_center,_#f8fcfc_0%,_#f1f8f8_25%,_#e4eff1_60%,_#cedde2_100%)]">
      {/* Background Image */}

      <div className="relative flex flex-col items-center justify-center overflow-hidden pb-4 pt-20 md:pb-16 md:pt-40">
        <ExportedImage
          src="/images/advisors/Advisor-Background-Hero.png"
          alt=""
          basePath={basePath}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-10 flex flex-col items-center justify-center py-20 md:py-40">
          {/* Our Advisors Title */}
          <Title
            H="h1"
            Text={sectionAdvisors.title}
            TitleClassProps="text-black font-bold text-center mb-5 !text-4xl md:!text-6xl"
          />

          {/* We unite from across the world to defeat... Title */}
          <Title
            Text={titleImage}
            H="h4"
            TitleClassProps="text-[#151515] text-center text-2xl md:text-4xl max-w-[900px]"
          />
        </div>
      </div>

      <AdvisorsGrid lang={lang} advisorOrder={advisorOrder} />
    </div>
  );
};

export default AdvisorsPage;
