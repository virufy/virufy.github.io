import Text from '../Text';
import { basePath } from '@/next.config.mjs';
import { CandidSeal } from '@/public/images/footer/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
export default function NonProfitDisclaimers({nonProfitSection}) {
    return (
        <>
        <div className="flex justify-center mt-4">
          <Link
            target="_blank"
            href="https://www.guidestar.org/profile/shared/f0cf98a8-3b5a-495f-86c0-d2d58564086c"
            className="block"
          >
          <ExportedImage
            src={CandidSeal}
            alt="GuideStar Profile"
            className="mx-auto"
            basePath={basePath}
            width={100}  
            height={100}
          />
          </Link>
        </div>
        <div className="align-center mt-10 flex w-full flex-col gap-7 text-white lg:hidden">
            <div className="align-center m-auto max-w-4xl text-center text-[25px]">
              <Text Text={nonProfitSection.title} Style="" TextClassProps="" />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textOne}
                Style="normal"
              />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textTwo}
                Style="normal"
              />
            </div>
          </div>
          <div className="align-center mt-10 hidden w-full flex-col gap-7 text-white lg:flex">
            <div className="align-center m-auto max-w-4xl text-center font-semibold">
              <Text
                Text={nonProfitSection.title}
                Style="small"
                TextClassProps=""
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textOne}
                Style="normalCardHome"
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textTwo}
                Style="normalCardHome"
              />
            </div>
          </div>
        </>

    )
}