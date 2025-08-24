import { basePath } from '@/next.config.mjs';
import {
  InstagramIconDarkGradient,
  InstagramIconWhite,
  LinkedInIconDarkGradient,
  LinkedInIconWhite,
  XIconDarkGradient,
  XIconWhite,
  YouTubeIconDarkGradient,
  YouTubeIconWhite,
} from '@/public/images/footer/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

export default function SocialLinks({ lang }) {
  return (
    <div className="mt-8 flex justify-center gap-10 lg:mt-4 lg:gap-7">
      <Link
        target="_blank"
        href="https://www.instagram.com/virufy/"
        className="lg:hidden"
      >
        <ExportedImage
          src={InstagramIconWhite}
          alt="Instagram icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/company/virufy/"
        className="lg:hidden"
      >
        <ExportedImage
          src={LinkedInIconWhite}
          alt="LinkedIn icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link
        target="_blank"
        href="https://x.com/virufy_japan"
        className={lang === 'ja' ? 'lg:hidden' : 'hidden'}
      >
        <ExportedImage
          src={XIconWhite}
          alt="X icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.instagram.com/virufy/"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={InstagramIconDarkGradient}
          alt="Instagram icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/company/virufy/"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={LinkedInIconDarkGradient}
          alt="LinkedIn icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link
        target="_blank"
        href="https://x.com/virufy_japan"
        className={lang === 'ja' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={XIconDarkGradient}
          alt="X icon"
          className="h-[40px] w-[30px]"
          basePath={basePath}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.youtube.com/@virufy1993"
        className={lang === 'en' || lang === 'ar' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={YouTubeIconDarkGradient}
          alt="Youtube icon"
          className="h-[40px] w-[41px]"
          basePath={basePath}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.youtube.com/@virufy1993"
        className={lang === 'en' || lang === 'ar' ? 'flex lg:hidden' : 'hidden'}
      >
        <ExportedImage
          src={YouTubeIconWhite}
          alt="Youtube icon"
          className="h-[40px] w-[41px]"
          basePath={basePath}
        />
      </Link>
    </div>
  );
}
