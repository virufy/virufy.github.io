import { basePath } from '@/next.config.mjs';
import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
  TicTokIcon,
} from '@/public/images/sevenFooter/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

const unoptimized = process.env.NODE_ENV !== 'production';

export default function SevenSocialLinks({ lang }) {
  return (
    <div className="mt-8 flex justify-center gap-10 lg:mt-4 lg:gap-7">
      <Link
        target="_blank"
        href="https://www.instagram.com/virufy/"
        className="lg:hidden"
      >
        <ExportedImage
          src={InstagramIcon}
          alt="Instagram icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/company/virufy/"
        className="lg:hidden"
      >
        <ExportedImage
          src={LinkedInIcon}
          alt="LinkedIn icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
      <Link
        target="_blank"
        href="https://x.com/virufy_japan"
        className={lang === 'ja' ? 'lg:hidden' : 'hidden'}
      >
        <ExportedImage
          src={XIcon}
          alt="X icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>

      <Link
        target="_blank"
        href="https://www.instagram.com/virufy/"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={InstagramIcon}
          alt="Instagram icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/company/virufy/"
        className="hidden lg:flex"
      >
        <ExportedImage
          src={LinkedInIcon}
          alt="LinkedIn icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
      <Link
        target="_blank"
        href="https://x.com/virufy_japan"
        className={lang === 'ja' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={XIcon}
          alt="X icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
      <Link
        target="_blank"
        href="https://x.com/VirufyOrg"
        className={lang != 'ja' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={XIcon}
          alt="X icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.youtube.com/@virufy1993"
        className={lang === 'en' || lang === 'ar' ? 'hidden lg:flex' : 'hidden'}
      >
        <ExportedImage
          src={YouTubeIcon}
          alt="Youtube icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.youtube.com/@virufy1993"
        className={lang === 'en' || lang === 'ar' ? 'flex lg:hidden' : 'hidden'}
      >
        <ExportedImage
          src={YouTubeIcon}
          alt="Youtube icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>
    </div>
  );
}
