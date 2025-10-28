/**
 * This script updates each language's search-index in public/search-index
 * 
 * Run in terminal: 
 * node --loader ts-node/esm scripts/update-search-index.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import type { QA } from '../app/i18n/types/faq';
import type { TypeText } from '../app/i18n/types/baseInterfaces';
import type { StorySectionText } from '../app/i18n/types/story';
import type { JobDetail } from "@/app/i18n/types/jobDetails";
import type { TeamLeadCard } from "@/app/i18n/types/teamLeads";
import type { People } from "@/app/i18n/types/people";
import type { NewsCard } from "@/app/i18n/types/news";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let outputPath = path.join(__dirname, "../public/search-index/test.json");
const langs = ["ar", "en", "es", "ja"];

// Each object has an id, lang, title, content, and url
let data : {
  id: string;
  lang: string;
  title: string;
  content: string;
  url: string;
}[] = [];

(async () => {
  // Parse files for each language
  for (const lang of langs) {
    data = [];

    // Parse ts translation files
    await parseAi(lang);
    await parsePublications(lang);
    await parseFaq(lang);
    await parseHome(lang);
    await parseJobDetails(lang);
    await parseStory(lang);
    await parseTeamLeads(lang);
    await parseSupporters(lang);
    await parsePeople(lang);
    await parseNews(lang);
    await parseAmilsStory(lang);
    await parseOneYoungWorld(lang);
    await parseShareYourCough(lang);
  

    // Create/update search-index files
    outputPath = path.join(__dirname, `../public/search-index/test-${lang}.json`); // To be changed once finished with the script

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf-8");

    console.log(`✅ Files generated successfully at: ${outputPath}`);
  }
})();


// -------------- FUNCTIONS BELOW ----------------

// Dynamically load a file for a given language
async function loadFile(lang: string, file: string) {
  try {
    const filePath = `../app/i18n/${lang}/${file}.ts`;

    const mod = await import (filePath);
    if (!mod) throw new Error(`❌ Module "${file}.ts" for language "${lang}" loaded but is empty or invalid.`);
    return mod.default || mod;
  } catch (err) {
    console.error(`❌ Failed to load ${file}.ts for language ${lang}:`, err);
    return null;
  }
}

/**
 * Below are all the functions for parsing every langauge's .ts files:
 * 
 * ai, faq, home, publications, story, jobDetails, teamLeads, 
 * supporters, people, news, amilsStory, oneYoungWorld, shareYourCough
 */
async function parseAi(lang: string) {
  const content = await loadFile(lang, "ai");
  const hero = content.heroSection;
  const ai = content.aiSection;

  
  // heroSection
  data.push({
    id: `${lang}-ai-hero`,
    lang: lang,
    title: (hero.title as { type: string; text: string }[])
      .map(item => item.text)
      .join(' '),
    content: hero.text,
    url: `/${lang}/ai`,
  });

  // All aiCards
  if (ai?.aiCards?.length) {
    ai.aiCards.forEach(
      (card: { title: string; text: string }, index: number) => {
        data.push({
          id: `${lang}-ai-0${index + 1}`,
          lang: lang,
          title: `${ai!.title} - ${card.title}`,
          content: card.text,
          url: `/${lang}/ai`,
        });
      }
    );
  }
}

async function parsePublications(lang: string) {
  const content = await loadFile(lang, "publications");
  const pubSection = content.publicationsSection;
  const pubCards = content.publicationsCards;

  // publicationsSection 
  data.push({
    id: `${lang}-media-publications`,
    lang: lang,
    title: pubSection.title,
    content: pubSection.texts[0],
    url: `/${lang}/publications`,
  });

  // All publicationsCards
  if (pubCards?.length) {
    pubCards.forEach(
      (card: { title: string, url: string }, index: number) => {
        data.push({
          id: `${lang}-media-publications-${index + 1}`,
          lang: lang,
          title: pubSection.title,
          content: card.title,
          url: card.url,
        });
      }
    )
  }
}

async function parseFaq(lang: string) {
  const content = await loadFile(lang, "faq");

  // All FAQs
  if (content.questionsSection?.questionsByTopic) {
    const faqData = content.questionsSection.questionsByTopic;

    for (const qas of Object.values(faqData)) {        
      (qas as QA[]).forEach((qa, index) => {
        data.push({
          id: `${lang}-faq-${index + 1}`,
          lang: lang,
          title: qa.question,
          content: qa.answer[0].content.map(c => c.text).join(' '),
          url: `/${lang}/ai`,
        });
      });
    }
  }
}

async function parseHome(lang: string) {
  const content = await loadFile(lang, "home");
  const intro = content.introSection;
  const howItWorks = content.introSection;
  const yhop = content.section2;


  // Virufy introduction
  data.push({
    id: `${lang}-home-intro`,
    lang: lang,
    title: intro.text,
    content: intro.subText.flat().map((item: TypeText) => item.text).join(' '),
    url: `/${lang}`,
  });

  // How it Works
  data.push({
    id: `${lang}-home-how-it-works`,
    lang: lang,
    title: howItWorks.mainText2,
    content: howItWorks.subText2.flat().map((item: TypeText) => item.text).join(' '),
    url: `/${lang}`,
  });

  // Your Health, Our Priority (YHOP)
  data.push({
    id: `${lang}-home-health-priority`,
    lang: lang,
    title: yhop.text,
    content: yhop.subtext,
    url: `/${lang}`,
  });

  // YHOP features
  for (let i = 0; i < yhop.title.length; i++) {
    const title = yhop.title[i];
    const sub = yhop.sub[i];

    data.push({
      id: `${lang}-home-health-feature-${i + 1}`,
      lang: lang,
      title: title,
      content: sub,
      url: `/${lang}`,
    });
  }
}

async function parseStory(lang: string) {
  const content = await loadFile(lang, "story");
  const story = content.storySection;
  const mission = content.MissionSection;
  const privacy = content.privacySection;

  // How it started
  data.push({
    id: `${lang}-story-how-it-started`,
    lang: lang,
    title: story.title,
    content: story.texts.flat().map((item: StorySectionText) => item.text).join(' '),
    url: `/${lang}/story`,
  });

  // Our Mission
  data.push({
    id: `${lang}-story-our-mission`,
    lang: lang,
    title: mission.title,
    content: mission.texts.flat().map((item: StorySectionText) => item.text).join(' '),
    url: `/${lang}/story`,
  });

  // Commitment to Privacy
  data.push({
    id: `${lang}-story-privacy-commitment`,
    lang: lang,
    title: privacy.title,
    content: privacy.texts.join(' '),
    url: `/${lang}/story`,
  });
}

async function parseJobDetails(lang: string) {
  const content = await loadFile(lang, "jobDetails");
  const jobs = Object.values(content as Record<string, JobDetail>);

  jobs.forEach((job, index) => {
    data.push({
      id: `${lang}-job-${index + 1}`,
      lang: lang,
      title: job.title,
      content: job.description,
      url: `/${lang}/join-us`,
    });
  });
}

async function parseTeamLeads(lang: string) {
  const content = await loadFile(lang, "teamLeads");
  const cards = content.cards;

  cards.forEach((card: TeamLeadCard, index: number) => {
    data.push({
      id: `${lang}-teamleads-${index + 1}`,
      lang: lang,
      title: card.name,
      content: card.texts.filter(text => text.trim() !== '').join(' | '),
      url: `/${lang}/one-young-world`,
    });
  });
}

async function parseSupporters(lang: string) {
  const content = await loadFile(lang, "supporters"); 

  data.push({
    id: `${lang}-supporters`,
    lang: lang,
    title: content.oursupporters,
    content: `${content.title} (${content.supportersList.map((s: { alt: string }) => s.alt).join(' | ')})`,
    url: `/${lang}/supporters`,
  });
}

async function parsePeople(lang: string) {
  const content = await loadFile(lang, "people") as People;
  const advisors = Object.values(content.sectionAdvisors.advisors);

  advisors.forEach((advisor, index) => {
    data.push({
      id: `${lang}-advisors-${index + 1}`,
      lang: lang,
      title: advisor.name,
      content: `${advisor.role} (${advisor.texts.join(' | ')})`,
      url: `/${lang}/advisors`,
    });
  });
}

async function parseNews(lang: string) {
  const content = await loadFile(lang, "news");

  content.pressReleaseCards.forEach((card: NewsCard, index: number) => {
    data.push({
      id: `${lang}-news-${index + 1}`,
      lang: lang,
      title: card.title,
      content: card.subText || card.date,
      url: `/${lang}/news`,
    });
  });
}

async function parseAmilsStory(lang: string) {
  const content = await loadFile(lang, "amilsStory");
  const tabs = content.sectionAmil.tabsAmil;
  const texts = content.sectionAmil.textAmil;

  const combinations = [
    { tabIndex: 0, textIndices: [0, 1] },
    { tabIndex: 1, textIndices: [2, 3] },
    { tabIndex: 2, textIndices: [4] },
    { tabIndex: 3, textIndices: [5, 6] },
  ];

  for (let i = 0; i < tabs.length - 2; i++) {
    const { tabIndex, textIndices } = combinations[i];
    const combinedText = textIndices.map(idx => String(texts[idx] ?? "")).join(" ");

    data.push({
      id: `${lang}-amilsStory-${i + 1}`,
      lang: lang,
      title: tabs[tabIndex],
      content: combinedText,
      url: `/${lang}/amils-story`,
    });
  }
}

async function parseOneYoungWorld(lang: string) {
  const content = await loadFile(lang, "oneYoungWorld");
  const oywIntro = content.oyw.virufyAndOyw;
  const oywWhy = content.oyw.whyOyw;

  // OYW intro
  data.push({
    id: `${lang}-oyw-intro`,
    lang: lang,
    title: oywIntro.title,
    content: oywIntro.texts.join(" "),
    url: `/${lang}/one-young-world`,
  });

  // OYW why
  data.push({
    id: `${lang}-oyw-why`,
    lang: lang,
    title: oywWhy.title,
    content: oywWhy.cards.map((card: { text: string }) => card.text).join(" "),
    url: `/${lang}/one-young-world`,
  });
}

async function parseShareYourCough(lang: string) {
  const content = await loadFile(lang, "shareYourCough");

  data.push({
    id: `${lang}-share-your-cough`,
    lang: lang,
    title: content.title,
    content: content.text,
    url: `/${lang}/study/welcome`,
  });
}