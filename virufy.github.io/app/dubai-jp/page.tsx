'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DubaiJPRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/en/dubai-jp'); // Redirects to English page
    }, []);

    return (
        <div className="flex items-center justify-center h-screen text-lg text-white bg-[#1e3a8a]">
            <p>Redirecting...</p>
        </div>
    );
}
