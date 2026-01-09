import { type PublicationCard } from '@/app/i18n/types/publications';

const PublicationCard = ({ title, date, url, linkText }: PublicationCard) => {
  return (
    <article className="rounded-2xl bg-white text-black shadow-xl md:w-[1172px] md:w-full">
      <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:gap-6 md:p-6">
        <div className="flex-1">
          <h3 className="text-base font-bold leading-snug md:text-lg">
            {title}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-xs font-bold text-black/70 md:text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-black/70" />
            <span>{date}</span>
          </div>
        </div>
        <div className="shrink-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#0E3273] px-6 py-2 text-sm font-bold text-white transition hover:bg-[#0E3273]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600"
            aria-label={`${linkText}: ${title}`}
          >
            {linkText}
          </a>
        </div>
      </div>
    </article>
  );
};

export default PublicationCard;
