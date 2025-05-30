import { type Locale } from '@/i18n-config.ts';
import { basePath } from '@/next.config.mjs';
import { BgHeader } from '@/public/images/advisors';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import Section4 from './Section4';

const AdvisorsPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    people: { titleImage, sectionMeetOurFounder, sectionAdvisors },
  } = usei18n(lang);

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="relative flex justify-center overflow-hidden">
          <div className="contrast-1 brightness-100">
            <ExportedImage
              className="h-full w-screen object-cover"
              src={BgHeader}
              alt=""
              priority
              basePath={basePath}
            />
          </div>
          <Title
            Text={titleImage}
            H="h4"
            TitleClassProps="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#3468B2]">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center">
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
            alt="Amil Khanzada's headshot Image"
          />

          <Title
            H="h1"
            Text={sectionAdvisors.title}
            TitleClassProps="text-center my-10 bg-transparent 
                   bg-clip-text text-transparent
                   bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]"
          />

          {/* Cards Container */}
          <div className="grid grid-cols-2 gap-4 px-4 pb-8 text-white sm:gap-6 lg:gap-x-12 lg:gap-y-10 xl:grid-cols-3">
            {sectionAdvisors.advisors.sort((a,b)=> a.index - b.index).map(
              ({ img, name, role, texts, link }) => (
                <div
                  key={name}
                  className="relative max-w-40 text-center md:w-[375px] md:max-w-[22rem]"
                >
                  <Link target="_blank" href={link}>
                    <ExportedImage
                      className="h-[225px] w-[158px] object-cover md:h-[450px] md:w-[375px]"
                      src={img}
                      alt={name}
                      basePath={basePath}
                    />
                  </Link>
                  {/* Text Container */}
                  <div className="pb-2 md:pb-4">
                    <h2 className="pt-2 text-xs md:pt-4 md:text-2xl">{name}</h2>
                    {/* Role Container */}
                    <div className="py-1 text-[10px] font-bold text-white md:text-xl">
                      {role}
                    </div>
                    {texts.map((text, i) => (
                      <div key={i} className="text-[9px] font-thin md:text-lg">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisorsPage;
