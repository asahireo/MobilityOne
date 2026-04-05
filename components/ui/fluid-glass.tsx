"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

type SeededRandom = () => number;

const SCENE_COLORS = {
  background: "#070506",
  fog: "#12070a",
  ground: "#14080b",
  grid: "#6e1a24",
  supportBase: "#2a0c12",
  supportGlow: "#74202c",
  ruby: "#7d101c",
  crimson: "#a11624",
  ember: "#ff6a2a",
  amber: "#ff9c3a",
  coral: "#ff5a4f",
  glow: "#ffe2d2",
} as const;

function createSeededRandom(initialSeed: number): SeededRandom {
  let seed = initialSeed;
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function getNodeSources() {
  const gridSize = 14;
  const spacing = 2.8;
  const rand = createSeededRandom(999);
  const sources: { x: number; z: number }[] = [];

  for (let i = 0; i < 18; i++) {
    const gx = Math.floor(rand() * (gridSize * 2 + 1)) - gridSize;
    const gz = Math.floor(rand() * (gridSize * 2 + 1)) - gridSize;
    const dist = Math.sqrt(gx * gx + gz * gz);
    if (dist < 5 || dist > 13) continue;
    sources.push({ x: gx * spacing, z: gz * spacing });
  }

  return sources;
}

function PeripheralForms() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { count, matrices, colors } = useMemo(() => {
    const gridSize = 12;
    const spacing = 3.2;
    const items: { matrix: THREE.Matrix4; color: THREE.Color }[] = [];
    const rand = createSeededRandom(42);
    const dummy = new THREE.Object3D();

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        if (rand() > 0.18) continue;

        const dist = Math.sqrt(x * x + z * z);
        if (dist < 3.2 || dist > gridSize - 1) continue;

        const w = 1.2 + rand() * 1.6;
        const h = 0.22 + rand() * 0.9;
        const d = 0.6 + rand() * 1.2;

        dummy.position.set(x * spacing, h / 2, z * spacing);
        dummy.rotation.y = rand() * Math.PI;
        dummy.scale.set(w, h, d);
        dummy.updateMatrix();

        items.push({
          matrix: dummy.matrix.clone(),
          color: new THREE.Color(
            rand() > 0.72 ? SCENE_COLORS.supportGlow : SCENE_COLORS.supportBase
          ),
        });
      }
    }

    const colorArr = new Float32Array(items.length * 3);
    items.forEach((item, index) => {
      colorArr[index * 3] = item.color.r;
      colorArr[index * 3 + 1] = item.color.g;
      colorArr[index * 3 + 2] = item.color.b;
    });

    return { count: items.length, matrices: items.map((item) => item.matrix), colors: colorArr };
  }, []);

  React.useEffect(() => {
    if (!meshRef.current) return;
    matrices.forEach((matrix, index) => meshRef.current?.setMatrixAt(index, matrix));
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [matrices]);

  const baseMatrices = useMemo(() => matrices.map((matrix) => matrix.clone()), [matrices]);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const position = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      position.setFromMatrixPosition(baseMatrices[i]);
      const wave = Math.sin(time * 0.45 + position.x * 0.08 + position.z * 0.11) * 0.06;
      dummy.position.set(position.x, position.y + wave, position.z);
      dummy.rotation.set(0, 0, 0);

      const s = baseMatrices[i].elements;
      dummy.scale.set(
        Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]),
        Math.sqrt(s[4] * s[4] + s[5] * s[5] + s[6] * s[6]),
        Math.sqrt(s[8] * s[8] + s[9] * s[9] + s[10] * s[10])
      );

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
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
        opacity={0.46}
        roughness={0.34}
        metalness={0.14}
      />
    </instancedMesh>
  );
}

function GridLines() {
  const geometry = useMemo(() => {
    const verts: number[] = [];
    const size = 12;
    const spacing = 3.2;
    const extent = size * spacing;

    for (let i = -size; i <= size; i += 2) {
      const coordinate = i * spacing;
      verts.push(-extent, 0.01, coordinate, extent, 0.01, coordinate);
      verts.push(coordinate, 0.01, -extent, coordinate, 0.01, extent);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={SCENE_COLORS.grid} transparent opacity={0.18} />
    </lineSegments>
  );
}

function NodeMarkers() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const sources = useMemo(() => getNodeSources(), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  React.useEffect(() => {
    if (!meshRef.current) return;
    sources.forEach(({ x, z }, index) => {
      dummy.position.set(x, 0.24, z);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(index, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [dummy, sources]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    sources.forEach(({ x, z }, index) => {
      const pulse = 0.85 + Math.sin(time * 1.8 + index * 0.7) * 0.18;
      dummy.position.set(x, 0.24, z);
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(index, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, sources.length]}>
      <sphereGeometry args={[0.14, 10, 10]} />
      <meshStandardMaterial
        color="#1a0807"
        emissive={SCENE_COLORS.ember}
        emissiveIntensity={3.8}
      />
    </instancedMesh>
  );
}

function DataPulses() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const sources = useMemo(() => getNodeSources(), []);

  const pulseData = useMemo(() => {
    const rand = createSeededRandom(777);
    return sources.map((source) => {
      const dist = Math.sqrt(source.x * source.x + source.z * source.z);
      return {
        sx: source.x,
        sz: source.z,
        speed: 0.003 + rand() * 0.0025,
        arcHeight: 1.4 + dist * 0.06,
        offset: rand(),
        color: rand() > 0.45 ? SCENE_COLORS.amber : SCENE_COLORS.coral,
      };
    });
  }, [sources]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const progressRef = useRef(pulseData.map((item) => item.offset));

  React.useEffect(() => {
    if (!meshRef.current) return;
    pulseData.forEach((pulse, index) => {
      meshRef.current?.setColorAt(index, new THREE.Color(pulse.color));
    });
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [pulseData]);

  useFrame(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < pulseData.length; i++) {
      const pulse = pulseData[i];
      let progress = progressRef.current[i] + pulse.speed;
      if (progress > 1) progress = 0;
      progressRef.current[i] = progress;

      const eased = 1 - Math.pow(1 - progress, 1.45);
      const x = pulse.sx * (1 - eased);
      const z = pulse.sz * (1 - eased);
      const y = 0.25 + pulse.arcHeight * Math.sin(eased * Math.PI) * (1 - eased * 0.28);
      const scale = 0.6 + (1 - Math.abs(eased - 0.5) * 2) * 0.75;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, pulseData.length]}>
      <sphereGeometry args={[0.15, 10, 10]} />
      <meshStandardMaterial color="#110606" emissive={SCENE_COLORS.ember} emissiveIntensity={4.6} />
    </instancedMesh>
  );
}

function CoreMonolith() {
  const monolithRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Mesh>(null);
  const rippleRef = useRef<THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>>(null);
  const accentPlateRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (monolithRef.current) {
      monolithRef.current.position.y = 2.85 + Math.sin(time * 0.48) * 0.08;
      monolithRef.current.rotation.y = Math.sin(time * 0.22) * 0.14;
    }

    if (orbitRef.current) {
      orbitRef.current.rotation.y = time * 0.22;
      orbitRef.current.rotation.z = Math.sin(time * 0.14) * 0.12;
    }

    if (rippleRef.current) {
      const scale = 1 + (Math.sin(time * 1.1) * 0.5 + 0.5) * 0.08;
      rippleRef.current.scale.setScalar(scale);
      rippleRef.current.material.opacity = 0.24 + (Math.sin(time * 1.1) * 0.5 + 0.5) * 0.16;
    }

    if (accentPlateRef.current) {
      accentPlateRef.current.rotation.y = -time * 0.12;
      accentPlateRef.current.position.y = 2.1 + Math.sin(time * 0.65) * 0.05;
    }
  });

  return (
    <group position={[0, 0.15, 0]}>
      <mesh receiveShadow>
        <cylinderGeometry args={[2.8, 3.4, 0.1, 48]} />
        <meshStandardMaterial
          color="#18070c"
          emissive={SCENE_COLORS.crimson}
          emissiveIntensity={0.7}
          roughness={0.4}
          metalness={0.18}
        />
      </mesh>

      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[1.65, 1.95, 0.05, 40]} />
        <meshStandardMaterial
          color="#21080d"
          emissive={SCENE_COLORS.ember}
          emissiveIntensity={1.8}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={monolithRef} position={[0, 2.85, 0]}>
        <boxGeometry args={[2.2, 5.6, 1.15]} />
        <meshPhysicalMaterial
          color={SCENE_COLORS.ruby}
          transparent
          opacity={0.76}
          roughness={0.16}
          metalness={0.08}
          transmission={0.08}
          clearcoat={0.94}
          clearcoatRoughness={0.14}
          emissive={SCENE_COLORS.crimson}
          emissiveIntensity={0.35}
        />
      </mesh>

      <mesh ref={accentPlateRef} position={[0, 2.1, 0]} rotation={[0, 0.25, 0.08]}>
        <torusGeometry args={[1.9, 0.03, 10, 90, Math.PI * 1.2]} />
        <meshStandardMaterial
          color="#26090e"
          emissive={SCENE_COLORS.ember}
          emissiveIntensity={1.8}
          transparent
          opacity={0.95}
        />
      </mesh>

      <mesh ref={orbitRef} position={[0, 2.9, 0]} rotation={[Math.PI / 2.6, 0, 0.45]}>
        <torusGeometry args={[3.45, 0.045, 10, 120]} />
        <meshStandardMaterial
          color="#21080b"
          emissive={SCENE_COLORS.amber}
          emissiveIntensity={2.8}
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh ref={rippleRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.12, 0]}>
        <ringGeometry args={[2.9, 3.45, 96]} />
        <meshBasicMaterial
          color={SCENE_COLORS.coral}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      <pointLight color={SCENE_COLORS.ember} intensity={3.8} distance={24} decay={2} position={[0, 3, 0]} />
      <pointLight color={SCENE_COLORS.glow} intensity={1.6} distance={14} decay={2} position={[0, 4.8, 2]} />
    </group>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.06) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[160, 160]} />
        <meshStandardMaterial color={SCENE_COLORS.ground} roughness={0.96} metalness={0.06} />
      </mesh>

      <GridLines />
      <PeripheralForms />
      <NodeMarkers />
      <CoreMonolith />
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
        camera={{ position: [18, 11, 18], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "default" }}
      >
        <color attach="background" args={[SCENE_COLORS.background]} />
        <fog attach="fog" args={[SCENE_COLORS.fog, 40, 95]} />

        <ambientLight intensity={0.16} />
        <directionalLight position={[16, 22, 10]} intensity={0.55} color={SCENE_COLORS.glow} />
        <directionalLight position={[-14, 10, -10]} intensity={0.3} color={SCENE_COLORS.crimson} />
        <directionalLight position={[0, 8, 18]} intensity={0.18} color={SCENE_COLORS.ember} />

        <Scene />

        <EffectComposer>
          <Bloom
            intensity={0.85}
            luminanceThreshold={0.55}
            luminanceSmoothing={0.45}
            radius={0.7}
            mipmapBlur
          />
        </EffectComposer>

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.32}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4.4}
          maxPolarAngle={Math.PI / 2.25}
        />
      </Canvas>
    </div>
  );
}
