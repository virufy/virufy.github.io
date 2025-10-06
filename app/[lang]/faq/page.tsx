'use client';

import type { QA } from '@/app/i18n/types/faq';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import debounce from 'lodash.debounce';
import ExportedImage from 'next-image-export-optimizer';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { usei18n } from '../../i18n';
import AccordionItem from '../components/AccordionItem';
import TopicCard from './TopicCard';
import Head from 'next/head';

const DEBOUNCE_TIME_MS = 300;

const FAQPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    faq: {
      headerSection,
      topicsSection,
      questionsSection: { topicTitle, noResultsTitle, questionsByTopic },
    },
  } = usei18n(lang);

  // prevent recomputation after every re-render
  const allQuestions: QA[] = useMemo(
    () => Object.values(questionsByTopic).flat(),
    [questionsByTopic]
  );

  const [filteredQuestions, setFilteredQuestions] = useState(allQuestions);
  const [selectedTopic, setSelectedTopic] = useState(topicTitle);
  const [searchInput, setSearchInput] = useState('');

  // filter questions by search input
  useEffect(() => {
    let filteredQuestionsByTopic = allQuestions;

    // filter questions by selected topic
    if (selectedTopic !== topicTitle) {
      filteredQuestionsByTopic = [];
      if (selectedTopic in questionsByTopic) {
        filteredQuestionsByTopic = questionsByTopic[selectedTopic];
      }
    }
    // filter remaining questions by search input
    const remainingQuestions = filteredQuestionsByTopic.filter(
      ({ question, answer }) =>
        question.toLowerCase().indexOf(searchInput) !== -1 ||
        // filter and concat text values from array of objects
        answer
          .flatMap((item) => item.content)
          .map((content) => content.text)
          .join('')
          .toLowerCase()
          .indexOf(searchInput) !== -1
    );

    setFilteredQuestions(remainingQuestions);
  }, [searchInput, selectedTopic, questionsByTopic, allQuestions, topicTitle]);

  // delay setting state and triggering a re-render
  const handleSearchInputChange = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(e.target.value.toLowerCase().trim());
      }, DEBOUNCE_TIME_MS),
    []
  );

  const topicCards = topicsSection.cards;

  return (
    <>
      <Head>
        <title>FAQ - Virufy</title>
        <meta
          name="description"
          content="Find answers to common questions about Virufy's technology, research, and how our solutions work."
        />
      </Head>
      <div className="relative -top-24 pt-20">
        {/* Hero Section */}
        <section>
          <div className="relative bg-[#255292]">
            <ExportedImage
              className="absolute h-full w-full object-cover opacity-50"
              src={headerSection.img}
              alt={headerSection.altText}
              fill
              unoptimized={true}
              priority
              basePath={basePath}
            />
            {/* Blur transition */}
            <div className="absolute bottom-0 block h-[30px] w-full bg-gradient-to-b from-transparent to-[#20376b] md:hidden"></div>
            {/* Text and Input Container */}
            <div className="relative flex flex-col items-center justify-center pb-8 pt-32 md:pb-32 md:pt-72">
              {/* Sizing & Spacing Container */}
              <div className="px-8 text-center font-medium text-white">
                {/* Header */}
                <h1 className="mb-3 text-2xl font-medium md:mb-8 md:text-5xl md:font-normal">
                  {headerSection.title.map((content, i) =>
                    content.type === 'span' ? (
                      <span key={i} className="text-emerald-500">
                        {content.text}
                      </span>
                    ) : (
                      <Fragment key={i}>{content.text}</Fragment>
                    )
                  )}
                </h1>

                {/* Input Container */}
                <div className="relative mb-2 flex items-center md:mb-8">
                  <input
                    className="w-full rounded-full py-4 pl-5 pr-12 text-xs text-neutral-500 sm:pl-8 sm:pr-14 sm:text-sm md:w-[680px] md:text-base"
                    type="search"
                    placeholder={headerSection.input.placeholder}
                    onChange={handleSearchInputChange}
                    maxLength={64}
                    aria-label="Search"
                  />
                  <span
                    className={`absolute right-0 pr-4 sm:pr-6 ${lang === 'ja' ? 'md:pr-14 lg:pr-16' : ''}`}
                  >
                    <ExportedImage
                      src={headerSection.input.img}
                      alt={headerSection.input.altText}
                      basePath={basePath}
                      width={24}
                      height={24}
                      priority
                    />
                  </span>
                </div>

                {/* Text Beneath Search Input */}
                <p className="pl-5 text-left text-xs sm:text-sm md:text-center md:text-base">
                  {headerSection.texts.map((text, i) =>
                    text.type === 'span' ? (
                      <span className="font-bold" key={i}>
                        {text.text}
                      </span>
                    ) : (
                      <Fragment key={i}>{text.text}</Fragment>
                    )
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient Overlay Container */}
        <div className="-mb-24 bg-[#20376b] pb-6 text-white md:pb-0">
          {/* Topics Section */}
          <section>
            {/* Title and Topic Cards Container */}
            <div className="flex flex-col items-center justify-center space-y-6 pt-10 text-center md:space-y-10 md:pt-16">
              <h2 className="text-lg font-medium md:text-3xl">
                {topicsSection.title}
              </h2>

              {/* Topic Cards Container */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
                {topicCards.map((card) => (
                  <TopicCard
                    key={card.title}
                    defaultTopic={topicTitle}
                    selectedTopic={selectedTopic}
                    setSelectedTopic={setSelectedTopic}
                    {...card}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Questions Section */}
          <section>
            {/* Title and Questions Container */}
            <div className="mx-5 flex flex-col items-center justify-center gap-y-4 py-10 md:gap-y-10 md:py-40 md:pt-16">
              <h2 className="text-lg font-medium md:text-3xl">
                {filteredQuestions.length === 0
                  ? noResultsTitle
                  : selectedTopic}
              </h2>

              {/* Questions Container */}
              <div className="max-w-md rounded-lg border-b bg-[#172b50] text-sm last:border-b-0 md:max-w-2xl md:bg-white md:text-base lg:max-w-4xl xl:max-w-5xl">
                {filteredQuestions &&
                  filteredQuestions.map((content) => (
                    <AccordionItem
                      {...content}
                      lang={lang}
                      key={content.question}
                      className="!text-white md:!text-black"
                      isFaq={true}
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>
        <div className="absolute bottom-0 block h-10 w-full bg-gradient-to-b from-transparent to-[#000000]"></div>
      </div>
    </>
  );
};

export default FAQPage;
