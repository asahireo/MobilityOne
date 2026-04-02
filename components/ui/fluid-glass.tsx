"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type SeededRandom = () => number;

type DataPulsePath = {
  sx: number;
  sz: number;
  ex: number;
  ez: number;
  speed: number;
  forward: boolean;
};

function createSeededRandom(initialSeed: number): SeededRandom {
  let seed = initialSeed;
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

/* ------------------------------------------------------------------ */
/*  INSTANCED BUILDINGS (single draw call)                             */
/* ------------------------------------------------------------------ */

function Buildings() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { count, matrices, colors } = useMemo(() => {
    const gridSize = 8;
    const spacing = 2.8;
    const items: { matrix: THREE.Matrix4; color: THREE.Color }[] = [];
    const palette = ["#fdd448", "#e8bd21", "#839344", "#9ba86c", "#ffffff", "#ffffff", "#ffffff"];

    const rand = createSeededRandom(42);

    const dummy = new THREE.Object3D();

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        if (rand() > 0.5) continue;
        const dist = Math.sqrt(x * x + z * z);
        if (dist < 2.5) continue;

        const centerFactor = Math.max(0, 1 - dist / gridSize);
        const h = 0.4 + rand() * 2 + centerFactor * 2.5;
        const w = 0.6 + rand() * 0.8;

        dummy.position.set(x * spacing, h / 2, z * spacing);
        dummy.scale.set(w, h, w);
        dummy.updateMatrix();

        items.push({
          matrix: dummy.matrix.clone(),
          color: new THREE.Color(palette[Math.floor(rand() * palette.length)]),
        });
      }
    }

    const colorArr = new Float32Array(items.length * 3);
    items.forEach((item, i) => {
      colorArr[i * 3] = item.color.r;
      colorArr[i * 3 + 1] = item.color.g;
      colorArr[i * 3 + 2] = item.color.b;
    });

    return {
      count: items.length,
      matrices: items.map((i) => i.matrix),
      colors: colorArr,
    };
  }, []);

  React.useEffect(() => {
    if (!meshRef.current) return;
    matrices.forEach((m, i) => meshRef.current!.setMatrixAt(i, m));
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [matrices]);

  // Gentle breathing
  const baseMatrices = useMemo(() => matrices.map((m) => m.clone()), [matrices]);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const pos = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      pos.setFromMatrixPosition(baseMatrices[i]);
      const wave = Math.sin(t * 0.4 + pos.x * 0.12 + pos.z * 0.12) * 0.1;
      dummy.position.set(pos.x, pos.y + wave, pos.z);
      const s = baseMatrices[i].elements;
      dummy.scale.set(
        Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]),
        Math.sqrt(s[4] * s[4] + s[5] * s[5] + s[6] * s[6]),
        Math.sqrt(s[8] * s[8] + s[9] * s[9] + s[10] * s[10])
      );
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]}>
        <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
      </boxGeometry>
      <meshStandardMaterial
        vertexColors
        transparent
        opacity={0.6}
        roughness={0.2}
        metalness={0.3}
      />
    </instancedMesh>
  );
}

/* ------------------------------------------------------------------ */
/*  GRID LINES (single geometry)                                       */
/* ------------------------------------------------------------------ */

function GridLines() {
  const geometry = useMemo(() => {
    const verts: number[] = [];
    const size = 8;
    const spacing = 2.8;
    const extent = size * spacing;

    for (let i = -size; i <= size; i++) {
      const c = i * spacing;
      verts.push(-extent, 0.01, c, extent, 0.01, c);
      verts.push(c, 0.01, -extent, c, 0.01, extent);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#fdd448" transparent opacity={0.06} />
    </lineSegments>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA PULSES (instanced, single draw call)                          */
/* ------------------------------------------------------------------ */

function DataPulses() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const pathData = useMemo(() => {
    const gridSize = 8;
    const spacing = 2.8;
    const extent = gridSize * spacing * 1.1;
    const result: DataPulsePath[] = [];
    const progressValues: number[] = [];
    const rand = createSeededRandom(333);

    for (let i = 0; i < 12; i++) {
      const isX = rand() > 0.5;
      const fixed = (Math.floor(rand() * (gridSize * 2 + 1)) - gridSize) * spacing;
      const numPulses = 1 + Math.floor(rand() * 2);

      for (let j = 0; j < numPulses; j++) {
        result.push({
          sx: isX ? -extent : fixed,
          sz: isX ? fixed : -extent,
          ex: isX ? extent : fixed,
          ez: isX ? fixed : extent,
          speed: 0.002 + rand() * 0.003,
          forward: rand() > 0.5,
        });
        progressValues.push(rand());
      }
    }
    return { paths: result, initialProgress: progressValues };
  }, []);

  const { initialProgress, paths } = pathData;
  const count = paths.length;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const progressRef = useRef(initialProgress);

  // Set initial colors
  React.useEffect(() => {
    if (!meshRef.current) return;
    const colors = ["#fdd448", "#e8bd21", "#9ba86c"];
    const rand = createSeededRandom(555);
    for (let i = 0; i < count; i++) {
      const c = new THREE.Color(colors[Math.floor(rand() * colors.length)]);
      meshRef.current.setColorAt(i, c);
    }
    meshRef.current.instanceColor!.needsUpdate = true;
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      const p = paths[i];
      let progress = progressRef.current[i] + (p.forward ? p.speed : -p.speed);
      if (progress > 1) progress = 0;
      if (progress < 0) progress = 1;
      progressRef.current[i] = progress;

      const x = p.sx + (p.ex - p.sx) * progress;
      const z = p.sz + (p.ez - p.sz) * progress;
      const y = 0.15 + Math.abs(Math.sin(progress * Math.PI * 5)) * 0.2;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 6, 6]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}

/* ------------------------------------------------------------------ */
/*  CORE GLOW                                                          */
/* ------------------------------------------------------------------ */

function Core() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) ringRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  return (
    <group position={[0, 0.1, 0]}>
      {/* Core disc */}
      <mesh>
        <cylinderGeometry args={[2.2, 2.2, 0.08, 32]} />
        <meshBasicMaterial color="#fdd448" transparent opacity={0.35} />
      </mesh>

      {/* M1 DIGITAL logo floating above core */}
      <Html
        position={[0, 0.2, 0]}
        center
        transform
        rotation={[-Math.PI / 2, 0, 0]}
        distanceFactor={4}
        style={{ pointerEvents: "none", width: "300px", height: "130px", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/m1-digital.svg"
          alt="M1 Digital"
          style={{ width: "300px", height: "auto", filter: "drop-shadow(0 0 16px rgba(253,212,72,0.6))", display: "block", margin: "0 auto" }}
          draggable={false}
        />
      </Html>

      <pointLight color="#fdd448" intensity={1.5} distance={15} decay={2} position={[0, 0.5, 0]} />

      {/* Orbiting ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.02, 8, 32]} />
        <meshBasicMaterial color="#fdd448" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  SCENE                                                              */
/* ------------------------------------------------------------------ */

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.03) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#0a0e0a" roughness={0.95} />
      </mesh>

      <GridLines />
      <Buildings />
      <Core />
      <DataPulses />
    </group>
  );
}

type FluidGlassProps = {
  mode?: "lens" | "bar" | "cube";
  [key: string]: unknown;
};

export default function FluidGlass(props: FluidGlassProps) {
  void props;
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [28, 20, 28], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "default" }}
      >
        <color attach="background" args={["#080a08"]} />
        <fog attach="fog" args={["#080a08", 35, 75]} />

        <ambientLight intensity={0.12} />
        <directionalLight position={[18, 30, -12]} intensity={0.5} color="#fdd448" />
        <directionalLight position={[-12, 18, 18]} intensity={0.2} color="#9ba86c" />

        <Scene />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}
