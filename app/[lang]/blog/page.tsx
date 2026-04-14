import BlogList from './BlogList';
import { type Locale } from '@/i18n-config';
import { usei18n } from '@/app/i18n';

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const i18n = usei18n(lang);

  const posts = Object.values(i18n?.blogPosts ?? {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#4064AD]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <BlogList posts={posts} lang={lang} />
      </div>
    </div>
  );
}
