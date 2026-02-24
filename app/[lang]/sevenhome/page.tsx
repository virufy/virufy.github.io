'use client';
import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';
import ExportedImage from 'next-image-export-optimizer';
import { useState, useRef } from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto w-full md:max-w-7xl md:px-20">{children}</div>
);

type CardProps = {
  title: string;
  text: string;
  icon?: string; // optional
};

const Card: React.FC<CardProps> = ({ title, text, icon }) => (
  <div className="flex w-full items-start gap-4 border-t-4 border-blue-300 bg-white px-6 py-4 last:border-b-4">
    {icon && (
      <ExportedImage
        src={icon}
        alt=""
        width={72}
        height={72}
        className="mb-2 mr-6 mt-2 hidden flex-shrink-0 items-center md:flex"
      />
    )}

    <div>
      <h3 className="mb-2 mt-2 w-full text-2xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="w-full space-y-7 text-lg text-gray-600 md:text-xl">
        {text}
      </p>
    </div>
  </div>
);

const SevenHomepage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    sevenhomepage: { introSection, section2, section3, section4, section5 },
  } = usei18n(lang);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#dbeef3] text-gray-800">
      {/* HERO */}
      <div className="relative w-full items-center overflow-hidden px-5 md:px-20">
        <div className="absolute inset-0 flex">
          <ExportedImage
            src="/images/sevenhome/HeroBG.png"
            alt="Your health background"
            fill
            className="object-contain object-cover object-center"
          />
        </div>
        <section className="relative my-24 overflow-hidden py-24">
          <Container>
            <div className="mx-auto items-center gap-12 text-center md:grid md:grid-cols-2 md:text-left">
              <div className="space-y-6">
                <h1 className="mb-6 w-full bg-gradient-to-b from-blue-500 to-emerald-500 bg-clip-text text-2xl font-bold text-sky-700 text-transparent md:text-5xl">
                  {introSection.title}
                </h1>
                <h2 className="mb-6 w-full text-xl font-bold text-gray-700 md:text-3xl">
                  {introSection.subtitle}
                </h2>
                <p className="space-y-6 pb-6 text-lg text-gray-600 md:text-xl lg:max-w-2xl">
                  {introSection.text}
                </p>
                <div className="flex items-center justify-center gap-4 md:flex-wrap md:justify-start">
                  <button className="rounded-full bg-gradient-to-b from-blue-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow transition hover:from-blue-600 hover:to-emerald-600 md:text-lg">
                    {introSection.missionbutton}
                  </button>
                  <button className="rounded-full border border-blue-500 bg-white px-8 py-4 font-semibold shadow-sm transition hover:bg-gray-100 md:text-lg">
                    {introSection.supportbutton}
                  </button>
                </div>
              </div>
              <div className="relative ml-10 mt-12 flex hidden h-full w-full items-center justify-center md:mt-0 md:block">
                <ExportedImage
                  src="/images/sevenhome/PhoneHero.png"
                  alt="Phone showing app"
                  fill
                  className="object-contain object-center md:scale-[150%]"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* SECTION 2 */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white to-[#dbeef3]">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-end overflow-hidden">
          <ExportedImage
            src="/images/sevenhome/OurMissionBG.png"
            alt="Our mission background"
            fill
            priority
            className="-mt-1 scale-90 overflow-hidden object-cover object-[90%_90%] opacity-90 bg-blend-normal md:translate-x-0 md:scale-100 md:object-contain md:object-center"
          />
        </div>

        {/* Text Content */}
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl py-20">
          <div className="flex-1 px-5 text-center md:px-20 md:text-left">
            <h2 className="mb-6 w-full text-4xl font-semibold text-emerald-800 md:text-4xl">
              {section2.title}
            </h2>

            <h3 className="mb-8 text-xl font-semibold text-gray-700 md:text-2xl lg:max-w-5xl">
              {section2.subtitle}
            </h3>

            <div
              className={`space-y-6 text-lg text-gray-600 md:max-h-full md:text-xl lg:max-w-2xl ${open ? 'max-h-full' : 'max-h-40'} overflow-hidden transition-all duration-300`}
              ref={ref}
            >
              {section2.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="mt-3 flex items-center gap-1 text-sm font-semibold text-emerald-700 md:hidden"
            >
              {open ? 'See Less ▲' : 'Read More ▼'}
            </button>
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
            <div className="items-center md:text-left">
              <h2 className="mb-3 text-3xl font-bold text-emerald-800 md:mb-6 md:text-4xl">
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
                  alt="Phone showing health app"
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
      <div className="relative w-full items-center overflow-hidden p-20">
        <div className="absolute inset-0 flex">
          <ExportedImage
            src="/images/sevenhome/MapBG.png"
            alt="Map background"
            fill
            priority
            className=""
          />
        </div>
        <section className="relative z-10 mx-auto w-full max-w-7xl rounded-3xl border border-sky-200 bg-white py-20">
          <Container>
            <div className="w-full md:text-left">
              <h2 className="mb-3 text-3xl font-bold text-emerald-800 md:mb-6 md:text-4xl">
                {section4.title}
              </h2>
              <p className="mb-8 text-xl font-semibold text-gray-600 md:text-3xl lg:max-w-5xl">
                {section4.subtitle}
              </p>
            </div>
            <div className="mt-12 grid gap-8">
              {section4.cardtitle.map((t, i) => (
                <Card
                  key={i}
                  icon={section4.icons[i]}
                  title={t}
                  text={section4.cardtext[i]}
                />
              ))}
            </div>
          </Container>
        </section>
      </div>

      {/* CTA */}
      <div className="w-full border border-y-2 border-sky-200">
        <section className="border-y-1 relative z-10 mx-auto w-full max-w-7xl border-sky-200 py-24">
          <Container>
            {/* Title */}
            <h2 className="mb-6 text-3xl font-semibold text-emerald-800 md:text-4xl">
              {section5.title}
            </h2>

            {/* Text + Button on same line */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              {/* Text */}
              <p className="flex-1 text-lg text-gray-600 md:text-xl">
                {section5.text}
              </p>

              {/* Button */}
              <div className="mt-4 md:mt-0">
                <button className="rounded-full bg-gradient-to-b from-blue-500 to-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow transition hover:from-blue-600 hover:to-emerald-600">
                  {section5.button}
                </button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default SevenHomepage;
