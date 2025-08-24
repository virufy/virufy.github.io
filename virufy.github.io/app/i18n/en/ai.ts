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
    text: 'Artificial Intelligence (AI) is capable of detecting minute differences in vocal patterns to detect disease presence.',
    url: '/publications',
    linkText: 'Our Research',
  },
  aiSection: {
    title: 'How does AI work?',
    aiCards: [
      {
        title: '01',
        text: 'Our groundbreaking app employs cutting-edge AI technology to analyze your breathing patterns using deep learning algorithms and audio signal processing techniques.',
        style: 'tracking-widest text-[2.5rem] sm:text-6xl',
      },
      {
        title: '02',
        text: 'The algorithm scrutinizes various elements of the cough, such as duration, frequency, and pitch. Leveraging a comprehensive database, the AI meticulously compares recorded cough patterns against known indicators of respiratory diseases, allowing for the early detection of potential health issues.',
        style: 'text-[2.5rem] sm:text-6xl',
      },
    ],
  },
};

export default ai;
