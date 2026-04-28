import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles, Trail } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function Generator() {
  const group = useRef<THREE.Group>(null);
  const fanRef = useRef<THREE.Mesh>(null);
  const panelRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.4;
    }
    if (fanRef.current) {
      fanRef.current.rotation.z = state.clock.elapsedTime * 6;
    }
    if (panelRef.current) {
      panelRef.current.emissiveIntensity =
        0.6 + Math.sin(state.clock.elapsedTime * 4) * 0.4;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Skid base */}
      <mesh position={[0, -1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 0.25, 1.8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Main body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[3, 1.6, 1.5]} />
        <meshStandardMaterial color="#f5b942" metalness={0.65} roughness={0.3} />
      </mesh>
      {/* Top edge trim */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[3.05, 0.08, 1.55]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Exhaust stack */}
      <mesh position={[1, 1.25, 0]}>
        <cylinderGeometry args={[0.13, 0.15, 1, 20]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh position={[1, 1.78, 0]}>
        <torusGeometry args={[0.16, 0.03, 12, 24]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} />
      </mesh>
      {/* Side vents */}
      {[-1.0, -0.5, 0, 0.5, 1.0].map((x) => (
        <mesh key={x} position={[x, 0.1, 0.76]}>
          <boxGeometry args={[0.28, 0.7, 0.02]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.4} />
        </mesh>
      ))}
      {/* Glowing control panel */}
      <mesh position={[-1.05, 0.2, 0.77]}>
        <boxGeometry args={[0.55, 0.4, 0.05]} />
        <meshStandardMaterial
          ref={panelRef}
          color="#0a1a2a"
          emissive="#4a9eff"
          emissiveIntensity={0.8}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
      {/* Fan grille (back-side, visible when rotating) */}
      <mesh position={[-1.55, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <ringGeometry args={[0.15, 0.45, 32]} />
        <meshStandardMaterial color="#1a1a1a" side={THREE.DoubleSide} metalness={0.8} />
      </mesh>
      <mesh ref={fanRef} position={[-1.56, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.25, 0.04, 8, 4]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} />
      </mesh>
      {/* Brand strip */}
      <mesh position={[0, -0.55, 0.77]}>
        <boxGeometry args={[2.2, 0.18, 0.02]} />
        <meshStandardMaterial color="#8b0000" emissive="#ff2222" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function LightningBolt({ angle, radius, speed }: { angle: number; radius: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    let y = 1.5;
    let x = 0;
    for (let i = 0; i < 8; i++) {
      arr.push(new THREE.Vector3(x, y, 0));
      x += (Math.random() - 0.5) * 0.25;
      y -= 0.35;
    }
    return arr;
  }, []);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.rotation.y = -t + Math.PI / 2;
    const flicker = (Math.sin(state.clock.elapsedTime * 12 + angle) + 1) * 0.5;
    (ref.current.material as THREE.LineBasicMaterial).opacity = 0.4 + flicker * 0.6;
  });

  return (
    <line ref={ref as never}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color="#7dd3fc" transparent linewidth={2} />
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
    ref.current.position.y = Math.sin(t) * tilt;
  });
  return (
    <Trail width={1.2} length={6} color={color} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
      </mesh>
    </Trail>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [4, 1.5, 5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 6, 4]} intensity={1.6} castShadow />
        <pointLight position={[-4, 2, 3]} intensity={2} color="#4a9eff" />
        <pointLight position={[3, -2, -3]} intensity={1.2} color="#f5b942" />

        <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.15}>
          <Generator />
        </Float>

        <ElectronOrbit radius={2.6} speed={1.4} color="#7dd3fc" tilt={0.6} />
        <ElectronOrbit radius={3.0} speed={-1.0} color="#f5b942" tilt={-0.8} />
        <ElectronOrbit radius={2.3} speed={1.8} color="#4a9eff" tilt={0.3} />

        <LightningBolt angle={0} radius={2.4} speed={0.6} />
        <LightningBolt angle={Math.PI * 0.7} radius={2.7} speed={-0.4} />
        <LightningBolt angle={Math.PI * 1.3} radius={2.5} speed={0.5} />

        <Sparkles count={120} size={2.5} scale={7} speed={0.5} color="#f5b942" />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}
