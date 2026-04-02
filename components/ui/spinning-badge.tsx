"use client";

import { ArrowUpRight } from "lucide-react";

export default function SpinningBadge() {
  return (
    <div className="relative flex h-28 w-28 cursor-pointer items-center justify-center rounded-full border-[3px] border-black/5 bg-[var(--brand-gold)] shadow-xl transition-transform hover:scale-105 md:h-36 md:w-36">
      <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
          <text className="text-[11px] font-black uppercase tracking-[0.18em]" fill="black">
            <textPath href="#circlePath" startOffset="0%">
              GET STARTED FREE • BNM LICENSED •{" "}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowUpRight className="h-8 w-8 text-black" strokeWidth={3} />
      </div>
    </div>
  );
}
