import ExportedImage from 'next-image-export-optimizer';
import { ColorProps } from '../themes';
import { type StoryCard } from '@/app/i18n/types/story';

const StoryCard = ({ title, text, icon }: StoryCard) => {
  return (
    <div
      className={`my-2 flex h-full w-full rounded-2xl border border-[#bcc7d4] p-5 shadow-xl md:my-0`}
    >
      <ExportedImage
        className="mr-4 self-start"
        src={icon}
        width={32}
        height={32}
        alt={title + ' icon'}
      />
      <div>
        <h2 className="mb-2 text-xl font-medium text-black">{title}</h2>
        <p className={`${ColorProps.textGray}`}>{text}</p>
      </div>
    </div>
  );
};

export default StoryCard;
