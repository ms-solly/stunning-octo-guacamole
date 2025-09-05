'use client';

import { MeshDistortMaterial,OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function AnimatedBackground() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#8A2BE2"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
}
