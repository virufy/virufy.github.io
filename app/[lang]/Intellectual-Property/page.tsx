import React from 'react';
import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';

const IntellectualPropertyPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    footer: { IntellectualProperty },
  } = usei18n(lang);
  return (
    <>
      <div className="relative flex justify-center overflow-hidden bg-gradient-to-b from-[#FBFEFF] to-[#EEF8FD] pt-24 text-[#16223A]">
        <div className="flex w-full max-w-[1440px] flex-col space-y-6 px-5 py-20">
          <h1 className="text-center font-bold">
            {IntellectualProperty.title}
          </h1>
          <p className="text-center">{IntellectualProperty.body}</p>
          <h2 className="pt-6 text-center font-bold">
            {IntellectualProperty.patentTitle}
          </h2>
          <p className="pt-2 text-center">
            {IntellectualProperty.addpatentpending}
          </p>
        </div>
      </div>
    </>
  );
};

export default IntellectualPropertyPage;
