import { i18n, type Locale } from '@/i18n-config';
import Link from 'next/link';
import { usei18n } from '../../../i18n';
import Title from '../../components/Title';

const NUM_JOB_OPENINGS = 25;

export function generateStaticParams() {
  const staticParams: { lang: Locale; id: string }[] = [];
  // loop locales
  i18n.locales.forEach((locale) => {
    // loop number of current job openings
    for (let i = 1; i <= NUM_JOB_OPENINGS; i++) {
      staticParams.push({ lang: locale, id: i.toString() });
    }
  });

  return staticParams;
}

const JobDetailPage = ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) => {
  const {
    jobDetails,
    jobListing: { jobDetailSectionTitles },
  } = usei18n(lang);
  const {
    title,
    description,
    responsibilities,
    minQualifications,
    desiredSkills,
    hours,
    questions,
  } = jobDetails[id];

  const renderQuestions = (questions: string[]) => {
    return questions.map((element, index) => {
      const emailRegex = /\S+@\S+\.\S+/;
      const emailMatch = element.match(emailRegex);

      if (emailMatch) {
        const parts = element.split(emailRegex);
        return (
          <li
            key={index}
            style={{
              color: 'white',
              listStylePosition: 'inside',
              paddingLeft: '1.2em',
              textIndent: '-1.2em',
            }}
          >
            {parts[0]}
            <a
              href={`mailto:${emailMatch[0]}`}
              style={{
                color: '#00000',
                textDecoration: 'underline',
              }}
            >
              {emailMatch[0]}
            </a>
            {parts[1]}
          </li>
        );
      }
      return (
        <li
          key={index}
          style={{
            listStylePosition: 'inside',
            paddingLeft: '1.2em',
            textIndent: '-1.2em',
          }}
        >
          {element}
        </li>
      );
    });
  };

  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, #000000 0%, #162B4C 23.5%, #3468B2 90%)',
        color: 'white',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {!jobDetails.hasOwnProperty(id) ? (
        <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
          <Title
            Text="NOT FOUND"
            H={'h4'}
            TitleClassProps={'w-[97%] lg:mb-3 text-center mt-24 '}
          />
        </div>
      ) : (
        <div className="mx-auto flex max-w-[1440px] justify-center">
          <div className="flex max-w-[1100px] flex-col items-center lg:ml-[10rem]">
            <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-20">
              <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                <Title
                  Text={title}
                  H={'h4'}
                  TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                />
              </div>
            </div>
            <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
              <p>{description}</p>
            </div>
            {responsibilities && responsibilities.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={jobDetailSectionTitles.responsibilities}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {responsibilities.map((element, index) => (
                    <li
                      key={index}
                      style={{
                        listStylePosition: 'inside',
                        paddingLeft: '1.8em',
                        textIndent: '-1.2em',
                      }}
                    >
                      {element}
                    </li>
                  ))}
                </div>
              </>
            )}
            {minQualifications && minQualifications.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={jobDetailSectionTitles.minQualifications}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {minQualifications.map((element, index) => (
                    <li
                      key={index}
                      style={{
                        listStylePosition: 'inside',
                        paddingLeft: '1.2em',
                        textIndent: '-1.2em',
                      }}
                    >
                      {element}
                    </li>
                  ))}
                </div>
              </>
            )}
            {desiredSkills && desiredSkills.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={jobDetailSectionTitles.desiredSkills}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {desiredSkills.map((element, index) => (
                    <li
                      key={index}
                      style={{
                        listStylePosition: 'inside',
                        paddingLeft: '1.2em',
                        textIndent: '-1.2em',
                      }}
                    >
                      {element}
                    </li>
                  ))}
                </div>
              </>
            )}
            {hours && hours.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={jobDetailSectionTitles.hours}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {hours.map((element, index) => (
                    <li
                      key={index}
                      style={{
                        listStylePosition: 'inside',
                        paddingLeft: '1.2em',
                        textIndent: '-1.2em',
                      }}
                    >
                      {element}
                    </li>
                  ))}
                </div>
              </>
            )}
            {questions && questions.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={jobDetailSectionTitles.questions}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {renderQuestions(questions)}
                </div>
              </>
            )}
            <div className="mb-16 flex w-full px-12">
              <Link
                className="px-10 py-4 text-black sm:px-14"
                style={{
                  borderRadius: '50px',
                  background: 'white',
                }}
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmlecMmXr3FqO1HajJFBmfpji8Blyjfs9U5jK3WT6BrSmDAA/viewform"
              >
                {jobDetailSectionTitles.applyButtonText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailPage;
