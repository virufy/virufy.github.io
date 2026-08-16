'use client';

import type { QA } from '@/app/i18n/types/faq';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import debounce from 'lodash.debounce';
import ExportedImage from 'next-image-export-optimizer';
import { useEffect, useMemo, useState } from 'react';
import { usei18n } from '../../i18n';
import AccordionItem from '../components/AccordionItem';
import TopicCard from './TopicCard';
import Head from 'next/head';
import ActionBanner from '../components/ActionBanner';

const DEBOUNCE_TIME_MS = 300;

const FAQPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    faq: {
      headerSection,
      topicsSection,
      questionsSection: { topicTitle, questionsByTopic },
      banner,
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
              src="/images/faq/BG_Faq_Top.png"
              alt=""
              basePath={basePath}
              fill
              className="object-cover"
              priority
            />
            {/* Text and Input Container */}
            <div className="relative flex h-[400px] flex-col items-center justify-center px-5 text-center md:h-[500px] lg:h-[500px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bcc7d4] bg-[#d9eaf8] py-1 pl-3 pr-4 text-xs text-[#084b8a] sm:mb-8 sm:py-1 sm:pl-4 sm:pr-5 sm:text-sm md:mb-10">
                <ExportedImage
                  src={'/icons/questionmark-faq.png'}
                  alt="FAQ icon"
                  height={17}
                  width={17}
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  basePath={basePath}
                  priority
                />
                {headerSection.tag}
              </div>
              {/* Sizing & Spacing Container */}
              <div className="px-8 text-center font-medium text-white">
                {/* Header */}
                <h1 className="mb-3 text-2xl font-medium text-black md:mb-8 md:text-6xl md:font-normal">
                  {headerSection.title.map((content, i) =>
                    content.type === 'span' ? (
                      <span
                        key={i}
                        className="bg-gradient-to-b from-[#0E72C9] to-[#2A9D8F] bg-clip-text text-transparent"
                      >
                        {content.text}
                      </span>
                    ) : (
                      <span key={i} className="text-black">
                        {content.text}
                      </span>
                    )
                  )}
                </h1>
                <p className="pl-5 text-left text-xs text-black sm:text-sm md:text-center md:text-xl">
                  {headerSection.texts.map((content, i) => (
                    <span key={i} className="font-normal text-gray-700">
                      {content.text}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient Overlay Container */}
        <div className="bg-gradient-to-b from-[#FBFEFF] to-[#EEF8FD] pb-6 text-white md:pb-0">
          {/* Topics Section */}
          <section className="relative mx-auto max-w-[1440px] px-5">
            {/* Title and Topic Cards Container */}
            <div className="flex flex-col items-center justify-center space-y-6 pt-10 text-center md:space-y-10 md:pt-16">
              {/* Topic Cards Container */}
              <div className="grid items-center justify-center gap-10 md:grid-cols-2">
                <div className="flex w-full flex-wrap justify-start gap-4 pl-4 lg:grid lg:grid-cols-6 lg:gap-4 lg:pl-0">
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
                <div className="mt-2 flex hidden w-full items-center rounded-full border border-gray-300 bg-white px-4 shadow-sm transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200 md:mt-0 md:flex">
                  <ExportedImage
                    src={headerSection.input.img}
                    alt={headerSection.input.altText}
                    basePath={basePath}
                    width={18}
                    height={18}
                    priority
                  />

                  <input
                    className="w-full bg-transparent py-3 pl-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                    type="search"
                    placeholder={headerSection.input.placeholder}
                    onChange={handleSearchInputChange}
                    maxLength={64}
                    aria-label="Search"
                  />
                </div>
              </div>
              <div className="mt-2 flex w-full items-center rounded-full border border-gray-300 px-4 shadow-sm transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200 md:mt-0 md:flex md:hidden">
                <ExportedImage
                  src={headerSection.input.img}
                  alt={headerSection.input.altText}
                  basePath={basePath}
                  width={18}
                  height={18}
                  priority
                />

                <input
                  className="w-full bg-transparent py-3 pl-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  type="search"
                  placeholder={headerSection.input.placeholder}
                  onChange={handleSearchInputChange}
                  maxLength={64}
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 py-10 md:gap-y-10 md:pb-40 md:pt-16">
              <div className="w-full rounded-lg border-b text-sm last:border-b-0 md:text-base">
                {filteredQuestions.map((content) => (
                  <AccordionItem
                    {...content}
                    lang={lang}
                    key={content.question}
                    //overrides text black in AccordionItem when isFaq is true
                    className="!text-black"
                    isFaq={false}
                  />
                ))}
              </div>
            </div>
          </section>
          <ActionBanner
            title={banner.title}
            text={banner.text}
            buttonText={banner.buttonText}
            page={banner.link}
          />
        </div>
      </div>
    </>
  );
};

export default FAQPage;
