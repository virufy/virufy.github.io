import { type TeamLeadsType } from '@/app/i18n/types/teamLeads';
import TeamLeadCard from './TeamLeadCard';

const TeamLeads = ({ title, cards }: TeamLeadsType) => {
  return (
    <article className="mx-auto flex items-center justify-center pb-8">
      {/* Team Leads Container */}
      <div className="px-4 text-white sm:px-6">
        <h1 className="py-14 text-center text-2xl font-bold md:py-20 md:text-left md:text-4xl md:font-semibold">
          {title}
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-12 xl:grid-cols-3">
          {cards.map((card, i) => (
            <TeamLeadCard key={i} {...card} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default TeamLeads;
