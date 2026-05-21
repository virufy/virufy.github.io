'use client';

import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, Heart, Wind, ChevronRight, X } from 'lucide-react';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import type { Locale } from '@/i18n-config';

type DateRange = {
  start: string;
  end: string;
};

const activeDates: DateRange[] = [
  {
    start: '2026-05-20',
    end: '2026-05-31',
  },
];
const MODAL_COOKIE = 'wntd_modal_closed';

export default function DateBasedModal({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  function closeModal() {
    // expires in 30 days
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
      onClick={() => closeModal()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-4"
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071428] pt-6 shadow-[0_0_40px_rgba(0,0,0,0.7)] sm:rounded-[32px] md:pt-0"
      >
        {/* Close Button */}
        <button
          onClick={() => closeModal()}
          className="absolute right-5 top-5 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white sm:flex"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* GRID WRAPPER  */}
        <div className="grid h-full min-h-0 w-full grid-cols-1 overflow-hidden lg:grid-cols-[40%_60%]">
          {/* LEFT IMAGE */}
          <div className="relative hidden h-full overflow-hidden md:block">
            <ExportedImage
              src="/images/home/cigarettes.png"
              alt="Cigarettes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex min-h-0 flex-col overflow-y-auto bg-[radial-gradient(circle_at_top_right,_rgba(0,255,200,0.08),_transparent_35%),linear-gradient(180deg,#08182f_0%,#071120_100%)] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
            {/* Glow Effects */}
            <div className="absolute -bottom-16 right-0 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4242]">
                May 31st • World No Tobacco Day
              </div>

              {/* Heading */}
              <div className="mt-4">
                <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                  Breathe Freely.
                </h2>

                <h3 className="mt-1 text-xl font-bold leading-tight text-[#FF4242] sm:text-2xl">
                  Choose Life Over Tobacco.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  Tobacco smoke damages your lungs and airways — increasing the
                  risk of infections Virufy helps screen for. This World No
                  Tobacco Day, take the first step toward healthier breathing.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <StatCard
                  icon={<AlertTriangle size={18} />}
                  value="8M+"
                  label="Deaths/year"
                />
                <StatCard
                  icon={<Wind size={18} />}
                  value="1.2M+"
                  label="Secondhand impacts"
                />
                <StatCard
                  icon={<Heart size={18} />}
                  value="48h"
                  label="Healing starts"
                />
              </div>

              {/* Highlight */}
              <div className="mt-4 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-cyan-400/10 text-[#00DCB4]">
                    <Wind size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#00DCB4]">
                      Protecting Children from Tobacco
                    </h4>
                    <p className="mt-1 text-slate-300">
                      Every 3 seconds, a life is lost to tobacco. Protect your
                      lungs — and the lungs of those you love.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-stretch">
                <Link
                  href={`/${lang}/donate`}
                  className="flex w-full items-center justify-center rounded-2xl bg-[#00DCB4] px-4 py-3 text-sm font-semibold text-[#02151d]"
                >
                  Support Our Mission
                </Link>
                <Link
                  href={`/${lang}/blog/world-no-tobacco-day/`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                >
                  Learn More
                  <ChevronRight size={18} />
                </Link>
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white sm:hidden"
                  onClick={() => closeModal()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* STAT CARD */
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
    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-[#00DCB4]">{icon}</div>
      <div className="mt-3 text-xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}
