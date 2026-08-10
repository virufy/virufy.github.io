'use client';

import type { Job, JobModal } from '@/app/i18n/types/jobListing';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/jobListing';
import ExportedImage from 'next-image-export-optimizer';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Text from '../components/Text';

const JobList = ({
  lang,
  jobList,
  modal,
}: {
  lang: Locale;
  jobList: Job[];
  modal: JobModal;
}) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...jobList.map(({ category }) => category)];
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredJobList = jobList.flatMap(({ category, positions }) => {
    if (selectedCategory !== 'All' && category !== selectedCategory) {
      return [];
    }

    return positions
      .filter(({ title }) => title.toLowerCase().includes(normalizedSearch))
      .map((position) => ({ ...position, category }));
  });

  useEffect(() => {
    const seenModal = localStorage.getItem('seenModal');
    if (!seenModal) {
      setShowModal(true);
    } else {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const closeModalAndSetLocalStorage = (): void => {
    setShowModal(false);
    localStorage.setItem('seenModal', 'true');
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const closeModalAndGoToPreviousPage = (): void => {
    setShowModal(false);
    router.push('/');
  };

  return (
    <>
      {showModal && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-40 bg-black/25" />

          {/* Modal Wrapper */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            {/* Modal Content */}
            <div
              className="flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-xl bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 pt-4">
                <ExportedImage
                  className="h-[27px] w-16 md:w-12"
                  src={VirufyLogo}
                  alt="Virufy logo"
                  priority
                  basePath={basePath}
                />

                <button
                  className="text-lg font-bold text-black"
                  onClick={closeModalAndGoToPreviousPage}
                  aria-label="Close modal"
                >
                  X
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-10 text-center md:text-left">
                <p className="max-h-[200px] overflow-y-auto break-words text-lg text-black md:text-xl">
                  {modal?.text}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-6 px-6 pb-10">
                <button
                  className="w-full rounded-full border border-black bg-white px-6 py-2 font-bold text-black transition duration-150 ease-linear hover:bg-gray-100 md:font-medium"
                  type="button"
                  onClick={closeModalAndSetLocalStorage}
                >
                  {modal?.yes}
                </button>

                <button
                  className="w-full rounded-full border border-red-500 bg-gray-200 px-6 py-2 font-bold text-red-500 transition duration-150 ease-linear hover:bg-gray-300 md:font-medium"
                  type="button"
                  onClick={closeModalAndGoToPreviousPage}
                >
                  {modal?.no}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* _________job listings____________ */}
      <div
        className="mx-auto w-full bg-gradient-to-b from-[#FBFEFF] to-[#EEF8FD] px-4 py-8 md:px-8"
        ref={scrollRef}
      >
        {!jobList ? <p>No data</p> : null}

        <div className="mx-auto mb-8 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition md:text-sm ${
                    isActive
                      ? 'bg-[#16223A] text-white'
                      : 'border border-[#16223A]/30 bg-transparent text-[#16223A] hover:bg-[#16223A]/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="w-full md:w-[35%] lg:w-[40%]">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search jobs"
              className="w-full rounded-full border border-[#16223A]/20 bg-white px-4 py-2 text-sm text-[#16223A] placeholder:text-[#16223A]/60 focus:border-[#16223A] focus:outline-none"
            />
          </div>
        </div>

        {filteredJobList.length === 0 ? (
          <p className="mx-auto w-[90%] text-center text-sm text-[#16223A]/80 md:text-base">
            No roles match your current filters.
          </p>
        ) : null}

        <div className="mx-auto grid w-full grid-cols-1 gap-6 pb-10 md:grid-cols-2 xl:grid-cols-3">
          {filteredJobList.map(({ title, id, category, remote }) => (
            <Link
              key={id}
              href={`/${lang}/join-us/${id}`}
              className="flex h-[172px] flex-col rounded-2xl border border-[#16223A]/10 bg-white p-5 shadow-[0_10px_30px_rgba(20,32,55,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#16223A]/30 hover:bg-[#F7FBFF] md:p-6"
            >
              <div className="mb-3 inline-flex w-fit rounded-full border border-[#bcc7d4] bg-[#d9eaf8] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#084b8a] md:text-xs">
                {category}
              </div>
              <div className="flex h-full flex-col gap-4">
                <div className="flex h-full items-center">
                  <Text
                    TextClassProps={
                      'text-[#16223A] text-xs sm:text-sm md:text-base px-0'
                    }
                    Text={title}
                    Style={'small'}
                  />
                </div>
                <div className="inline-flex w-fit px-3 py-1">
                  <img
                    src="/icons/icon-ai.png"
                    width={16}
                    height={16}
                    className=""
                    alt=""
                  />
                  <p className="px-0 text-xs text-[#16223A] sm:text-sm md:text-base">
                    {remote}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobList;
