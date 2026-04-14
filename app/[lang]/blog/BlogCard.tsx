import Link from 'next/link';
import { type Post } from '@/app/i18n/types/BlogPosts';
import { type Locale } from '@/i18n-config';

export default function BlogCard({ post, lang }: { post: Post; lang: Locale }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white p-6 text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Title */}
      <h2 className="text-xl font-semibold leading-snug text-black">
        {post.title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-700">{post.description}</p>

      {/* Date (optional) */}
      {post.date && (
        <p className="mt-2 text-sm italic text-gray-500">{post.date}</p>
      )}

      {/* Read more link */}
      <div className="mt-5">
        <Link href={`/${lang}/blog/${post.slug}`}>
          <span className="inline-block font-medium text-blue-600 transition hover:text-blue-800">
            Read more →
          </span>
        </Link>
      </div>
    </div>
  );
}
