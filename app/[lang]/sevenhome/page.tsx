import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ExportedImage from 'next-image-export-optimizer';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
);

const Card: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="border-y border-sky-200 bg-white p-6 first:border-b-0 last:border-t-0">
    <h3 className="mb-2 text-2xl font-bold text-gray-800">{title}</h3>
    <p className="space-y-6 text-lg text-gray-600 md:text-xl lg:max-w-2xl">
      {text}
    </p>
  </div>
);

const SevenHomepage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    sevenhomepage: { introSection, section2, section3, section4, section5 },
  } = usei18n(lang);

  return (
    <main className="bg-gradient-to-b from-slate-100 to-white pt-6 text-gray-800">
      {/* HERO */}
      <div className="absolute inset-0 flex">
        <ExportedImage
          src="/images/sevenhome/HeroBG.png"
          alt="Your health background"
          fill
          priority
          className=""
        />
      </div>
      <section className="relative overflow-hidden py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mb-6 w-full text-5xl font-bold text-sky-700 md:text-6xl">
                {introSection.title}
              </h1>
              <h2 className="mb-6 w-full text-4xl font-bold text-sky-700 md:text-5xl">
                {introSection.subtitle}
              </h2>
              <p className="space-y-6 pb-6 text-lg text-gray-600 md:text-xl lg:max-w-2xl">
                {introSection.text}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-teal-700">
                  {introSection.missionbutton}
                </button>
                <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold shadow-sm transition hover:bg-gray-100">
                  {introSection.supportbutton}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ExportedImage
                src="/images/sevenhome/HeroPhone.png"
                alt="Your health background"
                height={575}
                width={575}
                priority
                className=""
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white to-[#dbeef3]">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-end">
          <ExportedImage
            src="/images/sevenhome/OurMissionBG.png"
            alt="Our mission background"
            fill
            priority
            className="-mt-1 object-contain object-center opacity-70 bg-blend-normal"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-8 py-20">
          <div className="">
            <h2 className="mb-6 w-full text-4xl font-bold text-sky-700 md:text-5xl">
              {section2.title}
            </h2>

            <h3 className="mb-8 text-xl font-semibold text-gray-600 md:text-3xl lg:max-w-5xl">
              {section2.subtitle}
            </h3>

            <div className="space-y-6 text-lg text-gray-600 md:text-xl lg:max-w-2xl">
              {section2.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <div className="relative w-full items-center overflow-hidden p-20">
        <div className="absolute inset-0 flex">
          <ExportedImage
            src="/images/sevenhome/YourHealthBG.png"
            alt="Your health background"
            fill
            priority
            className=""
          />
        </div>
        <section className="relative z-10 mx-auto w-full max-w-7xl rounded-3xl border border-sky-200 bg-white py-20">
          <Container>
            <div className="items-center">
              <h2 className="mb-3 text-3xl font-bold text-sky-700">
                {section3.title}
              </h2>
              <p className="mb-8 text-xl font-semibold text-gray-600 md:text-3xl lg:max-w-5xl">
                {section3.subtitle}
              </p>
            </div>
            <div className="flex">
              <div className="mt-12 grid w-[60%] gap-6">
                {section3.cardtitle.map((t, i) => (
                  <Card key={i} title={t} text={section3.cardtext[i]} />
                ))}
              </div>
              <div className="ml-10 flex w-[40%] items-center justify-center pl-10">
                <ExportedImage
                  src="/images/sevenhome/HealthPhone.png"
                  alt="Our mission background"
                  height={520}
                  width={250}
                  className=""
                />
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* SECTION 4 */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 w-full text-4xl font-bold text-sky-700 md:text-5xl">
              {section4.title}
            </h2>
            <p className="text-gray-600">{section4.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {section4.cardtitle.map((t, i) => (
              <Card key={i} title={t} text={section4.cardtext[i]} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 py-20 text-center">
        <Container>
          <h2 className="mb-4 text-3xl font-bold text-sky-700">
            {section5.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            {section5.text}
          </p>
          <button className="rounded-full bg-sky-700 px-8 py-3 font-semibold text-white shadow transition hover:bg-sky-800">
            {section5.button}
          </button>
        </Container>
      </section>
    </main>
  );
};

export default SevenHomepage;
