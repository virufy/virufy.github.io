'use client';

import { useEffect, useState } from 'react';
import { initSearch, search } from './search';
import type { SearchEntry } from './search';

export default function useSearch(lang: string) {
    const [results, setResults] = useState<SearchEntry[]>([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(false);
        initSearch(lang)
            .then(() => {
                console.log(`[useSearch] Index ready for ${lang}`);
                setIsReady(true);
            })
            .catch((err) => {
                console.error(`[useSearch] initSearch failed for ${lang}:`, err);
                setIsReady(false);
            });
    }, [lang]);

    const performSearch = async (query: string) => {
        if (!isReady) {
            console.warn('[useSearch] Tried to search before index was ready.');
            return;
        }

        if (query.length <= 1) {
            setResults([]);
            return;
        }

        try {
            const res = await search(query);
            setResults(res);
        } catch (err) {
            console.error('[useSearch] search failed:', err);
            setResults([]);
        }
    };

    const clearResults = () => {
        setResults([]);
    };

    return { results, performSearch, clearResults, isReady };
}