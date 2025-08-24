import Text from './Text';
import Title from './Title';

export default function TitleText({
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel,
  ContainerTitleProps,
  ContainerTextProps,
  TitleClassProps,
  TextClassProps,
}) {
  return (
    <>
      <div className={ContainerTitleProps}>
        <Title
          H={TitleSize}
          Text={TitleLabel}
          TitleClassProps={TitleClassProps}
        />
      </div>
      <div className={ContainerTextProps}>
        <Text
          Style={TextSize}
          Text={TextLabel}
          TextClassProps={TextClassProps}
        />
      </div>
    </>
  );
}
