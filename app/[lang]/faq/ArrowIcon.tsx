import { basePath } from '@/next.config.mjs';
import ArrowDownIcon from '@/public/icons/icon-arrow-down.png';
import ExportedImage from 'next-image-export-optimizer';

const ArrowIcon = ({ isActive }: { isActive: boolean }) => {
  const altText = isActive ? 'arrow up icon' : 'arrow down icon';
  const rotateStyle = isActive ? 'rotate-180' : 'rotate-0';

  return (
    <ExportedImage
      className={`${rotateStyle} mx-2 h-5 w-5 object-cover pt-1 transition duration-500 ease-in-out`}
      src={ArrowDownIcon}
      alt={altText}
      basePath={basePath}
      //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Catalin Fertu - Flaticon</a>
    />
  );
};

export default ArrowIcon;
