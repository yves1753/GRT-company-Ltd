import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Trail } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import generatorImg from "@/assets/generator-hero.png";

function LightningBolt({ angle, radius, speed, height }: { angle: number; radius: number; speed: number; height: number }) {
  const ref = useRef<THREE.Line>(null);
  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    let y = height;
    let x = 0;
    for (let i = 0; i < 10; i++) {
      arr.push(new THREE.Vector3(x, y, 0));
      x += (Math.random() - 0.5) * 0.3;
      y -= height * 2 / 10;
    }
    return arr;
  }, [height]);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.rotation.y = -t + Math.PI / 2;
    const flicker = (Math.sin(state.clock.elapsedTime * 14 + angle) + 1) * 0.5;
    (ref.current.material as THREE.LineBasicMaterial).opacity = 0.3 + flicker * 0.7;
  });

  return (
    <line ref={ref as never}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color="#7dd3fc" transparent />
    </line>
  );
}

function ElectronOrbit({ radius, speed, color, tilt }: { radius: number; speed: number; color: string; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.3) * tilt;
  });
  return (
    <Trail width={1.4} length={7} color={color} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} toneMapped={false} />
      </mesh>
    </Trail>
  );
}

function EnergyRing({ radius, speed, color, axis }: { radius: number; speed: number; color: string; axis: "x" | "y" | "z" }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation[axis] = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} transparent opacity={0.7} toneMapped={false} />
    </mesh>
  );
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0.4, 5], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[-4, 2, 3]} intensity={2.5} color="#4a9eff" />
        <pointLight position={[3, -2, -3]} intensity={1.5} color="#f5b942" />

        <Float speed={1} floatIntensity={0.3} rotationIntensity={0.1}>
          <group>
            <EnergyRing radius={2.6} speed={0.4} color="#7dd3fc" axis="z" />
            <EnergyRing radius={2.9} speed={-0.3} color="#f5b942" axis="x" />
            <EnergyRing radius={3.2} speed={0.25} color="#4a9eff" axis="y" />
          </group>
        </Float>

        <ElectronOrbit radius={2.6} speed={1.4} color="#7dd3fc" tilt={0.7} />
        <ElectronOrbit radius={3.0} speed={-1.0} color="#f5b942" tilt={-0.9} />
        <ElectronOrbit radius={2.3} speed={1.8} color="#4a9eff" tilt={0.4} />

        <LightningBolt angle={0} radius={2.5} speed={0.6} height={1.4} />
        <LightningBolt angle={Math.PI * 0.7} radius={2.8} speed={-0.4} height={1.2} />
        <LightningBolt angle={Math.PI * 1.3} radius={2.6} speed={0.5} height={1.6} />

        <Sparkles count={150} size={2.5} scale={8} speed={0.4} color="#f5b942" />
        <Sparkles count={80} size={1.5} scale={6} speed={0.6} color="#7dd3fc" />
      </Suspense>
    </Canvas>
  );
}

export function HeroScene() {
  return (
    <div className="relative w-full h-full">
      {/* Ambient radial glow blending into bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 25%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* 3D electric accents behind */}
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      {/* Generator image, centered, blended */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={generatorImg}
          alt="Industrial diesel generator by GRT Company Ltd"
          className="w-[78%] max-w-[560px] object-contain animate-float drop-shadow-[0_30px_60px_rgba(74,158,255,0.35)]"
          style={{
            filter: "drop-shadow(0 0 40px rgba(245,185,66,0.35)) drop-shadow(0 0 80px rgba(74,158,255,0.25))",
            mixBlendMode: "normal",
          }}
        />
      </div>

      {/* Foreground sparkle layer */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
          <Sparkles count={60} size={3} scale={9} speed={0.3} color="#ffffff" opacity={0.8} />
        </Canvas>
      </div>
    </div>
  );
}
