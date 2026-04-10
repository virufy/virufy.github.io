import { ColorProps, TextSizeProps } from '../themes';

type SevenSectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SevenSectionHeader = ({
  title,
  subtitle,
  className = '',
}: SevenSectionHeaderProps) => {
  return (
    <div className={className}>
      <h2
        className={`text-center md:text-left ${TextSizeProps.h2} ${ColorProps.textGreenDark}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`my-10 text-center md:text-left ${TextSizeProps.p} ${ColorProps.textGray}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SevenSectionHeader;
