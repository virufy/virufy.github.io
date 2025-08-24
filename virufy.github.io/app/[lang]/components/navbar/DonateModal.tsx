import { basePath } from '@/next.config.mjs';
import {
  DonateHero,
  GoFundMeIcon,
  PaypalIcon,
} from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';

export default function DonateModal({
  close,
  title,
}: {
  close: () => void;
  title: string;
}) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px]">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-2xl border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}

            {/* Background img */}
            <div className="flex w-full rounded-t">
              <ExportedImage
                className="w-full"
                src={DonateHero}
                basePath={basePath}
                alt="Help us fight against respiratory diseases. We need your contribution in order to continue helping millions of people in the fight against respiratory diseases."
              />
              {/* Close button */}
              <div className="absolute flex w-full flex-col items-end pr-5 pt-3">
                <button
                  className="flex justify-center rounded-full text-xl font-medium text-white shadow-xl outline-none transition-all duration-150 ease-linear"
                  type="button"
                  onClick={close}
                >
                  X
                </button>
              </div>
            </div>
            {/*body*/}
            <div className="relative flex flex-col items-center rounded-b-2xl bg-gradient-to-b from-[#273F6A] to-[#4167AD] p-6">
              <p className="mb-6 mt-2 text-lg leading-relaxed">
                <span className="color-black text-center text-gray-200">
                  {title}
                </span>
              </p>
              <a
                href="https://www.paypal.com/us/fundraiser/charity/4348461"
                target="_blank"
              >
                {/* paypal button */}
                <button
                  className="mb-3 mr-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.9rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                  type="button"
                >
                  <ExportedImage
                    className="h-[27px] w-[110px]"
                    src={PaypalIcon}
                    alt="Paypal icon"
                    basePath={basePath}
                  />
                </button>
              </a>
              <a
                href="https://www.gofundme.com/f/donate-virufy"
                target="_blank"
              >
                {/* gofundme button */}
                <button
                  className="mb-1 mr-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.8rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                  type="button"
                >
                  <ExportedImage
                    className="h-[30px] w-[103px]"
                    src={GoFundMeIcon}
                    alt="Gofundme icon"
                    basePath={basePath}
                  />
                </button>
              </a>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
