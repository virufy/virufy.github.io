import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgHeader } from '@/public/images/supporters';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usei18n } from '../../i18n';
import Title from '../components/Title';

const SupportersPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    supporters: { title, buttonText, supportersList },
  } = usei18n(lang);

  return (
    <div className="bg-[#4064AD]">
      {/* Globe background img */}
      <div className="relative -top-24 flex justify-center">
        <ExportedImage
          className="h-full max-h-[700px] w-full object-cover"
          src={BgHeader}
          alt=""
          priority
          basePath={basePath}
        />
      <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Title
              Text={title}
              H="h1"
              TitleClassProps="
                text-white
                text-center
                text-xl"
            />
          </div>
    
          {/* Supporter Us button */}
          <div className="absolute top-[70%] left-[50%] translate-x-[-50%]">

              <button
                className="medium primary h-9 w-64 text-black sm:h-11 sm:w-80 xl:h-16 xl:w-64"
                style={{ borderRadius: '50px', background: 'white' }}
              >
                {buttonText}
              </button>
            
          </div>
        </div>
      </div>

      <div className="relative -top-24 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#111B2E] to-[#4064AD]">
        <div className="flex max-w-[1440px] flex-col items-center justify-center">
          <div className="mt-[80px] w-[100vw] max-w-[1440px] md:hidden">
            {/* Supporters mobile view */}
            <div className="flex w-full flex-wrap justify-center">
              {supportersList.map(({ img, alt, link }) => (
                <div
                  className="mx-1 my-auto flex basis-1/4 justify-center px-2 sm:px-4"
                  key={alt}
                >
                  <Link href={link} target="_blank">
                    <ExportedImage
                      src={img}
                      alt={alt}
                      priority
                      basePath={basePath}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden w-full max-w-[1440px] md:block">
            <div className="mb-40"></div>

            {/* Supporters */}
            <div className="flex w-full flex-wrap justify-center px-12">
              {supportersList.map(({ img, alt, link }) => (
                <div
                  className="mx-0 my-auto flex basis-1/4 justify-center px-6"
                  key={alt}
                >
                  <Link href={link} target="_blank">
                    <ExportedImage
                      src={img}
                      alt={alt}
                      priority
                      basePath={basePath}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportersPage;
