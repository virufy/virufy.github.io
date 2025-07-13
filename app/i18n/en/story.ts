import { type Story } from '../types/story';
const story: Story = {
  storySection: {
    title: 'How It Started',
    texts: [
      [
        {
          type: 'text',
          text: 'When the pandemic hit, ',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'Virufy founder Amil Khanzada',
        },
        {
          type: 'text',
          text: ' knew smartphones were omnipresent and that COVID impacted the nose, throat, and lungs.',
        },
      ],
      [
        {
          type: 'text',
          text: 'He hypothesized that breathing and cough sounds could be analyzed with machine learning to detect COVID patterns.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Wanting to make a positive impact, Amil orchestrated a clinical study with 362 patients in an esteemed university hospital. The original Virufy team started with Stanford graduate AI students and expanded to volunteers from universities globally.',
        },
      ],
    ],
  },
  MissionSection: {
    title: 'Our Mission',
<<<<<<< HEAD
    statement: 'At Virufy, our mission is to save lives by making disease prevention and detection free, private, and accessible to everyone, everywhere. We are dedicated to:',
=======
    statement:
      'At Virufy, our mission is to save lives by making disease prevention and detection free, private, and accessible to everyone, everywhere. We are dedicated to:',
>>>>>>> origin/Testing
    texts: [
      'Delivering rapid, AI-powered respiratory disease pre-screening solutions for patients, clinicians, and governments—especially in underserved communities.',
      'Harnessing the power of technology and global collaboration to transform healthcare into a more affordable, efficient, and inclusive system for all.',
    ],
  },
  privacySection: {
    title: 'Commitment to Privacy',
    texts: [
      'Virufy takes the privacy and protection of your personal information seriously. Our legal team has prepared a detailed Privacy Policy and Cookie Policy to protect the personal information you share with us through use of our website.',
    ],
  },
  aboutUsSection: {
    title: 'About Us',
    texts: [
      'Virufy is a global nonprofit organization focused on leveraging technology and AI to improve healthcare accessibility and disease detection.',
    ],
  },
};

export default story;
