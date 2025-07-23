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
      ? 'border-4 border-green-400 bg-white'
      : 'bg-gradient-to-b bg-white border-4 border-transparent hover:border-green-400 hover:border-4';

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
        className="mx-auto filter invert"
        src={img}
        alt={altText}
        basePath={basePath}
      />
      <h3 className={'text-black'}>{title}</h3>
    </div>
  );
};

export default TopicCard;
