'use client';

import { useEffect } from 'react';
import { type Locale } from '@/i18n-config';

// The root layout (app/layout.tsx) sits above the `[lang]` route segment, so
// it never receives `params.lang` and can't render a per-locale `<html lang>`
// on the server. This component runs inside the `[lang]` layout, which does
// receive the correct locale, and corrects `document.documentElement.lang`
// on the client so the live DOM always reflects the current locale
// (WCAG 3.1.1).
export default function SetHtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
