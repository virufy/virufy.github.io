import Link from 'next/link';
import { type Post } from '@/app/i18n/types/BlogPosts';
import { type Locale } from '@/i18n-config';

import ExportedImage from 'next-image-export-optimizer';
const placeholderImage = '/images/sevenNews/Placeholder-Card.png';
export default function BlogCard({ post, lang }: { post: Post; lang: Locale }) {
  const cardImage = placeholderImage;
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-2xl">
      <Link href={`/${lang}/blog/${post.slug}`}>
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: '376 / 216' }}
        >
          <ExportedImage
            src={cardImage}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            unoptimized={true}
          />
        </div>
      </Link>
      <div className="flex flex-col p-4">
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
    </article>
  );
}
