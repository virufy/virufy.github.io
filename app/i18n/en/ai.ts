import { type Ai } from '../types/ai';

const ai: Ai = {
  heroSection: {
    title: [
      {
        type: 'text',
        text: 'The science behind ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
    ],
    text: 'Artificial Intelligence (AI) can identify subtle differences in cough and breathing sounds associated with respiratory conditions.',
    url: '/publications',
    linkText: 'Our Research',
  },
  aiSection: {
    title: 'How does AI work?',
    aiCards: [
      {
        title: '01',
        text: 'Our groundbreaking app employs cutting-edge AI technology to analyze cough and breathing sounds using deep learning algorithms and audio signal processing techniques.',
        style: 'tracking-widest text-[2.5rem] sm:text-6xl',
      },
      {
        title: '02',
        text: 'The algorithm scrutinizes various elements of the cough, such as duration, frequency, and pitch. Leveraging a comprehensive database, the AI meticulously compares recorded cough patterns against known indicators of respiratory diseases, allowing to Identify signals associated with respiratory conditions.',
        style: 'text-[2.5rem] sm:text-6xl',
      },
    ],
  },
};

export default ai;
