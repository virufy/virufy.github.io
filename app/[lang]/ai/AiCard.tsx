import { type AiCard } from '@/app/i18n/types/ai';

const AiCard = ({ title, text, style }: AiCard) => {
  return (
    <div className="flex items-center justify-center space-x-4 rounded-3xl bg-white p-6 lg:space-x-16 w-1211px ">
      {/* Heading Container */}
      <div className="bg-gradient-to-b from-green-500 to-blue-500 bg-clip-text font-bold text-transparent">
        <h3 className={'text-7xl justify-center font-bold ' + `${style}`}>{title}</h3>
      </div>

      <p className="max-w-xl text-black">{text}</p>
    </div>
  );
};

export default AiCard;
