import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import { ColorProps } from '../themes';
import { type AiCard } from '@/app/i18n/types/sevenai';

const AiCard = ({ title, text, icon } : AiCard) => {
  return (
    <div className={`flex border border-[#bcc7d4] rounded-2xl p-5 shadow-xl w-full h-full my-2 md:my-0`}>
      <ExportedImage
          className="self-start mr-4"
          src={icon}
          alt={title + " icon"}
          basePath={basePath}
        />
      <div>
        <h2 className="text-xl text-black mb-2 font-medium">{title}</h2>
        <p className={`${ColorProps.textGray}`}>{text}</p>
      </div>
    </div>
  );
};

export default AiCard;
