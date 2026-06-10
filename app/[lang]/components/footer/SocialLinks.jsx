import { basePath } from '@/next.config.mjs';
import {
  InstagramIconColor,
  LinkedInIconColor,
  XIconColor,
  YouTubeIconColor,
  TikTokIconColor,
} from '@/public/images/footer/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

export default function SocialLinks({ lang }) {
  return (
    <div className="mt-6 flex items-center justify-center gap-3 lg:mt-5 lg:gap-2">
      <Link
        target="_blank"
        href="https://www.linkedin.com/company/virufy/"
        className="lg:hidden"
      >
        <ExportedImage
          src={LinkedInIconColor}
          alt="LinkedIn icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href={lang === 'ja' ? 'https://x.com/virufy_japan' : 'https://x.com/VirufyOrg'}
        className="lg:hidden"
      >
        <ExportedImage
          src={XIconColor}
          alt="X icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.instagram.com/virufy/"
        className="lg:hidden"
      >
        <ExportedImage
          src={InstagramIconColor}
          alt="Instagram icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.tiktok.com/@virufy"
        className="lg:hidden"
      >
        <ExportedImage
          src={TikTokIconColor}
          alt="TikTok icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.youtube.com/@virufy1993"
        className={lang === 'en' || lang === 'ar' ? 'flex lg:hidden' : 'hidden'}
      >
        <ExportedImage
          src={YouTubeIconColor}
          alt="Youtube icon"
          className="relative top-[3px] h-[19px] w-[19px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.linkedin.com/company/virufy/"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={LinkedInIconColor}
          alt="LinkedIn icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://x.com/virufy_japan"
        className={lang === 'ja' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={XIconColor}
          alt="X icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://x.com/VirufyOrg"
        className={lang != 'ja' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={XIconColor}
          alt="X icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.instagram.com/virufy/"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={InstagramIconColor}
          alt="Instagram icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.tiktok.com/@virufy"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={TikTokIconColor}
          alt="TikTok icon"
          className="h-[15px] w-[15px] object-contain"
          basePath={basePath}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.youtube.com/@virufy1993"
        className={lang === 'en' || lang === 'ar' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={YouTubeIconColor}
          alt="Youtube icon"
          className="relative top-[3px] h-[19px] w-[19px] object-contain"
          basePath={basePath}
        />
      </Link>
    </div>
  );
}