'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';

export default function RedirectToLangPage() {
  const router = useRouter();

  useEffect(() => {
    const defaultLang = i18n.defaultLocale;
    const currentPath = window.location.pathname;

    // Remove leading slash from currentPath to avoid double slash
    const normalizedPath = currentPath.startsWith('/')
      ? currentPath.slice(1)
      : currentPath;

    const newPath = `/${defaultLang}/${normalizedPath}`;

    router.replace(newPath);
  }, [router]);

  return null;
}

// Required for output: 'export'
export function generateStaticParams() {
  return [];
}
