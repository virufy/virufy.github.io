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
  const isJapanese = lang === 'ja';
  const showYouTube = lang === 'en' || lang === 'ar';

  return (
    <div className="mt-8 flex justify-center gap-3 lg:mt-4">
      {/* LinkedIn */}
      <Link
        target="_blank"
        href="https://www.linkedin.com/company/virufy/"
        className="flex"
      >
        <ExportedImage
          src={LinkedInIcon}
          alt="LinkedIn icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>

      {/* X (Twitter) */}
      <Link
        target="_blank"
        href={
          isJapanese ? 'https://x.com/virufy_japan' : 'https://x.com/VirufyOrg'
        }
        className="flex"
      >
        <ExportedImage
          src={XIcon}
          alt="X icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>

      {/* Instagram */}
      <Link
        target="_blank"
        href="https://www.instagram.com/virufy/"
        className="flex"
      >
        <ExportedImage
          src={InstagramIcon}
          alt="Instagram icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>

      {/* TikTok */}
      <Link
        target="_blank"
        href="https://www.tiktok.com/@virufy"
        className="flex"
      >
        <ExportedImage
          src={TicTokIcon}
          alt="TikTok icon"
          className="h-[16px] w-[16px]"
          basePath={basePath}
          unoptimized={unoptimized}
        />
      </Link>

      {/* YouTube – only for English & Arabic */}
      {showYouTube && (
        <Link
          target="_blank"
          href="https://www.youtube.com/@virufy1993"
          className="flex"
        >
          <ExportedImage
            src={YouTubeIcon}
            alt="YouTube icon"
            className="h-[16px] w-[16px]"
            basePath={basePath}
            unoptimized={unoptimized}
          />
        </Link>
      )}
    </div>
  );
}
