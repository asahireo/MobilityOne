"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import * as THREE from "three";
import { Zap } from "lucide-react";
import type { Group, Mesh } from "three";

/* ------------------------------------------------------------------ */
/*  INLINE LOGO COMPONENTS (brand-accurate, no external loading)       */
/* ------------------------------------------------------------------ */

function LogoFPX() {
  return (
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" width="58" height="29">
      <rect width="120" height="60" rx="6" fill="#003EA5" />
      <rect y="46" width="120" height="14" rx="0" fill="#F05A22" />
      <rect y="46" width="120" height="14" rx="6" fill="#F05A22" />
      <text x="60" y="33" textAnchor="middle" dominantBaseline="middle"
        fontSize="28" fontWeight="900" fill="white" fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="2">FPX</text>
    </svg>
  );
}

function LogoVisa() {
  // Official Visa 2021 wordmark — source: Wikimedia Commons
  return (
    <svg viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg" width="58" height="19">
      <path fill="#1434cb" d="m651.19.5c-70.93,0-134.32,36.77-134.32,104.69,0,77.9,112.42,83.28,112.42,122.42,0,16.48-18.88,31.23-51.14,31.23-45.77,0-79.98-20.61-79.98-20.61l-14.64,68.55s39.41,17.41,91.73,17.41c77.55,0,138.58-38.57,138.58-107.66,0-82.32-112.89-87.54-112.89-123.86,0-12.91,15.5-27.05,47.66-27.05,36.29,0,65.89,14.99,65.89,14.99l14.33-66.2S696.61.5,651.18.5h0ZM2.22,5.5L.5,15.49s29.84,5.46,56.72,16.36c34.61,12.49,37.07,19.77,42.9,42.35l63.51,244.83h85.14L379.93,5.5h-84.94l-84.28,213.17-34.39-180.7c-3.15-20.68-19.13-32.48-38.68-32.48,0,0-135.41,0-135.41,0Zm411.87,0l-66.63,313.53h81L494.85,5.5h-80.76Zm451.76,0c-19.53,0-29.88,10.46-37.47,28.73l-118.67,284.8h84.94l16.43-47.47h103.48l9.99,47.47h74.95L934.12,5.5h-68.27Zm11.05,84.71l25.18,117.65h-67.45l42.28-117.65h0Z" />
    </svg>
  );
}

function LogoMastercard() {
  // Official Mastercard circles icon — source: Wikimedia Commons
  return (
    <svg viewBox="0 0 152 108" xmlns="http://www.w3.org/2000/svg" width="50" height="36">
      <circle cx="56" cy="54" r="42" fill="#EB001B" />
      <circle cx="96" cy="54" r="42" fill="#F79E1B" />
      <path fill="#FF5F00" d="M76,20.7A41.9,41.9,0,0,1,96,54,41.9,41.9,0,0,1,76,87.3,41.9,41.9,0,0,1,56,54,41.9,41.9,0,0,1,76,20.7Z" />
    </svg>
  );
}

function LogoTouchNGo() {
  return (
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" width="58" height="29">
      <rect width="120" height="60" rx="6" fill="#009FE3" />
      {/* TNG wave mark */}
      <path opacity="0.9"
        d="M20 38 Q35 18 50 30 Q65 42 80 22 Q90 12 100 26"
        stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
      <text x="60" y="52" textAnchor="middle" dominantBaseline="middle"
        fontSize="11" fontWeight="700" fill="white" fontFamily="Arial, sans-serif"
        letterSpacing="1">TOUCH N GO</text>
    </svg>
  );
}

function LogoGrabPay() {
  return (
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" width="58" height="29">
      <rect width="120" height="60" rx="6" fill="#00B14F" />
      {/* Grab "G" stylised hand icon */}
      <text x="22" y="36" textAnchor="middle" dominantBaseline="middle"
        fontSize="28" fontWeight="900" fill="white" fontFamily="Arial Black, Arial, sans-serif">G</text>
      <text x="73" y="30" textAnchor="middle" dominantBaseline="middle"
        fontSize="14" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Grab</text>
      <text x="73" y="46" textAnchor="middle" dominantBaseline="middle"
        fontSize="11" fontWeight="400" fill="white" fontFamily="Arial, sans-serif">Pay</text>
    </svg>
  );
}

function LogoShopeePay() {
  return (
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" width="58" height="29">
      <rect width="120" height="60" rx="6" fill="#EE4D2D" />
      {/* Shopee bag icon (simplified) */}
      <path fill="white" d="M38 20 h8 a2 2 0 0 1 2 2 l3 16 a2 2 0 0 1-2 2 H31 a2 2 0 0 1-2-2 l3-16 a2 2 0 0 1 2-2 h4z" />
      <path fill="#EE4D2D" d="M36 20 a6 6 0 0 1 12 0" />
      <text x="76" y="33" textAnchor="middle" dominantBaseline="middle"
        fontSize="12" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Shopee</text>
      <text x="76" y="47" textAnchor="middle" dominantBaseline="middle"
        fontSize="11" fontWeight="400" fill="white" fontFamily="Arial, sans-serif">Pay</text>
    </svg>
  );
}

function LogoDuitNow() {
  return (
    <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" width="58" height="29">
      <rect width="120" height="60" rx="6" fill="#5B0EA6" />
      {/* QR motif — three small squares */}
      <rect x="14" y="14" width="10" height="10" rx="2" fill="white" />
      <rect x="16" y="16" width="6" height="6" rx="1" fill="#5B0EA6" />
      <rect x="14" y="36" width="10" height="10" rx="2" fill="white" />
      <rect x="16" y="38" width="6" height="6" rx="1" fill="#5B0EA6" />
      <rect x="36" y="14" width="10" height="10" rx="2" fill="white" />
      <rect x="38" y="16" width="6" height="6" rx="1" fill="#5B0EA6" />
      <text x="78" y="28" textAnchor="middle" dominantBaseline="middle"
        fontSize="11" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">DuitNow</text>
      <text x="78" y="43" textAnchor="middle" dominantBaseline="middle"
        fontSize="10" fontWeight="400" fill="white" fontFamily="Arial, sans-serif">QR</text>
    </svg>
  );
}

function LogoAlipay() {
  // Official Alipay blue with 支 character
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
      <rect width="60" height="60" rx="10" fill="#1677FF" />
      {/* 支 character — horizontal bars + vertical cross */}
      <line x1="15" y1="22" x2="45" y2="22" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <line x1="15" y1="33" x2="45" y2="33" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="22" x2="30" y2="38" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 38 Q30 50 42 38" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function LogoUnionPay() {
  // Official UnionPay three-stripe design — source: Wikimedia Commons
  return (
    <svg viewBox="0 0 120 75" xmlns="http://www.w3.org/2000/svg" width="58" height="36">
      <rect width="40" height="75" rx="6" fill="#E21836" />
      <rect x="40" width="40" height="75" fill="#00447C" />
      <rect x="80" width="40" height="75" rx="6" fill="#007B84" />
      <text x="20" y="42" textAnchor="middle" dominantBaseline="middle"
        fontSize="9" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">银联</text>
      <text x="60" y="42" textAnchor="middle" dominantBaseline="middle"
        fontSize="7" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Union</text>
      <text x="60" y="53" textAnchor="middle" dominantBaseline="middle"
        fontSize="7" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">Pay</text>
      <text x="100" y="42" textAnchor="middle" dominantBaseline="middle"
        fontSize="7" fontWeight="400" fill="white" fontFamily="Arial, sans-serif">银联</text>
    </svg>
  );
}

function LogoWeChatPay() {
  // WeChat Pay — two overlapping speech bubbles on green
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
      <rect width="60" height="60" rx="10" fill="#07C160" />
      {/* Larger bubble (WeChat) */}
      <rect x="8" y="12" width="30" height="22" rx="7" fill="white" />
      <polygon points="12,34 8,40 20,34" fill="white" />
      {/* Smaller bubble (Pay) */}
      <rect x="22" y="26" width="28" height="20" rx="6" fill="white" opacity="0.85" />
      <polygon points="46,46 50,52 38,46" fill="white" opacity="0.85" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const ORBIT_RADIUS = 7.0;

function orbitPos(index: number, total: number) {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  return { x: ORBIT_RADIUS * Math.cos(angle), z: ORBIT_RADIUS * Math.sin(angle) };
}

const PAYMENT_METHODS = [
  { id: "fpx",        label: "FPX",          emissive: "#f05a22", Logo: LogoFPX },
  { id: "visa",       label: "Visa",         emissive: "#1434cb", Logo: LogoVisa },
  { id: "mastercard", label: "Mastercard",   emissive: "#ff5f00", Logo: LogoMastercard },
  { id: "tng",        label: "Touch 'n Go",  emissive: "#009fe3", Logo: LogoTouchNGo },
  { id: "grabpay",    label: "GrabPay",      emissive: "#00b14f", Logo: LogoGrabPay },
  { id: "shopeepay",  label: "ShopeePay",   emissive: "#ee4d2d", Logo: LogoShopeePay },
  { id: "duitnow",    label: "DuitNow QR",   emissive: "#9b40e8", Logo: LogoDuitNow },
  { id: "alipay",     label: "Alipay",       emissive: "#1677ff", Logo: LogoAlipay },
  { id: "unionpay",   label: "UnionPay",     emissive: "#e21836", Logo: LogoUnionPay },
  { id: "wechatpay",  label: "WeChat Pay",   emissive: "#07c160", Logo: LogoWeChatPay },
] as const;

const CONNECTIONS = PAYMENT_METHODS.map((m, i) => ({
  from: { ...orbitPos(i, PAYMENT_METHODS.length), emissive: m.emissive },
  to:   { x: 0, z: 0 },
}));

const PULSE_CONFIG = PAYMENT_METHODS.map((m, i) => ({
  segmentIndex: i,
  speed: 0.003 + (i % 4) * 0.0004,
  offsets: [
    (i * 0.13) % 1,
    ((i * 0.13) + 0.33) % 1,
    ((i * 0.13) + 0.66) % 1,
  ] as [number, number, number],
  emissive: m.emissive,
}));

const STATUS_CHIPS = [
  { label: "256-bit SSL",       color: "#4ade80" },
  { label: "BNM Licensed",      color: "#fdd448" },
  { label: "PCI-DSS Compliant", color: "#60a5fa" },
] as const;

const BASE_Y = 0;

/* ------------------------------------------------------------------ */
/*  HUB NODE                                                           */
/* ------------------------------------------------------------------ */

function HubNode() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = BASE_Y + Math.sin(clock.getElapsedTime() * 0.6) * 0.1;
  });

  return (
    <group position={[0, BASE_Y, 0]}>
      <RoundedBox ref={meshRef} args={[2.2, 2.2, 0.32]} radius={0.22} smoothness={4}>
        <meshPhysicalMaterial
          color="#0f0f10"
          emissive="#fdd448"
          emissiveIntensity={1.3}
          roughness={0.15}
          clearcoat={0.7}
        />
      </RoundedBox>
      <Html center position={[0, 0, 0.22]}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, pointerEvents: "none", userSelect: "none" }}>
          <Zap size={34} color="#fdd448" strokeWidth={1.5} />
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.18em", color: "#fdd448", opacity: 0.9, textTransform: "uppercase" }}>
            M1PAY
          </span>
        </div>
      </Html>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  PAYMENT LOGO NODE                                                  */
/* ------------------------------------------------------------------ */

function LogoNode({
  index, emissive, label, Logo,
}: {
  index: number; emissive: string; label: string; Logo: () => React.JSX.Element;
}) {
  const groupRef = useRef<Group>(null);
  const { x, z } = orbitPos(index, PAYMENT_METHODS.length);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = BASE_Y + Math.sin(t * 0.5 + index * 0.63) * 0.09;
  });

  return (
    <group ref={groupRef} position={[x, BASE_Y, z]}>
      <Html center>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          pointerEvents: "none",
          userSelect: "none",
        }}>
          <div style={{
            background: "white",
            borderRadius: 10,
            padding: "6px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 14px 3px ${emissive}88, 0 2px 6px rgba(0,0,0,0.5)`,
            minWidth: 60,
            minHeight: 38,
          }}>
            <Logo />
          </div>
          <span style={{
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: emissive,
            opacity: 0.85,
            textTransform: "uppercase",
            textShadow: `0 0 8px ${emissive}`,
          }}>
            {label}
          </span>
        </div>
      </Html>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  CONNECTION TUBE                                                    */
/* ------------------------------------------------------------------ */

function ConnectionTube({
  from, to,
}: {
  from: { x: number; z: number; emissive: string };
  to: { x: number; z: number };
}) {
  const curve = useMemo(() => {
    const start = new THREE.Vector3(from.x, BASE_Y, from.z);
    const end = new THREE.Vector3(to.x, BASE_Y, to.z);
    const mid = new THREE.Vector3(
      (start.x + end.x) / 2,
      BASE_Y + 0.5,
      (start.z + end.z) / 2,
    );
    return new THREE.CatmullRomCurve3([start, mid, end]);
  }, [from.x, from.z, to.x, to.z]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 60, 0.022, 6, false]} />
      <meshBasicMaterial color={from.emissive} transparent opacity={0.2} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA PULSES                                                        */
/* ------------------------------------------------------------------ */

function DataPulses() {
  const curves = useMemo(() =>
    CONNECTIONS.map(({ from, to }) => {
      const start = new THREE.Vector3(from.x, BASE_Y, from.z);
      const end = new THREE.Vector3(to.x, BASE_Y, to.z);
      const mid = new THREE.Vector3(
        (start.x + end.x) / 2,
        BASE_Y + 0.5,
        (start.z + end.z) / 2,
      );
      return new THREE.CatmullRomCurve3([start, mid, end]);
    }),
  []);

  const pulses = useMemo(() =>
    PULSE_CONFIG.flatMap(({ segmentIndex, speed, offsets, emissive }) =>
      offsets.map((offset) => ({ segmentIndex, speed, offset, emissive }))
    ),
  []);

  const progressRef = useRef<number[]>(pulses.map((p) => p.offset));
  const meshRefs = useRef<(Mesh | null)[]>(Array(pulses.length).fill(null));

  useFrame(() => {
    pulses.forEach((pulse, i) => {
      progressRef.current[i] = (progressRef.current[i] + pulse.speed) % 1;
      const pt = curves[pulse.segmentIndex].getPoint(progressRef.current[i]);
      meshRefs.current[i]?.position.copy(pt);
    });
  });

  return (
    <>
      {pulses.map((pulse, i) => (
        <mesh key={i} ref={(el) => { meshRefs.current[i] = el; }}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial
            color="#0a0a0a"
            emissive={pulse.emissive}
            emissiveIntensity={4.5}
          />
        </mesh>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  SCENE                                                              */
/* ------------------------------------------------------------------ */

function Scene() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    // Continuous slow rotation — logos appear to orbit the hub
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.12} />
      <pointLight color="#fdd448" intensity={5} distance={22} decay={2} position={[0, 3, 2]} />
      <pointLight color="#ffffff" intensity={0.5} distance={30} decay={2} position={[0, 8, 5]} />

      <HubNode />

      {PAYMENT_METHODS.map((m, i) => (
        <LogoNode key={m.id} index={i} emissive={m.emissive} label={m.label} Logo={m.Logo} />
      ))}

      {CONNECTIONS.map((conn, i) => (
        <ConnectionTube key={i} from={conn.from} to={conn.to} />
      ))}

      <DataPulses />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPORT                                                             */
/* ------------------------------------------------------------------ */

export function PaymentGatewayHero() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full" style={{ height: 440 }}>
        <Canvas
          camera={{ position: [0, 6, 20], fov: 52 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, powerPreference: "default" }}
        >
          <color attach="background" args={["#070506"]} />
          <Scene />
          <EffectComposer>
            <Bloom
              intensity={1.0}
              luminanceThreshold={0.45}
              luminanceSmoothing={0.4}
              kernelSize={KernelSize.LARGE}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Status chips */}
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {STATUS_CHIPS.map(({ label, color }) => (
          <span
            key={label}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/50 flex items-center gap-2"
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: color, boxShadow: `0 0 6px ${color}` }}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
