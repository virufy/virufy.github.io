import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import { ColorProps } from '../themes';
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

type SevenInfoCardProps = {
  title: string;
  text: string;
  icon?: StaticImageData;
  children?: ReactNode;
};

const SevenInfoCard = ({ title, text, icon, children }: SevenInfoCardProps) => {
  return (
    <div className="my-2 flex h-full w-full flex-col rounded-2xl border border-[#bcc7d4] bg-white p-5 shadow-xl md:my-0">
      {/* Row for icon and text */}
      <div className="flex flex-row gap-4">
        {icon && (
          <ExportedImage
            className="h-10 w-10 flex-shrink-0 self-start"
            src={icon}
            alt={title + ' icon'}
            basePath={basePath}
          />
        )}
        <div className="flex-1">
          <h3 className="mb-2 text-xl font-medium text-black">{title}</h3>
          <p className={`${ColorProps.textGray}`}>{text}</p>
        </div>
      </div>

      {/* Children (button + optional icon) placed below the description */}
      {children && <div className="mt-6 flex justify-center">{children}</div>}
    </div>
  );
};

export default SevenInfoCard;
