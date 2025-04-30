
import { Document } from 'flexsearch';

export type SearchEntry = {
    id: string;
    lang: string;
    title: string;
    content: string;
    url: string;
};

let index: Document;
let currentData: SearchEntry[] = [];

let currentLang = '';
let isLoading = false;

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
    return flex;
}

// Here, we are Initializing the search index .
export async function initSearch(lang: string = 'en'): Promise<void> {
    if (isLoading || currentLang === lang) return;
    isLoading = true;
    currentLang = lang;

    try {
        const searchIndex = await import(`../public/search-index/${lang}.json`);
        currentData = searchIndex.default;
        index = buildIndex(currentData);
    } catch (err) {
        console.error(`[initSearch] Failed to load or build index for ${lang}`, err);
    }

    isLoading = false;
}

// Searching & Matching results.

export async function search(query: string): Promise<SearchEntry[]> {
    if (!index) {
        console.warn('[search] Index not initialized.');
        return [];
    }

    const resultMap = await index.search(query, { enrich: true });

    
    console.log('[search] Raw resultMap:', JSON.stringify(resultMap, null, 2));
    
    
    const flatResults: SearchEntry[] = Array.isArray(resultMap)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? resultMap.flatMap((entry: any) =>
            Array.isArray(entry?.result)
                ? entry.result.map((id: string) => currentData.find(d => d.id === id)).filter(Boolean)
                : []
        )
        : [];


    return flatResults;
}


