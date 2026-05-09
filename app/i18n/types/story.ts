export interface Story {
  introSection: {
    tag: string;
    title: string[];
    text: string;
  };
  section2: {
    title: string;
    text: string[];
  };
  section3: {
    title: string;
    subtitle: string;
    StoryCard: StoryCard[];
  };
  section4: {
    title: string;
    subtitle: string;
    cardtitle: string[];
    cardtext: string[];
    cardsubtext: string[];
  };
  banner: {
    title: string;
    buttontext: string;
    text: string[];
    link: string;
  };
}
export interface StoryCard {
  title: string;
  text: string;
  icon: string;
  style: string;
}
