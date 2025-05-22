'use client';

import Link from 'next/link';

export default function FounderPage() {
  return (
    <section className="px-4 md:px-12">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <img
          src="/images/team/background-OurPeople.png"
          alt="Founder background"
          className="object-cover rounded-xl w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl md:text-4xl text-center">
          We unite through innovation.
        </div>
      </div>

      {/* Founder Story */}
      <div className="max-w-5xl mx-auto mt-16 space-y-10 text-black">
        <h1 className="text-3xl font-bold text-center">Our Founder: Amil</h1>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img
              src="/images/team/amil.png"
              alt="Amil"
              className="rounded-2xl object-contain w-full"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <p>Amil's journey began with a mission.</p>
            <p>He believed in the power of people and tech.</p>
            <p>His story continues to inspire.</p>
          </div>
        </div>

        <p>Driven by a global vision for health equity.</p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img
              src="/images/team/AmilFirstImg.png"
              alt="Amil First"
              className="rounded-2xl object-contain w-full"
            />
          </div>
          <div className="md:col-span-2">
            <p>His experiences shaped the direction of Virufy.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img
              src="/images/team/AmilSecondImg.png"
              alt="Amil Second"
              className="rounded-2xl object-contain w-full"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <p>From Stanford to startup, every step mattered.</p>
            <p>His leadership has brought global recognition.</p>
          </div>
        </div>

        <p>Innovation is not just technology, it’s leadership.</p>
        <p>And that’s what Amil brought to the table.</p>

        {/* Publications */}
        <div className="pt-12 text-center">
          <h2 className="text-xl font-semibold pb-4">Amil's Publications</h2>
          <div className="space-y-2">
            <a className="text-blue-600 underline" href="https://dl.acm.org/doi/10.1145/3556384.3556414" target="_blank">
              Paper 1: AI in Healthcare
            </a>
            <a className="text-blue-600 underline" href="https://arxiv.org/abs/2201.01669" target="_blank">
              Paper 2: Diagnosis Algorithms
            </a>
            <a className="text-blue-600 underline" href="https://arxiv.org/abs/2201.11109" target="_blank">
              Paper 3: Machine Learning Models
            </a>
            <a className="text-blue-600 underline" href="https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract" target="_blank">
              Paper 4: Equity in AI
            </a>
            <a className="text-blue-600 underline" href="https://dl.acm.org/doi/abs/10.1145/3382507.3417966" target="_blank">
              Paper 5: Mobile Data for Health
            </a>
            <a className="text-blue-600 underline" href="https://arxiv.org/abs/2004.11823" target="_blank">
              Paper 6: COVID Research
            </a>
          </div>
        </div>
      </div>

      {/* Donate CTA */}
      <div className="relative h-[300px] md:h-[400px] w-full mt-20">
        <img
          src="/images/team/hero-donating.png"
          alt="Donate Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <p className="text-lg md:text-xl font-semibold max-w-lg px-6">
            Support our mission for accessible healthcare.
          </p>
          <Link href="https://virufy.org/donate" passHref legacyBehavior>
            <a className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200">
              Donate Now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
