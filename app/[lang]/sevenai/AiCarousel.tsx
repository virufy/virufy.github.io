import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { basePath } from "@/next.config.mjs";
import { ColorProps } from "../themes";
import { type AiSlide } from "@/app/i18n/types/sevenai";

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
    <div className="w-full bg-white text-black border border-[#bcc7d4] rounded-3xl overflow-hidden my-5">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.title} className="flex-shrink-0 w-full flex">
              {/* Text */}
              <div className="flex-1 p-8 flex flex-col">
                <h2 className="text-3xl pt-3 pb-4">{slide.title}</h2>

                <ol
                  start={i + 1}
                  className={`list-decimal pl-5 pt-2 pb-4 ${ColorProps.textGray} marker:${ColorProps.textGray}`}
                >
                  <li>{slide.text}</li>
                </ol>

                {/* Controls */}
                <div className="flex items-center gap-3 mt-auto">
                  <button
                    onClick={prevSlide}
                    className="h-12 w-12 flex items-center justify-center border border-[#bcc7d4] rounded-full bg-[#e6f2fb]"
                  >
                    &lt;
                  </button>

                  {slides.map((_, j) => (
                    <div
                      key={j}
                      className={`
                        rounded-full ${ColorProps.bgGradient}
                        transition-all duration-300
                        ${j === index ? "w-8 h-2" : "w-2 h-2"}
                      `}
                    />
                  ))}

                  <button
                    onClick={nextSlide}
                    className="h-12 w-12 flex items-center justify-center border border-[#bcc7d4] rounded-full bg-[#e6f2fb]"
                  >
                    &gt;
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <ExportedImage
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
  );
};

export default AiCarousel;