import { ColorProps, TextSizeProps } from '../themes';

const ActionBanner = ({
  title,
  text,
  buttonText,
  page,
}: {
  title: string;
  text: string;
  buttonText?: string;
  page?: string;
}) => {
  return (
    <section className={`${ColorProps.bgBlueGlow} border-2 border-y-[#bcc7d4]`}>
      <div
        className={`relative mx-auto flex max-w-6xl flex-col items-center px-6 py-16 md:flex-row md:py-20`}
      >
        <div>
          <h2
            className={`pb-6 text-center md:text-left ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}
          >
            {title}
          </h2>
          <p
            className={`text-center md:text-left ${TextSizeProps.p} ${ColorProps.textGray}`}
          >
            {text}
          </p>
        </div>
        {buttonText && (
          <a
            href={page}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-10 inline-block whitespace-nowrap rounded-full px-6 py-3 text-white md:ml-8 md:mt-0 ${TextSizeProps.p} ${ColorProps.bgGradientReverse}`}
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default ActionBanner;
