"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function HouseModel() {
  // Load 3D model (replace with actual model path)
  const { scene } = useGLTF("/house_model.glb");
  return <primitive object={scene} scale={1} />;
}

export default function PropertyViewer() {
  return (
    <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <HouseModel />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
