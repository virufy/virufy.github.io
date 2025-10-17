'use client';
import { useState } from 'react';
import { type Locale } from '@/i18n-config.ts';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import advisorCategories from './advisorCategories';
import { usei18n } from '../../i18n';
import { basePath } from '@/next.config.mjs';


interface AdvisorsGridProps {
  lang: Locale;
  advisorOrder: string[];
}

const AdvisorsGrid = ({ lang, advisorOrder} : AdvisorsGridProps) => {
  const {
    people: { sectionCategories, sectionAdvisors },
  } = usei18n(lang);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAdvisors = advisorOrder.filter((id) => {
    const advisorCategory = advisorCategories[id];
    return activeCategory === "all" || advisorCategory === activeCategory;
  });

  const totalAdvisors = filteredAdvisors.length;
  
  return (
    <>
      {/* Advisor Categories */}
      <div className="pb-10">
        {/* Blur Divider */}
        <div className="flex items-center h-36 bg-[linear-gradient(to_bottom,_transparent_0%,_#265F96_42%,_#265F96_58%,_transparent_100%)]"></div>
        
        {/* Category Title + Buttons */}
        <div className="mx-12 sm:mx-16 md:mx-24 lg:mx-48 xl:lg-72 -mt-20">
          {/* Browse expertise by category */}
          <div className="flex justify-center md:block pb-5 text-lg md:text-2xl">
            {sectionCategories.title}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:block">
            {Object.entries(sectionCategories.buttons).map(([key, category]) => (
              <button
                key={key}
                className={`font-medium px-3 py-1 mr-2 my-0.5 text-sm md:px-6 md:py-1 md:mr-4 md:my-1.5 md:text-lg lg:text-xl border border-2 ${ activeCategory == key ? "bg-white border-white text-black" : "bg-[linear-gradient(to_bottom,_#154498,_#2553A6,_#0E3273)] border-[#30DA74]" } rounded-lg`}
                onClick={() => setActiveCategory(key)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Advisor Card Section */}
      <div className="pb-24 px-1">
        {/* Advisors Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,_18%)] md:grid-cols-[repeat(auto-fit,_8.5%)] justify-center text-black gap-4 sm:gap-y-6 sm:gap-x-8 lg:gap-x-10 lg:gap-y-10">
          {filteredAdvisors.map((id, index) => {
            const advisor = sectionAdvisors.advisors[id];
            const category = advisorCategories[id];

            if (!advisor) {
              console.warn(`Advisor with ID "${id}" is missing in advisors object`);
              return null; // skip missing advisor
            } else if (!category) {
              console.warn(`⚠️ Advisor with ID "${id}" is missing category in app/[lang]/advisors/advisorCategories.ts`);
            }

            const { img, name, role, texts, link } = advisor;

            return (
              <div
                key={id}
                className={`
                  bg-white rounded-2xl text-center col-span-2
                  ${ (totalAdvisors % 2 != 0 && index + 1 == totalAdvisors) ? `col-start-2` : "col-start-auto" }
                  ${ [1, 2, 3].map(n => 
                      totalAdvisors % 4 == n && index == totalAdvisors - (totalAdvisors % 4)
                      ? `md:col-start-${5-n}`
                      : ""
                  ).find(Boolean) || "md:col-start-auto" }
                `} // ^ logic for centering the last row of advisors using grid positioning
              >
                {/* Advisor Headshot */}
                <Link target="_blank" href={link}>
                  <div className="aspect-[3/4] w-full">
                    <ExportedImage
                      className="rounded-2xl object-cover w-full h-full"
                      src={img}
                      alt={name}
                      basePath={basePath}
                      width={375}
                      height={450}
                    />
                  </div>
                </Link>

                {/* Advisor Information */}
                <div className="pb-2 lg:pb-2.5 font-bold text-black px-1 lg:px-2 w-full">
                  <h2 className="pt-1 text-xs lg:pt-4 sm:text-base lg:text-2xl">
                    {name}
                  </h2>
                  <div className="py-1 text-[10px] font-semibold lg:font-bold sm:text-sm lg:text-xl">
                    {role}
                  </div>
                  {texts.map((text, i) => (
                    <div
                      key={i}
                      className="text-[9px] font-semibold lg:font-bold sm:text-xs lg:text-base"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdvisorsGrid;