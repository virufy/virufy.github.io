import { type Testimonial } from '@/app/i18n/types/oneYoungWorld';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';

interface Props extends Testimonial {
  imageIndex: number;
}

const TestimonialCard = ({
  testimonial,
  image,
  altText,
  name,
  origin,
  imageIndex,
}: Props) => {
  return (
    <div
      style={{ transform: `translateX(${-100 * imageIndex}%)` }}
      className="h-full w-full shrink-0 grow-0 transition duration-500 ease-in-out md:w-11/12"
    >
      <div className="flex h-[420px] w-[320px] flex-col items-center justify-between rounded-2xl bg-white px-8 py-6 text-center font-medium text-black shadow-lg">
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
    </div>
  );
};

export default TestimonialCard;
