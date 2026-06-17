'use client';

import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import { StaticImageData } from 'next/image';

type NewsCardProps = {
  image?: string | StaticImageData;
  date: string;
  title: string;
  subtitle?: string;
  url: string;
};

const unoptimized = process.env.NODE_ENV !== 'production';

const NewsCard = ({ image, date, title, subtitle, url }: NewsCardProps) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-gray-300">
      {/* Image */}
      {image && (
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '376 / 216' }}>
          <ExportedImage
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            basePath={basePath}
            unoptimized={unoptimized}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col p-4">
        {/* Date with gradient */}
        <time
          className="font-inter font-medium text-sm leading-[20px] tracking-[-0.15px] bg-gradient-to-r from-[#0E72C9] to-[#2A9D8F] bg-clip-text text-transparent"
          dateTime={date}
        >
          {date}
        </time>

        {/* Title */}
        <h3 className="mt-2 font-montserrat font-semibold text-black text-xl leading-[25px] tracking-[0px]">
          <Link href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {title}
          </Link>
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 font-montserrat font-normal text-gray-600 text-base leading-[26px] tracking-[0px]">
            {subtitle}
          </p>
        )}
      </div>
    </article>
  );
};

export default NewsCard;