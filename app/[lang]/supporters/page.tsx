'use client';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgHeader } from '@/public/images/supporters';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import { ButtonType } from '../themes';
import ModalSupporter from '../components/ModalSupporter';
import { useState } from 'react';

const unoptimized = process.env.NODE_ENV !== 'production';

export default function SupportersPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    supporters: { title, buttontext, supportersList, contactusform },
  } = usei18n(lang);

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <div className="bg-white">
      <div className="relative h-[260px] w-full md:h-[520px]">
        <ExportedImage
          src={BgHeader}
          alt=""
          priority
          basePath={basePath}
          fill
          unoptimized={unoptimized}
          className="h-full max-h-[700px] min-h-[400px] w-full object-cover"
        />
        <Title
          Text={title}
          H="h1Supporters"
          TitleClassProps="absolute inset-0 flex items-center justify-center text-white text-center italic font-bold"
        />
        <button
          onClick={() => setShowModal(true)}
          className="medium primary px-2 py-2 text-xs text-white md:px-16 md:py-4 md:text-base md:text-xl
             absolute left-1/2 top-[78%] -translate-x-1/2 md:top-[80%] rounded-full"
          style={{
            borderRadius: '50px',
            background: 'linear-gradient(0deg, #19479c 0%, #2750a8 50%, #19479c 100%)',
            border: '2px solid #3fcf94',
          }}
        >
          {buttontext}
        </button>
        {showModal ? (
          <div onClick={closeModal}>
            <ModalSupporter
              close={closeModal}
              title={contactusform.title}
              nametitle={contactusform.nametitle}
              emailtitle={contactusform.emailtitle}
              texttitle={contactusform.texttitle}
              textplaceholder={contactusform.textplaceholder}
              submitButtonText={contactusform.submitButtonText}
              content={contactusform.content}
            />
          </div>
        ) : null}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center bg-white">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center">
          <div className="mb-10 mt-10 w-full text-center">
            <h2 className="text-1xl relative inline-block font-semibold text-blue-700 md:text-4xl">
              Our Supporters
              <div className="absolute bottom-[-8px] left-[-10%] h-[2px] w-[120%] bg-green-500 md:bottom-[-12px] md:h-[3px]" />
            </h2>
          </div>

          <ul className="grid w-full max-w-[1440px] grid-cols-3 gap-3 px-4 md:grid-cols-4 md:gap-8 md:px-12">
            {supportersList.map(({ img, alt, link }) => (
              <li key={alt} className="aspect-square">
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="relative block h-full w-full"
                >
                  <ExportedImage
                    src={img}
                    alt={alt}
                    basePath={basePath}
                    fill
                    priority
                    unoptimized={unoptimized}
                    className="object-contain p-3 md:p-4"
                    sizes="(max-width: 640px) 33vw, (min-width: 641px) 25vw"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mb-10" />
        </div>
      </div>
    </div>
  );
}
