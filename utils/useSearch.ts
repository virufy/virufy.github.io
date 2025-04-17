'use client';

import { useEffect, useState } from 'react';
import { initSearch, search } from './search';
import type { SearchEntry } from './search';

export default function useSearch(lang:string) {
    const [results, setResults] = useState<SearchEntry[]>([]);
    const [isReady, setIsReady] = useState(false); 
 

    useEffect(() => {
        setIsReady(false); // mark not ready
        initSearch(lang).then(() => {
            setIsReady(true); //mark ready after init
        });
    }, [lang]);

    const performSearch = (query: string) => {
        if (!isReady) return; 
        if (query.length > 1) {
            const res = search(query);
            setResults(res);
        } else {
            setResults([]);
        }
    };

    const clearResults = () => {
        setResults([]); 
    };

    return { results, performSearch, clearResults, isReady };
}
