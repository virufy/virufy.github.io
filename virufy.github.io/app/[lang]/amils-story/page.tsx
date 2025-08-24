import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  AmilAtOneYoungWorld,
  AmilInJapan,
  AmilInLab,
  AmilInMeeting,
} from '@/public/images/amilsStory/index';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Text from '../components/Text';
import Title from '../components/Title';
import Video from './Video';

const AmilsStoryPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    amilsStory: { sectionAmil },
  } = usei18n(lang);

  return (
    <>
      <div className="relative -top-24 -mb-24 hidden items-center justify-center overflow-hidden bg-[#255292] sm:hidden md:hidden xl:block">
        <div className="mx-auto mt-52 flex h-[100%] max-w-[1650px] flex-col items-center justify-center">
          <div className="m-10 mt-[40px]">
            <Video
              width={`1200px`}
              height={`675px`}
              url="https://www.youtube.com/live/ttjpF38FVuo"
            />
          </div>
          <div className="mb-[80px] mt-[80px] flex flex-row flex-wrap items-start sm:flex-col sm:items-center md:flex-row md:items-end lg:flex-row lg:items-end xl:flex-row xl:items-end">
            <div className="ml-[10vw] w-[438px] sm:w-[438px] md:w-[350px] lg:w-[300px] xl:w-[365px]">
              <div className="m-10 text-white">
                <Title
                  H="h5"
                  Text={sectionAmil.titleAmil}
                  TitleClassProps={'mt-[80px]'}
                />
              </div>
              <ExportedImage
                className="h-[400px] w-[300px]"
                src={AmilInMeeting}
                alt="Amil in a meeting"
                priority
                basePath={basePath}
              />
            </div>
            <div className="m-2 mr-[10vw] flex-1 flex-col text-xl text-white">
              <Text Style="" Text={sectionAmil.textAmil[0]} TextClassProps="" />
              <Text
                Style=""
                Text={sectionAmil.textAmil[1]}
                TextClassProps="mt-4"
              />
              <Text
                Style=""
                Text={sectionAmil.textAmil[2]}
                TextClassProps="mt-4"
              />
            </div>
          </div>
          <div className="mb-[20px] ml-[10vw] mt-[20px] flex flex-row flex-wrap items-start sm:flex-col sm:items-center md:flex-row md:items-end lg:flex-row lg:items-end xl:flex-row xl:items-end">
            <div className="ml-2">
              <ExportedImage
                className="h-[360px] w-[550px]"
                src={AmilInLab}
                alt="Amil with nursing staff supporting Virufy’s clinical studies in Colombia, South America"
                priority
                basePath={basePath}
              />
            </div>
            <div className="mr-[4vw] flex-1 flex-col text-xl text-white">
              <div className="m-12 mr-[6vw]">
                <Text
                  Style=""
                  Text={sectionAmil.textAmil[3]}
                  TextClassProps=""
                />
              </div>
            </div>
          </div>
          <div className="mb-[20px] mr-[10vw] mt-[20px] flex flex-row flex-wrap items-start sm:flex-col sm:items-center md:flex-row md:items-end lg:flex-row lg:items-end xl:flex-row xl:items-end">
            <div className="ml-4 flex-1 flex-col text-xl text-white">
              <div className="m-10 ml-[10vw]">
                <Text
                  Style=""
                  Text={sectionAmil.textAmil[4]}
                  TextClassProps=""
                />
              </div>
            </div>
            <ExportedImage
              className="h-[360px] w-[550px]"
              src={AmilInJapan}
              alt="Amil with Japanese students and staff in his ZenIT programming school"
              priority
              basePath={basePath}
            />
          </div>
          <div className="mb-[100px] ml-[10vw] mt-[10px] flex flex-row flex-wrap items-start sm:flex-col sm:items-center md:flex-row md:items-end lg:flex-row lg:items-end xl:flex-row xl:items-end">
            <div className="ml-2 mr-[4vw] flex text-white sm:flex">
              <ExportedImage
                className="h-[450px] w-[550px]"
                src={AmilAtOneYoungWorld}
                alt="Amil’s encounter with former Prime Minister and current NATO president Mark Rutte"
                priority
                basePath={basePath}
              />
              <div className="ml-4 mr-[4.5vw] flex-1 flex-col text-xl text-white">
                <div className="m-4">
                  <Text
                    Style=""
                    Text={sectionAmil.textAmil[5]}
                    TextClassProps=""
                  />
                  <Text
                    Style=""
                    Text={sectionAmil.textAmil[6]}
                    TextClassProps=""
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="m-20 mb-[200px] rounded-[20px] bg-[#215995] shadow-lg">
            <div className="m-20 text-white">
              <Title
                H={'h5'}
                Text={sectionAmil.titlePublications}
                TitleClassProps="text-justify mb-[60px]"
              />
              {sectionAmil.listPublications.map((publication, idx) => {
                return (
                  <Text
                    Style="normalCardHome"
                    Text={publication}
                    TextClassProps="mt-[20px]"
                    key={idx}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative -top-24 -mb-24 hidden items-center justify-center bg-[#255292] sm:hidden md:hidden lg:block xl:hidden">
        {/* First row */}
        <div className="flex items-center justify-center">
          <div className="mb-[20px] mt-52">
            <Video
              width={`800px`}
              height={`450px`}
              url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="mb-[80px] ml-[2vw] mr-[2vw] mt-[80px] flex flex-row items-start">
          <div className="ml-[5vw] items-center justify-center">
            <div className="m-8 justify-center text-white">
              <Title H="h2" Text={sectionAmil.titleAmil} TitleClassProps="" />
            </div>
            <div className="ml-[4vw]">
              <ExportedImage
                className="h-[275px] w-[200px]"
                src={AmilInMeeting}
                alt="Amil in a meeting"
                priority
                basePath={basePath}
              />
            </div>
          </div>
          <div className="mr-[12vw] mt-[10vw] flex flex-1 flex-col text-sm text-white">
            <Text Style="" Text={sectionAmil.textAmil[0]} TextClassProps="" />
            <Text
              Style=""
              Text={sectionAmil.textAmil[1]}
              TextClassProps="mt-2"
            />
            <Text
              Style=""
              Text={sectionAmil.textAmil[2]}
              TextClassProps="mt-2"
            />
          </div>
        </div>

        {/* Third row */}
        <div className="mb-[10px] ml-[2vw] mr-[2vw] mt-[60px] flex flex-row items-start">
          <div className="ml-[8.5vw]">
            <ExportedImage
              className="h-[225px] w-[375px]"
              src={AmilInLab}
              alt="Amil and his coworkers in a lab"
              priority
              basePath={basePath}
            />
          </div>
          <div className="ml-4 mr-[3vw] flex-1 flex-col">
            <div className="m-1.5 mr-[10vw] text-sm text-white">
              <Text Style="" Text={sectionAmil.textAmil[3]} TextClassProps="" />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="mb-[10px] mr-[14vw] mt-[10px] flex flex-row items-start">
          <div className="ml-4 flex-1 flex-col text-sm text-white">
            <div className="m-2 ml-[9vw]">
              <Text Style="" Text={sectionAmil.textAmil[4]} TextClassProps="" />
            </div>
          </div>
          <ExportedImage
            className="h-[225px] w-[375px]"
            src={AmilInJapan}
            alt="Amil with his friends in Japan"
            priority
            basePath={basePath}
          />
        </div>

        {/* Fifth row */}
        <div className="mb-[10px] ml-[2vw] mr-[2vw] mt-[10px] flex flex-row items-start">
          <div className="ml-[8.5vw]">
            <ExportedImage
              className="h-[300px] w-[375px]"
              src={AmilAtOneYoungWorld}
              alt="Amil shaking hands at the One Young World conference"
              priority
              basePath={basePath}
            />
          </div>
          <div className="ml-4 mr-[10vw] flex-1 flex-col text-sm text-white">
            <div className="m-1.5">
              <Text Style="" Text={sectionAmil.textAmil[5]} TextClassProps="" />
              <Text Style="" Text={sectionAmil.textAmil[6]} TextClassProps="" />
            </div>
          </div>
        </div>
        {/* Publications */}
        <div className="flex flex-col justify-center">
          <section className="m-20 mb-[100px] rounded-[20px] bg-[#215995] shadow-lg">
            <div className="m-10 flex flex-col text-white">
              <Title
                H={'h5'}
                Text={sectionAmil.titlePublications}
                TitleClassProps="text-justify mb-[20px]"
              />
              {sectionAmil.listPublications.map((publication, idx) => {
                return (
                  <Text
                    Style="normalCardHome"
                    Text={publication}
                    TextClassProps="mt-[20px]"
                    key={idx}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Tablet */}
      <div className="relative -top-24 -mb-24 hidden items-center justify-center bg-[#255292] sm:hidden md:block lg:hidden xl:hidden">
        {/* First row */}
        <div className="flex items-center justify-center">
          <div className="mb-[20px] mt-52">
            <Video
              width={`650px`}
              height={`350px`}
              url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="mb-[80px] ml-[1vw] mr-[2vw] mt-[60px] flex flex-row items-start">
          <div className="ml-[4vw] items-center justify-center">
            <div className="m-4 justify-center text-white">
              <Title H="h2" Text={sectionAmil.titleAmil} TitleClassProps="" />
            </div>
            <div className="ml-[2vw]">
              <ExportedImage
                className="h-[275px] w-[200px]"
                src={AmilInMeeting}
                alt="Amil in a meeting"
                priority
                basePath={basePath}
              />
            </div>
          </div>
          <div className="mr-[14vw] mt-[10vw] flex flex-1 flex-col text-xs text-white">
            <Text Style="" Text={sectionAmil.textAmil[0]} TextClassProps="" />
            <Text
              Style=""
              Text={sectionAmil.textAmil[1]}
              TextClassProps="mt-2"
            />
            <Text
              Style=""
              Text={sectionAmil.textAmil[2]}
              TextClassProps="mt-2"
            />
          </div>
        </div>

        {/* Third row */}
        <div className="mb-[10px] ml-[2vw] mr-[2vw] mt-[60px] flex flex-row items-start">
          <div className="ml-[6vw]">
            <ExportedImage
              className="h-[200px] w-[325px]"
              src={AmilInLab}
              alt="Amil and his coworkers in a lab"
              priority
              basePath={basePath}
            />
          </div>
          <div className="ml-4 mr-[3vw] flex-1 flex-col">
            <div className="m-1.5 mr-[4vw] text-xs text-white">
              <Text Style="" Text={sectionAmil.textAmil[3]} TextClassProps="" />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="mb-[10px] mr-[6vw] mt-[10px] flex flex-row items-start">
          <div className="ml-4 flex-1 flex-col text-xs text-white">
            <div className="m-2 ml-[6vw]">
              <Text Style="" Text={sectionAmil.textAmil[4]} TextClassProps="" />
            </div>
          </div>
          <ExportedImage
            className="h-[200px] w-[325px]"
            src={AmilInJapan}
            alt="Amil with his friends in Japan"
            priority
            basePath={basePath}
          />
        </div>

        {/* Fifth row */}
        <div className="mb-[10px] ml-[2vw] mr-[2vw] mt-[10px] flex flex-row items-start">
          <div className="ml-[6vw]">
            <ExportedImage
              className="h-[275px] w-[325px]"
              src={AmilAtOneYoungWorld}
              alt="Amil shaking hands at the One Young World conference"
              priority
              basePath={basePath}
            />
          </div>
          <div className="ml-4 mr-[4vw] flex-1 flex-col text-xs text-white">
            <div className="m-2">
              <Text Style="" Text={sectionAmil.textAmil[5]} TextClassProps="" />
              <Text Style="" Text={sectionAmil.textAmil[6]} TextClassProps="" />
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="flex flex-col justify-center">
          <section className="m-20 mb-[100px] rounded-[20px] bg-[#215995] shadow-lg">
            <div className="m-10 flex flex-col text-white">
              <Title
                H={'h5'}
                Text={sectionAmil.titlePublications}
                TitleClassProps="text-justify mb-[20px]"
              />
              {sectionAmil.listPublications.map((publication, idx) => {
                return (
                  <Text
                    Style="normalCardHome"
                    Text={publication}
                    TextClassProps="mt-[20px]"
                    key={idx}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative -top-24 -mb-24 grid items-center justify-center bg-[#255292] md:hidden lg:hidden">
        {/* First row */}
        <div className="mb-[20px] mt-48">
          {/* First grid item */}
          <div className="flex items-center justify-center">
            <Video
              width={`310px`}
              height={`250px`}
              url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
            />
          </div>
        </div>
        {/* Second row */}
        <div className="mt-[20px]">
          <div className="grid items-center justify-center">
            <div className="m-10 flex items-center justify-center text-white">
              <Title H="h2" Text={sectionAmil.titleAmil} TitleClassProps="" />
            </div>
            <ExportedImage
              className="h-[300px] w-[240px]"
              src={AmilInMeeting}
              alt="Amil in a meeting"
              priority
              basePath={basePath}
            />
          </div>
          <div className="mx-10 my-8 mt-[20px] grid items-center justify-center text-xl text-white">
            <Text
              Style="subtitle"
              Text={sectionAmil.textAmil[0]}
              TextClassProps=""
            />
            <Text
              Style="subtitle"
              Text={sectionAmil.textAmil[1]}
              TextClassProps=""
            />
            <Text
              Style="subtitle"
              Text={sectionAmil.textAmil[2]}
              TextClassProps=""
            />
          </div>
        </div>

        {/* Third row */}
        <div className="grid items-center justify-center">
          <div className="flex items-center justify-center">
            <ExportedImage
              className="h-[250px] w-[325px]"
              src={AmilInLab}
              alt="Amil and his coworkers in a lab"
              priority
              basePath={basePath}
            />
          </div>
          <div className="mx-10 my-8 flex-1 flex-col text-xl text-white">
            <Text
              Style="subtitle"
              Text={sectionAmil.textAmil[3]}
              TextClassProps=""
            />
          </div>
        </div>

        {/* Fourth row */}
        <div className="grid items-center justify-center">
          <div className="flex items-center justify-center">
            <ExportedImage
              className="h-[250px] w-[325px]"
              src={AmilInJapan}
              alt="Amil with his friends in Japan"
              priority
              basePath={basePath}
            />
          </div>
          <div className="mx-10 my-8 flex-1 flex-col text-xl text-white">
            <Text
              Style="subtitle"
              Text={sectionAmil.textAmil[4]}
              TextClassProps=""
            />
          </div>
        </div>

        {/* Fifth row */}
        <div className="grid items-center justify-center">
          <div className="flex items-center justify-center">
            <ExportedImage
              className="h-[275px] w-[325px]"
              src={AmilAtOneYoungWorld}
              alt="Amil shaking hands at the One Young World conference"
              priority
              basePath={basePath}
            />
          </div>
          <div className="mx-10 my-8 flex-1 flex-col text-xl text-white">
            <Text
              Style="subtitle"
              Text={sectionAmil.textAmil[5]}
              TextClassProps=""
            />
            <Text
              Style="subtitle"
              Text={sectionAmil.textAmil[6]}
              TextClassProps=""
            />
          </div>
        </div>

        {/* Publications */}
        <section className="m-[20px] mb-[50px] mt-[50px] rounded-[50px] bg-[#215995] shadow-lg">
          <div className="m-6 flex flex-col items-center text-center text-white">
            <Title
              H={'h3'}
              Text={sectionAmil.titlePublications}
              TitleClassProps="text-justify mb-[20px]"
            />
            {sectionAmil.listPublications.map((publication, idx) => {
              return (
                <Text
                  Style="normalCardHome"
                  Text={publication}
                  TextClassProps="mt-[20px]"
                  key={idx}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default AmilsStoryPage;
