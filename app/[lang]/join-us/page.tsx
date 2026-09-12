'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { useState } from 'react';
import { usei18n } from '../../i18n';
import Text from '../components/Text';
import Title from '../components/Title';
import JobList from './JobList';

import ActionBanner from '../components/ActionBanner';
import { ColorProps, TextSizeProps } from '../themes';

const CONTACT_EMAIL = 'frederick.cosper@virufy.org';

const JobListingPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    jobListing: {
      title,
      subtitle,
      tag,

      jobList,
      modal,
      Banner,
      positiontitle,
      positionsubtitle,
      placeholder,
    },
  } = usei18n(lang);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    // background img with title text in center
    <div className="">
      <div className="relative flex flex-col items-center justify-center overflow-hidden pb-4 pt-20 text-black md:pb-10 md:pt-20">
        <ExportedImage
          src="/images/jobListing/Join-us-hero.png"
          alt=""
          basePath={basePath}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-10 flex flex-col items-center justify-center py-10 md:py-20 lg:pb-[150px]">
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
        onButtonClick={() => setIsContactModalOpen(true)}
      />
      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="contact-modal-title"
              className={`mb-3 ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}
            >
              {Banner.contactTitle}
            </h2>
            <p className={`mb-6 ${TextSizeProps.p} ${ColorProps.textGray}`}>
              {Banner.emailText}{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#0E72C9] underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <button
              type="button"
              onClick={() => setIsContactModalOpen(false)}
              className={`rounded-full px-6 py-3 text-white ${TextSizeProps.p} ${ColorProps.bgGradientReverse}`}
            >
              {Banner.closeText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingPage;
