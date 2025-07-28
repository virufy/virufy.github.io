import { type FAQTopicCard } from '@/app/i18n/types/faq';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

interface Props extends FAQTopicCard {
  defaultTopic: string;
  selectedTopic: string;
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
}

const TopicCard = ({
  img,
  altText,
  title,
  defaultTopic,
  selectedTopic,
  setSelectedTopic,
}: Props) => {
  const bgStyle =
    title === selectedTopic
      ? 'border border-green-400 bg-blue-950'
      : 'bg-gradient-to-b from-[#3578de] to-[#1c5cbd] border border-transparent hover:border-green-400 hover:border';

  const handleTopicClick = (): void => {
    // deselect selected topic by resetting to default topic
    if (selectedTopic === title) {
      setSelectedTopic(defaultTopic);
      return;
    }
    setSelectedTopic(title);
  };

  return (
    <div
      onClick={handleTopicClick}
      className={`flex cursor-pointer flex-col justify-between space-y-2 rounded-xl px-6 py-4 text-center shadow-lg sm:px-9 ${bgStyle}`}
    >
      <ExportedImage
        className="mx-auto"
        src={img}
        alt={altText}
        basePath={basePath}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default TopicCard;
