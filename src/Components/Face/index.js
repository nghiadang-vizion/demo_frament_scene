import React, { useMemo } from "react";
import Frament from "../Frament";
import { SCENE_DATA1 } from "../scene1";
import { SCENE_DATA2 } from "../scene2";

const Face = ({ faceName, sceneName }) => {
  console.log("🚀 ~ Face ~ sceneName:", sceneName);
  const framentData = useMemo(() => {
    const data = [];
    const step = 250;
    const start = -375;
    const end = 375;
    let index = 0;

    for (let y = start; y <= end; y += step) {
      for (let x = start; x <= end; x += step) {
        const position = {
          position: [-x, -y, 0],
        };
        data.push(position);
        index++;
      }
    }

    return data;
  }, []);

  const sceneData = useMemo(
    () => (sceneName === "rainBow" ? SCENE_DATA1 : SCENE_DATA2),
    [sceneName]
  );

  const data = useMemo(
    () =>
      sceneData
        .map((face) => {
          const mappedArray = face.frament.map((item, index) => {
            const position = framentData[index]
              ? framentData[index]?.position
              : [0, 0, 0]; // Default position if out of bounds
            return { ...item, position };
          });
          return { ...face, frament: mappedArray };
        })
        .find((i) => i.name === faceName),
    [faceName, sceneData]
  );

  return (
    <group position={data.position} rotation={data.rotation}>
      {data.frament.map((i, index) => (
        <Frament key={index} position={i.position} imgUrl={i?.url} />
      ))}
    </group>
  );
};

export default Face;
