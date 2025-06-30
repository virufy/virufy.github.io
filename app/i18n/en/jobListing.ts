import { type JobListing } from '../types/jobListing';

const jobListing: JobListing = {
  titleImage:
    'Virufy is entirely run by volunteers and pro bono partner companies.',
  title: 'Our Mission',
  text: 'Join Virufy and be part of a groundbreaking global effort to combat COVID-19 and other upper respiratory diseases. As an innovative nonprofit consortium, we’ve brought together experts from 25 countries to develop a state-of-the-art smart phone and web App that detects viruses through cough patterns. Originally a Stanford University  COVID-19 Response Innovation Lab Project, our AI-driven diagnostic solution is setting new standards for accessible, free testing. By volunteering at Virufy means you’ll gain hands-on experience with cutting-edge AI tools, and contribute significantly to a vital cause. Be at the forefront of innovation and help shape the future of global health.',
  modal: {
    text: 'Do you understand these are all unpaid, volunteer positions?',
    yes: 'Yes',
    no: 'No',
  },
  applyButtonText: 'Apply',
  jobDetailSectionTitles: {
    responsibilities: 'Responsibilities',
    desiredSkills: 'Desired Skills',
    minQualifications: 'Minimum Qualifications',
    hours: 'Hours',
    questions: 'Questions?',
    applyButtonText: 'Apply to this Role',
  },
  jobList: [
    {
      category: 'Engineering',
      positions: [
        {
          title: 'Software Engineer',
          id: 1,
        },
        {
          title: 'Machine Learning Engineer',
          id: 2,
        },
        {
          title: 'Machine Learning Engineer (Modeling)',
          id: 3,
        },
        {
          title: 'Audio Signal Processing Engineer',
          id: 4,
        },
        {
          title: 'DevOps Engineer',
          id: 5,
        },
        {
          title: 'Infosec Engineer',
          id: 6,
        },
      ],
    },
    {
      category: 'Data',
      positions: [
        {
          title: 'Data Privacy Intern',
          id: 7,
        },
        {
          title: 'Associate Data Scientist',
          id: 8,
        },
      ],
    },
    {
      category: 'Management',
      positions: [
        {
          title: 'Business Manager',
          id: 9,
        },
        {
          title: 'Project Manager',
          id: 10,
        },
        {
          title: 'Product Manager',
          id: 11,
        },
      ],
    },
    {
      category: 'Human Resources',
      positions: [
        {
          title: 'HR Business Partner',
          id: 12,
        },
        {
          title: 'HR Administrative Assistant',
          id: 13,
        },
        {
          title: 'Technical Recruiter',
          id: 14,
        },
      ],
    },
    {
      category: 'Legal',
      positions: [
        {
          title: 'Corporate Attorney (IT Oriented)',
          id: 15,
        },
        {
          title: 'Paralegal',
          id: 16,
        },
      ],
    },
    {
      category: 'Information Technology (IT)',
      positions: [
        {
          title: 'Business Analyst',
          id: 17,
        },
        {
          title: 'Python Programmer',
          id: 18,
        },
        {
          title: 'Technical Writer',
          id: 19,
        },
        {
          title: 'Quality Assurance Engineer',
          id: 20,
        },
        {
          title: 'AWS Developer',
          id: 21,
        },
        {
          title: 'AWS Architect',
          id: 22,
        },
        {
          title: 'AWS Engineer',
          id: 23,
        },
        {
          title: 'Cloud Engineer',
          id: 24,
        },
        {
          title: 'Unix Administrator',
          id: 25,
        },
      ],
    },
    {
      category: 'General',
      positions: [
        {
          title: 'General Job Application',
          id: 26,
        },
      ],
    },
  ],
};

export default jobListing;
