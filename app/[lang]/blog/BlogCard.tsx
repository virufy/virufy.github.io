import Link from 'next/link';
import { type Post } from '@/app/i18n/types/BlogPosts';
import { type Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';

const placeholderImage = '/images/sevenNews/Placeholder-Card.png';

const blogImagesBySlug: Record<string, string> = {
  'how-to-stay-competitive-in-the-booming-era-of-medical-technology':
    '/images/blog/How to Stay Competitive in the Booming Era of Medical Technology.png',
  'world-lung-day': '/images/blog/World Lung Day Making Every Breath Count.png',
  'building-ai-for-healthcare-what-makes-medtech-different':
    '/images/blog/Building AI for Healthcare What Makes MedTech Different.png',
  'bringing-respiratory-screening-to-the-communities-that-need-it-most':
    '/images/blog/Bringing Respiratory Screening to the Communities That Need It Most..png',
  'the-science-of-sound-and-health':
    '/images/blog/The Science of Sound and Health.png',
  'the-next-step-in-respiratory-public-health':
    '/images/blog/The Next Step in Respiratory Public Health.png',
  'the-future-of-digital-solutions':
    '/images/blog/The Future of Digital Solutions.png',
  'world-no-tobacco-day': '/images/blog/World No Tobacco Day.png',
  'silent-smog-hidden-impact':
    '/images/blog/Silent Smog The Hidden Impact on Your Lungs.png',
  'screen-early-live-better': '/images/blog/Screen Early, Live Better.png',
};

export default function BlogCard({
  post,
  lang,
  category,
}: {
  post: Post;
  lang: Locale;
  category: string;
}) {
  const cardImage = post.image ?? blogImagesBySlug[post.slug] ?? placeholderImage;

  return (
    <article className="group h-full overflow-hidden rounded-xl border border-[#d2dce5] bg-white shadow-[0_8px_20px_rgba(30,55,75,0.13)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(30,55,75,0.18)]">
      <Link
        href={`/${lang}/blog/${post.slug}/`}
        className="flex h-full flex-col rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1689c5]"
        aria-label={`Read ${post.title}`}
      >
        <div className="relative aspect-[1.73] w-full overflow-hidden bg-[#e5eef3]">
          <ExportedImage
            src={cardImage}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
            unoptimized
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#168aad] shadow-sm sm:left-4 sm:top-4">
            {category}
          </span>
        </div>
        <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
          {post.date && (
            <p className="text-xs font-medium text-[#168aad] sm:text-sm">{post.date}</p>
          )}
          <h2 className="mt-2 text-base font-semibold leading-[1.2] text-[#202124] sm:text-lg">
            {post.title}
          </h2>
          <p className="mt-2.5 text-sm leading-[1.55] text-[#5b6570] sm:mt-3 sm:text-base">
            {post.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
