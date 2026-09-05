import type { PublicationsPage } from '../types/publications';

const PublicationsContent: PublicationsPage = {
  hero: {
    title: 'Virufy Publications',
    subtitle:
      'Explore our peer-reviewed research, academic publications, and scientific studies advancing the field of AI-powered respiratory disease detection through innovative cough analysis technology.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'Research',
    tagIcon: '/icons/icon-research.png',
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
        'Organizational and Leadership Support and Its Relationship to Volunteer Motivation in a Remote-First Nonprofit Startup',
      date: 'July 2026',
      subText: '',
      url: 'https://link.springer.com/article/10.1186/s43093-026-00914-6',
      linkText: 'Read More',
      contentType: 'publications',
    },
    {
      title:
        "Turning Startup Lessons into Science: Our NSF I-Corps Experience Is Now a Peer-Reviewed Publication. Customer Discovery Isn't Just Validation—It Can Transform an Entire Venture",
      date: 'July 2026',
      subText: '',
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/jsc.70107',
      linkText: 'Read More',
      contentType: 'publications',
    },
    {
      title: 'AI-Powered Acoustic Diagnostics for Global Respiratory Health',
      date: 'June 2026',
      subText: '',
      url: '/en/publications/virufy-white-paper-2026',
      contentType: 'publications',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'Data‑Efficient Cough Analysis Through Active Learning and Segmentation',
      date: 'March 8, 2026',
      subText: '',
      url: 'https://virufy.org/en/publications/data-efficient-cough-ai/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/march_8_2026.png/',
      year: 2026,
    },
    {
      title: 'Improving Clinical Trial Enrollment for Smartphone',
      date: 'December 21, 2025',
      subText: '',
      url: 'https://sabeconomics.org/ojs/index.php/jbep/article/view/232',
      contentType: 'publications',
      image: '/images/sevenNews/publications/December_21_2025.png',
      year: 2025,
    },
    {
      title:
        'Hierarchical Multi-modal Transformer for Automatic Detection of COVID-19',
      date: 'October 29, 2022',
      subText: '',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_29_2022.png',
      year: 2022,
    },
    {
      title: 'Covid 19 Calculator -- Positive U.S. Socio-Economic Impact',
      date: 'January 21, 2022',
      subText: '',
      url: 'https://arxiv.org/abs/2201.11109',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_21_2022.png',
      year: 2022,
    },
    {
      title:
        'Using Deep Learning with Large Aggregated Datasets for COVID-19 Classification from Cough',
      date: 'January 5, 2022',
      subText: '',
      url: 'https://arxiv.org/abs/2201.01669',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_5_2022.png',
      year: 2022,
    },
    {
      title:
        'Challenges and Opportunities in the Deploying of COVID-19 Cough AI Systems',
      date: 'September 7, 2021',
      subText: '',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8421112/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/September_7_2021.png',
      year: 2021,
    },
    {
      title:
        'Virufy: Global Applicability of Crowdsourced and Clinical Datasets for AI Detection of COVID-19 from',
      date: 'November 26, 2020',
      subText: '',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      contentType: 'publications',
      image: '/images/sevenNews/publications/November_26_2020.png',
      year: 2020,
    },
    {
      title: 'Fusical: Multimodal Fusion for Video Sentiment',
      date: 'October 22, 2020',
      subText: '',
      url: 'https://dl.acm.org/doi/abs/10.1145/3382507.3417966',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_22_2020.png',
      year: 2020,
    },
    {
      title: 'Facial Expression Recognition with Deep Learning',
      date: 'April 8, 2020',
      subText: '',
      url: 'https://arxiv.org/abs/2004.11823',
      contentType: 'publications',
      image: '/images/sevenNews/publications/April_8_2020.png',
      year: 2020,
    },
  ],
};

export default PublicationsContent;
