import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import TitleText from '../components/TitleText';
import AmilImage from '@/public/images/advisors/AmilImage.jpg';
import Link from 'next/link';

export default function Section4({
  ContainerTitleProps,
  ContainerTextProps,
  alt,
  TitleSize1,
  TitleSize2,
  TitleLabel1,
  TitleLabel2,
  TextLabel,
  labelButton,
  buttonRoute,
}) {
  return (
    <div className="mx-10 mb-10 mt-40 flex flex-col space-y-4 text-center">
      {/* Mobile Image */}
      <div className="mb-8 flex w-full justify-center lg:hidden">
        <ExportedImage src={AmilImage} alt={alt} priority basePath={basePath} />
      </div>

      {/* Mobile Text Card */}
      <div className="flex w-full flex-col items-center gap-5 text-center lg:hidden">
        <div className="w-full rounded-xl bg-black bg-opacity-10 p-6 shadow-lg backdrop-blur-sm">
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel1}
            TextSize={''}
            TextLabel={''}
            ContainerTitleProps={{}}
            ContainerTextProps={{}}
            TitleClassProps={'text-black font-black'}
            TextClassProps={''}
          />
          <TitleText
            TitleSize={TitleSize2}
            TitleLabel={TitleLabel2}
            TextSize="normal"
            TextLabel={TextLabel}
            ContainerTitleProps={ContainerTitleProps}
            ContainerTextProps={ContainerTextProps}
            TitleClassProps={'text-black font-bold'}
            TextClassProps={'text-black font-medium'}
          />
        </div>
        <Link href={buttonRoute}>
          <button
            className="medium primary px-2 py-2 text-xs text-white md:px-16 md:py-4 md:text-base md:text-xl"
            style={{
              borderRadius: '50px',
              background:
                'linear-gradient(0deg, #19479c 0%, #2750a8 50%, #19479c 100%)',
              border: '2px solid #3fcf94',
            }}
          >
            {labelButton}
          </button>
        </Link>
      </div>

      {/* Desktop Layout */}
      <div className="mt-20 hidden flex-1 items-center lg:flex">
        <div className="flex w-1/2 items-center justify-start pr-6">
          <ExportedImage
            src={AmilImage}
            alt={alt}
            priority
            basePath={basePath}
          />
        </div>
        <div className="flex w-1/2 flex-col items-start justify-start gap-6 sm:justify-center">
          {/* Text box with softer background */}
          <div className="flex w-full flex-col gap-5 rounded-xl bg-black bg-opacity-10 p-6 text-left shadow-lg backdrop-blur-sm">
            <TitleText
              TitleSize={TitleSize1}
              TitleLabel={TitleLabel1}
              TextSize={''}
              TextLabel={''}
              ContainerTitleProps={{}}
              ContainerTextProps={{}}
              TitleClassProps={'text-black font-black'}
              TextClassProps={''}
            />
            <TitleText
              TitleSize={TitleSize2}
              TitleLabel={TitleLabel2}
              TextSize="normal"
              TextLabel={TextLabel}
              ContainerTitleProps={ContainerTitleProps}
              ContainerTextProps={ContainerTextProps}
              TitleClassProps={'text-black font-bold'}
              TextClassProps={'text-black font-medium'}
            />
          </div>
          <div className="mt-6 hidden sm:flex">
            <Link href={buttonRoute}>
              <button
                className="medium primary px-2 py-2 text-xs text-white md:px-16 md:py-4 md:text-base md:text-xl"
                style={{
                  borderRadius: '50px',
                  background:
                    'linear-gradient(0deg, #19479c 0%, #2750a8 50%, #19479c 100%)',
                  border: '2px solid #3fcf94',
                }}
              >
                {labelButton}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
