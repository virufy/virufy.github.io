/**
 * This script updates each language's search-index in public/search-index
 * 
 * Run in terminal: 
 * node --loader ts-node/esm scripts/update-search-index.ts
 * 
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import type { QA } from '../app/i18n/types/faq';
import type { TypeText } from '../app/i18n/types/baseInterfaces';
import type { StorySectionText } from '../app/i18n/types/story';


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
    await parseStory(lang);

    // Create/update search-index files
    outputPath = path.join(__dirname, `../public/search-index/test-${lang}.json`); // To be changed once finished with the script

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf-8");

    console.log(`✅ Files generated successfully at: ${outputPath}`);
  }
})();


// -------------- FUNCTIONS BELOW ----------------

function formatTextToId(text: string) {
  return text.toLowerCase().replace(/[\s,]+/g, '-');
}

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
 * Done: ai, faq, home, publications, story
 * 
 * To be done: amilsStory, jobDetails, jobListing, news, oneYoungWorld, 
 * people, shareYourCough, supporters, teamLeads
 */
async function parseAi(lang: string) {
  const content = await loadFile(lang, "ai");
  
  // heroSection
  data.push({
    id: `${lang}-ai-hero`,
    lang: lang,
    title: (content.heroSection.title as { type: string; text: string }[])
      .map(item => item.text)
      .join(' '),
    content: content.heroSection.text,
    url: `/${lang}/ai`,
  });

  // All aiCards
  if (content.aiSection?.aiCards?.length) {
    content.aiSection.aiCards.forEach(
      (card: { title: string; text: string }, index: number) => {
        data.push({
          id: `${lang}-ai-0${index + 1}`,
          lang: lang,
          title: `${content.aiSection!.title} - ${card.title}`,
          content: card.text,
          url: `/${lang}/ai`,
        });
      }
    );
  }
}

async function parsePublications(lang: string) {
  const content = await loadFile(lang, "publications");

  // publicationsSection 
  data.push({
    id: `${lang}-media-publications`,
    lang: lang,
    title: content.publicationsSection.title,
    content: content.publicationsSection.texts[0],
    url: `/${lang}/publications`,
  });

  // All publicationsCards
  if (content.publicationsCards?.length) {
    content.publicationsCards.forEach(
      (card: { title: string, url: string }, index: number) => {
        data.push({
          id: `${lang}-media-publications-${index + 1}`,
          lang: lang,
          title: content.publicationsSection.title,
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

    for (const [topic, qas] of Object.entries(faqData)) {        
      (qas as QA[]).forEach((qa, index) => {
        data.push({
          id: `${lang}-faq-${formatTextToId(topic)}-${index + 1}`,
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

  // Virufy introduction
  data.push({
    id: `${lang}-home-${formatTextToId(content.introSection.text)}`,
    lang: lang,
    title: content.introSection.text,
    content: content.introSection.subText.flat().map((item: TypeText) => item.text).join(' '),
    url: `/${lang}`,
  });

  // How it Works
  data.push({
    id: `${lang}-home-${formatTextToId(content.introSection.mainText2)}`,
    lang: lang,
    title: content.introSection.mainText2,
    content: content.introSection.subText2.flat().map((item: TypeText) => item.text).join(' '),
    url: `/${lang}`,
  });

  // Your Health, Our Priority (YHOP)
  data.push({
    id: `${lang}-home-${formatTextToId(content.section2.text)}`,
    lang: lang,
    title: content.section2.text,
    content: content.section2.subtext,
    url: `/${lang}`,
  });

  // YHOP features
  for (let i = 0; i < content.section2.title.length; i++) {
    const title = content.section2.title[i];
    const sub = content.section2.sub[i];

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

  // How it started
  data.push({
    id: `${lang}-story-${formatTextToId(content.storySection.title)}`,
    lang: lang,
    title: content.storySection.title,
    content: content.storySection.texts.flat().map((item: StorySectionText) => item.text).join(' '),
    url: `/${lang}/story`,
  });

  // Our Mission
  data.push({
    id: `${lang}-story-${formatTextToId(content.MissionSection.title)}`,
    lang: lang,
    title: content.MissionSection.title,
    content: content.MissionSection.texts.flat().map((item: StorySectionText) => item.text).join(' '),
    url: `/${lang}/story`,
  });

  // Commitment to Privacy
  data.push({
    id: `${lang}-story-${formatTextToId(content.privacySection.title)}`,
    lang: lang,
    title: content.privacySection.title,
    content: content.privacySection.texts.join(' '),
    url: `/${lang}/story`,
  });
}