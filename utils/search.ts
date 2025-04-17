import lunr from 'lunr';

export type SearchEntry = {
    id: string;
    lang: string;
    title: string;
    content: string;
    url: string;
};

let index: lunr.Index;
let currentData: SearchEntry[] = [];

function buildIndex(data: SearchEntry[]) {
    return lunr(function (this: lunr.Builder) {
        this.ref('id');
        this.field('title', { boost: 100 });
        this.field('content');
        data.forEach((doc) => this.add(doc));
    });
}


let currentLang = '';
let isLoading = false;

export async function initSearch(lang: string = 'en'): Promise<void> {
    if (isLoading || currentLang === lang) return;
    isLoading = true;
    currentLang = lang;

    const searchIndex = await import(`../public/search-index/${lang}.json`);
    currentData = searchIndex.default;
    index = buildIndex(currentData);
    isLoading = false;
}


export function search(query: string): SearchEntry[] {
    if (!index) {
        console.warn('Search index is not initialized. Call initSearch() first.');
        return [];
    }

    const results = index.search(
        query
            .split(' ')
            .map((term) => `${term}~1 ${term}*`) // fuzzy and partial match
            .join(' ')
    );

    return results.map((r) => currentData.find((doc) => doc.id === r.ref)!);
}
