import { type StaticImageData } from "next/image";

export interface sevenAmilsStory {
  heroSection: AmilsStoryHeroSection;
  storySection: StorySection;
  milestoneSection: MilestoneSection;
  oywSection: OywSection;
  banner: Banner;
}

interface AmilsStoryHeroSection {
  tag: string;
  title: TitleText[];
  text: string;
}

interface TitleText {
  type: string;
  text: string;
}

interface StorySection {
  title: string;
  texts: string[];
}

interface MilestoneSection {
  title: string;
  text: string;
  milestoneCards: Card[];
}

export interface Card {
  title: string;
  text: string;
  image: StaticImageData;
  date: string;
}

interface OywSection {
  title: TitleText[];
  text: string;
  image: StaticImageData;
}

interface Banner {
  title: string;
  text: string;
  buttonText: string;
  url: string;
}


