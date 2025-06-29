import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Hero.css";

function InteriorModel() {
  const { scene } = useGLTF("/models/interior.glb");

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      const name = child.name.toLowerCase();

      // فقط إذا ما فيه texture، غير اللون
      if (!child.material.map) {
        if (name.includes("window")) {
          child.material.color.set("transparent");
        } else if (name.includes("wall")) {
          child.material.color.set("#D9D9D9");
        } else {
          child.material.color.set("white");
        }
      }

      child.material.metalness = 0.3;
      child.material.roughness = 0.7;
    }
  });

  return <primitive object={scene} scale={1.2} />;
}

export default function InteriorModelViewer() {
  return (
    <div className="ModelViewerDiv" style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [40, 10, 50], fov: 30 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <InteriorModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={true}
        />
      </Canvas>
    </div>
  );
}
