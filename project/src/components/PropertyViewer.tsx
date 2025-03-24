import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

export const PropertyViewer = () => {
  return (
    <div className="h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Box args={[3, 2, 1]}>
            <meshStandardMaterial color="#88c" />
          </Box>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};