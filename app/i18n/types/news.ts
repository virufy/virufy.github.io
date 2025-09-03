export interface PublicationCard {
  title: string;
  url: string;
}

export interface PressReleases {
  pressReleaseSection: PressReleaseSection;
  pressReleaseCards: NewsCard[];
}

export interface PressReleaseSection {
  title: string;
}

export interface NewsCard extends PublicationCard {
  linkText?: string;
  date: string;
  subText: string;
  year?: number;
}
