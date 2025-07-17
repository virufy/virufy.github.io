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
    texts: [
      [
        {
          type: 'text',
          text: 'Some people may be wondering, "why are we here?" and "why have so many people supported Virufy?"',
        },
      ],
      [
        {
          type: 'text',
          text: "Virufy's mission and goal is to transform global health.",
        },
      ],
      [
        {
          type: 'text',
          text: 'We aim to give everyone in the world access to a web app to detect respiratory diseases like COVID, flu, RSV, COPD, asthma, lung cancer, in seconds.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We would like a billion people in developing nations to be empowered to protect the health of themselves and loved ones.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Here is a listing of disclosed ',
        },
        {
          type: 'link',
          url: '/advisors',
          text: 'advisors',
        },
        {
          type: 'text',
          text: ' and we have had 1,300+ volunteers to date.',
        },
      ],
      [
        {
          type: 'text',
          text: "Thank you for being part of the mission and let's make it happen.",
        },
      ],
    ],
  },
  privacySection: {
    title: 'Commitment to Privacy',
    texts: [
      'Virufy takes the privacy and protection of your personal information seriously. Our legal team has prepared a detailed Privacy Policy and Cookie Policy to protect the personal information you share with us through use of our website.',
    ],
  },
};

export default story;
