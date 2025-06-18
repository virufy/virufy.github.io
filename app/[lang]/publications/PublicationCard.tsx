import { type PublicationCard } from '@/app/i18n/types/publications';
import Link from 'next/link';

const PublicationCard = ({ title, date, url, linkText }: PublicationCard) => {
  return (
    <>
      <h3 className="max-w-lg text-xl font-medium text-[#3578DE]">{title}</h3>
      <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
        <ul className="list-inside list-disc pb-6">
          <li className="relative bg-gradient-to-b from-green-500 to-blue-500 bg-clip-text font-normal text-transparent opacity-80">
          <span className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-500">
            •
          </span>
            {date}
          </li>
        </ul>
        <Link
          className="rounded-3xl bg-[#3578DE] px-4 py-2 text-white sm:px-8"
          target="_blank"
          href={url}
        >
          {linkText}
        </Link>
      </div>
    </>
  );
};

export default PublicationCard;
