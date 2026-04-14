import { type Locale } from '@/i18n-config';
import blogPosts from '@/app/i18n/types/BlogPosts';
import { i18n } from '@/i18n-config';

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    Object.keys(blogPosts).map((slug) => ({
      lang,
      slug,
    }))
  );
}

export default function Page({
  params: { slug },
}: {
  params: { lang: Locale; slug: string };
}) {
  const post = blogPosts[slug];

  if (!post) return <div>NOT FOUND</div>;

  return (
    <div className="relative flex justify-center bg-gradient-to-b from-black to-[#4064AD] pt-24 text-white">
      <div className="flex max-w-7xl flex-col space-y-6 px-8 py-20 sm:px-12 lg:px-40">
        <h1 className="text-3xl font-semibold">{post.title}</h1>

        {post.date && <p className="italic text-white/80">{post.date}</p>}

        <div
          className="space-y-6 text-white [&_a]:text-red-400 [&_a]:underline [&_em]:italic [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-semibold [&_li]:mb-2 [&_p]:leading-relaxed [&_p]:text-white/90 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
