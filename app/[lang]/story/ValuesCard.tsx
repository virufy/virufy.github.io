import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { type ValuesCard as ValuesCardProps } from '../../i18n/types/story';

const ValuesCard = ({ title, image, imageText, text }: ValuesCardProps) => {
  return (
    <>
      {/* Title Container */}
      <div className="mb-4 flex items-center space-x-2 lg:mb-0">
        <h3 className="text-lg font-semibold text-[#3686ff] sm:text-2xl">
          {title}
        </h3>
        <ExportedImage
          alt={imageText}
          src={image}
          width={35}
          height={35}
          basePath={basePath}
        />
      </div>

      <p className="mb-4 hidden font-black text-[#3686ff] lg:block">___</p>
      <p className="max-w-xl text-sm text-white lg:max-w-md">{text}</p>
    </>
  );
};

export default ValuesCard;
