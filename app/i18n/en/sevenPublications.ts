import type { SevenPublicationsPage } from '../types/sevenPublications';
import {
  Apr_8_2020,
  Dec_21_2025,
  Jan_21_2022,
  Jan_5_2022,
  March_8_2026,
  Nov_26_2020,
  Oct_22_2020,
  Oct_29_2022,
  Sep_7_2021,
  PublicationIcon,
  NewsBg,
} from '@/public/images/sevenNews';

const sevenPublicationsContent: SevenPublicationsPage = {
  hero: {
    title: 'Virufy Publications',
    subtitle:
      'Explore our peer-reviewed research, academic publications, and scientific studies advancing the field of AI-powered respiratory disease detection through innovative cough analysis technology.',
    bgImage: NewsBg,
    tag: 'Research',
    tagIcon: PublicationIcon,
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'News' },
      { id: 'publications', label: 'Publications' },
      { id: 'blogs', label: 'Blogs' },
    ],
    defaultOption: 'publications',
  },

  filters: {
    filterByYearLabel: 'Filter by Year:',
    allYearsOption: 'All Years',
    sortByLabel: 'Sort by:',
    newestFirst: 'Newest to Oldest',
    oldestFirst: 'Oldest to Newest',
  },

  section5: {
    title: 'Inspired by the work? Help shape what comes next.',
    text: 'Join researchers, designers, engineers, and advocates working together to advance global respiratory health.',
    button: 'Join Our Team',
  },

  emptyMessage: 'No news articles found for the selected filters.',

  newsCards: [
    {
      title:
        'Data‑Efficient Cough Analysis Through Active Learning and Segmentation',
      date: 'March 8, 2026',
      subText: '',
      url: '',
      contentType: 'publications',
      image: March_8_2026,
      year: 2026,
    },
    {
      title: 'Improving Clinical Trial Enrollment for Smartphone',
      date: 'December 21, 2025',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Dec_21_2025,
      year: 2025,
    },
    {
      title:
        'Hierarchical Multi-modal Transformer for Automatic Detection of COVID-19',
      date: 'October 29, 2022',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Oct_29_2022,
      year: 2022,
    },
    {
      title: 'Covid 19 Calculator -- Positive U.S. Socio-Economic Impact',
      date: 'January 21, 2022',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Jan_21_2022,
      year: 2022,
    },
    {
      title:
        'Using Deep Learning with Large Aggregated Datasets for COVID-19 Classification from Cough',
      date: 'January 5, 2022',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Jan_5_2022,
      year: 2022,
    },
    {
      title:
        'Challenges and Opportunities in the Deploying of COVID-19 Cough AI Systems',
      date: 'September 7, 2021',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Sep_7_2021,
      year: 2021,
    },
    {
      title:
        'Virufy: Global Applicability of Crowdsourced and Clinical Datasets for AI Detection of COVID-19 from',
      date: 'November 26, 2020',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Nov_26_2020,
      year: 2020,
    },
    {
      title: 'Fusical: Multimodal Fusion for Video Sentiment',
      date: 'October 22, 2020',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Oct_22_2020,
      year: 2020,
    },
    {
      title: 'Facial Expression Recognition with Deep Learning',
      date: 'April 8, 2020',
      subText: '',
      url: '',
      contentType: 'publications',
      image: Apr_8_2020,
      year: 2020,
    },
  ],
};

export default sevenPublicationsContent;
