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
      questionsSection: { topicTitle, questionsByTopic },
    },
  } = usei18n(lang);

  // prevent recomputation after every re-render
  type QAWithTopic = QA & {
    topic: string;
  };

  const allQuestions: QAWithTopic[] = useMemo(
    () =>
      Object.entries(questionsByTopic).flatMap(([topic, questions]) =>
        questions.map((question) => ({
          ...question,
          topic,
        }))
      ),
    [questionsByTopic]
  );

  const [filteredQuestions, setFilteredQuestions] =
    useState<QAWithTopic[]>(allQuestions);
  const [selectedTopic, setSelectedTopic] = useState(topicTitle);
  const [searchInput, setSearchInput] = useState('');

  // filter questions by search input
  useEffect(() => {
    let filteredQuestionsByTopic = allQuestions;

    if (selectedTopic !== topicTitle) {
      filteredQuestionsByTopic = allQuestions.filter(
        (q) => q.topic === selectedTopic
      );
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
      <div className="relative">
        {/* Hero Section */}
        <section>
          <div className="relative">
            <ExportedImage
              className=""
              src={'/images/faq/BG_Faq_Top.png'}
              alt="FAQ hero background"
              fill
              unoptimized={true}
              priority
              basePath={basePath}
            />
            {/* Text and Input Container */}
            <div className="relative flex h-[400px] flex-col items-center justify-center px-5 text-center md:h-[500px] lg:h-[600px]">
              {/* Sizing & Spacing Container */}
              <div className="px-8 text-center font-medium text-white">
                {/* Header */}
                <h1 className="mb-3 text-2xl font-medium text-black md:mb-8 md:text-5xl md:font-normal">
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

                {/* Input Container
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
                </div> */}

                {/* Text Beneath Search Input */}
                <p className="pl-5 text-left text-xs text-black sm:text-sm md:text-center md:text-base">
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
        <div className="-mb-24 bg-white pb-6 text-white md:pb-0">
          {/* Topics Section */}
          <section className="relative mx-auto max-w-[1440px] px-5">
            {/* Title and Topic Cards Container */}
            <div className="flex flex-col items-center justify-center space-y-6 pt-10 text-center md:space-y-10 md:pt-16">
              {/* Topic Cards Container */}
              <div className="grid grid-cols-2 items-center justify-center gap-10">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-7 lg:gap-10">
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
                <div className="relative w-full">
                  <input
                    className="ml-2 mt-2 w-full rounded-full border border-gray-300 bg-white py-3 pl-5 pr-12 text-sm text-gray-800 shadow-sm transition placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    type="search"
                    placeholder={headerSection.input.placeholder}
                    onChange={handleSearchInputChange}
                    maxLength={64}
                    aria-label="Search"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ExportedImage
                      src={headerSection.input.img}
                      alt={headerSection.input.altText}
                      basePath={basePath}
                      width={18}
                      height={18}
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 py-10 md:gap-y-10 md:py-40 md:pt-16">
              {/* Questions Container */}
              <div className="w-full rounded-lg border-b bg-white text-sm last:border-b-0 md:bg-white md:text-base">
                {filteredQuestions.map((content) => (
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
