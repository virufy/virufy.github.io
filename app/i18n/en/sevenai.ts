import { type sevenAi } from '../types/sevenai';
import { CarouselImg1, CarouselImg2, CarouselImg3 } from '@/public/images/ai/index';
import AcousticIcon from '@/public/icons/icon-ai-acoustic.png';
import FeatureIcon from '@/public/icons/icon-ai-feature.png';
import ModelIcon from '@/public/icons/icon-ai-model.png';
import SoundIcon from '@/public/icons/icon-ai-sound.png';
import ValidationIcon from '@/public/icons/icon-ai-validation.png';

const sevenai: sevenAi = {
  heroSection: {
    tag: "AI-Powered Health Technology",
    title: [
      { type: 'text', text: 'The ' },
      { type: 'span', text: 'Science' },
      { type: 'text', text: ' Behind Virufy' },
    ],
    text: 'Our AI technology listens for subtle patterns in the sound of your cough — helping detect potential respiratory illnesses early and non-invasively.',
    aiSlides: [
      {
        title: "Data Collection",
        text: "Simply record a brief cough using our easy-to-use web app. The interface guides you to capture a high-quality, natural cough sample under consistent conditions, ensuring optimal audio for accurate respiratory analysis.",
        image: CarouselImg1,
      },
      {
        title: "Signal Processing",
        text: "We use ML algorithms to accurately identify and isolate cough sounds. Our tools clean up background noise and analyze digital biomarkers by converting sound waves into quantifiable characteristics called acoustic biomarker features.",
        image: CarouselImg2,
      },
      {
        title: "Machine Learning Analysis",
        text: "The extracted acoustic biomarker features are then fed into a pre-trained Machine Learning Model, the model compares the new incoming cough's feature profile against patterns it learned through training.",
        image: CarouselImg3,
      },
    ],
  },
  aiSection: {
    title: "How Virufy's AI Learns",
    text: "Artificial Intelligence (AI) is capable of detecting minute differences in vocal patterns to detect disease presence. The algorithm scrutinizes various elements of the cough, such as duration, frequency, and pitch. Leveraging a comprehensive database, the AI meticulously compares recorded cough patterns against known indicators of respiratory diseases, allowing for early detection of potential health issues.",
    aiCards: [
      {
        title: "Sound Capture",
        text: "Users record short, anonymized cough samples through the Virufy app.",
        icon: SoundIcon,
        style: "shadow-xl w-full h-full",
      },
      {
        title: "Feature Extraction",
        text: "AI identifies subtle patterns and acoustic biomarkers in the data.",
        icon: FeatureIcon,
        style: "shadow-xl w-full h-full",
      },
      {
        title: "Validation & Insight",
        text: "Users results are tested to ensure ongoing improvement and effectiveness.",
        icon: ValidationIcon,
        style: "shadow-xl w-full h-full",
      },
      {
        title: "Acoustic Processing",
        text: "Each cough is converted into a visual sound map, or spectrogram.",
        icon: AcousticIcon,
        style: "shadow-xl h-full",
      },
      {
        title: "Model Training",
        text: "Algorithms learn from global datasets to improve accuracy and fairness.",
        icon: ModelIcon,
        style: "shadow-xl h-full",
      },
    ],
  },
  banner: {
    title: 'Ready to Make a Difference?',
    text: "We're on a mission to make health screening as simple as a cough. Reach out to find out how your financial contributions directly accelerate our clinical research and the deployment of our accessible AI technology to communities worldwide.",
    buttonText: 'Support Us',
    url: '/donate',
  }
};

export default sevenai;
