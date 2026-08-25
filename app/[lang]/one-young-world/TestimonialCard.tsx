import { type Testimonial } from '@/app/i18n/types/oneYoungWorld';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

interface Props extends Testimonial {}

const TestimonialCard = ({
  testimonial,
  image,
  altText,
  name,
  origin,
}: Props) => {
  return (
    <div className="mx-auto flex h-[420px] w-full max-w-[320px] flex-col items-center justify-between rounded-2xl bg-white px-5 py-5 text-center font-medium text-[#1B6E64] shadow-lg md:px-8 md:py-6">
      <blockquote className="text-sm leading-relaxed md:text-base md:leading-relaxed">
        {testimonial}
      </blockquote>

      <div className="space-y-3">
        <ExportedImage
          className="mx-auto rounded-full"
          src={image}
          alt={altText}
          width="64"
          height="64"
          basePath={basePath}
        />
        <div className="text-base font-semibold">{name}</div>
        <div className="text-sm">{origin}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
