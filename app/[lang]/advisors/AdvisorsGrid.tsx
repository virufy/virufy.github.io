'use client';
import { useState } from 'react';
import { type Locale } from '@/i18n-config.ts';
import ExportedImage from 'next-image-export-optimizer';
import { ArrowUpRight } from 'lucide-react';
import advisorCategories from './advisorCategories';
import { usei18n } from '../../i18n';
import { basePath } from '@/next.config.mjs';

interface AdvisorsGridProps {
  lang: Locale;
  advisorOrder: string[];
}

const AdvisorsGrid = ({ lang, advisorOrder }: AdvisorsGridProps) => {
  const {
    people: { sectionCategories, sectionAdvisors },
  } = usei18n(lang);

  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedAdvisorIds, setExpandedAdvisorIds] = useState<string[]>([]);

  const filteredAdvisors = advisorOrder.filter((id) => {
    const advisorCategory = advisorCategories[id];
    return activeCategory === 'all' || advisorCategory === activeCategory;
  });

  const totalAdvisors = filteredAdvisors.length;
  const buttonEntries = Object.entries(sectionCategories.buttons);

  const firstRow = buttonEntries.slice(0, 5);
  const secondRow = buttonEntries.slice(5);
  return (
    <>
      {/* Advisor Categories */}
      <div className="pb-10">
        <div className="border-y-2 border-gray-300 bg-[#e8f4fc] pb-10 pt-10">
          {/* Category Title + Buttons */}
          <div className="xl:lg-72 sm:mx-16 md:mx-24 lg:mx-48">
            {/* Browse expertise by category
          <div className="flex justify-center pb-5 text-lg md:block md:text-2xl">
            {sectionCategories.title}
          </div> */}

            {/* Buttons */}
            {/* split the rows into two */}
            <div className="flex flex-col items-center gap-4">
              {/* Mobile: all buttons wrap naturally */}
              <div className="flex flex-wrap justify-center gap-3 lg:hidden">
                {buttonEntries.map(([key, category]) => (
                  <button
                    key={key}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition sm:px-6 sm:py-3 ${
                      activeCategory === key
                        ? 'bg-gradient-to-b from-blue-500 to-emerald-500 text-white shadow-md'
                        : 'border-gray-300 bg-white text-black'
                    }`}
                    onClick={() => setActiveCategory(key)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Desktop: keep your two-row layout */}
              <div className="hidden flex-col items-center gap-4 lg:flex">
                <div className="flex flex-wrap justify-center gap-4">
                  {firstRow.map(([key, category]) => (
                    <button
                      key={key}
                      className={`rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-black ${
                        activeCategory === key
                          ? 'bg-gradient-to-b from-blue-500 to-emerald-500 text-white'
                          : ''
                      }`}
                      onClick={() => setActiveCategory(key)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {secondRow.map(([key, category]) => (
                    <button
                      key={key}
                      className={`rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-black ${
                        activeCategory === key
                          ? 'bg-gradient-to-b from-blue-500 to-emerald-500 text-white'
                          : ''
                      }`}
                      onClick={() => setActiveCategory(key)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisor Card Section */}
      <div className="px-2 pb-24 sm:px-8 md:px-16 lg:px-24">
        {/* Advisors Cards */}
        <div className="grid grid-cols-4 gap-4 text-black sm:gap-x-8 sm:gap-y-6 md:grid-cols-6 lg:grid-cols-8 lg:gap-x-10 lg:gap-y-10">
          {filteredAdvisors.map((id, index) => {
            const advisor = sectionAdvisors.advisors[id];
            const category = advisorCategories[id];

            if (!advisor) {
              console.warn(
                `Advisor with ID "${id}" is missing in advisors object`
              );
              return null; // skip missing advisor
            } else if (!category) {
              console.warn(
                `⚠️ Advisor with ID "${id}" is missing category in app/[lang]/advisors/advisorCategories.ts`
              );
            }

            const { img, name, role, texts, link } = advisor;
            const advisorsInLastRow = totalAdvisors % 4; // for md screens and up
            const advisorPositionInGrid = totalAdvisors - advisorsInLastRow;
            const isExpanded = expandedAdvisorIds.includes(id);

            return (
              <div
                key={id}
                className={`col-span-2 overflow-hidden bg-transparent text-center ${totalAdvisors % 2 != 0 && index + 1 == totalAdvisors ? 'col-start-2' : ''} ${
                  advisorsInLastRow == 1 && index == advisorPositionInGrid
                    ? 'md:col-start-4'
                    : `${
                        advisorsInLastRow == 2 && index == advisorPositionInGrid
                          ? 'md:col-start-3'
                          : `${
                              advisorsInLastRow == 3 &&
                              index == advisorPositionInGrid
                                ? 'md:col-start-2'
                                : 'md:col-start-auto'
                            }`
                      }`
                } `} // ^ logic for centering the last row of advisors using grid positioning
              >
                {/* Advisor Headshot */}
                <div
                  onClick={() =>
                    setExpandedAdvisorIds((current) =>
                      current.includes(id)
                        ? current.filter((advisorId) => advisorId !== id)
                        : [...current, id]
                    )
                  }
                >
                  <div className="mx-auto aspect-[3/4] w-3/4 cursor-pointer overflow-hidden rounded-full">
                    <ExportedImage
                      className="h-full w-full object-cover"
                      src={img}
                      alt={name}
                      basePath={basePath}
                      width={375}
                      height={450}
                    />
                  </div>
                </div>

                {/* Advisor Information */}
                <div className="w-full px-1 pb-2 font-bold text-black lg:px-2 lg:pb-2.5">
                  <h2 className="pt-1 text-xs sm:text-base lg:pt-4 lg:text-2xl">
                    {name}
                  </h2>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? 'sm:max-h-50 max-h-[20rem] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="py-1 text-[10px] font-semibold sm:text-sm md:text-lg lg:text-xl lg:font-bold">
                      {role}
                    </div>
                    {texts.map((text, i) => (
                      <div
                        key={i}
                        className="text-[9px] font-semibold sm:text-xs md:text-base"
                      >
                        {text}
                      </div>
                    ))}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center justify-center self-center rounded-full border border-gray-300 bg-white p-2 text-gray-700 transition hover:bg-gray-100"
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`Open ${name} profile`}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdvisorsGrid;
