'use client';

import { useEffect } from 'react';
import { initSearch } from '@/utils/search';

export default function SearchProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        initSearch();
    }, []);

    return <>{children}</>;
}
