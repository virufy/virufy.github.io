'use client';
import { type Locale } from '@/i18n-config';
import { usei18n } from '../i18n';
import ExportedImage from 'next-image-export-optimizer';
import { useState, useRef } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  transparent?: boolean; // optional prop
}

const Container: React.FC<ContainerProps> = ({
  children,
  transparent = false,
}) => (
  <div
    className={`mx-auto w-full px-2 md:max-w-7xl md:px-10 lg:px-20 ${transparent ? 'bg-transparent' : 'bg-white'} `}
  >
    {children}
  </div>
);
const titlestyle =
  'mb-6 w-full text-4xl font-semibold text-[#1B6E64] md:text-4xl';
const subtitlestyle = 'mb-6 w-full text-xl font-bold text-gray-700 md:text-3xl';
const textstyle =
  'space-y-6 pb-6 text-lg text-gray-600 md:text-2xl lg:max-w-2xl';
interface CardProps {
  title: string;
  text: string;
  icon?: string;
  first?: boolean;
  last?: boolean;
}

const Card: React.FC<CardProps> = ({ title, text, icon, first, last }) => (
  <div
    className={`flex w-full flex-row items-center gap-4 rounded rounded-xl border border-2 border-blue-300 bg-white p-4 shadow-sm md:rounded-none md:border-0 md:shadow-none ${first ? 'md:border-t-4 md:border-blue-300' : ''} ${last ? 'md:border-b-4 md:border-blue-300' : 'md:border-b-4 md:border-blue-300'} md:gap-6 md:px-6 md:py-4`}
  >
    {/* Icon */}
    {icon && (
      <div className="flex flex-shrink-0 items-center justify-center">
        <ExportedImage src={icon} alt="" width={72} height={72} />
      </div>
    )}

    {/* Text */}
    <div className="flex-1">
      <h3 className="mb-2 text-sm font-semibold text-gray-800 md:text-2xl">
        {title}
      </h3>
      <p className={textstyle}>{text}</p>
    </div>
  </div>
);

const SevenHomepage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    home: { introSection, section2, section3, section4, section5 },
  } = usei18n(lang);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main className="">
      {/* HERO */}
      <div className="relative w-full items-center overflow-hidden lg:px-20 lg:px-5">
        <div className="absolute inset-0 flex">
          <ExportedImage
            src="/images/sevenhome/HeroBG.png"
            alt="Your health background"
            fill
            className="object-contain object-cover object-center"
          />
        </div>
        <section className="relative my-24 overflow-hidden py-24">
          <Container transparent>
            <div className="mx-auto items-center gap-12 text-center md:grid md:grid-cols-2 md:text-left">
              <div className="space-y-6">
                <h1 className="mb-6 w-full bg-gradient-to-b from-blue-500 to-emerald-500 bg-clip-text text-2xl font-bold text-sky-700 text-transparent md:text-5xl">
                  {introSection.title}
                </h1>
                <h2 className={subtitlestyle}>{introSection.subtitle}</h2>
                <p className="space-y-6 pb-6 text-lg text-gray-600 md:text-xl lg:max-w-2xl">
                  {introSection.text}
                </p>
                <div className="flex items-center justify-center gap-4 md:flex-wrap md:justify-start">
                  <button className="rounded-full bg-gradient-to-b from-blue-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow transition hover:from-blue-600 hover:to-emerald-600 md:text-lg">
                    {introSection.missionbutton}
                  </button>
                  <button className="rounded-full border border-blue-500 bg-white px-8 py-4 font-semibold text-blue-500 shadow-sm transition hover:bg-gray-100 md:text-lg">
                    {introSection.supportbutton}
                  </button>
                </div>
              </div>
              <div className="relative mt-12 flex hidden h-full w-full items-center justify-center md:mt-0 md:block lg:ml-10">
                <ExportedImage
                  src="/images/sevenhome/PhoneHero.png"
                  alt="Phone showing app"
                  fill
                  className="object-contain object-center md:scale-[100%] lg:scale-[150%]"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* SECTION 2 */}
      <section className="border-gray relative w-full overflow-hidden border-2 border-y bg-gradient-to-br from-white to-[#dbeef3]">
        {/* Text Content */}
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl py-20">
          <div className="flex-1 items-center px-5 text-center md:px-20 md:text-left">
            <h2 className="mb-6 w-full text-4xl font-semibold text-[#1B6E64] md:text-4xl">
              {section2.title}
            </h2>

            <h3 className="mb-8 text-xl font-semibold text-gray-700 md:max-w-5xl md:text-3xl">
              {section2.subtitle}
            </h3>
            <div className="flex h-64 justify-center py-10 md:mb-6 md:hidden">
              <ExportedImage
                src="/images/sevenhome/Heart_Image.png"
                alt="Hands holding heart"
                width={600}
                height={600}
                className="scale-150 object-contain object-center md:hidden"
              />
            </div>
            <div
              className={`z-10 space-y-6 text-lg text-gray-600 md:max-h-full lg:max-w-2xl lg:text-xl ${open ? 'max-h-full' : 'max-h-40'} duration-400 overflow-hidden transition-all`}
              ref={ref}
            >
              {section2.text.map((p: string, i: number) => (
                <p key={i} className={`${textstyle} lg:max-w-xl`}>
                  {p}
                </p>
              ))}
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full border border-blue-500 bg-white px-8 py-4 text-sm font-semibold text-blue-500 shadow-sm transition hover:bg-gray-100 md:hidden"
            >
              {open ? 'See Less ▲' : 'Read More ▼'}
            </button>
          </div>
        </div>
        {/* Background Image */}

        <div
          className={`z-0 -my-9 hidden overflow-hidden md:relative md:mx-auto md:block lg:absolute lg:bottom-0 lg:right-0 lg:mt-12 lg:translate-x-20`}
          style={{
            width: 'clamp(0px, 70vw, 1100px)',
          }}
        >
          <ExportedImage
            src="/images/sevenhome/Heart_image.png"
            alt="Our mission background"
            width={1100}
            height={750}
            className="object-contain"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>

      {/* SECTION 3 */}
      <div className="relative w-full items-center overflow-hidden p-4 md:p-10 md:p-20">
        <div className="absolute inset-0 flex">
          <ExportedImage
            src="/images/sevenhome/YourHealthBG.png"
            alt="Your health background"
            fill
            priority
            className="object-contain object-cover object-center"
          />
        </div>
        <section className="relative z-10 mx-auto w-full max-w-7xl rounded-3xl border border-sky-200 bg-white py-20 text-left">
          <Container>
            <div className="items-center p-2 md:text-left">
              <h2 className={titlestyle}>{section3.title}</h2>
              <p className={`${textstyle} font-normal lg:max-w-4xl`}>
                {section3.subtitle}
              </p>
            </div>
            <div className="mb-1 flex justify-center lg:hidden">
              <ExportedImage
                src="/images/sevenhome/HealthPhone.png"
                alt="Phone showing health app"
                height={150}
                width={150}
                className="object-contain object-center"
              />
            </div>
            <div className="flex">
              <div className="mt-6 grid gap-6 md:mt-12 lg:w-[60%]">
                {section3.cardtitle.map((t, i) => (
                  <Card
                    key={i}
                    title={t}
                    text={section3.cardtext[i]}
                    first={i === 0}
                    last={i === section3.cardtitle.length - 1}
                  />
                ))}
                <p className="mt-4 text-sm text-gray-500">
                  {section3.disclaimer}
                </p>
              </div>

              <div className="ml-10 flex hidden items-center justify-center pl-10 md:mt-12 md:w-[30%] lg:block lg:w-[40%]">
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
      <div className="relative w-full items-center overflow-hidden p-4 md:p-20">
        <div className="absolute inset-0 flex">
          <ExportedImage
            src="/images/sevenhome/MapBG.png"
            alt="Map background"
            fill
            priority
            className="object-contain object-cover object-center"
          />
        </div>
        <section className="relative z-10 mx-auto w-full max-w-7xl py-20 md:rounded-3xl md:border md:border-sky-200 md:bg-white">
          <Container transparent>
            <div className="w-full md:text-left">
              <h2 className={titlestyle}>{section4.title}</h2>
              <p className={`${subtitlestyle} font-normal`}>
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
                  first={i === 0}
                  last={i === section4.cardtitle.length - 1}
                />
              ))}
            </div>
          </Container>
        </section>
      </div>

      {/* CTA */}
      <div className="w-full border border-y-2 border-sky-200 text-center md:text-left">
        <section className="border-y-1 relative z-10 mx-auto w-full max-w-7xl border-sky-200 py-24">
          <Container transparent>
            {/* Title */}
            <h2 className="mb-6 font-semibold text-emerald-800 md:text-3xl md:text-4xl">
              {section5.title}
            </h2>

            {/* Text + Button on same line */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              {/* Text */}
              <p className="flex-1 text-gray-600 md:text-lg md:text-xl">
                {section5.text}
              </p>

              {/* Button */}
              <div className="mt-4 md:mt-0">
                <button className="rounded-full bg-gradient-to-b from-blue-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow transition hover:from-blue-600 hover:to-emerald-600 md:text-lg">
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
