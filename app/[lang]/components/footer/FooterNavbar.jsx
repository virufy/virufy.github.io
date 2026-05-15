import { Fragment } from 'react';
import Link from 'next/link';
import NonProfitDisclaimers from './NonProfitDisclaimers';
import SocialLinks from './SocialLinks';

export default function FooterNavbar({
  lang,
  nonProfitSection,
  footerPrivacyLinks,
}) {
  return (
    <footer className="bg-[#F2F6FC]">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col p-4 py-10">
        <div className="flex w-full flex-col items-center justify-center gap-3 text-center text-xs font-bold text-black sm:text-base lg:my-6 lg:flex-row lg:gap-6">
          {footerPrivacyLinks.map(({ label, showModal, endpoint }, idx) => (
            <Fragment key={label}>
              {showModal && 
                <button key={idx} onClick={() => showModal(true)}>
                  {label}
                </button>
              }
              {endpoint &&
                <Link key={idx} href={`/${lang}/${endpoint}`}>
                  {label}
                </Link>
              }
            </Fragment>
          ))}
        </div>
        <SocialLinks lang={lang} />
        <NonProfitDisclaimers nonProfitSection={nonProfitSection} />
      </div>
    </footer>
  );
}
