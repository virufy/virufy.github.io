import type { QA } from '@/app/i18n/types/faq';
import { type Locale } from '@/i18n-config';
import { useState } from 'react';
import ArrowIcon from '../faq/ArrowIcon';
import AccordionItemParagraph from './AccordionItemParagraph';

interface AccordionItemProps extends QA {
  lang: Locale;
}

const AccordionItem = ({ question, answer, lang }: AccordionItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const borderTransitionStyle = isActive
    ? 'border-t border-gray-400'
    : 'border-transparent transition-all delay-500';

  // height transitions only work if height is set from one numeric value to another.
  // therefore, set max active height to be the tallest element the AccordionItem
  // needs to support, which in this case is the Cookie Policy -> General dropdown.
  const heightStyle = isActive ? 'max-h-[2600px]' : 'max-h-0';

  return (
    <div className="border-b border-gray-400 text-white last:border-b-0">
      {/* Question Container */}
      <div
        className="flex cursor-pointer items-center justify-between px-5 py-4"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="pr-6 font-semibold">{question}</h3>
        <ArrowIcon isActive={isActive} />
      </div>

      {/* Answer Container */}
      {/* When accordion is active, add a top border. When it's not active, delay the disappearance of the top border */}
      <div className={`${borderTransitionStyle}`}>
        <div
          className={`overflow-hidden transition-all duration-500 ${heightStyle}`}
        >
          <div className="px-5 py-4 font-normal leading-relaxed text-stone-300">
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
