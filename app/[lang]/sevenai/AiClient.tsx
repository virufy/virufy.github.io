'use client';
import ExportedImage from 'next-image-export-optimizer';
import { type StaticImageData } from 'next/image';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { usei18n } from '../../i18n';

import AiCard from './AiCard';
import { type AiCard as AiCardProps } from '@/app/i18n/types/ai';
import AiCarousel from './AiCarousel';
import ActionBanner from '../components/ActionBanner';

import { CrossBackground } from '@/public/images/ai/index';
import { CarouselImg1, CarouselImg2, CarouselImg3 } from '@/public/images/ai/index';
import AcousticIcon from '@/public/icons/icon-ai-acoustic.png';
import FeatureIcon from '@/public/icons/icon-ai-feature.png';
import ModelIcon from '@/public/icons/icon-ai-model.png';
import SoundIcon from '@/public/icons/icon-ai-sound.png';
import ValidationIcon from '@/public/icons/icon-ai-validation.png';
import AiIcon from '@/public/icons/icon-ai.png';
import { ColorProps } from '../themes';



// Types

type TitleText = { type: string; text: string };

type CTA = { demoAppUrl?: string; joinUrl?: string };

type I18nReturn = {
  ai: {
    heroSection: {
      title: TitleText[];
      text: string;
      url: string;
      linkText: string;
    };
    aiSection: { title: string; aiCards: AiCardProps[] };
  };
  cta?: CTA;
};

// Page Component

export default function AiPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    ai: { heroSection, aiSection },
  } = usei18n(lang) as I18nReturn;

  // Temporary variables - to be removed
  const carouselTitles : string[] = [
    "Data Collection", 
    "Signal Processing", 
    "Machine Learning Analysis"
  ];
  const carouselTexts : string[] = [
    "Simply record a brief cough using our easy-to-use web app. The interface guides you to capture a high-quality, natural cough sample under consistent conditions, ensuring optimal audio for accurate respiratory analysis.",
    "We use ML algorithms to accurately identify and isolate cough sounds. Our tools clean up background noise and analyze digital biomarkers by converting sound waves into quantifiable characteristics called acoustic biomarker features.",
    "The extracted acoustic biomarker features are then fed into a pre-trained Machine Learning Model, the model compares the new incoming cough's feature profile against patterns it learned through training."
  ];

  const cardTitles : string[] = [
    "Sound Capture",
    "Feature Extraction",
    "Validation & Insight",
    "Acoustic Processing",
    "Model Training"
  ];
  const cardTexts : string[] = [
    "Users record short, anonymized cough samples through the Virufy app.",
    "AI identifies subtle patterns and acoustic biomarkers in the data.",
    "Users results are tested to ensure ongoing improvement and effectiveness.",
    "Each cough is converted into a visual sound map, or spectrogram.",
    "Algorithms learn from global datasets to improve accuracy and fairness."
  ];
  const cardIcons : StaticImageData[] = [
    SoundIcon, FeatureIcon, ValidationIcon, AcousticIcon, ModelIcon
  ];

  const bannerTitle = "Ready to Make a Difference?";
  const bannerText = "We're on a mission to make health screening as simple as a cough. Reach out to find out how your financial contributions directly accelerate our clinical research and the deployment of our accessible AI technology to communities worldwide.";
  const bannerButtonText = "Support Us";

  return (
    <div className="relative">
      {/* HERO */}
      <section>
        {/* Hero Background */}
        <div className="relative bg-white">
          <ExportedImage
            className="absolute h-full w-full object-cover"
            src={CrossBackground}
            alt=""
            priority
            basePath={basePath}
          />

          {/* Content */}
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 md:pb-28 md:pt-36">
            {/* Heading, description, and carousel*/}
            <div className="text-center text-black md:self-center md:text-left">
              <span className="inline-block pl-4 pr-5 py-1 mb-10 border border-[#bcc7d4] rounded-full text-[#084b8a] bg-[#d9eaf8]">
                <ExportedImage
                  className="inline"
                  src={AiIcon}
                  alt="AI Icon"
                  basePath={basePath}
                />
                &nbsp; AI-Powered Health Technology
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl pb-2">
                The <span className={`${ColorProps.textGradient}`}>
                  Science </span> 
                Behind Virufy
              </h1>

              <p className={`mt-5 mb-10 text-lg ${ColorProps.textGray}`}>
                {/* {heroSection.text} */}
                Our AI technology listens for subtle patterns in the sound of your cough — helping detect potential respiratory illnesses early and non-invasively.
              </p>

              <AiCarousel titles={carouselTitles} texts={carouselTexts} images={[CarouselImg1, CarouselImg2, CarouselImg3]} style="my-5"/>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="relative bg-white text-black">
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          {/* Technology */}
          <div
            id="panel-technology"
            role="tabpanel"
            aria-labelledby="tab-technology"
            className=""
          >
            <h2 className={`text-3xl font-semibold ${ColorProps.textGreenDark}`}>
              {/* {aiSection.title} */}
              How Virufy's AI Learns
            </h2>
            <p className={`${ColorProps.textGray} my-10`}>Artificial Intelligence (AI) is capable of detecting minute differences in vocal patterns to detect disease presence. The algorithm scrutinizes various elements of the cough, such as duration, frequency, and pitch. Leveraging a comprehensive database, the AI meticulously compares recorded cough patterns against known indicators of respiratory diseases, allowing for early detection of potential health issues.</p>

            {/* Top 3 cards */}
            <div className="grid grid-cols-6 gap-6 justify-center">
              {cardTitles.slice(0, 3).map((_, i) => {
                return <div key={i} className="col-span-2 flex flex-col items-center">
                  <AiCard key={i} title={cardTitles[i]} text={cardTexts[i]} icon={cardIcons[i]} style="shadow-xl w-full h-full" />
                  <div className={`mt-10 w-[16px] h-[12px] ${ColorProps.bgGradientReverse} [clip-path:polygon(50%_0%,0%_100%,100%_100%)]`} />
                </div>;
              })}
            </div>
            <div className="my-4 h-[4px] w-full bg-gradient-to-r from-[#0E72C9]/30 to-[#2A9D8F]/30 rounded-full" />

            {/* Bottom 2 cards */}
            <div className="grid grid-cols-6 gap-6 justify-center">
              <div/>
              {cardTitles.slice(3).map((_, i) => {
                return <div key={i+3} className="col-span-2 flex flex-col items-center">
                  <div className={`text-center mb-10 w-[16px] h-[12px] ${ColorProps.bgGradient} [clip-path:polygon(0%_0%,100%_0%,50%_100%)]`} />
                  <AiCard key={i+3} title={cardTitles[i+3]} text={cardTexts[i+3]} icon={cardIcons[i+3]} style="shadow-xl h-full" />
                </div>;
              })}
            </div>
          </div>
        </section>
      </div>
      <ActionBanner title={bannerTitle} text={bannerText} buttonText={bannerButtonText} lang={lang} page="donate"/>
    </div>
  );
}
