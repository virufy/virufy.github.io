export interface Story {
  storySection: StorySection;
  MissionSection: StorySection;
  privacySection: PrivacySection;
}

interface StorySection {
  title: string;
  texts: StorySectionText[][];
}

export interface StorySectionText {
  type: string;
  text: string;
  url?: string;
  style?: Record<string, string>;
  className?: string;
}

export interface Section {
  title: string;
  texts: string[];
}

type PrivacySection = Section;
