'use client';

import Link from 'next/link';

export default function FounderPage() {
  return (
    <section className="px-4 md:px-12">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full md:h-[500px]">
        <img
          src="/images/team/background-OurPeople.png"
          alt="Founder background"
          className="h-full w-full rounded-xl object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-center text-3xl text-white md:text-4xl">
          We unite through innovation.
        </div>
      </div>

      {/* Founder Story */}
      <div className="mx-auto mt-16 max-w-5xl space-y-10 text-black">
        <h1 className="text-center text-3xl font-bold">Our Founder: Amil</h1>

        <div className="grid items-start gap-8 md:grid-cols-3">
          <div>
            <img
              src="/images/team/amil.png"
              alt="Amil"
              className="w-full rounded-2xl object-contain"
            />
          </div>
          <div className="space-y-4 md:col-span-2">
            <p>Amil&apos;s journey began with a mission.</p>
            <p>He believed in the power of people and tech.</p>
            <p>His story continues to inspire.</p>
          </div>
        </div>

        <p>Driven by a global vision for health equity.</p>

        <div className="grid items-start gap-8 md:grid-cols-3">
          <div>
            <img
              src="/images/team/AmilFirstImg.png"
              alt="Amil First"
              className="w-full rounded-2xl object-contain"
            />
          </div>
          <div className="md:col-span-2">
            <p>His experiences shaped the direction of Virufy.</p>
          </div>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-3">
          <div>
            <img
              src="/images/team/AmilSecondImg.png"
              alt="Amil Second"
              className="w-full rounded-2xl object-contain"
            />
          </div>
          <div className="space-y-4 md:col-span-2">
            <p>From Stanford to startup, every step mattered.</p>
            <p>His leadership has brought global recognition.</p>
          </div>
        </div>

        <p>Innovation is not just technology, it&apos;s leadership.</p>
        <p>And that&apos;s what Amil brought to the table.</p>

        {/* Publications */}
        <div className="pt-12 text-center">
          <h2 className="pb-4 text-xl font-semibold">
            Amil&apos;s Publications
          </h2>
          <div className="space-y-2">
            <a
              className="text-blue-600 underline"
              href="https://dl.acm.org/doi/10.1145/3556384.3556414"
              target="_blank"
            >
              Paper 1: AI in Healthcare
            </a>
            <a
              className="text-blue-600 underline"
              href="https://arxiv.org/abs/2201.01669"
              target="_blank"
            >
              Paper 2: Diagnosis Algorithms
            </a>
            <a
              className="text-blue-600 underline"
              href="https://arxiv.org/abs/2201.11109"
              target="_blank"
            >
              Paper 3: Machine Learning Models
            </a>
            <a
              className="text-blue-600 underline"
              href="https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract"
              target="_blank"
            >
              Paper 4: Equity in AI
            </a>
            <a
              className="text-blue-600 underline"
              href="https://dl.acm.org/doi/abs/10.1145/3382507.3417966"
              target="_blank"
            >
              Paper 5: Mobile Data for Health
            </a>
            <a
              className="text-blue-600 underline"
              href="https://arxiv.org/abs/2004.11823"
              target="_blank"
            >
              Paper 6: COVID Research
            </a>
          </div>
        </div>
      </div>

      {/* Donate CTA */}
      <div className="relative mt-20 h-[300px] w-full md:h-[400px]">
        <img
          src="/images/team/hero-donating.png"
          alt="Donate Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center text-white">
          <p className="max-w-lg px-6 text-lg font-semibold md:text-xl">
            Support our mission for accessible healthcare.
          </p>
          <Link href="https://virufy.org/donate" passHref legacyBehavior>
            <a className="mt-6 rounded-md bg-white px-6 py-2 font-medium text-black hover:bg-gray-200">
              Donate Now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
