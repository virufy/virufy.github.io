import AccordionItem from '../AccordionItem';
import Title from '../Title';

export default function SellMyInformationModal({
  lang,
  personalInfo,
  setShowModalMyInformation,
}) {
  return (
    <div
      className="fixed inset-0 z-[111] flex items-center justify-center bg-black bg-opacity-60"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowModalMyInformation(false);
        }
      }}
    >
      <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
        <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
          <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
            <Title
              H="h5Modals"
              Text={personalInfo.title}
              TitleClassProps={
                'mt-[80px] text-center md:mt-[30px] md:mx-auto mb-[30px]'
              }
            />
            <div className="absolute flex w-full flex-col items-end p-6 md:p-1 lg:p-6">
              <button
                className="flex h-[35px] w-[35px] justify-center px-1 py-2 text-white outline-none transition-all duration-150 ease-linear"
                type="button"
                onClick={() => setShowModalMyInformation(false)}
              >
                X
              </button>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="w-full px-0">
              {personalInfo.body.map((detail, index) => (
                <AccordionItem {...detail} lang={lang} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

