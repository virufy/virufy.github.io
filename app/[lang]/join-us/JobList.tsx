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
  applyButtonText,
}: {
  lang: Locale;
  jobList: Job[];
  modal: JobModal;
  applyButtonText: string;
}) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);
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
    router.back();
  };

  return (
    <>
      <div>
        {showModal ? (
          <>
            <div className="fixed inset-0 top-60 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto max-h-[90vh] w-[300px] max-w-[90vw] overflow-y-auto md:w-[360px]">
                {/*content*/}

                <div className="relative flex max-h-[90vh] w-full flex-col overflow-y-auto rounded-xl border-0 bg-gradient-to-b from-[black] to-[#4167AD] font-medium text-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}

                  <div className="flex justify-center px-4 pt-4 md:justify-between">
                    <ExportedImage
                      className="h-[27px] w-16 md:w-12 md:pl-1"
                      src={VirufyLogo}
                      alt="Virufy logo"
                      priority
                      basePath={basePath}
                    />
                    <button
                      className="hidden md:block"
                      onClick={closeModalAndGoToPreviousPage}
                    >
                      X
                    </button>
                  </div>

                  <div className="flex w-full rounded-t text-center md:text-left">
                    <p className="mx-auto my-10 max-h-[200px] overflow-y-auto break-words px-6 text-lg md:text-xl">
                      {modal?.text}
                    </p>
                  </div>
                  {/*body*/}

                  <div className="mb-14 h-[100px] flex-col items-center justify-center">
                    <button
                      className="mx-auto flex w-[260px] justify-center rounded-3xl bg-white px-6 py-2 font-bold text-black outline-none transition-all duration-150 ease-linear md:w-[320px] md:font-medium"
                      type="button"
                      onClick={closeModalAndSetLocalStorage}
                    >
                      {modal?.yes}
                    </button>
                    <button
                      className="mx-auto mt-6 flex w-[260px] justify-center rounded-3xl border border-red-500 bg-gray-200 px-6 py-2 font-bold text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[320px] md:font-medium"
                      onClick={closeModalAndGoToPreviousPage}
                    >
                      {modal.no}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
      {/* _________job listings____________ */}
      <div className="mx-auto mb-12 w-11/12" ref={scrollRef}>
        {!jobList ? <p>No data</p> : null}

        {jobList.map(({ category, positions }) => (
          <div key={category} className="w-[100%] text-left">
            <h2 className="mb-6 ml-8 mt-10 text-sm font-semibold leading-[0rem] text-white md:ml-14 md:text-lg lg:ml-20">
              {category}
            </h2>

            {positions.map(({ title, id }) => (
              <>
                <div
                  key={id}
                  className="mx-auto mb-[12px] flex w-[90%] rounded-md bg-[#16223A]"
                >
                  <div className="flex h-20 flex-1 items-center justify-start md:h-14">
                    <Text
                      TextClassProps={
                        'text-white text-xs sm:text-sm md:text-base px-5'
                      }
                      Text={title}
                      Style={'small'}
                    />
                  </div>

                  <div className="flex flex-1 justify-end">
                    <div className="my-auto mr-4">
                      <Link href={`/${lang}/join-us/${id}`}>
                        <button className="h-8 w-32 rounded-3xl bg-white font-medium text-black">
                          {applyButtonText}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default JobList;
