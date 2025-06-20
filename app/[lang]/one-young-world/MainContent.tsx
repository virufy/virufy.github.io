import type {
  OywNavbarTexts,
  OywSection,
} from '@/app/i18n/types/oneYoungWorld';
import { type TeamLeadsType } from '@/app/i18n/types/teamLeads';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { useState } from 'react';
import Navbar from './Navbar';
import OneYoungWorld from './OneYoungWorld';
import TeamLeads from './TeamLeads/TeamLeads';

interface Props {
  lang: Locale;
  oyw: OywSection;
  navbarTexts: OywNavbarTexts;
  teamLeads: TeamLeadsType;
}

const MainContent = ({ lang, teamLeads, oyw, navbarTexts }: Props) => {
  const [showTeamLeads, setShowTeamLeads] = useState(false);

  return (
    <>
      {/* image is only shown under 'One Young World' tab in non-mobile view */}
      {!showTeamLeads && (
        <ExportedImage
          className="hidden md:absolute md:block md:h-full md:w-full md:rotate-180 md:object-cover md:opacity-30"
          src={oyw.bgImage}
          alt={oyw.altText}
          priority
          basePath={basePath}
        />
      )}

      <Navbar
        showTeamLeads={showTeamLeads}
        setShowTeamLeads={setShowTeamLeads}
        navbarTexts={navbarTexts}
      />

      <main>
        {showTeamLeads ? (
          <TeamLeads {...teamLeads} />
        ) : (
          <OneYoungWorld lang={lang} oywSection={oyw} />
        )}
      </main>
    </>
  );
};

export default MainContent;
