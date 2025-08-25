// import { NewsCard } from '@/i18n-config';

// Define PublicationCard interface (replace with actual properties if needed)
export interface PublicationCard {
  // Add properties here as required
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
  linkText: string;
  date: string;
  subText: string;
  year?: number;
}
