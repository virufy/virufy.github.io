import { type TeamLeadsType } from '@/app/i18n/types/teamLeads';
import TeamLeadCard from './TeamLeadCard';

const TeamLeads = ({ cards }: TeamLeadsType) => {
  return (
    <article className="mx-auto flex items-center justify-center pt-10 md:pt-16 pb-8">
      {/* Team Leads Container */}
      <div className="px-4 text-white sm:px-6">
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
