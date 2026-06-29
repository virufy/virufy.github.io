import type { StaticImageData } from 'next/image';

export interface PublicationsPage {
  // Hero section
  hero: {
    tag: string;
    tagIcon: string | StaticImageData;
    title: string;
    subtitle: string;
    bgImage: string | StaticImageData;
  };
  pillSelector: {
    options: {
      id: 'news' | 'publications' | 'blogs';
      label: string;
    }[];
    defaultOption: 'news' | 'publications' | 'blogs';
  };

  // Filter bar
  filters: {
    filterByYearLabel: string;
    allYearsOption: string;
    sortByLabel: string;
    newestFirst: string;
    oldestFirst: string;
  };

  // Section 5 (before footer – matches homepage)
  section5: {
    title: string;
    text: string;
    button: string;
  };

  // Message when no results
  emptyMessage: string;

  // The actual news items (data, not static text)
  newsCards: {
    title: string;
    url: string;
    linkText?: string;
    date: string;
    subText: string;
    year?: number;
    contentType: 'news' | 'publications' | 'blogs';
    image?: StaticImageData | string;
  }[];
}
