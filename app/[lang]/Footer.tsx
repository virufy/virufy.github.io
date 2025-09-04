'use client';

import { type Locale } from '@/i18n-config';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { usei18n } from '../i18n';
import FooterNavbar from './components/footer/FooterNavbar';
import SellMyInformationModal from './components/footer/SellMyInformationModal';

const Footer = ({ lang }: { lang: Locale }) => {
  const {
    footer: { cookiePolicy, privacyPolicy, personalInfo, nonProfitSection },
  } = usei18n(lang);

  const [showModalMyInformation, setShowModalMyInformation] = useState(false);

  type FooterPrivacyLink =
    | {
        label: string;
        showModal: Dispatch<SetStateAction<boolean>>;
        endpoint?: never;
      }
    | { label: string; endpoint: string; showModal?: never };

  const footerPrivacyLinks: FooterPrivacyLink[] = [
    {
      label: cookiePolicy.title,
      endpoint: 'cookie-policy',
    },
    {
      label: privacyPolicy.title,
      endpoint: 'privacy-policy',
    },
    {
      label: personalInfo.title,
      endpoint: 'do-not-sell-my-data',
    },
  ];

  // allows user to close modal by pressing esc key
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowModalMyInformation(false);
    }
  };

  useEffect(() => {
    if (showModalMyInformation) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showModalMyInformation]);

  return (
    <>
      <div className="">
        {showModalMyInformation ? (
          <SellMyInformationModal
            lang={lang}
            personalInfo={personalInfo}
            setShowModalMyInformation={setShowModalMyInformation}
          />
        ) : null}
      </div>
      <FooterNavbar
        lang={lang}
        nonProfitSection={nonProfitSection}
        footerPrivacyLinks={footerPrivacyLinks}
      />
    </>
  );
};

export default Footer;
