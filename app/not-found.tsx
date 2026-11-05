import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/navbar/index';
import { ColorProps } from './[lang]/themes';

export const metadata = {
  title: '404: Page Not Found | Virufy',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <Link href="/" className="mb-10">
        <ExportedImage
          src={VirufyLogo}
          alt="Virufy logo"
          basePath={basePath}
          className="h-[48px] w-[140px] object-contain"
        />
      </Link>

      <p
        className={`text-7xl font-bold md:text-8xl ${ColorProps.textGradient}`}
      >
        404
      </p>

      <h1 className="mt-4 text-2xl font-semibold text-black md:text-3xl">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-base text-[#2c3540] md:text-lg">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>

      <Link
        href="/"
        className={`mt-8 rounded-full px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 ${ColorProps.bgGradient}`}
      >
        Back to Home
      </Link>
    </main>
  );
}
