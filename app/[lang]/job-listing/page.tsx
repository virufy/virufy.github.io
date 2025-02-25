import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { HeroBackground } from '@/public/images/jobListing';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import TitleText from '../components/TitleText';
import JobList from './JobList';

const JobListingPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    jobListing: { titleImage, title, text, jobList, modal, applyButtonText },
  } = usei18n(lang);

  return (
    // background img with title text in center
    <div className="bg-[#142037]">
      <div className="over relative -top-24 flex justify-center overflow-hidden">
        <div className="contrast-1 bg-black brightness-100">
          <ExportedImage
            className="h-full w-screen object-cover"
            src={HeroBackground}
            alt=""
            priority
            basePath={basePath}
          />
        </div>
        <Title
          Text={titleImage}
          H="h1JobListing"
          TitleClassProps="absolute top-[65%] sm:top-[60%] md:top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white md:text-center text-xs sm:text-base font-normal text-opacity-80"
        />
      </div>

      {/* intro text and listings */}
      <div className="bg-gradient-to-b from-[#142037] to-[#3F64A8]">
        <div className="mx-auto flex max-w-[1440px] flex-col">
          <TitleText
            TitleSize={'h5'}
            TitleClassProps={'text-white text-center md:text-left'}
            TitleLabel={title}
            ContainerTitleProps={'md:mt-[40px] mb-5 md:ml-[10%]'}
            TextSize={'normal'}
            TextClassProps={'text-white text-left'}
            TextLabel={text}
            ContainerTextProps={'mt-[16px] mb-[40px] ml-[10%] w-[80%]'}
          />

          <JobList
            lang={lang}
            jobList={jobList}
            modal={modal}
            applyButtonText={applyButtonText}
          />
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
