export interface Story {
  aboutUsSection: AboutUsSection;
  storySection: StorySection;
  MissionSection: MissionSection;
  privacySection: PrivacySection;
}

interface StorySection {
  title: string;
  texts: StorySectionText[][];
}

interface StorySectionText {
  type: string;
  text: string;
  url?: string;
  style?: Record<string, string>;
  className?: string;
}

interface MissionSection {
  title: string;
  statement: string;
  texts: string[];
}

export interface Section {
  title: string;
  texts: string[];
}

type AboutUsSection = Section;
type PrivacySection = Section;
