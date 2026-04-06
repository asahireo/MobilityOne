"use client";

import { useEffect, useState } from "react";
import { User, Zap, Building2, CheckCircle, Store } from "lucide-react";

const STEPS = [
  { id: 0, label: "Customer",  sub: "Initiates payment",        icon: User,         color: "#94a3b8" },
  { id: 1, label: "M1PAY",    sub: "Encrypts & routes",         icon: Zap,          color: "#fdd448" },
  { id: 2, label: "Bank",     sub: "Verifies & authorises",     icon: Building2,    color: "#60a5fa" },
  { id: 3, label: "Approved", sub: "Instant confirmation",      icon: CheckCircle,  color: "#4ade80" },
  { id: 4, label: "Merchant", sub: "Settlement received",       icon: Store,        color: "#f472b6" },
] as const;

const METHODS = ["FPX", "Visa / Mastercard", "Touch 'n Go", "GrabPay", "DuitNow QR"];

const TOTAL_STEPS = STEPS.length;
const STEP_DURATION = 1200; // ms per step

const STATUS_CHIPS = [
  { label: "256-bit SSL",       color: "#4ade80" },
  { label: "BNM Licensed",      color: "#fdd448" },
  { label: "PCI-DSS Compliant", color: "#60a5fa" },
];

export function PaymentGatewayHero() {
  const [active, setActive] = useState(0);
  const [pulseProgress, setPulseProgress] = useState(0); // 0–1 along current segment

  useEffect(() => {
    let start: number | null = null;
    let raf: number;

    function tick(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / STEP_DURATION, 1);
      setPulseProgress(progress);

      if (progress >= 1) {
        start = null;
        setActive((prev) => (prev + 1) % TOTAL_STEPS);
      }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center gap-6 py-6 select-none">

      {/* ── FLOW NODES ── */}
      <div className="relative w-full flex items-center justify-center gap-0">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const isActive = active === i;
          const isPast = i < active || (active === 0 && i === TOTAL_STEPS - 1);
          const dim = !isActive && !isPast;

          return (
            <div key={step.id} className="flex items-center">
              {/* NODE */}
              <div className="flex flex-col items-center gap-2" style={{ minWidth: 88 }}>
                {/* Icon circle */}
                <div
                  style={{
                    width: i === 1 ? 72 : 58,
                    height: i === 1 ? 72 : 58,
                    borderRadius: i === 1 ? 16 : 14,
                    background: "#0f0f10",
                    border: `2px solid ${isActive ? step.color : dim ? "#1e1e20" : step.color + "55"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: isActive
                      ? `0 0 24px 6px ${step.color}66, 0 0 8px 2px ${step.color}44`
                      : isPast
                      ? `0 0 8px 2px ${step.color}33`
                      : "none",
                    transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                    position: "relative",
                  }}
                >
                  <Icon
                    size={i === 1 ? 30 : 22}
                    color={isActive ? step.color : dim ? "#333" : step.color + "88"}
                    strokeWidth={1.8}
                    style={{ transition: "color 0.4s ease" }}
                  />
                  {/* Active pulse ring */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        inset: -6,
                        borderRadius: i === 1 ? 22 : 20,
                        border: `1.5px solid ${step.color}`,
                        animation: "pingRing 1.2s ease-out infinite",
                        opacity: 0,
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <div className="flex flex-col items-center gap-0.5">
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: isActive ? step.color : dim ? "#333" : step.color + "88",
                    transition: "color 0.4s ease",
                  }}>
                    {step.label}
                  </span>
                  <span style={{
                    fontSize: 9,
                    color: isActive ? "#ffffff88" : "#33333388",
                    letterSpacing: "0.06em",
                    transition: "color 0.4s ease",
                    whiteSpace: "nowrap",
                  }}>
                    {step.sub}
                  </span>
                </div>
              </div>

              {/* CONNECTOR (between nodes) */}
              {i < STEPS.length - 1 && (
                <div style={{ position: "relative", width: 60, height: 2, flexShrink: 0, margin: "0 2px", marginBottom: 32 }}>
                  {/* Track */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "#1e1e20",
                    borderRadius: 2,
                  }} />
                  {/* Filled progress (when this segment is active) */}
                  {active === i && (
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, bottom: 0,
                      width: `${pulseProgress * 100}%`,
                      background: `linear-gradient(to right, ${step.color}, ${STEPS[i + 1].color})`,
                      borderRadius: 2,
                      boxShadow: `0 0 8px 2px ${step.color}88`,
                      transition: "none",
                    }} />
                  )}
                  {/* Already passed */}
                  {i < active && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to right, ${step.color}44, ${STEPS[i + 1].color}44)`,
                      borderRadius: 2,
                    }} />
                  )}
                  {/* Moving pulse dot */}
                  {active === i && (
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: `${pulseProgress * 100}%`,
                      transform: "translate(-50%, -50%)",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: STEPS[i + 1].color,
                      boxShadow: `0 0 10px 4px ${STEPS[i + 1].color}`,
                    }} />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── METHOD CHIPS ── */}
      <div className="flex flex-wrap gap-2 justify-center">
        <span style={{ fontSize: 9, color: "#ffffff33", letterSpacing: "0.12em", textTransform: "uppercase", alignSelf: "center", marginRight: 4 }}>
          Routes via
        </span>
        {METHODS.map((m) => (
          <span
            key={m}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1"
            style={{ fontSize: 10, color: "#ffffff55", letterSpacing: "0.06em" }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* ── STATUS CHIPS ── */}
      <div className="flex flex-wrap gap-2 justify-center">
        {STATUS_CHIPS.map(({ label, color }) => (
          <span
            key={label}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/50 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
            {label}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes pingRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
