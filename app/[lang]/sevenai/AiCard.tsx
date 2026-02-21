import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import { ColorProps } from '../themes';
import { StaticImageData } from "next/image";

const AiCard = ({ 
  title, 
  text, 
  icon, 
  style 
} : {
  title: string;
  text: string;
  icon: StaticImageData;
  style: string;
}) => {
  return (
    <div className={`flex border border-[#bcc7d4] rounded-2xl p-5 ${style}`}>
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
