import { Document } from 'flexsearch';

type EnrichedResult = {
  field: string;
  result: string[];
};

export type SearchEntry = {
  id: string;
  lang: string;
  title: string;
  content: string;
  url: string;
};

let index: Document | undefined;
let currentData: SearchEntry[] = [];

let currentLang = '';
let loadingPromise: Promise<void> | null = null;

// FlexSearch index
function buildIndex(data: SearchEntry[]): Document {
  const flex = new Document({
    tokenize: 'forward' as const,
    cache: true,
    context: true,
    document: {
      id: 'id',
      index: ['title', 'content'],
    },
  });

  data.forEach((doc) => flex.add(doc));
  return flex as unknown as Document;
}

// Here, we are Initializing the search index .
export function initSearch(lang: string = 'en'): Promise<void> {
  if (currentLang === lang && index) {
    return Promise.resolve();
  }

  if (loadingPromise) {
    return loadingPromise.then(() => initSearch(lang));
  }

  currentLang = lang;
  loadingPromise = (async () => {
    try {
      const searchIndex = await import(`../public/search-index/${lang}.json`);
      currentData = searchIndex.default;
      index = buildIndex(currentData);
    } catch (err) {
      currentData = [];
      index = undefined;
      currentLang = '';
      console.error(
        `[initSearch] Failed to load or build index for ${lang}`,
        err
      );
    } finally {
      loadingPromise = null;
    }
  })();

  return loadingPromise;
}

// Searching & Matching results.

export async function search(query: string): Promise<SearchEntry[]> {
  if (!index) {
    console.warn('[search] Index not initialized.');
    return [];
  }

  // resultMap is an array of EnrichedResult
  const resultMap = (await index.search(query, {
    enrich: true,
  })) as unknown as EnrichedResult[];

  // Type the parameter in .find()
  const titleMatches =
    resultMap.find((r: EnrichedResult) => r.field === 'title')?.result || [];
  const contentMatches =
    resultMap.find((r: EnrichedResult) => r.field === 'content')?.result || [];

  const scoreMap = new Map<string, number>();

  for (const id of titleMatches) {
    scoreMap.set(id, (scoreMap.get(id) || 0) + 5);
  }

  for (const id of contentMatches) {
    scoreMap.set(id, (scoreMap.get(id) || 0) + 1);
  }

  const uniqueIds = Array.from(scoreMap.keys());

  const sortedResults = uniqueIds
    .map((id) => {
      const entry = currentData.find((d) => d.id === id);
      return entry ? { ...entry, _score: scoreMap.get(id) || 0 } : null;
    })
    .filter(Boolean)
    .sort((a, b) => (b!._score ?? 0) - (a!._score ?? 0));

  return sortedResults as SearchEntry[];
}
