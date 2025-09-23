import { type TeamLeadCard } from '@/app/i18n/types/teamLeads';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

const TeamLeadCard = ({ name, texts, image, altText }: TeamLeadCard) => {
  const paddedTexts = [...texts];
  while (paddedTexts.length < 3) {
    paddedTexts.push('');
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white text-left shadow-md md:max-w-[240px]">
      {/* Image fully opaque with no brightness filter */}
      <ExportedImage
        className="object-cover brightness-100 md:h-[320px] md:w-[240px]"
        src={image}
        alt={altText}
        basePath={basePath}
        height={240}
        width={180}
      />

      {/* Text block with solid background */}
      <div className="bg-white px-3 py-2 text-black">
        <h2 className="text-base font-bold">{name}</h2>
        {paddedTexts.map((text, i) => (
          <p
            key={i}
            className="min-h-[1.2rem] text-[10px] text-sm font-bold leading-snug"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TeamLeadCard;
