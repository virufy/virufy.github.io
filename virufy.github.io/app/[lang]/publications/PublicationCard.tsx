import { type PublicationCard } from '@/app/i18n/types/publications';
import Link from 'next/link';

const PublicationCard = ({ title, date, url, linkText }: PublicationCard) => {
  return (
    <>
      <h3 className="max-w-lg text-xl font-medium">{title}</h3>
      <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
        <ul className="list-inside list-disc pb-6">
          <li>{date}</li>
        </ul>
        <Link
          className="rounded-3xl bg-white px-4 py-2 text-[#123d62] sm:px-8"
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
