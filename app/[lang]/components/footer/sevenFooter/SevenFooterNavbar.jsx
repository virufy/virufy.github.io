import { Fragment } from 'react';
import Link from 'next/link';
import SevenNonProfitDisclaimers from './SevenNonProfitDisclaimers';
import SevenSocialLinks from './SevenSocialLinks';

export default function SevenFooterNavbar({
  lang,
  nonProfitSection,
  footerPrivacyLinks,
}) {
  return (
    <footer className="bg-[#F3F8FF] text-black">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col p-4 py-10">
        <div className="text-black-800 flex w-full flex-wrap items-center justify-center space-x-2 text-xs font-semibold sm:text-base lg:my-6 lg:space-x-6 lg:no-underline">
          {footerPrivacyLinks.map(({ label, showModal, endpoint }, idx) => (
            <Fragment key={label}>
              {idx > 0 && (
                <div className="text-black-500 font-bold lg:hidden">|</div>
              )}

              {showModal && (
                <button
                  key={idx}
                  onClick={() => showModal(true)}
                  className="text-black-800 hover:text-gray-800"
                >
                  {label}
                </button>
              )}
              {endpoint && (
                <Link
                  key={idx}
                  href={`/${lang}/${endpoint}`}
                  className="text-black-800 hover:text-gray-800"
                >
                  {label}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
        <SevenSocialLinks lang={lang} />
        <SevenNonProfitDisclaimers nonProfitSection={nonProfitSection} />
      </div>
    </footer>
  );
}
