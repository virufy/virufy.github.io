import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usei18n } from '../../i18n';
import Modal from './Modal';

interface Prop {
  isOpen: boolean;
  handleClose: () => void;
  lang: Locale;
}

const ShareYourCoughModal = ({ isOpen, handleClose, lang }: Prop) => {
  const { shareYourCough: ShareYourCough } = usei18n(lang);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {/* Modal Container */}
      <div className="py-16 text-center font-medium">
        {/* Image Container */}
        <div className="flex items-center justify-center">
          <ExportedImage
            src={ShareYourCough.image}
            alt="Virufy logo"
            width={140}
            height={50}
            basePath={basePath}
          />
        </div>

        {/* Text */}
        <div className="my-10 text-sm text-white">{ShareYourCough.text}</div>
        <h1 className="mb-16 text-2xl text-green-500">
          {ShareYourCough.title}
        </h1>

        {/* Link Container */}
        <div>
          <Link
            href={ShareYourCough.linkUrl}
            target="_blank"
            className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 py-4 px-12 text-xl text-white"
          >
            {ShareYourCough.linkText}
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ShareYourCoughModal;
