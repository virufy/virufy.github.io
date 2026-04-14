import { type Locale } from '@/i18n-config.ts';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import { AdvisorsNewBackground } from '@/public/images/advisors';
import AdvisorsGrid from './AdvisorsGrid';

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
    <div className="relative w-full overflow-hidden pt-[80px]">
      {/* Background Image */}
      <ExportedImage
        className="fixed left-0 top-0 z-[-10] h-full w-full object-cover"
        src={AdvisorsNewBackground}
        alt="Virufy Global Advisors - Leaders Supporting AI in Healthcare"
        width={1512}
        height={9070}
        priority
        basePath={basePath}
      />

      <div className="mx-10 flex flex-col items-center justify-center pb-4 pt-20 md:pb-16 md:pt-40">
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

      <AdvisorsGrid lang={lang} advisorOrder={advisorOrder} />

      {/* Blur transition to footer */}
      <div className="absolute bottom-0 block h-20 w-full bg-gradient-to-b from-transparent to-[#000000]"></div>
    </div>
  );
};

export default AdvisorsPage;
