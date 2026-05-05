/**
 * This script updates each language's search-index in public/search-index
 *
 * Run in terminal:
 * node --loader ts-node/esm scripts/update-search-index.ts
 * OR
 * npm run upd-search
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import type { QA } from '../app/i18n/types/faq';

import type { StoryCard } from '../app/i18n/types/story';
import type { JobDetail } from '@/app/i18n/types/jobDetails';
import type { TeamLeadCard } from '@/app/i18n/types/teamLeads';
import type { People } from '@/app/i18n/types/people';
import type { NewsCard } from '@/app/i18n/types/news';
import type { Card } from '@/app/i18n/types/sevenamilsStory';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let outputPath = path.join(__dirname, '../public/search-index/test.json');
const langs = ['ar', 'en', 'es', 'ja'];

// Each object has an id, lang, title, content, and url
let data: {
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
    await parseDonate(lang);

    // Create/update search-index files
    outputPath = path.join(__dirname, `../public/search-index/${lang}.json`); // To be changed once finished with the script

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

    console.log(`✅ Files generated successfully at: ${outputPath}`);
  }
})();

// -------------- FUNCTIONS BELOW ----------------

// Dynamically load a file for a given language
async function loadFile(lang: string, file: string) {
  try {
    const filePath = `../app/i18n/${lang}/${file}.ts`;

    const mod = await import(filePath);
    if (!mod)
      throw new Error(
        `❌ Module "${file}.ts" for language "${lang}" loaded but is empty or invalid.`
      );
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
  const content = await loadFile(lang, 'ai');
  const hero = content.heroSection;
  const ai = content.aiSection;

  // heroSection
  data.push({
    id: `${lang}-ai-hero`,
    lang: lang,
    title: (hero.title as { type: string; text: string }[])
      .map((item) => item.text)
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
  const content = await loadFile(lang, 'publications');
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
    pubCards.forEach((card: { title: string; url: string }, index: number) => {
      data.push({
        id: `${lang}-media-publications-${index + 1}`,
        lang: lang,
        title: pubSection.title,
        content: card.title,
        url: card.url,
      });
    });
  }
}

async function parseFaq(lang: string) {
  const content = await loadFile(lang, 'faq');

  // All FAQs
  if (content.questionsSection?.questionsByTopic) {
    const faqData = content.questionsSection.questionsByTopic;

    for (const qas of Object.values(faqData)) {
      (qas as QA[]).forEach((qa, index) => {
        data.push({
          id: `${lang}-faq-${index + 1}`,
          lang: lang,
          title: qa.question,
          content: qa.answer[0].content.map((c) => c.text).join(' '),
          url: `/${lang}/ai`,
        });
      });
    }
  }
}

async function parseHome(lang: string) {
  const content = await loadFile(lang, 'home');

  if (!content) {
    console.warn(`Skipping home for ${lang} (failed to load)`);
    return;
  }

  const baseUrl = `/${lang}`;

  // Intro Section
  data.push({
    id: `${lang}-home-intro`,
    lang,
    title: content.introSection.title,
    content: `${content.introSection.subtitle} ${content.introSection.text}`,
    url: baseUrl,
  });

  // Section 2 (Mission)
  data.push({
    id: `${lang}-home-mission`,
    lang,
    title: content.section2.title,
    content: `${content.section2.subtitle} ${content.section2.text.join(' ')}`,
    url: baseUrl,
  });

  // Section 3 (Your Health, Our Priority)
  data.push({
    id: `${lang}-home-health-priority`,
    lang,
    title: content.section3.title,
    content: [
      content.section3.subtitle,
      ...content.section3.cardtitle.map(
        (t: string, i: number) => `${t} ${content.section3.cardtext[i]}`
      ),
      content.section3.disclaimer,
    ].join(' '),
    url: baseUrl,
  });

  // Section 3 Cards (individual — better search)
  content.section3.cardtitle.forEach((title: string, i: number) => {
    data.push({
      id: `${lang}-home-health-feature-${i + 1}`,
      lang,
      title,
      content: content.section3.cardtext[i],
      url: baseUrl,
    });
  });

  // Section 4 (Global Collaboration)
  data.push({
    id: `${lang}-home-global`,
    lang,
    title: content.section4.title,
    content: [
      content.section4.subtitle,
      ...content.section4.cardtitle.map(
        (t: string, i: number) => `${t} ${content.section4.cardtext[i]}`
      ),
    ].join(' '),
    url: baseUrl,
  });

  // Section 4 Cards (individual)
  content.section4.cardtitle.forEach((title: string, i: number) => {
    data.push({
      id: `${lang}-home-global-feature-${i + 1}`,
      lang,
      title,
      content: content.section4.cardtext[i],
      url: baseUrl,
    });
  });

  // Section 5 (CTA / Technology)
  data.push({
    id: `${lang}-home-technology`,
    lang,
    title: content.section5.title,
    content: `${content.section5.text} ${content.section5.button}`,
    url: baseUrl,
  });
}

async function parseStory(lang: string) {
  const content = await loadFile(lang, 'story');
  if (!content) return;

  const story = content.introSection;
  const section2 = content.section2;
  const section3 = content.section3;
  const section4 = content.section4;

  // Intro
  data.push({
    id: `${lang}-story-intro`,
    lang: lang,
    title: story.title.join(' '),
    content: story.text,
    url: `/${lang}/story`,
  });

  // Section 2
  data.push({
    id: `${lang}-story-section2`,
    lang: lang,
    title: section2.title,
    content: section2.text.join(' '),
    url: `/${lang}/story`,
  });
  // Section 3 header
  data.push({
    id: `${lang}-story-section3`,
    lang,
    title: section3.title,
    content: section3.subtitle,
    url: `/${lang}/story`,
  });
  // Section 3 cards
  section3.StoryCard.forEach((card: StoryCard, index: number) => {
    data.push({
      id: `${lang}-story-card-${index + 1}`,
      lang: lang,
      title: card.title,
      content: card.text,
      url: `/${lang}/story`,
    });
  });
  // Section 4 header
  data.push({
    id: `${lang}-story-section4`,
    lang,
    title: section4.title,
    content: section4.subtitle,
    url: `/${lang}/story`,
  });

  // Section 4 cards
  for (let i = 0; i < section4.cardtitle.length; i++) {
    data.push({
      id: `${lang}-story-section4-card-${i + 1}`,
      lang,
      title: section4.cardtitle[i],
      content:
        `${section4.cardtext[i] ?? ''} ${section4.cardsubtext[i] ?? ''}`.trim(),
      url: `/${lang}/story`,
    });
  }
}

async function parseJobDetails(lang: string) {
  const content = await loadFile(lang, 'jobDetails');
  const entries = Object.entries(content as Record<string, JobDetail>);

  entries.forEach(([key, job]) => {
    data.push({
      id: `${lang}-job-${key}`,
      lang: lang,
      title: job.title,
      content: job.description,
      url: `/${lang}/join-us/${key}`,
    });
  });
}

async function parseTeamLeads(lang: string) {
  const content = await loadFile(lang, 'teamLeads');
  const cards = content.cards;

  cards.forEach((card: TeamLeadCard, index: number) => {
    data.push({
      id: `${lang}-teamleads-${index + 1}`,
      lang: lang,
      title: card.name,
      content: card.texts.filter((text) => text.trim() !== '').join(' | '),
      url: `/${lang}/one-young-world`,
    });
  });
}

async function parseSupporters(lang: string) {
  const content = await loadFile(lang, 'supporters');

  if (!content) {
    console.warn(`Skipping supporters for ${lang} (failed to load)`);
    return;
  }

  const baseUrl = `/${lang}/supporters`;

  // Intro Section
  data.push({
    id: `${lang}-supporters-intro`,
    lang,
    title: content.introSection.title.join(' '),
    content: `${content.introSection.tag} ${content.introSection.text}`,
    url: baseUrl,
  });

  // Supporters list (all combined)
  data.push({
    id: `${lang}-supporters-list`,
    lang,
    title: 'Supporters',
    content: content.SupporterImg.map((s: { alt: string }) => s.alt).join(
      ' | '
    ),
    url: baseUrl,
  });

  // Individual supporters (better search hits)
  content.SupporterImg.forEach(
    (supporter: { alt: string; link: string }, index: number) => {
      data.push({
        id: `${lang}-supporter-${index + 1}`,
        lang,
        title: supporter.alt,
        content: supporter.alt,
        url: supporter.link || baseUrl,
      });
    }
  );

  // Banner / CTA
  data.push({
    id: `${lang}-supporters-banner`,
    lang,
    title: content.banner.title,
    content: `${content.banner.text.join(' ')} ${content.banner.buttontext}`,
    url: content.banner.link || baseUrl,
  });
}

async function parsePeople(lang: string) {
  const content = (await loadFile(lang, 'people')) as People;
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
  const content = await loadFile(lang, 'news');

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
  const content = await loadFile(lang, 'amilsStory');

  // Helper for TitleText[]
  const parseTitle = (titleArr?: { text: string }[]) =>
    titleArr?.map((t) => t.text).join(' ') ?? '';

  const baseUrl = `/${lang}/amils-story`;

  // Hero Section
  data.push({
    id: `${lang}-amilsStory-hero`,
    lang,
    title: parseTitle(content.heroSection.title),
    content: `${content.heroSection.tag} ${content.heroSection.text}`,
    url: baseUrl,
  });

  // Story Section
  data.push({
    id: `${lang}-amilsStory-story`,
    lang,
    title: content.storySection.title,
    content: content.storySection.texts.join(' '),
    url: baseUrl,
  });

  // Milestone Section (overview)
  data.push({
    id: `${lang}-amilsStory-milestones-overview`,
    lang,
    title: content.milestoneSection.title,
    content: content.milestoneSection.text,
    url: baseUrl,
  });

  // Milestone Cards (INDIVIDUAL — better for search relevance)
  content.milestoneSection.milestoneCards.forEach(
    (card: Card, index: number) => {
      data.push({
        id: `${lang}-amilsStory-milestone-${index + 1}`,
        lang,
        title: card.title,
        content: `${card.date} ${card.text}`,
        url: baseUrl,
      });
    }
  );

  // One Young World Section
  data.push({
    id: `${lang}-amilsStory-oyw`,
    lang,
    title: parseTitle(content.oywSection.title),
    content: content.oywSection.text,
    url: baseUrl,
  });

  // Banner
  data.push({
    id: `${lang}-amilsStory-banner`,
    lang,
    title: content.banner.title,
    content: `${content.banner.text} ${content.banner.buttonText}`,
    url: content.banner.url || baseUrl,
  });
}

async function parseOneYoungWorld(lang: string) {
  const content = await loadFile(lang, 'oneYoungWorld');
  const oywIntro = content.oyw.virufyAndOyw;
  const oywWhy = content.oyw.whyOyw;

  // OYW intro
  data.push({
    id: `${lang}-oyw-intro`,
    lang: lang,
    title: oywIntro.title,
    content: oywIntro.texts.join(' '),
    url: `/${lang}/one-young-world`,
  });

  // OYW why
  data.push({
    id: `${lang}-oyw-why`,
    lang: lang,
    title: oywWhy.title,
    content: oywWhy.cards.map((card: { text: string }) => card.text).join(' '),
    url: `/${lang}/one-young-world`,
  });
}

async function parseShareYourCough(lang: string) {
  const content = await loadFile(lang, 'shareYourCough');

  data.push({
    id: `${lang}-share-your-cough`,
    lang: lang,
    title: content.title,
    content: content.text,
    url: `/${lang}/study/welcome`,
  });
}
async function parseDonate(lang: string) {
  const content = await loadFile(lang, 'donate');

  if (!content) {
    console.warn(`Skipping donate for ${lang} (failed to load)`);
    return;
  }

  const baseUrl = `/${lang}/donate`;

  // Intro Section (Hero)
  data.push({
    id: `${lang}-donate-intro`,
    lang,
    title: content.introSection.title.join(' '),
    content: `${content.introSection.tag} ${content.introSection.text}`,
    url: baseUrl,
  });

  // Impact Section
  data.push({
    id: `${lang}-donate-impact`,
    lang,
    title: content.impactSection.title,
    content: content.impactSection.description,
    url: baseUrl,
  });

  // Pillars (combined overview)
  data.push({
    id: `${lang}-donate-pillars`,
    lang,
    title: 'Impact Pillars',
    content: content.pillars
      .map(
        (p: { title: string; description: string }) =>
          `${p.title} ${p.description}`
      )
      .join(' '),
    url: baseUrl,
  });

  // Pillars (individual — better search)
  content.pillars.forEach(
    (pillar: { title: string; description: string }, index: number) => {
      data.push({
        id: `${lang}-donate-pillar-${index + 1}`,
        lang,
        title: pillar.title,
        content: pillar.description,
        url: baseUrl,
      });
    }
  );

  // Donate Options (overview)
  data.push({
    id: `${lang}-donate-options`,
    lang,
    title: content.donateOptions.title,
    content: `${content.donateOptions.subtitle} ${content.donateOptions.options
      .map(
        (o: { name: string; description: string }) =>
          `${o.name} ${o.description}`
      )
      .join(' ')}`,
    url: baseUrl,
  });

  // Individual Donate Options
  content.donateOptions.options.forEach(
    (
      option: {
        name: string;
        description: string;
        buttonText: string;
        url: string;
      },
      index: number
    ) => {
      data.push({
        id: `${lang}-donate-option-${index + 1}`,
        lang,
        title: option.name,
        content: `${option.description} ${option.buttonText}`,
        url: option.url || baseUrl,
      });
    }
  );

  // Banner (trust / transparency)
  data.push({
    id: `${lang}-donate-banner`,
    lang,
    title: content.banner.title,
    content: content.banner.text.join(' '),
    url: baseUrl,
  });
}
