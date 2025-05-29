'use client';

import { type Locale } from '@/i18n-config';
import ExportedImage  from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import Text from '../components/Text';

const PapersPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { paper: content } = usei18n(lang);

  const paperSections = [
    {
      date: content.papers.section7.date,
      title: content.papers.section7.title,
      link: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      readMore: content.papers.section7.readMoreLink,
      image: '/images/paper/ads.png'
    },
    {
      date: content.papers.section5.date,
      title: content.papers.section5.title,
      link: 'https://arxiv.org/abs/2201.01669',
      readMore: content.papers.section5.readMoreLink,
      image: '/images/paper/ads.png'
    },
    {
      date: content.papers.section6.date,
      title: content.papers.section6.title,
      links: [
        {
          url: '/documents/Novel Covid-19 Calculator.pdf',
          text: content.papers.section6.readMoreLink
        },
        {
          url: 'https://arxiv.org/abs/2201.11109',
          text: content.papers.section6.calculatorLink
        }
      ],
      image: '/images/paper/ads.png'
    },
    {
      date: content.papers.section4.date,
      title: content.papers.section4.title,
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421112/',
      readMore: content.papers.section4.readMoreLink,
      image: '/images/paper/ads.png'
    },
    {
      date: content.papers.section2.date,
      title: content.papers.section2.title,
      link: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      readMore: content.papers.section2.readMoreLink,
      image: '/images/paper/ads.png'
    },
    {
      date: content.papers.section3.date,
      title: content.papers.section3.title,
      link: 'https://arxiv.org/abs/2302.13527',
      readMore: content.papers.section3.readMoreLink,
      image: '/images/paper/ads.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="px-6 lg:px-20 py-8 max-w-full">
        <div className="lg:flex items-center justify-between md:py-4">
          <Title 
            H="h1" 
            Text={content.headers.header} 
            TitleClassProps="text-sm font-bold text-gray-900"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-8">
          {paperSections.map((section, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-2/5">
                <ExportedImage
                  src={section.image}
                  alt={section.title}
                  width={400}
                  height={400}
                  className="mx-auto w-1/2"
                  priority={index < 2}
                />
              </div>
              <div className="lg:w-3/5">
                <Text 
                  Style="" 
                  Text={section.date} 
                  TextClassProps="mb- text-xl text-gray-600"
                />
                <Title 
                  H="h2" 
                  Text={section.title} 
                  TitleClassProps="mb-4 text-xl font-bold text-gray-600"
                />
                {section.links ? (
                  section.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl text-gray hover:text-gray-900 underline block mb-2"
                      >
                        {link.text}
                      </a>
                    </div>
                  ))
                ) : (
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl text-gray hover:text-gray-900 underline"
                  >
                    {section.readMore}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PapersPage;