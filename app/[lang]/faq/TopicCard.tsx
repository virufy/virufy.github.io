import { type FAQTopicCard } from '@/app/i18n/types/faq';
import { ColorProps } from '../themes';

interface Props extends FAQTopicCard {
  defaultTopic: string;
  selectedTopic: string;
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const TopicCard = ({
  title,
  defaultTopic,
  selectedTopic,
  setSelectedTopic,
  className = '',
}: Props) => {
  const handleTopicClick = (): void => {
    // Deselect selected topic by resetting to default topic
    if (selectedTopic === title) {
      setSelectedTopic(defaultTopic);
      return;
    }

    setSelectedTopic(title);
  };

  return (
    <button
      type="button"
      onClick={handleTopicClick}
      aria-pressed={selectedTopic === title}
      aria-label={title}
      className={`flex w-fit cursor-pointer flex-col justify-between rounded-full border border-gray-300 px-5 py-3 text-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:px-6 sm:py-3 lg:w-full lg:px-2 lg:py-5 ${className} ${
        selectedTopic === title ? ColorProps.bgGradientReverse : 'bg-white'
      }`}
    >
      <h3
        className={
          selectedTopic === title
            ? 'text-xs text-white sm:text-sm md:text-base'
            : 'text-xs text-black sm:text-sm md:text-base'
        }
      >
        {title}
      </h3>
    </button>
  );
};

export default TopicCard;
