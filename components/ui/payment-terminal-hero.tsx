"use client";

import { useState } from "react";
import { Wifi, Battery, Signal } from "lucide-react";

type ReceiptItem = {
  name: string;
  quantity: number;
  price: number;
};

type ReceiptData = {
  items: ReceiptItem[];
  subtotal: number;
  tax: number;
  total: number;
  message: string;
};

const defaultReceipt: ReceiptData = {
  items: [
    { name: "Cappuccino", quantity: 2, price: 4.5 },
    { name: "Blueberry Muffin", quantity: 1, price: 5.25 },
    { name: "Sparkling Water", quantity: 1, price: 3.5 },
  ],
  subtotal: 17.75,
  tax: 0.89,
  total: 18.64,
  message: "Thank you for choosing MobilityOne. Have a great day!",
};

function toTitleCase(value: string) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function guessPrice(name: string) {
  const v = name.toLowerCase();
  if (v.includes("water")) return 3.5;
  if (v.includes("muffin")) return 5.25;
  if (v.includes("cappuccino")) return 4.5;
  if (v.includes("coffee")) return 4.25;
  if (v.includes("tea")) return 3.75;
  if (v.includes("burger")) return 11.5;
  if (v.includes("fries") || v.includes("fry")) return 4.95;
  if (v.includes("pizza")) return 14.9;
  return 6.5;
}

async function generateReceipt(orderText: string): Promise<ReceiptData> {
  await new Promise((r) => setTimeout(r, 900));
  const parts = orderText.split(/,| and /i).map((p) => p.trim()).filter(Boolean);
  if (!parts.length) return defaultReceipt;

  const items = parts.map((part) => {
    const match = part.match(/^(\d+)\s+(.*)$/);
    const quantity = match ? Number(match[1]) : 1;
    const rawName = match ? match[2] : part;
    return { name: toTitleCase(rawName), quantity, price: guessPrice(rawName) };
  });

  const subtotal = Number(items.reduce((s, i) => s + i.quantity * i.price, 0).toFixed(2));
  const tax = Number((subtotal * 0.06).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));
  return { items, subtotal, tax, total, message: "Thank you for your payment. Have a great day!" };
}

/* Tiny barcode strip for receipt */
const BARCODE_WIDTHS = [2,1,1,2,1,2,1,1,2,1,2,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1];

export function PaymentTerminalHero() {
  const [orderText, setOrderText] = useState(
    "2 cappuccinos, 1 blueberry muffin, and a large sparkling water"
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const [isPrinted, setIsPrinted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!orderText.trim()) return;
    setIsProcessing(true);
    setError(null);
    if (isPrinted) {
      setIsPrinted(false);
      await new Promise((r) => setTimeout(r, 1100)); // Wait for full retraction
    } else {
      await new Promise((r) => setTimeout(r, 600));
    }

    try {
      const data = await generateReceipt(orderText);
      setReceiptData(data);
      setIsPrinted(true);
    } catch {
      setError("Failed to parse order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center px-2 py-6">

      {/* Ground glow */}
      <div className="pointer-events-none absolute bottom-6 left-[55%] h-[80px] w-[280px] -translate-x-1/2 rounded-full bg-[#fdd448]/12 blur-[55px]" />

      {/* Perspective wrapper */}
      <div className="scale-[0.8] origin-center sm:scale-[0.85] md:scale-90" style={{ perspective: "1300px" }}>
        <div
          style={{
            transform: "rotateY(-14deg) rotateX(4deg)",
          }}
          className="relative"
        >


          {/* MAIN FRONT FACE */}
          <div
            className="relative flex min-h-[580px] w-[295px] flex-col rounded-[2.5rem] px-3 py-3"
            style={{
              background: "linear-gradient(160deg, #272728 0%, #1a1a1b 40%, #111112 100%)",
              boxShadow: `
                inset 1px 1px 0 rgba(255,255,255,0.06),
                inset -1px -1px 0 rgba(0,0,0,0.6),
                0 40px 90px rgba(0,0,0,0.75),
                0 8px 20px rgba(0,0,0,0.5)
              `,
            }}
          >
            {/* Surface sheen */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

            {/* Volume buttons – LEFT */}
            <div className="absolute left-0 top-[26%] h-9 w-[3px] -translate-x-[2px] rounded-l-sm bg-[#252526] shadow-[-1px_0_3px_rgba(0,0,0,0.7)]" />
            <div className="absolute left-0 top-[37%] h-6 w-[3px] -translate-x-[2px] rounded-l-sm bg-[#252526] shadow-[-1px_0_3px_rgba(0,0,0,0.7)]" />

            {/* Power button – RIGHT */}
            <div className="absolute right-0 top-[24%] h-11 w-[3px] translate-x-[2px] rounded-r-sm bg-[#282829] shadow-[1px_0_3px_rgba(0,0,0,0.7)]" />

            {/* NFC MODULE */}
            <div
              className="relative mt-1 h-[115px] w-full overflow-hidden rounded-b-[12px] rounded-t-[2rem]"
              style={{
                background: "linear-gradient(145deg, #ff9b3b 0%, #f67b14 55%, #c85e06 100%)",
                boxShadow: "inset 0 -5px 12px rgba(0,0,0,0.35), inset 0 2px 6px rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.8) 2px,rgba(0,0,0,0.8) 3px)",
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-white/[0.13] to-transparent rounded-t-[2rem]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className="rotate-90"
                >
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <line x1="12" y1="20" x2="12.01" y2="20" />
                </svg>
                <div className="h-2 w-2 rounded-full bg-[#00ff88]" style={{ boxShadow: "0 0 7px 2px rgba(0,255,136,0.6)" }} />
              </div>

              <div className="absolute bottom-2.5 right-4 flex items-baseline gap-1">
                <span
                  className="text-[11px] font-black tracking-[0.2em] text-white/80"
                >
                  SUNNI P2
                </span>
              </div>
            </div>

            {/* PRINTER SLOT + RECEIPT */}
            <div className="relative z-[25] my-2 w-full">
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2"
                style={{ height: "360px", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}
              >
                <div
                  className={`w-full transform transition-transform duration-[1100ms] ease-out ${isPrinted ? "translate-y-0" : "translate-y-[110%]"}`}
                >
                  <div style={{ height: "4px", width: "100%", background: "#f5f2e8", backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.7) 1.2px, transparent 1.2px)", backgroundSize: "6px 4px", backgroundPosition: "center center" }} />
                  <div className="w-full px-4 pt-3 pb-5" style={{ background: "#fdfcf3", fontFamily: "'Courier New', Courier, monospace", borderLeft: "1px solid #ddd8c4", borderRight: "1px solid #ddd8c4", boxShadow: "0 -10px 35px rgba(0,0,0,0.5)" }}>
                    {receiptData && (
                      <>
                        <div className="mb-0.5 text-center text-[10px] font-bold text-gray-600">M1 DIGITAL SOLUTIONS SDN BHD</div>
                        <div className="mb-1 text-center text-[8px] text-gray-400">Reg No: 200201015230 (582982-U)</div>
                        <div className="mb-2 border-b border-dashed border-gray-300 pb-2 text-center text-[10px] font-bold tracking-widest text-gray-700">TAX INVOICE</div>
                        <div className="mb-2 space-y-1 text-[10px]">
                          {receiptData.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between gap-2">
                              <span className="truncate text-gray-700">{item.quantity}× {item.name}</span>
                              <span className="shrink-0 font-mono text-gray-800">RM {(item.quantity * item.price).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-0.5 border-t border-dashed border-gray-300 pt-2 text-[10px]">
                          <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>RM {receiptData.subtotal.toFixed(2)}</span></div>
                          <div className="flex justify-between text-gray-500"><span>SST (6%)</span><span>RM {receiptData.tax.toFixed(2)}</span></div>
                          <div className="mt-1 flex justify-between border-t border-gray-300 pt-1 text-[12px] font-bold"><span>TOTAL</span><span>RM {receiptData.total.toFixed(2)}</span></div>
                          <div className="mt-0.5 text-center text-[9px] uppercase tracking-widest text-gray-400">— PAYMENT APPROVED —</div>
                        </div>
                        <div className="mt-3 flex items-end justify-center gap-[1.5px]">
                          {BARCODE_WIDTHS.map((w, i) => (<div key={i} className="bg-gray-800" style={{ width: `${w}px`, height: i % 5 === 0 ? "22px" : "18px" }} />))}
                        </div>
                        <div className="mt-1 text-center text-[8px] font-mono text-gray-400">{`${Date.now()}`.slice(-12)}</div>
                        <div className="mt-2 text-center text-[8px] italic text-gray-400">{receiptData.message}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative mx-auto flex h-[12px] w-[84%] items-center">
                <div
                  className="relative h-[9px] w-full overflow-hidden rounded-full"
                  style={{ background: "#060606", boxShadow: "inset 0 2px 6px rgba(0,0,0,0.95)" }}
                >
                  <div className="absolute inset-x-3 top-1/2 h-[1px] -translate-y-1/2 bg-[#181818]" />
                </div>
              </div>
            </div>

            {/* SCREEN BEZEL */}
            <div
              className="relative mx-1 mb-2 flex flex-1 flex-col rounded-b-2xl rounded-t-lg"
              style={{
                background: "#040404",
                border: "1.5px solid #141414",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.025)",
              }}
            >
              <div className="relative flex h-7 w-full items-center justify-center">
                <div
                  className="absolute left-[36%] flex h-[11px] w-[11px] items-center justify-center rounded-full border border-[#1e1e1e]"
                  style={{ background: "#111" }}
                >
                  <div className="h-[5px] w-[5px] rounded-full bg-[#1a2535]">
                    <div className="h-[2px] w-[2px] rounded-full bg-white/25 translate-x-[1px]" />
                  </div>
                </div>
                <div className="h-[3px] w-7 rounded-full bg-[#181818]" />
              </div>

              <div className="relative mx-[7px] mb-[7px] flex flex-1 flex-col overflow-hidden rounded-[4px]">
                <div
                  className="flex items-center justify-between px-3 py-[4px]"
                  style={{ background: "#111214" }}
                >
                  <span className="font-mono text-[8px] text-white/50">09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal size={8} className="text-white/40" />
                    <Wifi size={8} className="text-white/40" />
                    <Battery size={8} className="text-white/40" />
                    <span className="text-[7px] text-white/40">92%</span>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col">
                  <svg
                    viewBox="0 0 300 480"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <rect width="300" height="480" fill="#1b212c" />
                    <path d="M 150 -50 A 250 250 0 0 1 450 250 L 400 250 A 200 200 0 0 0 150 0 Z" fill="#e4710b" />
                    <path d="M 180 -50 A 220 220 0 0 1 420 220 L 380 220 A 180 180 0 0 0 180 -10 Z" fill="#f79116" />
                    <circle cx="-100" cy="450" r="450" fill="none" stroke="#e86f0b" strokeWidth="80" />
                    <circle cx="-100" cy="450" r="350" fill="none" stroke="#f69018" strokeWidth="60" />
                    <circle cx="-100" cy="450" r="270" fill="none" stroke="#2a3240" strokeWidth="50" />
                    <circle cx="-100" cy="450" r="200" fill="none" stroke="#f69018" strokeWidth="70" />
                    <circle cx="-100" cy="450" r="100" fill="none" stroke="#1b212c" strokeWidth="80" />
                  </svg>

                  <div className="relative z-10 flex flex-1 flex-col" style={{ background: "rgba(255,255,255,0.83)", backdropFilter: "blur(8px)" }}>
                    <div
                      className="flex items-center justify-between px-3 py-2.5 shadow-md"
                      style={{ background: "rgba(22,22,23,0.96)" }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-[16px] w-[16px] items-center justify-center rounded-[3px] bg-[#f67b14]">
                          <span className="text-[7px] font-black text-white">M1</span>
                        </div>
                        <span className="text-[10px] font-bold tracking-wide text-white">SMART CHECKOUT</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        <span className="text-[7px] font-semibold text-emerald-400">ONLINE</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 p-3">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                        Customer Order
                      </label>
                      <textarea
                        className="h-[82px] w-full resize-none rounded-lg border border-gray-200 bg-white/95 p-2.5 text-[11px] text-gray-800 shadow-inner focus:outline-none focus:ring-1 focus:ring-orange-400"
                        placeholder="e.g. 2 burgers and a fry"
                        value={orderText}
                        onChange={(e) => setOrderText(e.target.value)}
                      />

                      {error && (
                        <div className="rounded bg-red-50 p-1.5 text-center text-[9px] font-semibold text-red-600">
                          {error}
                        </div>
                      )}

                      <button
                        onClick={handleCheckout}
                        disabled={isProcessing || !orderText.trim()}
                        className={`flex w-full items-center justify-center gap-1.5 rounded-xl border border-[#d66a0d] py-2.5 text-[11px] font-bold text-white shadow-md transition-transform active:scale-95 disabled:opacity-60 ${!isPrinted && !isProcessing ? "animate-pulse" : ""}`}
                        style={{ background: "linear-gradient(to bottom, #ff9b3b, #f67b14)" }}
                      >
                        {isProcessing ? (
                          <>
                            <svg className="h-3 w-3 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing…
                          </>
                        ) : (
                          "Process & Print Receipt"
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-4 pt-0.5">
                        <div className="flex flex-col items-center gap-1 opacity-40">
                          <div className="flex h-5 w-7 items-center justify-center rounded-[2px] border border-gray-400 bg-white">
                            <div className="h-2.5 w-5 rounded-[1px]" style={{ background: "linear-gradient(to right, #d4a017, #f0c040)" }} />
                          </div>
                          <span className="text-[7px] text-gray-500">CHIP</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                            <line x1="12" y1="20" x2="12.01" y2="20" />
                          </svg>
                          <span className="text-[7px] text-gray-500">TAP</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                          <div className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-gray-800">
                            <div className="grid h-3.5 w-3.5 grid-cols-2 gap-[1.5px]">
                              {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="rounded-[1px] bg-white" />
                              ))}
                            </div>
                          </div>
                          <span className="text-[7px] text-gray-500">QR</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                          <div className="flex h-5 w-7 items-center justify-center rounded-[2px] border border-red-300 bg-red-50">
                            <span className="text-[6px] font-black text-red-500">DuitNow</span>
                          </div>
                          <span className="text-[7px] text-gray-500">DuitNow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* USB-C port */}
            <div className="mx-auto mb-1 flex h-5 items-center justify-center">
              <div
                className="h-[5px] w-10 rounded-full"
                style={{
                  background: "#111",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.02)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* BNM badge */}
      <div className="pointer-events-none absolute -bottom-4 right-[-10px] rounded-[1.75rem] border border-[var(--brand-gold)]/18 bg-[#ffffff]/92 px-5 py-4 shadow-xl backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-amber)]">
          BNM Licensed
        </p>
        <p className="mt-1 text-[11px] text-black/45">Bank Negara Malaysia</p>
      </div>
    </div>
  );
}
