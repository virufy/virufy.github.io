import { type Publications } from '../types/publications';

const publications: Publications = {
  publicationsSection: {
    title: 'Publications',
    texts: [
      'Below you can find several of our papers that showcase the development and science behind the power of Virufy.',
    ],
  },
  publicationsCards: [
    {
      title:
        'Hierarchical Multi-modal Transformer for Automatic Detection of COVID-19',
      date: 'October 2022',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      linkText: 'Read More',
    },
    {
      title: 'Covid 19 Calculator -- Positive U.S. Socio-Economic Impact',
      date: 'January 2022',
      url: 'https://arxiv.org/abs/2201.11109',
      linkText: 'Read More',
    },
    {
      title:
        'Using Deep Learning with Large Aggregated Datasets for COVID-19 Classification from Cough',
      date: 'January 2022',
      url: 'https://arxiv.org/abs/2201.01669',
      linkText: 'Read More',
    },
    {
      title:
        'Challenges and Opportunities in the Deploying of COVID-19 Cough AI Systems',
      date: 'September 2021',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421112/',
      linkText: 'Read More',
    },
    {
      title:
        'Virufy: Global Applicability of Crowdsourced and Clinical Datasets for AI Detection of COVID-19 from Cough',
      date: 'November 2020',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      linkText: 'Read More',
    },
  ],
  collaborateSection: {
    title: 'Interested for research collaboration?',
    linkText: 'Join Our Team',
  },
};

export default publications;
