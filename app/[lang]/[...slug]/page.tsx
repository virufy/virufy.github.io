import { notFound } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';

export async function generateStaticParams() {
  const localizedSlugs = [
    'advisors',
    'ai',
    'amils-story',
    'apply',
    'bio',
    'cookie-policy',
    'copd',
    'covid19',
    'do-not-sell-my-data',
    'dubai-jp',
    'faq',
    'flu',
    'founder',
    'fukuoka',
    'halfmydaf',
    'join-us',
    'news',
    'one-young-world',
    'paper',
    'press',
    'privacy-policy',
    'publications',
    'rsv',
    'story',
    'supporters',
    'virumap-msg',
    'virumap-msg-jp',
    'virumap-slide-jp',
    'virumap-slides',
  ];

  return i18n.locales.flatMap((lang) =>
    localizedSlugs.map((slug) => ({
      lang,
      slug: [slug],
    }))
  );
}

export default function LocalizedPage({
  params,
}: {
  params: { lang: Locale; slug: string[] };
}) {
  const { lang, slug } = params;

  if (!i18n.locales.includes(lang)) {
    notFound();
  }

  return (
    <div>
      <h1>
        Page: /{lang}/{slug.join('/')}
      </h1>
      <p>This is a placeholder for localized route content.</p>
    </div>
  );
}
