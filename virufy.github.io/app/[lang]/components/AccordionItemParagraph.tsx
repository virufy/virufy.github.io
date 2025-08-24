import { type TypeText } from '@/app/i18n/types/baseInterfaces';
import { type Locale } from '@/i18n-config';
import Link from 'next/link';
import { Fragment } from 'react';

const AccordionItemParagraph = ({
  content,
  isList,
  lang,
}: {
  content: TypeText[];
  isList: boolean;
  lang: Locale;
}) => {
  // if content is a list item, add bullet point in front of element
  const paragraphStyle = isList
    ? `relative pl-4 before:absolute before:left-0 before:top-0 before:content-['•']`
    : '';

  return (
    <p className={paragraphStyle}>
      {content.map(({ type, text, href }, i) => {
        switch (type) {
          case 'relative-link':
            return (
              <Link
                key={i}
                href={`/${lang}${href}`}
                className="underline hover:text-blue-600"
              >
                {text}
              </Link>
            );
          case 'link':
            return (
              <Link
                key={i}
                href={href as string}
                className="underline hover:text-blue-600"
              >
                {text}
              </Link>
            );
          case 'bold':
            return (
              <span key={i} className="font-bold">
                {text}
              </span>
            );
          default:
            return <Fragment key={i}>{text}</Fragment>;
        }
      })}
    </p>
  );
};

export default AccordionItemParagraph;
