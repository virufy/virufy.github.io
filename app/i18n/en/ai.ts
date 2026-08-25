import { type Ai } from '../types/ai';

const Ai: Ai = {
  heroSection: {
    tag: 'AI-Powered Health Technology',
    title: [
      { type: 'text', text: 'The ' },
      { type: 'span', text: 'Science' },
      { type: 'text', text: ' Behind Virufy' },
    ],
    text: 'Our AI technology listens for subtle patterns in the sound of your cough — helping detect potential respiratory illnesses early and non-invasively.',

    aiSlides: [
      {
        title: 'Data Collection',
        text: 'Simply record a brief cough using our easy-to-use web app. The interface guides you to capture a high-quality, natural cough sample under consistent conditions, ensuring optimal audio for accurate respiratory analysis.',
        image: '/images/ai/carousel-image-1.webp',
      },
      {
        title: 'Signal Processing',
        text: 'We use ML algorithms to accurately identify and isolate cough sounds. Our tools clean up background noise and analyze digital biomarkers by converting sound waves into quantifiable characteristics called acoustic biomarker features.',
        image: '/images/ai/carousel-image-2.webp',
      },
      {
        title: 'Machine Learning Analysis',
        text: "The extracted acoustic biomarker features are then fed into a pre-trained Machine Learning Model, the model compares the new incoming cough's feature profile against patterns it learned through training.",
        image: '/images/ai/carousel-image-3.webp',
      },
    ],
  },

  aiSection: {
    title: "How Virufy's AI Learns",
    text: 'Artificial Intelligence (AI) is capable of detecting minute differences in vocal patterns to detect disease presence. The algorithm scrutinizes various elements of the cough, such as duration, frequency, and pitch. Leveraging a comprehensive database, the AI meticulously compares recorded cough patterns against known indicators of respiratory diseases, allowing for early detection of potential health issues.',

    aiCards: [
      {
        title: 'Sound Capture',
        text: 'Users record short, anonymized cough samples through the Virufy app.',
        icon: '/icons/icon-ai-sound.png',
        style: 'shadow-xl w-full h-full',
      },
      {
        title: 'Acoustic Processing',
        text: 'Each cough is converted into a visual sound map, or spectrogram.',
        icon: '/icons/icon-ai-acoustic.png',
        style: 'shadow-xl h-full',
      },
      {
        title: 'Feature Extraction',
        text: 'AI identifies subtle patterns and acoustic biomarkers in the data.',
        icon: '/icons/icon-ai-feature.png',
        style: 'shadow-xl w-full h-full',
      },
      {
        title: 'Model Training',
        text: 'Algorithms learn from global datasets to improve accuracy and fairness.',
        icon: '/icons/icon-ai-model.png',
        style: 'shadow-xl h-full',
      },
      {
        title: 'Validation & Insight',
        text: 'Users results are tested to ensure ongoing improvement and effectiveness.',
        icon: '/icons/icon-ai-validation.png',
        style: 'shadow-xl w-full h-full',
      },
    ],
  },

  banner: {
    title: 'Ready to Make a Difference?',
    text: "We're on a mission to make health screening as simple as a cough. Reach out to find out how your financial contributions directly accelerate our clinical research and the deployment of our accessible AI technology to communities worldwide.",
    buttonText: 'Support Us',
    url: '/en/donate',
  },
};

export default Ai;
