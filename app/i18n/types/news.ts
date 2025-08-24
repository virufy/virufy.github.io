export interface PublicationCard {
  title: string;
  url: string;
}

export interface NewsCard extends PublicationCard {
  date: string;       // or Date
  subText: string;
  linkText?: string;  // for button text (e.g., "Read more")
  year?: number;
}

export interface PressReleaseSection {
  title: string;
}

export interface PressReleases {
  pressReleaseSection: PressReleaseSection;
  pressReleaseCards: NewsCard[];
}
