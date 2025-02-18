import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";

const Frament = ({ imgUrl, position }) => {
  const frament = useRef();

  const texture = useLoader(THREE.TextureLoader, imgUrl);

  return (
    <mesh ref={frament} scale-x={-1} position={position}>
      <planeGeometry args={[250, 250]} attach="geometry" />
      <meshBasicMaterial
        side={THREE.DoubleSide}
        // color="red"
        // wireframe
        map={texture}
      />
    </mesh>
  );
};

export default Frament;
