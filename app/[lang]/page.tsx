import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgHeader, BgHeaderLong, VirufyMobilePhone } from '@/public/images/home';
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
          {/* Desktop Background Image */}
          <div className="hidden md:block w-full brightness-100 contrast-100">
            <ExportedImage
              className="h-full w-screen object-cover"
              src={BgHeader}
              alt=""
              priority
              basePath={basePath}
            />
          </div>

          {/* Mobile Background Image */}
          <div className="block md:hidden w-full brightness-100 contrast-100">
            <ExportedImage
              className="h-full w-screen object-cover"
              src={BgHeaderLong}
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
                  <div className="hidden md:block">
                    {/* Welcome to Virufy */}
                    <Title
                      Text={introSection.text}
                      H=""
                      TitleClassProps="text-white text-base leading-9 sm:text-base sm:leading-9 md:text-3xl md:leading-10 lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-[3.5rem]"
                    />
                  </div>
                  <div className="mt-[16.2rem] flex flex-col sm:text-center sm:mt-[19rem] md:mt-0 lg:mt-12">
                    {/* Your Digital Health Companion */}
                    <Title
                      Text={introSection.text2}
                      H=""
                      TitleClassProps="font-black md:font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#36d779] to-[#319fb6] text-base text-lg sm:leading-9 md:text-3xl md:leading-10 lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-[3.5rem]"
                      style={{
                        WebkitTextStroke: '0.5px #183360',
                      }}
                    />
                  </div>
                </div>

                {/* Introducing Virufy section */}
                <div className="mt-2 flex flex-col items-start space-y-2 md:mt-56 md:space-y-8 lg:mt-80 xl:mt-[40rem]">
                  <div className="w-full max-w-md md:max-w-3xl xl:max-w-5xl">
                    {introSection.subText.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-3 md:mb-6 text-center text-[11px] md:font-bold leading-[1.1rem] sm:text-xs md:text-lg md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10"
                      >
                        {paragraph.map((item, i) =>
                          item.type === 'text' ? (
                            <Fragment key={i}>{item.text}</Fragment>
                          ) : (
                            <span key={i} className="text-green-500">
                              {item.text}
                            </span>
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Disclaimers */}
                <div className="flex flex-col items-start sm:ml-10 md:mt-2 md:ml-0 lg:mt-6">
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
              <div className="absolute bottom-16 ml-28 mt-4 flex max-w-[50rem] flex-col items-center px-8 sm:bottom-20 sm:ml-32 sm:mt-8 sm:space-y-4 md:bottom-32 md:ml-48 md:space-y-8 lg:ml-72 lg:mr-20 lg:mt-16 xl:bottom-60 xl:mt-60">
                <p className="font-bold text-[1rem] leading-8 sm:leading-6 sm:text-[1.2rem] md:font-normal md:text-2xl md:leading-8 lg:text-[1.75rem] lg:leading-9 xl:text-[2rem] xl:leading-10">
                  {introSection.mainText2}
                </p>
                <p className="text-center text-[0.7rem] font-normal leading-[1rem] sm:text-[0.8rem] sm:leading-[1.2rem] md:text-lg md:font-bold md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-[3rem]">
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
                <div className="mt-4 md:mt-2 flex w-full justify-center px-0">
                  <Link href={`/study`}>
                    <button
                      className="medium primary px-2 py-2 text-xs text-white md:px-16 md:py-4 md:text-base md:text-xl"
                      style={{ 
                        borderRadius: '50px', 
                        background: 'linear-gradient(0deg, #19479c 0%, #2750a8 50%, #19479c 100%)',
                        border: '2px solid #3fcf94'
                      }}
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
      <div className="flex min-h-[1050px] w-full flex-col items-center justify-center bg-[#011633] md:bg-[#0b0b0b] pb-8 xl:min-h-[1273px]">
        <div className="flex w-full items-center justify-center px-4 xl:px-12">
          <div className="flex w-full flex-col items-center rounded-3xl bg-[#07193d] pb-8">
            <div className="mx-auto w-full max-w-screen-xl">
              {/* Your health title and text */}
              <div className="mt-6 flex w-full flex-col items-center px-4 text-center lg:mt-16">
                {/* Your Health, Our Priority */}
                <Title
                  Text={section2.text}
                  H=""
                  TitleClassProps="text-transparent bg-clip-text bg-gradient-to-b from-[#36d779] to-[#319fb6] text-xl font-black md:font-normal sm:leading-9 md:text-4xl md:leading-10 lg:leading-[2.75rem] xl:text-5xl xl:leading-[3.5rem]"
                  style={{
                    WebkitTextStroke: '0.5px #183360',
                  }}
                />
                <p className="mt-4 px-0.5 text-sm leading-4 text-white md:text-lg md:leading-7 lg:text-xl lg:leading-8 xl:px-40 xl:text-2xl xl:font-bold xl:leading-10">
                  {section2.subtext}
                </p>
              </div>

              {/* Text next to phone img */}
              <div className="mt-0 flex w-full flex-col justify-between px-8 text-center sm:flex-col xl:mt-8 xl:flex-row xl:px-24 xl:text-start">
                <div className="order-2 flex flex-col items-center px-0 sm:w-full xl:order-1 xl:mt-16 xl:w-1/2 xl:items-start xl:px-24">
                  <div className="mb-0 md:mb-4 mt-0 pt-0 md:pt-8 xl:mt-4 xl:pt-0">
                    {section2.title.map((item, i) => (
                      <Fragment key={i}>
                        <Title
                          H="h5spaced"
                          Text={item}
                          TitleClassProps="text-white font-bold mb-2"
                        />
                        <p className="mb-8 leading-1 text-sm font-thin text-white md:text-xl md:leading-normal lg:text-2xl lg:leading-7 xl:text-lg xl:leading-6">
                          {section2.sub[i]}
                        </p>
                      </Fragment>
                    ))}
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-0 flex w-full flex-col items-center xl:mt-16 xl:items-start">
                    <div className="w-full">
                      <p className="px-0 md:px-8 text-center text-xs text-gray-400 font-thin lg:text-base xl:px-0 xl:text-left">
                        {section2.disclaimer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone img */}
                <div className="order-1 flex justify-center xl:order-2 xl:mt-0 xl:w-1/2">
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
                    className="medium primary h-[36px] w-[150px] md:h-[45px] md:w-[315px] text-white xl:h-[65px] xl:w-[250px]"
                    style={{ 
                      borderRadius: '50px',
                      background: 'linear-gradient(0deg, #19479c 0%, #2750a8 50%, #19479c 100%)',
                      border: '2px solid #3fcf94' 
                    }}
                  >
                    {section2.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden w-full h-10 bg-gradient-to-b from-[#011633] to-[#000000]"></div>
    </div>
  );
};

export default HomePage;
