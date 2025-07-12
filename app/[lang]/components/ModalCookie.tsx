'use client';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/jobListing';
import ExportedImage from 'next-image-export-optimizer';
import { useState, useEffect } from 'react';
import { usei18n } from '@/app/i18n';
import ReactGA from 'react-ga4';

const ModalCookie = ({ lang }: { lang: Locale }) => {
  const {
    cookieModal: { text, yes, no },
  } = usei18n(lang);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const seenModal = localStorage.getItem('AcceptCookieModal');
    if (!seenModal) {
      setShowModal(true);
    } else {
      //Google analytics
      ReactGA.initialize('G-ZV5G86ZDRG');
      //
    }
  }, []);
  const closeModalAndSetLocalStorage = (): void => {
    setShowModal(false);
    localStorage.setItem('AcceptCookieModal', 'true');
    //Google analytics
    ReactGA.initialize('G-ZV5G86ZDRG');
    //
  };

  return (
    <>
      <div>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 bottom-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none"
              onClick={() => setShowModal(false)}
            >
              <div
                className="relative mx-auto max-h-[90vh] w-[300px] max-w-[90vw] overflow-y-auto md:h-auto md:w-[500px]"
                onClick={(e) => e.stopPropagation()}
              >
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
                    <button className="hidden md:block">X</button>
                  </div>

                  <div className="flex w-full rounded-t text-center md:text-left">
                    <p className="mx-auto my-10 max-h-[500px] overflow-y-auto break-words px-6 text-center text-lg md:text-xl">
                      {text}
                    </p>
                  </div>
                  {/*body*/}

                  <div className="mb-14 h-[100px] flex-col">
                    <button
                      className="mx-auto flex w-[260px] justify-center rounded-3xl bg-white px-6 py-2 font-bold text-black outline-none transition-all duration-150 ease-linear md:w-[320px] md:font-medium"
                      type="button"
                      onClick={closeModalAndSetLocalStorage}
                    >
                      {yes}
                    </button>
                    <button className="mx-auto mt-6 flex w-[260px] justify-center rounded-3xl border border-red-500 bg-gray-200 px-6 py-2 font-bold text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[320px] md:font-medium">
                      {no}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ModalCookie;
