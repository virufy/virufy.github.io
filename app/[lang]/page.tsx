import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgHeader, VirufyMobilePhone } from '@/public/images/home';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { Fragment } from 'react';
import { usei18n } from '../i18n';
import Title from './components/Title';

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    home: { introSection, section2 },
  } = usei18n(lang);

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#0A0A0A]">
      <div className="w-full overflow-hidden">
        <div className="relative flex justify-center overflow-hidden">
          {/* First background img */}
          <div className="w-full brightness-100 contrast-100">
            <ExportedImage
              className="h-full w-screen object-cover"
              src={BgHeader}
              alt=""
              priority
              basePath={basePath}
            />
          </div>

          {/* Welcome text */}
          <div className="absolute inset-0 flex items-start justify-center p-4 text-center text-white sm:text-left md:p-8 lg:p-12">
            <div className="mx-auto flex max-w-screen-xl flex-col">
              <div className="mt-0 sm:mt-0 md:mt-32 lg:mt-44">
                <div className="ml-0 mt-20 flex flex-col text-center sm:mx-0 lg:mx-20 lg:ml-24 xl:mt-24">
                  <Title
                    Text={introSection.text}
                    H=""
                    TitleClassProps="text-white text-base leading-9 sm:text-base sm:leading-9 md:text-3xl md:leading-10 lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-[3.5rem]"
                  />
                  <div className="mt-0 flex flex-col sm:text-center lg:mt-12">
                    <Title
                      Text={introSection.text2}
                      H=""
                      TitleClassProps="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-base sm:leading-9 md:text-3xl md:leading-10 lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-[3.5rem]"
                    />
                  </div>
                </div>

                {/* Introducing Virufy section */}
                <div className="mt-14 flex flex-col items-start space-y-2 sm:mt-24 md:mt-56 md:space-y-8 lg:mt-80 xl:mt-[40rem]">
                  <div className="w-full max-w-md md:max-w-3xl xl:max-w-5xl">
                    <p className="text-center text-xs font-bold leading-[1.1rem] sm:text-sm md:text-lg md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10">
                      {introSection.subText.map((text, i) =>
                        text.type === 'text' ? (
                          <Fragment key={i}>{text.text}</Fragment>
                        ) : (
                          <span key={i} className="text-green-500">
                            {text.text}
                          </span>
                        )
                      )}
                    </p>
                  </div>
                </div>

                {/* Disclaimers */}
                <div className="mt-1 flex flex-col items-start sm:ml-10 sm:mt-2 md:ml-0 lg:mt-6">
                  <div className="w-full max-w-screen-lg">
                    {introSection.disclaimers.map((disclaimer, i) => (
                      <p
                        key={i}
                        className="xl:text-md text-[0.4rem] leading-[0.6rem] text-gray-400 md:text-sm md:leading-5 lg:text-base lg:leading-6 xl:leading-7"
                      >
                        {disclaimer}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* How it works section */}
              <div className="absolute bottom-6 ml-24 mt-4 flex max-w-[50rem] flex-col items-center px-8 sm:bottom-12 sm:ml-32 sm:mr-8 sm:mt-8 sm:space-y-2 md:bottom-32 md:ml-48 md:space-y-8 lg:ml-72 lg:mr-20 lg:mt-16 xl:bottom-60 xl:mt-60">
                <p className="text-xs leading-8 sm:leading-6 md:text-2xl md:leading-8 lg:text-[1.75rem] lg:leading-9 xl:text-[2rem] xl:leading-10">
                  {introSection.mainText2}
                </p>
                <p className="text-center text-[0.5rem] font-normal leading-[0.7rem] sm:text-[0.6rem] sm:leading-[0.9rem] md:text-lg md:font-bold md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-[3rem]">
                  {introSection.subText2.map((text, i) =>
                    text.type === 'text' ? (
                      <Fragment key={i}>{text.text}</Fragment>
                    ) : (
                      <span key={i} className="text-green-500">
                        {text.text}
                      </span>
                    )
                  )}
                </p>
                {/* Share your cough button */}
                <div className="mt-2 flex w-full justify-center px-0">
                  <Link href={`/study`}>
                    <button
                      className="medium primary px-2 py-2 text-xs text-black md:px-16 md:py-4 md:text-base md:text-xl"
                      style={{ borderRadius: '50px', background: 'white' }}
                    >
                      {introSection.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section of home page */}
      <div className="flex min-h-[1050px] w-full flex-col items-center justify-center bg-[#0A0A0A] pb-8 xl:min-h-[1273px]">
        <div className="mt-4 flex w-full items-center justify-center sm:px-5 xl:px-12">
          <div className="flex w-full flex-col items-center rounded-3xl bg-[#132D62] pb-8">
            <div className="mx-auto w-full max-w-screen-xl">
              {/* Your health title and text */}
              <div className="mt-8 flex w-full flex-col items-center px-4 text-center lg:mt-16">
                <Title
                  Text={section2.text}
                  H=""
                  TitleClassProps="text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-xl sm:leading-9 md:text-4xl md:leading-10 lg:leading-[2.75rem] xl:text-5xl xl:leading-[3.5rem]"
                />
                <p className="mt-4 px-0.5 text-sm leading-4 text-white md:text-lg md:leading-7 lg:text-xl lg:leading-8 xl:px-40 xl:text-2xl xl:font-bold xl:leading-10">
                  {section2.subtext}
                </p>
              </div>

              {/* Text next to phone img */}
              <div className="mt-0 flex w-full flex-col justify-between px-8 text-center sm:flex-col xl:mt-8 xl:flex-row xl:px-24 xl:text-start">
                <div className="order-2 flex flex-col items-center px-0 sm:w-full xl:order-1 xl:mt-16 xl:w-1/2 xl:items-start xl:px-24">
                  <div className="mb-4 mt-0 pt-8 xl:mt-4 xl:pt-0">
                    {section2.title.map((item, i) => (
                      <Fragment key={i}>
                        <Title
                          H="h5spaced"
                          Text={item}
                          TitleClassProps="text-white font-bold mb-1 mt-8"
                        />
                        <p className="leading-1 text-sm font-thin text-white md:text-xl md:leading-normal lg:text-2xl lg:leading-7 xl:text-lg xl:leading-6">
                          {section2.sub[i]}
                        </p>
                      </Fragment>
                    ))}
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-8 flex w-full flex-col items-center xl:mt-16 xl:items-start">
                    <div className="w-full">
                      <p className="px-8 text-center text-xs font-thin text-white lg:text-base xl:px-0 xl:text-left">
                        {section2.disclaimer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone img */}
                <div className="order-1 mt-8 flex justify-center xl:order-2 xl:mt-0 xl:w-1/2">
                  <div className="relative w-auto">
                    <ExportedImage
                      className="h-[300px] w-auto xl:h-[800px]"
                      src={VirufyMobilePhone}
                      alt="mobile phone with Virufy's logo"
                      priority
                      basePath={basePath}
                    />
                  </div>
                </div>
              </div>

              {/* Our technology button */}
              <div className="mx-auto mb-8 mt-8 flex w-full max-w-md items-center justify-center px-0 md:max-w-lg xl:mt-0">
                <Link href={`/${lang}/ai`}>
                  <button
                    className="medium primary h-[45px] w-[315px] text-black xl:h-[65px] xl:w-[250px]"
                    style={{ borderRadius: '50px', background: 'white' }}
                  >
                    {section2.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
