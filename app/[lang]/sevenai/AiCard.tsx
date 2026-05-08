import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import { ColorProps } from '../themes';
import { type AiCard } from '@/app/i18n/types/ai';

const AiCard = ({ title, text, icon }: AiCard) => {
  return (
    <div
      className={`my-2 flex h-full w-full rounded-2xl border border-[#bcc7d4] p-5 shadow-xl md:my-0`}
    >
      <ExportedImage
        className="mr-4 self-start"
        src={icon}
        alt={title + ' icon'}
        basePath={basePath}
      />
      <div>
        <h2 className="mb-2 text-xl font-medium text-black">{title}</h2>
        <p className={`${ColorProps.textGray}`}>{text}</p>
      </div>
    </div>
  );
};

export default AiCard;
