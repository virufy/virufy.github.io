import { ColorProps, TextSizeProps } from '../themes';

const ActionBanner = ({
  title,
  text,
  buttonText,
  page,
  onButtonClick,
  leftAligned = false,
}: {
  title: string;
  text: string;
  buttonText?: string;
  page?: string;
  onButtonClick?: () => void;
  leftAligned?: boolean;
}) => {
  return (
    <section className={`${ColorProps.bgBlueGlow} border-2 border-y-[#bcc7d4]`}>
      <div
        className={`relative mx-auto flex max-w-6xl flex-col px-6 ${leftAligned ? 'py-12' : 'py-16'} md:flex-row md:items-center md:py-20 ${leftAligned ? 'items-start' : 'items-center'}`}
      >
        <div className={leftAligned ? 'w-full md:flex-1' : ''}>
          <h2
            className={`pb-6 ${leftAligned ? 'text-left' : 'text-center'} md:text-left ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}
          >
            {title}
          </h2>
          <p
            className={`${leftAligned ? 'text-left' : 'text-center'} md:text-left ${TextSizeProps.p} ${ColorProps.textGray}`}
          >
            {text}
          </p>
        </div>
        {buttonText &&
          (onButtonClick ? (
            <button
              type="button"
              onClick={onButtonClick}
              className={`${leftAligned ? 'mt-8' : 'mt-10'} inline-block whitespace-nowrap rounded-full px-6 py-3 text-center text-white md:ml-8 md:mt-0 ${leftAligned ? 'w-full md:w-auto' : ''} ${TextSizeProps.p} ${ColorProps.bgGradientReverse}`}
            >
              {buttonText}
            </button>
          ) : (
            <a
              href={page}
              className={`${leftAligned ? 'mt-8' : 'mt-10'} inline-block whitespace-nowrap rounded-full px-6 py-3 text-center text-white md:ml-8 md:mt-0 ${leftAligned ? 'w-full md:w-auto' : ''} ${TextSizeProps.p} ${ColorProps.bgGradientReverse}`}
            >
              {buttonText}
            </a>
          ))}
      </div>
    </section>
  );
};

export default ActionBanner;
