import { type StaticImageData } from "next/image";

export interface sevenAi {
  heroSection: AiHeroSection;
  aiSection: AiSection;
  banner: Banner;
}

interface AiHeroSection {
  tag: string;
  title: TitleText[];
  text: string;
  aiSlides: AiSlide[];
}

interface TitleText {
  type: string;
  text: string;
}

interface AiSection {
  title: string;
  text: string;
  aiCards: AiCard[];
}

export interface AiCard {
  title: string;
  text: string;
  icon: StaticImageData;
  style: string;
}

export interface AiSlide {
  title: string;
  text: string;
  image: StaticImageData;
}

interface Banner {
  title: string;
  text: string;
  buttonText: string;
  url: string;
}
