import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import "./Hero.css";

function BuildingModel() {
  const model = useGLTF("/models/building1.glb"); // ضع الملف داخل public/models
  return <primitive object={model.scene} scale={1} />;
}

export default function BuildingModel1() {
  return (
    <div className="ModelViewerDiv" style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [-20, 50, 470], fov: 4 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
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
