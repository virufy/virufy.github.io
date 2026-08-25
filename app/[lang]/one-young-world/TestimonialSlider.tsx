import { type Testimonial } from '@/app/i18n/types/oneYoungWorld';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
    <div className="w-full pb-12">
      <div className="overflow-x-auto overscroll-x-contain lg:hidden">
        <div className="flex w-max snap-x snap-mandatory gap-2">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="w-[320px] shrink-0 snap-center">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex lg:grid-cols-3 lg:gap-6">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
