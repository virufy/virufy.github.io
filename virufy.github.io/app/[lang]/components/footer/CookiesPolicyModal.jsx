import Title from '../Title';
import AccordionItem from '../AccordionItem';

export default function CookiesPolicyModal({lang, cookiePolicy, setShowModalCookiesPolicy}) {
    return (
        <>
            <div className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
                    <Title
                      H="h5Modals"
                      Text={cookiePolicy.title}
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center px-1 py-2 text-white outline-none transition-all duration-150 ease-linear"
                        type="button"
                        onClick={() => setShowModalCookiesPolicy(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}

                  <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0">
                      {cookiePolicy.body.map((detail, index) => (
                        <AccordionItem {...detail} lang={lang} key={index} />
                      ))}
                    </div>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>

            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
    )
}