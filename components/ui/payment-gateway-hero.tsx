"use client";

import { useEffect, useState } from "react";
import { User, Zap, Building2, CheckCircle, Store } from "lucide-react";

const STEPS = [
  { id: 0, label: "Customer",  sub: "Initiates payment",      icon: User,        color: "#94a3b8" },
  { id: 1, label: "M1PAY",    sub: "Encrypts & routes",       icon: Zap,         color: "#fdd448" },
  { id: 2, label: "Bank",     sub: "Verifies & authorises",   icon: Building2,   color: "#60a5fa" },
  { id: 3, label: "Approved", sub: "Instant confirmation",    icon: CheckCircle, color: "#4ade80" },
  { id: 4, label: "Merchant", sub: "Settlement received",     icon: Store,       color: "#f472b6" },
] as const;

const METHODS = ["FPX", "Visa / MC", "TNG", "GrabPay", "DuitNow"];

const STATUS_CHIPS = [
  { label: "256-bit SSL",       color: "#4ade80" },
  { label: "BNM Licensed",      color: "#fdd448" },
  { label: "PCI-DSS Compliant", color: "#60a5fa" },
];

const STEP_DURATION = 1100;
const TOTAL = STEPS.length;

export function PaymentGatewayHero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let raf: number;
    function tick(ts: number) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / STEP_DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        start = null;
        setActive((prev) => (prev + 1) % TOTAL);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center gap-5 py-4 select-none">

      {/* ── VERTICAL FLOW ── */}
      <div className="flex flex-col items-center w-full max-w-xs">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const isActive = active === i;
          const isPast = i < active;
          const dim = !isActive && !isPast;
          const isHub = i === 1;

          return (
            <div key={step.id} className="flex flex-col items-center w-full">

              {/* NODE ROW */}
              <div className="flex items-center w-full gap-3 px-4">

                {/* Icon */}
                <div style={{
                  flexShrink: 0,
                  width: isHub ? 56 : 46,
                  height: isHub ? 56 : 46,
                  borderRadius: isHub ? 14 : 12,
                  background: "#0d0d0e",
                  border: `2px solid ${isActive ? step.color : dim ? "#1c1c1e" : step.color + "44"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isActive
                    ? `0 0 20px 5px ${step.color}55, 0 0 6px 1px ${step.color}44`
                    : "none",
                  transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                  position: "relative",
                }}>
                  <Icon
                    size={isHub ? 24 : 18}
                    color={isActive ? step.color : dim ? "#2a2a2e" : step.color + "66"}
                    strokeWidth={1.8}
                    style={{ transition: "color 0.35s ease" }}
                  />
                  {isActive && (
                    <div style={{
                      position: "absolute",
                      inset: -5,
                      borderRadius: isHub ? 19 : 17,
                      border: `1.5px solid ${step.color}`,
                      animation: "pingRing 1s ease-out infinite",
                      opacity: 0,
                    }} />
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5">
                  <span style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isActive ? step.color : dim ? "#2a2a2e" : step.color + "77",
                    transition: "color 0.35s ease",
                  }}>
                    {step.label}
                  </span>
                  <span style={{
                    fontSize: 10,
                    color: isActive ? "#ffffff66" : "#2a2a2e",
                    letterSpacing: "0.04em",
                    transition: "color 0.35s ease",
                  }}>
                    {step.sub}
                  </span>
                </div>

                {/* Method chips inline for M1Pay node */}
                {isHub && (
                  <div className="flex flex-wrap gap-1 ml-auto">
                    {METHODS.map((m) => (
                      <span key={m} style={{
                        fontSize: 8,
                        padding: "2px 6px",
                        borderRadius: 99,
                        border: "1px solid #fdd44833",
                        color: isActive ? "#fdd44899" : "#2a2a2e",
                        letterSpacing: "0.05em",
                        transition: "color 0.35s ease, border-color 0.35s ease",
                        borderColor: isActive ? "#fdd44833" : "#1c1c1e",
                      }}>
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* CONNECTOR */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: "relative",
                  width: 2,
                  height: 36,
                  margin: "4px 0 4px 28px", // align with center of icon
                  alignSelf: "flex-start",
                }}>
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "#1c1c1e",
                    borderRadius: 2,
                  }} />
                  {/* Filled */}
                  {isPast && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to bottom, ${step.color}55, ${STEPS[i+1].color}55)`,
                      borderRadius: 2,
                    }} />
                  )}
                  {isActive && (
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: `${progress * 100}%`,
                      background: `linear-gradient(to bottom, ${step.color}, ${STEPS[i+1].color})`,
                      borderRadius: 2,
                      boxShadow: `0 0 8px 2px ${step.color}88`,
                    }} />
                  )}
                  {/* Moving dot */}
                  {isActive && (
                    <div style={{
                      position: "absolute",
                      left: "50%",
                      top: `${progress * 100}%`,
                      transform: "translate(-50%, -50%)",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: STEPS[i+1].color,
                      boxShadow: `0 0 8px 3px ${STEPS[i+1].color}`,
                    }} />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── STATUS CHIPS ── */}
      <div className="flex flex-wrap gap-2 justify-center mt-1">
        {STATUS_CHIPS.map(({ label, color }) => (
          <span
            key={label}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/50 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 5px ${color}` }} />
            {label}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes pingRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
