import { type TeamLeadCard } from '@/app/i18n/types/teamLeads';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

const TeamLeadCard = ({ name, texts, image, altText }: TeamLeadCard) => {
  return (
    <div className="relative max-w-40 pb-2 text-center text-gray-300 md:w-[22rem] md:max-w-[22rem]">
      <ExportedImage
        className="h-[225px] w-[158px] object-cover md:h-[450px] md:w-[375px]"
        src={image}
        alt={altText}
        basePath={basePath}
      />
      {/* Text Container */}
      <h2 className="pt-2 text-xs md:text-2xl">{name}</h2>
      {texts.map((text, i) => (
        <div key={i} className="text-[9px] font-thin md:text-lg">
          {text}
        </div>
      ))}
    </div>
  );
};

export default TeamLeadCard;
