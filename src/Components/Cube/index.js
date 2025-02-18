import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import "./cube.scss";
import { DoubleSide } from "three";
import Face from "../Face";

let config = {
  fov: 70,
  aspect: window.innerWidth / window.innerHeight,
  near: 10,
  far: 15000,
};

const sceneData = [
  {
    face: "px",
  },
  {
    face: "nx",
  },
  {
    face: "py",
  },
  {
    face: "ny",
  },
  {
    face: "pz",
  },
  {
    face: "nz",
  },
];

function Cube({ sceneName }) {
  return (
    <div className="cube">
      <Canvas camera={config}>
        <pointLight position={[0, 0, 0]} decay={0} intensity={Math.PI} />
        <mesh scale={1.5}>
          <boxGeometry args={[1000, 1000, 1000]} scale={-1} />
          <meshStandardMaterial color={"hotpink"} side={DoubleSide} wireframe />
          {sceneData.map((i, index) => (
            <Face key={index} faceName={i.face} sceneName={sceneName} />
          ))}
        </mesh>
        <OrbitControls enableZoom rotateSpeed={-0.25} />
      </Canvas>
    </div>
  );
}

export default Cube;
