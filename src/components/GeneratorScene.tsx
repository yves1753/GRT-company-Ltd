import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Generator() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <group ref={group}>
      {/* Base */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[3, 0.3, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 1.4, 1.3]} />
        <meshStandardMaterial color="#f5b942" metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Top exhaust */}
      <mesh position={[0.8, 1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.8, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Vents */}
      {[-0.8, -0.4, 0, 0.4].map((x) => (
        <mesh key={x} position={[x, 0.2, 0.66]}>
          <boxGeometry args={[0.25, 0.6, 0.02]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} />
        </mesh>
      ))}
      {/* Control panel */}
      <mesh position={[-0.8, 0.1, 0.66]}>
        <boxGeometry args={[0.5, 0.3, 0.05]} />
        <meshStandardMaterial color="#4a9eff" emissive="#4a9eff" emissiveIntensity={0.6} />
      </mesh>
      {/* Logo strip */}
      <mesh position={[0, -0.5, 0.66]}>
        <boxGeometry args={[2, 0.1, 0.02]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
    </group>
  );
}

export function GeneratorScene() {
  return (
    <Canvas camera={{ position: [4, 2, 5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-3, 2, 3]} intensity={1.2} color="#4a9eff" />
        <Float speed={1.5} floatIntensity={0.6} rotationIntensity={0.2}>
          <Generator />
        </Float>
        <Environment preset="warehouse" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
}
