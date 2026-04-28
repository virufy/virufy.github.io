'use client';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  AmilAtOneYoungWorld,
  AmilInJapan,
  AmilInLab,
  AmilInMeeting,
} from '@/public/images/amilsStory/index';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';

import Video from './Video';
import { useState } from 'react';

const AmilsStoryPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    amilsStory: { sectionAmil },
  } = usei18n(lang);
  const [desktopTab, setDesktopTab] = useState(sectionAmil.tabsAmil[0]);
  const [activeTab, setActiveTab] = useState(String);
  console.log(activeTab);
  const desktopTabs = [
    { id: sectionAmil.tabsAmil[0], content: sectionAmil.textAmil },
    { id: sectionAmil.tabsAmil[1], content: sectionAmil.textAmil },
    { id: sectionAmil.tabsAmil[2], content: sectionAmil.textAmil },
    { id: sectionAmil.tabsAmil[3], content: sectionAmil.textAmil },
  ];
  return (
    <>
      <div className="relative mx-auto w-full items-center justify-center overflow-hidden bg-[#255292] md:pt-24">
        <div className="justify-items mx-auto flex h-[100%] w-auto w-full flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pt-20">
            {/* image */}
           <div>
             <img
              src="/images/advisors/AmilImage.jpg"
              alt="Amil"
              className="rounded-2xl object-contain"
              style={{ width: '95%', maxWidth: '350px', height: 'auto' }}
             />
           </div>
           {/* text box */}
           <div
              className="rounded-xl bg-black/10 backdrop-blur-sm shadow-lg text-left"
              style={{width: '80%', maxWidth: '450px', padding: '24px',}}
              >
              <h1 className="text-3xl font-extrabold text-black">
                {sectionAmil.founderAmil[0]}
              </h1>
              <h2 className="mt-3 text-2xl font-bold text-black">
                {sectionAmil.founderAmil[1]}
              </h2>
              <p className="mt-3 text-black/90 font-medium leading-relaxed">
                {sectionAmil.founderAmil[2]}
              </p>
            </div>
          </div>
          <div className="my-10 mt-[40px] h-[202px] w-[359.94px] md:h-[350px] md:w-[75%] lg:h-[618px] lg:w-[1102px]">
            <Video
              width={`100%`}
              height={`100%`}
              url="https://www.youtube.com/live/ttjpF38FVuo"
            />
          </div>
          {/* Mobile Content */}
          <div className="md:hidden">
              <div className="flex-1 border-t"></div>
              <div className="py-2 flex items-center justify-center text-2xl font-medium">
                {sectionAmil.tabsAmil[4]}
              </div>
              <div className="flex-1 border-t py-2"></div>
              <div>
                <ExportedImage
                  className="mx-auto w-auto"
                  src={AmilInMeeting}
                  alt=""
                  basePath={basePath}
                />
              </div>
              <div className="text-m m-3 space-y-4 p-2">
                {sectionAmil.textAmil[0]}
                <div></div>
                <div>
                  {sectionAmil.textAmil[1]}
                  <br></br>
                  {sectionAmil.textAmil[2]}
                </div>
                <div className="my-auto block w-full">
                  <ExportedImage
                    className="mx-auto w-auto"
                    src={AmilInLab}
                    alt=""
                    basePath={basePath}
                  />
                  <p className="mx-auto w-[343px] text-center text-[11px]">
                    {sectionAmil.imgCaption[0]}
                  </p>
                </div>
                <div className="mt-3"></div>
                {sectionAmil.textAmil[3]}
                <div className="my-auto block w-full">
                  <ExportedImage
                    className="mx-auto mt-2 w-auto"
                    src={AmilInJapan}
                    alt=""
                    basePath={basePath}
                  />
                  <p className="mx-auto w-[343px] text-center text-[11px]">
                    {sectionAmil.imgCaption[1]}
                  </p>
                </div>
                <div />
                {sectionAmil.textAmil[4]}
                <div className="my-auto block w-full">
                  <ExportedImage
                    className="mx-auto mt-2 w-auto"
                    src={AmilAtOneYoungWorld}
                    alt=""
                    basePath={basePath}
                  />
                  <p className="mx-auto w-[343px] text-center text-[11px]">
                    {sectionAmil.imgCaption[2]}
                  </p>
                </div>
                <div />
                {sectionAmil.textAmil[5]}
                <div />
                {sectionAmil.textAmil[6]}
              </div>
            </div>
          {/* Desktop Content */}
          <div className="hidden w-full border-y shadow-[0_-20px_10px_rgba(0,0,0,0.25)] md:flex md:items-center md:justify-between md:border-b-0 md:border-t-0">
            <div className="flex w-full items-center justify-between bg-[#255292] text-xl xl:mx-20 xl:px-20">
              {' '}
              {desktopTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setDesktopTab(tab.id);
                    setActiveTab(tab.id);
                  }}
                  className={`w-[50%] bg-[#255292] pt-10 text-xl md:text-base lg:text-lg xl:text-2xl ${
                    activeTab === tab.id
                      ? 'underline decoration-[#30da74ff] decoration-[3px] underline-offset-[16px]'
                      : ''
                  }`}
                >
                  {tab.id}
                </button>
              ))}
            </div>
          </div>
          {desktopTab === sectionAmil.tabsAmil[0] && (
            <div className="m-auto block hidden space-y-4 px-20 py-10 text-xl md:block xl:text-2xl">
              <ExportedImage
                className="xl:mr-30 float-right mx-10 mb-1 h-auto w-auto rounded-xl border-4 border-white xl:mx-20"
                src={AmilInMeeting}
                alt=""
                priority
                basePath={basePath}
              />
              <div className="pl-10 leading-relaxed xl:ml-20">
                {sectionAmil.textAmil[0]}
              </div>
              <div className="pl-10 leading-relaxed xl:ml-20">
                {sectionAmil.textAmil[1]}
              </div>
            </div>
          )}
          {desktopTab === sectionAmil.tabsAmil[1] && (
            <div className="m-auto hidden space-y-4 px-20 py-10 text-xl md:block xl:text-2xl">
              <div className="pl-10 leading-relaxed xl:ml-20">
                {sectionAmil.textAmil[2]} {sectionAmil.textAmil[3]}
              </div>
              <div className="my-auto block w-full">
                <ExportedImage
                  className="white mx-auto w-auto md:w-[500px] lg:w-[600px]"
                  src={AmilInLab}
                  alt=""
                  basePath={basePath}
                />
                <p className="mx-auto text-center text-sm">
                  {sectionAmil.imgCaption[0]}
                </p>
              </div>
            </div>
          )}
          {desktopTab === sectionAmil.tabsAmil[2] && (
            <div className="m-auto hidden h-full items-center space-y-4 px-10 py-10 text-xl leading-relaxed md:block xl:px-20 xl:text-2xl">
              <div className="xl:mr-30 float-right mb-1 h-auto w-auto pl-3 leading-relaxed xl:mx-10 xl:mx-20">
                <ExportedImage
                  className="rounded-xl border-4 border-white md:w-[400px] lg:w-[600px]"
                  src={AmilInJapan}
                  alt=""
                  basePath={basePath}
                />
                <p className="xl: mx-auto text-center text-sm">
                  {sectionAmil.imgCaption[1]}
                </p>
              </div>
              <div className="flex h-full items-center pl-10 leading-relaxed xl:ml-20 xl:h-[400px] xl:text-2xl">
                {sectionAmil.textAmil[4]}
              </div>
            </div>
          )}
          {desktopTab === sectionAmil.tabsAmil[3] && (
            <div className="m-auto block hidden h-full items-center space-y-4 px-10 py-10 text-xl md:block xl:px-20 xl:text-2xl">
              <div className="xl:mr-30 float-right mb-1 h-auto w-auto pl-3 xl:mx-10 xl:mx-20">
                <ExportedImage
                  className="rounded-xl border-4 border-white md:w-[400px] lg:w-[600px]"
                  src={AmilAtOneYoungWorld}
                  alt=""
                  basePath={basePath}
                />
                <p className="xl:text-md mx-auto max-w-[343px] text-center text-sm xl:max-w-[500px]">
                  {sectionAmil.imgCaption[2]}
                </p>
              </div>
              <div className="flex h-full items-center pl-10 xl:ml-20 xl:h-[400px] xl:text-2xl xl:leading-relaxed">
                {sectionAmil.textAmil[5]} {sectionAmil.textAmil[6]}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-[98px] bg-gradient-to-b from-[#255292] to-black"></div>
    </>
  );
};

export default AmilsStoryPage;
