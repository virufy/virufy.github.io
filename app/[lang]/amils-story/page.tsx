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
import amilsStory from '@/app/i18n/en/amilsStory';

const AmilsStoryPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    amilsStory: { sectionAmil },
  } = usei18n(lang);
  const [desktopTab, setDesktopTab] = useState('tab1');
  const [mobileTab, setMobileTab] = useState(sectionAmil.tabsAmil[4]);
  const [activeTab, setActiveTab] = useState(String);

  const desktopTabs = [
    {
      id: 'desktop1',
      content: 'content.desktop1',
    },
  ];
  const mobileTabs = [
    {
      id: amilsStory.sectionAmil.tabsAmil[4],
      border: 'left',
      content: amilsStory.sectionAmil.textAmil,
    },
    {
      id: amilsStory.sectionAmil.tabsAmil[5],
      border: 'right',
      content: amilsStory.sectionAmil,
    },
  ];
  return (
    <>
      <div className="relative mx-0 items-center justify-center overflow-hidden bg-[#255292] md:pt-24">
        <div className="justify-items flex h-[100%] w-auto max-w-[1650px] flex-col items-center">
          <div className="my-10 mt-[40px] h-[202px] w-[359.94px] md:h-[350px] md:w-[75%] lg:h-[618px] lg:w-[1102px]">
            <Video
              width={`100%`}
              height={`100%`}
              url="https://www.youtube.com/live/ttjpF38FVuo"
            />
          </div>
          {/* Mobile Content */}
          <div className="w-full border-y">
            {mobileTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setMobileTab(tab.id);
                  setActiveTab(tab.id);
                }}
                className={`w-[50%] bg-[#255292] px-1 py-2 text-xl ${
                  activeTab === tab.id
                    ? tab.border === 'left'
                      ? 'rounded-tl-none rounded-tr-3xl border-r-[0.5] border-t-[0.5] bg-[#30da7473]'
                      : 'rounded-tl-3xl rounded-tr-none border-l-[0.5] border-t-[0.5] bg-[#30da7473]'
                    : ''
                }`}
              >
                {tab.id}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div>
            {mobileTab === sectionAmil.tabsAmil[4] && (
              <div className="text-m m-3 space-y-4 p-2">
                <ExportedImage
                  className="float-right mb-1 ml-1 h-auto w-auto"
                  src={AmilInMeeting}
                  alt=""
                  priority
                  basePath={basePath}
                />
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
            )}
            {mobileTab === sectionAmil.tabsAmil[5] && (
              <div className="text-m m-5 block w-auto rounded-3xl bg-white p-5 text-black">
                <h1 className="mx-auto my-auto text-center text-2xl font-bold">
                  {sectionAmil.titlePublications}
                </h1>
                <ul className="p-auto m-auto block text-center">
                  {sectionAmil.listPublications.map((pub, index) => (
                    <li className="py-2" key={index}>
                      {pub}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmilsStoryPage;
