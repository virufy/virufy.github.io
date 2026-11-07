import type { StaticImageData } from 'next/image';

export interface BlogPostsPageContent {
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
  filters: {
    filterByYearLabel: string;
    allYearsOption: string;
    sortByLabel: string;
    newestFirst: string;
    oldestFirst: string;
    searchPlaceholder: string;
  };
  categories: {
    all: string;
    research: string;
    technology: string;
    productUpdates: string;
    community: string;
    partnerships: string;
    engineering: string;
    design: string;
    marketing: string;
    operations: string;
  };
  section5: {
    title: string;
    text: string;
    button: string;
  };
  emptyMessage: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  date?: string;
  author?: string;
}
