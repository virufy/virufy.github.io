import { type AmilsStory } from '../types/amilsStory';

const amilsStory: AmilsStory = {
  heroSection: {
    tag: 'Meet Amil',
    title: [
      { type: 'text', text: 'Meet Our ' },
      { type: 'span', text: 'Founder & CEO' },
    ],
    text: 'Doctorate of Engineering Candidate, University of Fukui, Japan. Former MBA & Master of Engineering (Data Science) Joint-Degree Student, UC Berkeley. Specially Appointed Assistant Professor, Department of Engineering, University of Fukui, Japan',
  },
  storySection: {
    title: "Amil's Story",
    texts: [
      'Amil Khanzada founded Virufy during the COVID-19 pandemic with a singular mission: to make early disease screening accessible to anyone, anywhere, using only a smartphone. With a lifelong exposure to social service and a career rooted in software engineering and artificial intelligence, Amil saw an opportunity to apply cutting-edge technology to one of the world’s most urgent public health challenges. While pursuing graduate studies in Artificial Intelligence at Stanford University under pioneers such as Dr. Andrew Ng and Dr. Fei-Fei Li, he recognized that advances in machine learning, audio signal processing, and mobile computing could be rapidly translated into real-world health impact.',
      'Since its founding, Virufy has grown into an international nonprofit operating across three continents, supported by more than 250 volunteers and 60 partner organizations. Guided by its mission to democratize access to health screening, Virufy continues to advance AI-driven disease detection to help communities respond faster, earlier, and more equitably to global health threats.',
    ],
  },
  milestoneSection: {
    title: 'Key Milestones',
    text: 'A journey from pandemic response to global impact in respiratory health technology.',
    milestoneCards: [
      {
        title: '2020: The Stanford Genesis',
        text: 'While a student at Stanford, Amil established Virufy as a registered nonprofit in direct response to the global pandemic. He mobilized a world-class volunteer network to begin collecting cough recordings, launching the first clinical research studies in South Asia to train AI for COVID-19 detection.',
        image: '/images/amilsStory/amil-2020-stanford-genesis.webp',
        date: '2020',
      },
      {
        title: '2021: Global Outreach & Data Expansion',
        text: 'Our partner Sherlock Communications led a massive marketing push across Latin America, generating over 300 press releases to drive large-scale data collection and public awareness. Amil began representing Virufy at major global summits, establishing the organization as an international leader in the emerging field of acoustic health.',
        image: '/images/amilsStory/amil-2021-global-outreach.webp',
        date: '2021',
      },
      {
        title: '2022: Federal Recognition & Development',
        text: 'Virufy secured a prestigious research contract with the U.S. Department of Health and Human Services (BARDA). This milestone significantly accelerated the organization’s development capabilities and provided federal-level validation for the mission to provide accessible respiratory screening tools. Our clinical studies in Colombia proceeded in parallel.',
        image: '/images/amilsStory/amil-2022-federal-recognition.webp',
        date: '2022',
      },
      {
        title: '2023: Strategic Innovation & NSF I-Corps',
        text: 'Following the conclusion of the public health emergency, Amil led Virufy through the National Science Foundation (NSF) I-Corps program. He traveled extensively across the U.S. to conduct hundreds of interviews, defining a robust operational model for acoustic AI to detect respiratory threats beyond COVID-19.',
        image: '/images/amilsStory/amil-2023-strategic-innovation.webp',
        date: '2023',
      },
      {
        title: '2024: The Japan Hub & Elderly Care',
        text: 'Amil established a significant operational presence in Japan with support from JETRO. He spearheaded a major research shift toward detecting pneumonia in elderly care facilities, establishing a local HQ in Fukuoka to serve the specific needs of the Japanese healthcare market.',
        image: '/images/amilsStory/amil-2024-japan-hub.webp',
        date: '2024',
      },
      {
        title: '2025: Global Scale & Multi-Disease Detection',
        text: 'Amil launched operations in Dubai, securing a critical partnership with a health ministry arm to validate and deploy COVID/Flu detection technology. This initiative focused on achieving large-scale population health surveillance and strengthening public health infrastructure.',
        image: '/images/amilsStory/amil-2025-middle-east.webp',
        date: '2025',
      },
      {
        title: '2026: Academic Leadership & Global Mission',
        text: 'Amil joined the University of Fukui as a Specially Appointed Assistant Professor of Social Informatics. In this role, he continues to lead Virufy’s global mission in parallel with his academic research on GovAI, regional revitalization, and the practical deployment of global health technologies.',
        image: '/images/amilsStory/amil-2026-academic-leadership.webp',
        date: '2026',
      },
    ],
  },
  oywSection: {
    title: [
      { type: 'text', text: 'Supported by a Global Network – ' },
      { type: 'span', text: 'One Young World' },
    ],
    text: 'Through One Young World, Amil has been able to scale his vision beyond borders, connecting with a global community of young leaders committed to solving real-world health challenges. As an ambassador, he collaborates with researchers, clinicians, and technologists from around the world, leveraging this international network to accelerate Virufy’s mission of accessible, AI-driven respiratory health screening.',
    image: '/images/amilsStory/one-young-world-cover.webp',
  },
  banner: {
    title: 'Built in Partnership With a Global Network',
    text: 'Together with academic, industry, and nonprofit partners, Amil and the Virufy team are expanding access to AI-driven respiratory health screening worldwide.',
    buttonText: 'Our Supporters',
    url: '/supporters',
  },
};

export default amilsStory;
