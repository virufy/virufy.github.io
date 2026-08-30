'use client';

import { type Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import Text from '../components/Text';

const PapersPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { paper: content } = usei18n(lang);

  const paperSections = Object.values(content.papers).sort((a, b) => {
    const monthOrder = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const [aMonth, aYear] = a.date.split(' ');
    const [bMonth, bYear] = b.date.split(' ');

    const yearDifference = Number(bYear) - Number(aYear);

    if (yearDifference !== 0) {
      return yearDifference;
    }

    return monthOrder.indexOf(bMonth) - monthOrder.indexOf(aMonth);
  });

  return (
    <div className="min-h-screen bg-white pt-20 text-gray-900">
      <div className="max-w-full px-6 py-8 lg:px-20">
        <div className="items-center justify-between md:py-4 lg:flex">
          <Title
            H="h1"
            Text={content.headers.header}
            TitleClassProps="text-sm font-bold text-gray-900"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-3">
          {paperSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-8 lg:flex-row"
            >
              <div className="lg:w-2/5">
                <ExportedImage
                  src="/images/paper/ads.png"
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

                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray mb-2 block text-xl underline hover:text-gray-900"
                    >
                      {section.linkText[linkIndex]}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PapersPage;
