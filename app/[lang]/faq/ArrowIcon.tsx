import { basePath } from '@/next.config.mjs';
import ArrowDownIcon from '@/public/icons/icon-arrow-down.png';
import ArrowDownIconWhite from '@/public/icons/icon-arrow-down-white.png';
import ExportedImage from 'next-image-export-optimizer';

const ArrowIcon = ({ isActive, isNavbar, isWhite, isFaq=false }: { isActive: boolean; isNavbar?: boolean; isWhite?: boolean; isFaq?: boolean; }) => {
  const altText = isActive ? 'arrow up icon' : 'arrow down icon';
  const rotateStyle = isActive ? 'rotate-180' : 'rotate-0';
  const src = (isNavbar || isWhite) ? ArrowDownIconWhite : ArrowDownIcon;

  // FAQ webpage logic: white on small screens, black on md+
  if (isFaq) {
    return (
      <>
        {/* Black arrow on md+ */}
        <ExportedImage
          className={`hidden md:block ${rotateStyle} mx-2 h-5 w-5 object-cover transition duration-500 ease-in-out`}
          src={ArrowDownIcon}
          alt={altText}
          basePath={basePath}
        />
        {/* White arrow on small screens */}
        <ExportedImage
          className={`block md:hidden ${rotateStyle} mx-2 h-5 w-5 object-cover transition duration-500 ease-in-out`}
          src={ArrowDownIconWhite}
          alt={altText}
          basePath={basePath}
        />
      </>
    );
  }

  return (
    <ExportedImage
      className={`${rotateStyle} mx-2 h-5 w-5 object-cover transition duration-500 ease-in-out`}
      src={src}
      alt={altText}
      basePath={basePath}
      //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Catalin Fertu - Flaticon</a>
    />
  );
};

export default ArrowIcon;