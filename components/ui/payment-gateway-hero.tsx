"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import * as THREE from "three";
import { Store, Zap, Building2, CircleCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Mesh, Group } from "three";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NODE_DATA = [
  { id: "merchant", label: "Merchant",  x: -5.5, z: 0.3,  icon: Store,       emissive: "#ffffff", emissiveIntensity: 0.3,  scale: 1.0,  phase: 0   },
  { id: "gateway",  label: "Gateway",   x: -1.8, z: 0,    icon: Zap,         emissive: "#fdd448", emissiveIntensity: 1.2,  scale: 1.15, phase: 0.9 },
  { id: "bank",     label: "Bank",      x:  1.8, z: 0.2,  icon: Building2,   emissive: "#60a5fa", emissiveIntensity: 0.6,  scale: 1.0,  phase: 1.8 },
  { id: "approved", label: "Approved",  x:  5.5, z: 0.3,  icon: CircleCheck, emissive: "#4ade80", emissiveIntensity: 0.7,  scale: 1.0,  phase: 2.7 },
] as const;

const CONNECTIONS = [
  { from: NODE_DATA[0], to: NODE_DATA[1] },
  { from: NODE_DATA[1], to: NODE_DATA[2] },
  { from: NODE_DATA[2], to: NODE_DATA[3] },
] as const;

const PULSE_CONFIG = [
  { segmentIndex: 0, speed: 0.004,  offsets: [0, 0.33, 0.66],      emissive: "#fdd448" },
  { segmentIndex: 1, speed: 0.0035, offsets: [0.15, 0.48, 0.81],   emissive: "#60a5fa" },
  { segmentIndex: 2, speed: 0.003,  offsets: [0.05, 0.38, 0.71],   emissive: "#4ade80" },
] as const;

const STATUS_CHIPS = [
  { label: "256-bit SSL",       color: "#4ade80" },
  { label: "BNM Licensed",      color: "#fdd448" },
  { label: "PCI-DSS Compliant", color: "#60a5fa" },
] as const;

const BASE_Y = 0;

/* ------------------------------------------------------------------ */
/*  FLOW NODE                                                          */
/* ------------------------------------------------------------------ */

function FlowNode({
  x, z, icon: Icon, label, emissive, emissiveIntensity, scale, phase,
}: {
  x: number; z: number; icon: LucideIcon; label: string;
  emissive: string; emissiveIntensity: number; scale: number; phase: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = BASE_Y + Math.sin(clock.getElapsedTime() * 0.5 + phase) * 0.08;
  });

  return (
    <group position={[x, BASE_Y, z]} scale={scale}>
      <RoundedBox ref={meshRef} args={[1.6, 1.6, 0.28]} radius={0.18} smoothness={4}>
        <meshPhysicalMaterial
          color="#0f0f10"
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          roughness={0.2}
          clearcoat={0.6}
        />
      </RoundedBox>
      <Html center position={[0, 0, 0.2]}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, pointerEvents: "none", userSelect: "none" }}>
          <Icon size={22} color={emissive} strokeWidth={1.5} />
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: emissive, opacity: 0.85 }}>
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
  from,
  to,
}: {
  from: { x: number; z: number; emissive: string };
  to: { x: number; z: number };
}) {
  const curve = useMemo(() => {
    const start = new THREE.Vector3(from.x, BASE_Y, from.z);
    const end   = new THREE.Vector3(to.x,   BASE_Y, to.z);
    const mid   = new THREE.Vector3(
      (start.x + end.x) / 2,
      BASE_Y + 0.6,
      (start.z + end.z) / 2
    );
    return new THREE.CatmullRomCurve3([start, mid, end]);
  }, [from.x, from.z, to.x, to.z]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 80, 0.028, 8, false]} />
      <meshBasicMaterial color={from.emissive} transparent opacity={0.25} />
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
      const end   = new THREE.Vector3(to.x,   BASE_Y, to.z);
      const mid   = new THREE.Vector3(
        (start.x + end.x) / 2,
        BASE_Y + 0.6,
        (start.z + end.z) / 2
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
      const point = curves[pulse.segmentIndex].getPoint(progressRef.current[i]);
      meshRefs.current[i]?.position.copy(point);
    });
  });

  return (
    <>
      {pulses.map((pulse, i) => (
        <mesh key={i} ref={(el) => { meshRefs.current[i] = el; }}>
          <sphereGeometry args={[0.09, 10, 10]} />
          <meshStandardMaterial
            color="#0a0a0a"
            emissive={pulse.emissive}
            emissiveIntensity={4.2}
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
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.14} />
      <pointLight color="#fdd448" intensity={4} distance={20} decay={2} position={[-1.8, 2, 1]} />
      <pointLight color="#ffffff" intensity={0.6} distance={30} decay={2} position={[0, 6, 4]} />

      {NODE_DATA.map((node) => (
        <FlowNode key={node.id} {...node} />
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
      <div className="w-full" style={{ height: 420 }}>
        <Canvas
          camera={{ position: [0, 3.5, 14], fov: 52 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, powerPreference: "default" }}
        >
          <color attach="background" args={["#070506"]} />
          <Scene />
          <EffectComposer>
            <Bloom
              intensity={0.9}
              luminanceThreshold={0.5}
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
