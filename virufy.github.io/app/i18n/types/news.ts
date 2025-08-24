import { type PublicationCard } from './publications';

export interface PressReleases {
  pressReleaseSection: PressReleaseSection;
  pressReleaseCards: NewsCard[];
}

export interface PressReleaseSection {
  title: string;
}

export interface NewsCard extends PublicationCard {
  subText: string;
}
