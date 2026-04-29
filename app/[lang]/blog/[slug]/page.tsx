import { type Locale } from '@/i18n-config';
import blogPosts from '@/app/i18n/types/BlogPosts';
import { i18n } from '@/i18n-config';
import paperBackground from '@/public/images/blog/paper.png';
import ExportedImage from 'next-image-export-optimizer';

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
    <div className="relative flex justify-center bg-[#E6F2FB] pt-24 text-black">
      <div className="relative w-full max-w-6xl overflow-hidden">
        {/* Background image */}
        <ExportedImage
          src={paperBackground}
          alt="paper background"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-[#E6F2FB] via-[#E6F2FB]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col space-y-6 px-8 py-20 pb-[300px] sm:px-12 lg:px-40">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          {post.description && (
            <p className="italic text-black/80">{post.description}</p>
          )}
          {post.date && <p className="italic text-black/80">{post.date}</p>}

          <div
            className="space-y-6 text-black [&_a]:text-red-400 [&_a]:underline [&_em]:italic [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-semibold [&_li]:mb-2 [&_p]:leading-relaxed [&_p]:text-black/90 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
