import { useState } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import { basePath } from '@/next.config.mjs';
import { ColorProps, TextSizeProps } from '../themes';
import { type AiSlide } from '@/app/i18n/types/ai';

interface Props {
  slides: AiSlide[];
}

const AiCarousel = ({ slides }: Props) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      {/* Mobile */}
      <div className="relative block w-full overflow-hidden text-black md:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="flex w-full flex-shrink-0">
              <div className="flex flex-1 flex-col">
                {/* Title */}
                <h2
                  className={`mb-3 py-3 text-center ${ColorProps.textGreenDark} ${TextSizeProps.h2}`}
                >
                  {slide.title}
                </h2>
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl border border-[#bcc7d4]">
                  <ExportedImage
                    fill
                    className="aspect-[5/2] w-full object-cover object-[50%_20%]"
                    src={slide.image}
                    alt={slide.title}
                    priority
                    basePath={basePath}
                  />
                </div>

                {/* Controls */}
                <div className="mt-4 flex items-center justify-center gap-3 pb-2 pt-1">
                  <button
                    onClick={prevSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bcc7d4] bg-[#F3F4F6]"
                  >
                    &lt;
                  </button>

                  {slides.map((_, j) => (
                    <div
                      key={j}
                      className={`rounded-full ${ColorProps.bgGradientReverse} transition-all duration-300 ${j === index ? 'h-2 w-8' : 'h-2 w-2'} `}
                    />
                  ))}

                  <button
                    onClick={nextSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bcc7d4] bg-[#F3F4F6]"
                  >
                    &gt;
                  </button>
                </div>

                {/* Text */}
                <p
                  className={`py-3 text-center ${ColorProps.textGray} ${TextSizeProps.p}`}
                >
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="my-5 hidden overflow-hidden rounded-3xl border border-[#bcc7d4] bg-white text-black md:block">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={slide.title} className="flex w-full flex-shrink-0">
                {/* Text */}
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="pb-4 pt-3 text-3xl">{slide.title}</h2>

                  <ol
                    start={i + 1}
                    className={`list-decimal pb-4 pl-5 pt-2 ${ColorProps.textGray} marker:${ColorProps.textGray}`}
                  >
                    <li>{slide.text}</li>
                  </ol>

                  {/* Controls */}
                  <div className="mt-auto flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bcc7d4] bg-[#e6f2fb]"
                    >
                      &lt;
                    </button>

                    {slides.map((_, j) => (
                      <div
                        key={j}
                        className={`rounded-full ${ColorProps.bgGradient} transition-all duration-300 ${j === index ? 'h-2 w-8' : 'h-2 w-2'} `}
                      />
                    ))}

                    <button
                      onClick={nextSlide}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bcc7d4] bg-[#e6f2fb]"
                    >
                      &gt;
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative flex-1">
                  <ExportedImage
                    fill
                    className="h-full w-full object-cover"
                    src={slide.image}
                    alt={slide.title}
                    priority
                    basePath={basePath}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCarousel;
