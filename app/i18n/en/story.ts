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
          text: ' knew smartphones were omnipresent and that COVID affects the respiratory system.',
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
          text: 'We aim to provide people around the world with access to a web-based tool that can help screen for potential respiratory conditions such as COVID-19, flu, RSV, COPD, asthma, and other lung-related conditions within seconds.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Our goal is to empower individuals, particularly in developing regions, with tools that support greater awareness of their health and help them make informed decisions for themselves and their loved ones.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Please note that this tool is not intended to provide medical diagnoses and should not replace consultation with a qualified healthcare professional.',
        },
        {
          type: 'text',
          text: 'We are grateful for the support of our advisors and the contributions of over 1,300 volunteers to date.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Thank you for being part of this mission.',
        },
      ],
    ],
  },
  privacySection: {
    title: 'Commitment to Privacy',
    texts: [
      'Virufy takes your privacy seriously. Our legal team has developed detailed Privacy and Cookie Policies to protect any personal information you share while using our website.',
    ],
  },
};

export default story;
