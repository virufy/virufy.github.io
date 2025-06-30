import { type NewsCard } from '@/app/i18n/types/news';
import Link from 'next/link';

const NewsCard = ({ title, date, subText, url, linkText }: NewsCard) => {
  return (
    <>
<<<<<<< HEAD
      <h3 className="max-w-lg text-xl text-black font-bold lg:h-28 xl:h-20">{title}</h3>
      <div className="py-4" >{subText}</div>
      <div className="items-center space-y-6 md:flex md:flex-row md:justify-between font-bold text-black md:space-y-0">
=======
      <h3 className="max-w-lg text-xl font-bold text-black lg:h-28 xl:h-20">
        {title}
      </h3>
      <div className="py-4 text-black">{subText}</div>
      <div className="items-center space-y-6 font-bold text-black md:flex md:flex-row md:justify-between md:space-y-0">
>>>>>>> a3168f8e0b84b6fc261a587bdb084af73a047f8f
        <ul className="list-inside list-disc pb-6">
          <li>{date}</li>
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

export default NewsCard;
