import BlogCard from './BlogCard';
import { type Post } from '@/app/i18n/types/BlogPosts';
import { type Locale } from '@/i18n-config';

export default function BlogList({
  posts,
  lang,
}: {
  posts: Post[];
  lang: Locale;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-semibold text-white">Blog</h1>
        <p className="mt-2 text-white/70">
          Insights on AI, health, and respiratory science
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.reverse().map((post) => (
          <BlogCard key={post.slug} post={post} lang={lang} />
        ))}
      </div>
    </div>
  );
}
