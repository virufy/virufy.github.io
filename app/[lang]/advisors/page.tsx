import { type Locale } from '@/i18n-config.ts';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import Section4 from './Section4';
import { AdvisorsNewBackground } from '@/public/images/advisors';
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
];
export const metadata = {
  title: 'Virufy Advisors | Global Experts Supporting AI in Healthcare',
  description:
    'Meet the Virufy advisors — global leaders and experts guiding our mission to harness AI for healthcare innovation.',
};
const AdvisorsPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    people: { titleImage, sectionMeetOurFounder, sectionAdvisors },
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

      {/* Title text */}
      <div className="relative flex justify-center px-4 pb-10 pt-48">
        <Title
          Text={titleImage}
          H="h4"
          TitleClassProps="text-black font-bold text-center text-2xl md:text-4xl max-w-[900px]"
        />
      </div>

      {/* Spacer between title and Section4 */}
      <div className="h-15 md:h-100" />

      {/* Founder + Advisors section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center">
          {/* Founder Section */}
          <Section4
            TitleSize1="h1"
            TitleSize2="h3"
            TitleLabel1={sectionMeetOurFounder.titleMeetOurFounder}
            TitleLabel2={sectionMeetOurFounder.titleAmil}
            TextLabel={sectionMeetOurFounder.textAmil}
            labelButton={sectionMeetOurFounder.button}
            buttonRoute={`/${lang}/amils-story`}
            ContainerTitleProps={{ style: { paddingLeft: '20px' } }}
            ContainerTextProps={{ style: { paddingLeft: '20px' } }}
            alt="Founder and CEO Amil Khanzada"
          />

          {/* Advisors Title */}
          <Title
            H="h1"
            Text={sectionAdvisors.title}
            TitleClassProps="text-black font-black text-center my-10"
          />

          {/* Advisors Cards */}
          <div className="grid grid-cols-2 gap-4 pb-16 text-black sm:gap-6 lg:gap-x-12 lg:gap-y-10 xl:grid-cols-3">
            {advisorOrder.map((id) => {
              const advisor = sectionAdvisors.advisors[id];
              if (!advisor) {
                console.warn(
                  `Advisor with ID "${id}" is missing in advisors object`
                );
                return null; // skip missing advisor
              }

              const { img, name, role, texts, link } = advisor;

              return (
                <div
                  key={id}
                  className="relative max-w-40 bg-white bg-opacity-30 text-center md:w-[375px] md:max-w-[22rem]"
                >
                  <Link target="_blank" href={link}>
                    <ExportedImage
                      className="h-[225px] w-[158px] object-cover md:h-[450px] md:w-[375px]"
                      src={img}
                      alt={name}
                      basePath={basePath}
                      width={375}
                      height={450}
                    />
                  </Link>
                  <div className="pb-2 md:pb-4">
                    <h2 className="pt-2 text-xs font-bold text-black md:pt-4 md:text-2xl">
                      {name}
                    </h2>
                    <div className="py-1 text-[10px] font-semibold text-black md:text-xl">
                      {role}
                    </div>
                    {texts.map((text, i) => (
                      <div
                        key={i}
                        className="text-[9px] font-normal text-black md:text-lg lg:text-lg"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsPage;
