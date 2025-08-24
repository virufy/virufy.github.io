export interface Ai {
  heroSection: AiHeroSection;
  aiSection: AiSection;
}

interface AiHeroSection {
  title: TitleText[];
  text: string;
  url: string;
  linkText: string;
}

interface TitleText {
  type: string;
  text: string;
}

interface AiSection {
  title: string;
  aiCards: AiCard[];
}

export interface AiCard {
  title: string;
  text: string;
  style: string;
}
