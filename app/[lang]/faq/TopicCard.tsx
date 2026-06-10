import { type FAQTopicCard } from '@/app/i18n/types/faq';
import { ColorProps } from '../themes';

interface Props extends FAQTopicCard {
  defaultTopic: string;
  selectedTopic: string;
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
}

const TopicCard = ({
  title,
  defaultTopic,
  selectedTopic,
  setSelectedTopic,
}: Props) => {
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
      className={`flex min-w-[90px] cursor-pointer flex-col justify-between space-y-2 rounded-full py-5 text-center shadow-lg ${
        selectedTopic === title
          ? `${ColorProps.bgGradientReverse} `
          : 'bg-white'
      }`}
    >
      <h3 className={selectedTopic === title ? 'text-white' : 'text-black'}>
        {title}
      </h3>
    </div>
  );
};

export default TopicCard;
