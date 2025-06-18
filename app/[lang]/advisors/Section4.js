import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import TitleText from '../components/TitleText';
import Button from './Button';
import AmilImage from '@/public/images/advisors/AmilImage.jpg';

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
        <ExportedImage
          src={AmilImage}
          alt={alt}
          priority
          basePath={basePath}
        />
      </div>

      {/* Mobile Text Card */}
      <div className="flex w-full flex-col items-center gap-5 text-center lg:hidden">
        <div className="w-full p-6 rounded-xl shadow-lg bg-black bg-opacity-10 backdrop-blur-sm">
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
        <Button
          size="medium"
          type="primary"
          path={buttonRoute}
          label={labelButton}
          style={{}}
          radius="50px"
          gradientBackground="white"
          width="250px"
          height="65px"
        />
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
        <div className="flex w-1/2 flex-col items-start justify-start sm:justify-center gap-6">
          {/* Text box with softer background */}
          <div className="w-full flex flex-col gap-5 text-left p-6 rounded-xl shadow-lg bg-black bg-opacity-10 backdrop-blur-sm">
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
          <div className="hidden sm:flex mt-6">
            <Button
              size="medium"
              type="primary"
              path={buttonRoute}
              label={labelButton}
              style={{}}
              radius="50px"
              gradientBackground="white"
              width="250px"
              height="65px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
