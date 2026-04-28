import Text from '../../Text';

export default function SevenNonProfitDisclaimers({ nonProfitSection }) {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-4 px-4 md:px-8">
      <div className="max-w-4xl text-center">
        <Text
          Text={nonProfitSection.title}
          Style="bold"
          TextClassProps="text-[20px] font-bold leading-[30px]"
        />
      </div>

      <div className="max-w-4xl text-center">
        <Text
          Text={nonProfitSection.textOne}
          Style=""
          TextClassProps="text-[16px] leading-[24px] tracking-[0.5%]"
        />
      </div>

      <div className="max-w-4xl text-center">
        <Text
          Text={nonProfitSection.textTwo}
          Style=""
          TextClassProps="text-[20px] leading-[30px] tracking-normal"
        />
      </div>
    </div>
  );
}
