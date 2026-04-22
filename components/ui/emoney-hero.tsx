"use client";

import { useEffect, useState } from "react";

const CARDS = [
  {
    name: "OneCENT Plus",
    number: "•••• •••• •••• 4421",
    gradient: "linear-gradient(135deg, #1a0a3c 0%, #2d1060 100%)",
    accent: "#a78bfa",
    amount: "RM 84.00",
  },
  {
    name: "MiPAY Mastercard",
    number: "•••• •••• •••• 7803",
    gradient: "linear-gradient(135deg, #2d0a0a 0%, #4a0d0d 100%)",
    accent: "#ef4444",
    amount: "RM 215.50",
  },
  {
    name: "S4S Sabah",
    number: "•••• •••• •••• 1195",
    gradient: "linear-gradient(135deg, #0a0d1a 0%, #0d1f40 100%)",
    accent: "#60a5fa",
    amount: "RM 48.20",
  },
];

const CYCLE_MS = 2800;

export function EMoneyHero() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"idle" | "tap" | "approved">("idle");

  useEffect(() => {
    const run = () => {
      setPhase("tap");
      const t1 = setTimeout(() => setPhase("approved"), 900);
      const t2 = setTimeout(() => {
        setPhase("idle");
        setActive((p) => (p + 1) % CARDS.length);
      }, CYCLE_MS);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    };

    const t0 = setTimeout(run, 600);
    const interval = setInterval(run, CYCLE_MS + 400);
    return () => { clearTimeout(t0); clearInterval(interval); };
  }, []);

  const card = CARDS[active];

  return (
    <div className="relative w-full flex flex-col items-center gap-6 py-6 select-none">

      {/* ── CARD STACK ── */}
      <div style={{ position: "relative", width: 280, height: 200 }}>

        {/* Back cards */}
        {[2, 1].map((offset) => {
          const idx = (active + offset) % CARDS.length;
          const c = CARDS[idx];
          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 20,
                background: c.gradient,
                border: `1.5px solid ${c.accent}22`,
                transform: `translateY(${offset === 2 ? -18 : -9}px) scale(${offset === 2 ? 0.88 : 0.94})`,
                opacity: offset === 2 ? 0.4 : 0.65,
                transition: "all 0.5s ease",
              }}
            />
          );
        })}

        {/* Active (top) card */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            background: card.gradient,
            border: `1.5px solid ${card.accent}55`,
            boxShadow: phase === "approved"
              ? `0 0 40px 8px ${card.accent}55, 0 8px 32px rgba(0,0,0,0.5)`
              : `0 8px 32px rgba(0,0,0,0.5)`,
            transition: "box-shadow 0.4s ease",
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 9, color: card.accent + "99", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>
                E-Wallet
              </p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 4 }}>
                {card.name}
              </p>
            </div>
            {/* NFC icon + rings */}
            <div style={{ position: "relative", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={card.accent} strokeWidth="1.8">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.3"/>
                <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"/>
                <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6"/>
              </svg>
              {phase === "tap" && [0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: -4,
                    borderRadius: "50%",
                    border: `1.5px solid ${card.accent}`,
                    animation: `nfcRing 1s ease-out ${i * 0.22}s infinite`,
                    opacity: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Balance */}
          <div>
            <p style={{ fontSize: 10, color: "#ffffff33", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>Balance</p>
            <p style={{
              fontSize: 28,
              fontWeight: 800,
              color: phase === "approved" ? card.accent : "#fff",
              letterSpacing: "-0.02em",
              transition: "color 0.4s ease",
            }}>
              {card.amount}
            </p>
          </div>

          {/* Card number */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#ffffff44", letterSpacing: "0.1em", fontFamily: "monospace" }}>
              {card.number}
            </span>
            <span style={{
              fontSize: 8,
              padding: "2px 8px",
              borderRadius: 99,
              background: card.accent + "15",
              border: `1px solid ${card.accent}44`,
              color: card.accent,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              {phase === "approved" ? "✓ Paid" : "Mastercard"}
            </span>
          </div>
        </div>

        {/* ── APPROVED BADGE ── */}
        <div style={{
          position: "absolute",
          bottom: -18,
          right: 12,
          background: "#ffffff",
          border: `1.5px solid ${card.accent}55`,
          borderRadius: 12,
          padding: "6px 12px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
          opacity: phase === "approved" ? 1 : 0,
          transform: phase === "approved" ? "translateY(0) scale(1)" : "translateY(6px) scale(0.92)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: card.accent, boxShadow: `0 0 6px ${card.accent}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: card.accent, letterSpacing: "0.06em" }}>
            APPROVED
          </span>
        </div>
      </div>

      {/* ── PARTNER DOTS ── */}
      <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
        {CARDS.map((c, i) => (
          <div
            key={i}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === active ? c.accent : "#2a2a2e",
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>

      {/* ── STATUS CHIPS ── */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          { label: "BNM Licensed",         color: "#fdd448" },
          { label: "Mastercard Certified",  color: "#a78bfa" },
          { label: "7+ Partners Live",      color: "#4ade80" },
        ].map(({ label, color }) => (
          <span
            key={label}
            className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-semibold text-black/60 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 5px ${color}` }} />
            {label}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes nfcRing {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
