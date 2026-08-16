import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Text from '../components/Text';
import Title from '../components/Title';
import JobList from './JobList';
import Link from 'next/link';
import { ColorProps, TextSizeProps } from '../themes';

import ActionBanner from '../components/ActionBanner';
const JobListingPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    jobListing: {
      title,
      subtitle,
      tag,
      titlebuttonText,
      jobList,
      modal,
      Banner,
      positiontitle,
      positionsubtitle,
      placeholder,
    },
  } = usei18n(lang);

  return (
    // background img with title text in center
    <div className="">
      <div className="relative flex flex-col items-center justify-center overflow-hidden pb-4 pt-20 text-black md:pb-10 md:pt-20">
        <ExportedImage
          src="/images/advisors/Advisor-Background-Hero.webp"
          alt=""
          basePath={basePath}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-10 flex flex-col items-center justify-center py-10 md:py-20">
          <span className="mb-8 inline-block rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-4 pr-5 text-[#084b8a]">
            <ExportedImage
              className="inline"
              src={'/icons/Join-icon.png'}
              height={17}
              width={17}
              alt="Join Us Icon"
              basePath={basePath}
            />
            &nbsp; {tag}
          </span>
          {/* Our Advisors Title */}
          <Title
            H="h1JobListing"
            Text={
              <>
                {title.before}
                <span className="bg-gradient-to-b from-[#0E72C9] to-[#2A9D8F] bg-clip-text text-transparent">
                  {title.highlight}
                </span>{' '}
                {title.after}
              </>
            }
            TitleClassProps="text-center md:max-w-3xl mx-auto py-5"
          />

          {/* We unite from across the world to defeat... Subtitle */}
          <Text
            Text={subtitle}
            Style="subtitleJoinUs"
            TextClassProps="text-gray-700 text-center max-w-5xl"
          />
          <Link
            href="/"
            className={`mt-6 inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm sm:mt-7 sm:px-5 sm:py-2.5 sm:text-base md:mt-8 md:px-6 md:py-3 ${TextSizeProps.p} ${ColorProps.bgGradientReverse} text-white`}
          >
            {titlebuttonText}
          </Link>
        </div>
      </div>
      <div className="relative z-10 mx-5 flex py-5 md:mx-10 md:py-10 md:pt-20 lg:mx-20">
        {' '}
        <Title
          H="h4"
          Text={positiontitle}
          TitleClassProps="text-[#1B6E64] md:max-w-3xl text-[1.75rem]"
        />
      </div>
      <div className="relative z-10 mx-5 flex md:mx-10 md:max-w-7xl md:pb-10 lg:mx-20">
        {' '}
        <Text
          Text={positionsubtitle}
          Style="subtitleJoinUs"
          TextClassProps="text-gray-700 leading-[1.2rem]"
        />
      </div>
      {/* intro text and listings */}
      <div className="">
        <JobList
          lang={lang}
          jobList={jobList}
          modal={modal}
          placeholder={placeholder}
        />
      </div>
      <ActionBanner
        title={Banner.title}
        text={Banner.text}
        buttonText={Banner.buttonText}
        page={Banner.url}
      />
    </div>
  );
};

export default JobListingPage;
