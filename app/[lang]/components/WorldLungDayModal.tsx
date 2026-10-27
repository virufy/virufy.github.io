'use client';

import { useEffect, useMemo, useState } from 'react';
import { Activity, ChevronRight, Heart, Wind, X } from 'lucide-react';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import type { Locale } from '@/i18n-config';

type DateRange = {
  start: string;
  end: string;
};

const activeDates: DateRange[] = [
  {
    start: '2026-09-17',
    end: '2026-09-29',
  },
];

const MODAL_COOKIE = 'world_lung_day_modal_closed';

export default function WorldLungDayModal({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    document.cookie = `${MODAL_COOKIE}=true; path=/; max-age=${60 * 60 * 24 * 30}`;
    setOpen(false);
  }

  const shouldShowModal = useMemo(() => {
    const today = new Date();

    return activeDates.some((range) => {
      const start = new Date(range.start);
      const end = new Date(range.end);
      end.setHours(23, 59, 59, 999);

      return today >= start && today <= end;
    });
  }, []);

  useEffect(() => {
    const hasClosedModal = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${MODAL_COOKIE}=`));

    if (shouldShowModal && !hasClosedModal) {
      setOpen(true);
    }
  }, [shouldShowModal]);

  if (!open) return null;

  return (
    <div
      onClick={closeModal}
    className="fixed inset-0 z-50 flex items-center justify-center p-2 pt-16 backdrop-blur-sm sm:p-4 sm:pt-16"    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-[950px] overflow-hidden rounded-[24px] bg-white shadow-2xl md:grid-cols-[41%_59%]"
      >
        <button
          onClick={closeModal}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X size={26} />
        </button>

        <div className="relative hidden min-h-[520px] md:block">
          <ExportedImage
            src="/images/worldLungDay/world-lung-day.png"
            alt="Lung model"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex min-h-0 flex-col overflow-y-auto px-6 py-8 sm:px-10 md:px-9">         
        <div className="inline-flex w-fit rounded-full border border-[#7FC9C2] bg-[#E8F6F4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0F7069]">            World Lung Day • September 25th
          </div>

          <div className="mt-6">
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Breathe Better.
            </h2>

          <h3 className="text-3xl font-bold leading-tight text-teal-700 sm:text-4xl">
              Live Better.
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Every breath matters. Virufy is developing AI technology that will
              analyze cough and breathing sounds for signals associated with
              respiratory conditions, helping make respiratory screening more
              accessible.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <StatCard
              icon={<Activity size={22} />}
              value="4M+"
              label="Deaths/year"
            />
            <StatCard
              icon={<Wind size={22} />}
              value="500M+"
              label="People Affected"
            />
            <StatCard
              icon={<Heart size={22} />}
              value="262M+"
              label="Living with Asthma"
            />
          </div>

          <div className="mt-6 rounded-3xl border border-teal-200 bg-teal-50/50 p-5">
            <div className="flex items-start gap-3">
            <Activity className="mt-1 shrink-0 text-teal-700" size={28} />   
              <div>
                <h4 className="font-semibold text-teal-800">
                  Early Awareness Matters
                </h4>

                <p className="mt-1 leading-6 text-slate-600">
                  Early awareness can make a difference. Take a simple step
                  toward understanding your respiratory health and protecting
                  those you love.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${lang}/donate`}
              className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-4 font-semibold text-white shadow-lg"
            >
              Support Our Mission
            </Link>

            <Link
              href={`/${lang}/blog/world-lung-day/`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-blue-600 px-5 py-4 font-semibold text-blue-600"
            >
              Learn More
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-[0_10px_18px_rgba(15,23,42,0.22)]">      <div className="text-blue-600">{icon}</div>
      <div className="mt-3 text-2xl font-bold text-slate-950">{value}</div>
<div className="mt-1 whitespace-nowrap text-sm text-slate-500">{label}</div>    </div>
  );
}