'use client';

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
  const handleDonationClick = (
    platform: 'PayPal' | 'GoFundMe',
    url: string
  ) => {
    // Track the button click event with Google Analytics
    window.gtag?.('event', 'donation_button_click', {
      button_name: platform,
    });
    //console.log('gtag exists?', !!window.gtag);
    //console.log(`✅ Tracked donation button: ${platform}`);

    // Delay navigation slightly to ensure the event is sent
    setTimeout(() => {
      window.open(url, '_blank');
    }, 200); // 200ms delay
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
        onClick={close}
      >
        <div
          className="relative mx-auto h-[500px] w-[300px] md:w-[500px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex w-full flex-col rounded-2xl border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/* Background image and close button */}
            <div className="flex w-full rounded-t">
              <ExportedImage
                className="w-full"
                src={DonateHero}
                basePath={basePath}
                alt="Help us fight against respiratory diseases. We need your contribution in order to continue helping millions of people in the fight against respiratory diseases."
              />
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

            {/* Body with donation buttons */}
            <div className="relative flex flex-col items-center rounded-b-2xl bg-gradient-to-b from-[#273F6A] to-[#4167AD] p-6">
              <p className="mb-6 mt-2 text-center text-lg leading-relaxed text-gray-200">
                {title}
              </p>

              {/* PayPal Button */}
              <button
                className="mb-3 mr-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.9rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                type="button"
                onClick={() =>
                  handleDonationClick(
                    'PayPal',
                    'https://www.paypal.com/us/fundraiser/charity/4348461'
                  )
                }
              >
                <ExportedImage
                  className="h-[27px] w-[110px]"
                  src={PaypalIcon}
                  alt="Paypal icon"
                  basePath={basePath}
                />
              </button>

              {/* GoFundMe Button */}
              <button
                className="mb-1 mr-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.8rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                type="button"
                onClick={() =>
                  handleDonationClick(
                    'GoFundMe',
                    'https://www.gofundme.com/f/donate-virufy'
                  )
                }
              >
                <ExportedImage
                  className="h-[30px] w-[103px]"
                  src={GoFundMeIcon}
                  alt="Gofundme icon"
                  basePath={basePath}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
