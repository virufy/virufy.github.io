import { type TeamLeadCard } from '@/app/i18n/types/teamLeads';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

const TeamLeadCard = ({ name, texts, image, altText }: TeamLeadCard) => {
  const paddedTexts = [...texts];
  while (paddedTexts.length < 3) {
    paddedTexts.push('');
  }

  return (
    <div className="text-left shadow-md md:max-w-[240px]">
      {/* Image with rounded top corners */}
      <ExportedImage
        className="h-[240px] w-[180px] rounded-t-xl object-cover md:h-[320px] md:w-[240px]"
        src={image}
        alt={altText}
        basePath={basePath}
      />

      {/* White block with 3 fixed lines of text */}
      <div className="rounded-b-xl bg-white px-3 py-2 text-black">
        <h2 className="text-sm font-semibold md:text-base">{name}</h2>
        {paddedTexts.map((text, i) => (
          <p key={i} className="text-[10px] md:text-sm leading-snug min-h-[1.2rem]">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TeamLeadCard;
