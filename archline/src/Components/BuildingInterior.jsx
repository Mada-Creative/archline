import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import "./Hero.css";

function BuildingModel() {
  const model = useGLTF("/models/buildingInterior.glb"); // ضع الملف داخل public/models
  return <primitive object={model.scene} scale={1} />;
}

export default function BuildingInterior() {
  return (
    <div className="ModelViewerDiv" style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [400, 500, 0], fov: 1.8 }}>
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[-300, 200, 200]}
          intensity={1.5}
          castShadow
        />
        <Suspense fallback={null}>
          <BuildingModel />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
