
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { ArrowUpRight } from 'lucide-react';

const leadershipTeam = [
  {
    name: 'Alex Marquess',
    role: 'BizDev',
    image: null,
    position: 'center',
    linkedin: 'https://www.linkedin.com/in/alex-marquess-a8ba2b264/',
  },
  {
    name: 'Emmanuella Nwawuba',
    role: 'Legal',
    image: '/images/leadership/Emmanuella Nwawuba.jpeg',
    position: 'center',
    linkedin:
      'https://www.linkedin.com/in/emmanuella-chinelo-nwawuba-a03566184/',
  },
  {
    name: 'Frederick Cosper',
    role: 'Human Resources',
    image: '/images/leadership/Frederick Cosper.jpg',
    position: 'center',
    linkedin: 'https://www.linkedin.com/in/frederickcosper/',
  },
 {
  name: 'Gabriela Sonsino',
  role: 'Global Marketing and Communications',
  image: '/images/leadership/Gabriela Sonsino.png',
  position: 'center 35%',
  linkedin: 'https://www.linkedin.com/in/gabriela-sonsino/',
},
  {
    name: 'Laurence Giglio',
    role: 'QA',
    image: '/images/leadership/Laurence Giglio.jpg',
    position: 'center',
    linkedin: 'https://www.linkedin.com/in/lgiglio/',
  },
  {
    name: 'Lee Ivy',
    role: 'Website / UX',
    image: '/images/leadership/Lee Ivy.jpg',
    position: 'center',
    linkedin: 'https://www.linkedin.com/in/lee-ivy-575309/',
  },
  {
    name: 'Reina Saito',
    role: 'Clinical Research UAE/Japan',
    image: '/images/leadership/Reina Saito.jpg',
    position: 'center',
    linkedin: 'https://www.linkedin.com/in/reina-saito/',
  },
  {
    name: 'Sneha Dharmi',
    role: 'Regulatory Affairs',
    image: '/images/leadership/Sneha Dharmi.jpeg',
    position: 'center',
    linkedin: 'https://www.linkedin.com/in/sneha-dharmi-b1062b16/',
  },
  {
    name: 'Steven Hunt',
    role: 'IT',
    image: '/images/leadership/Steven Hunt.jpeg',
    position: 'center',
    linkedin: 'https://www.linkedin.com/in/sghuntz/',
  },
];

export const metadata = {
  title: 'Leadership Team | Virufy',
  description:
    "Meet Virufy's leadership team and the department heads helping advance our mission.",
};

const LeadershipPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
<section className="relative flex min-h-[607px] items-center overflow-hidden">
<ExportedImage
 src="/images/leadership/LeadershipHero.png"
  alt=""
  basePath={basePath}
  fill
  priority
  className="object-cover"
/>

        <div className="absolute inset-0 bg-white/5" />

<div className="relative z-10 mx-auto w-full max-w-7xl px-10 text-left md:px-20">
<h1 className="mb-5 text-4xl font-normal text-black md:text-5xl">
  Leadership Team
</h1>

<p className="max-w-5xl text-lg leading-relaxed text-gray-700 md:text-xl">
  The experienced leaders behind our business, research, technology, and global operations.
</p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full bg-[#eef7f9] px-6 py-12 md:px-10 md:py-16">
<div className="mx-auto grid w-full max-w-[1500px] grid-cols-2 gap-x-12 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-24">       {leadershipTeam.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              {/* Profile image */}
<div className="relative mb-4 w-full max-w-[300px] aspect-[6/7] overflow-hidden rounded-full border border-slate-300/70 bg-white">    {member.image && (
                  <ExportedImage
                    src={member.image}
                    alt={`${member.name} headshot`}
                    basePath={basePath}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Profile information */}
              <h2 className="text-2xl font-bold text-black">{member.name}</h2>

              <p className="mt-2 min-h-[28px] text-base text-gray-600 md:text-lg">
                {member.role}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${member.name} on LinkedIn`}
                className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-100"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LeadershipPage;