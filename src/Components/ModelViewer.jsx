import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import "./Hero.css";
import buildingUrl from "./../models/building.glb";

function BuildingModel() {
  const model = useGLTF(buildingUrl);
  return <primitive object={model.scene} scale={1} />;
}

export default function ModelViewer() {
  return (
    <div className="ModelViewerDiv">
      <Canvas camera={{ position: [5, 1.5, 4], fov: 30 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <BuildingModel />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}
