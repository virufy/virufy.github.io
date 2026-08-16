import type { QA } from '@/app/i18n/types/faq';
import { type Locale } from '@/i18n-config';
import { useState } from 'react';

import AccordionItemParagraph from './AccordionItemParagraph';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps extends QA {
  lang: Locale;
  topic?: string;
  className?: string;
  isFaq?: boolean;
}

const AccordionItem = ({
  question,
  answer,
  topic,
  lang,
  className = '',
}: AccordionItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const borderTransitionStyle = isActive
    ? 'border-t border-gray-400'
    : 'border-transparent transition-all delay-500';

  // height transitions only work if height is set from one numeric value to another.
  // therefore, set max active height to be the tallest element the AccordionItem
  // needs to support, which in this case is the Cookie Policy -> General dropdown.
  const heightStyle = isActive ? 'max-h-[2600px]' : 'max-h-0';

  return (
    <div
      className={`border-b border-gray-400 bg-transparent text-white last:border-b-0 ${className}`}
    >
      {/* Question Container */}
      <div
        className="relative w-full cursor-pointer py-4"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="pr-8">
          <h3 className="font-semibold text-[#2C3540]">{question}</h3>
          {topic && <p className="mt-1 text-sm text-[#084B8A]">{topic}</p>}
        </div>

        <div className="absolute right-0 top-4">
          <ChevronDown
            className={`h-5 w-5 text-[#2C3540] transition-transform duration-300 ${
              isActive ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* Answer Container */}
      {/* When accordion is active, add a top border. When it's not active, delay the disappearance of the top border */}
      <div className={`${borderTransitionStyle}`}>
        <div
          className={`overflow-hidden transition-all duration-500 ${heightStyle}`}
        >
          <div
            className={`px-5 py-4 font-normal leading-relaxed text-[#2C3540] ${className}`}
          >
            <div className="space-y-4">
              {answer.map(({ type, content }, i) => {
                if (type === 'paragraph') {
                  return (
                    <AccordionItemParagraph
                      content={content}
                      lang={lang}
                      isList={false}
                      key={i}
                    />
                  );
                } else if (type === 'list') {
                  return (
                    <AccordionItemParagraph
                      content={content}
                      lang={lang}
                      isList={true}
                      key={i}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
