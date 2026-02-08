
// import Car from "./Car";

// export default function Scene() {
//   return (
//     <>
//       <Car />
//     </>
//   );
// }

// import Car from "./Car";

// export default function Scene() {
//   return (
//     <>
//       <ambientLight intensity={2} />
//       <directionalLight position={[10, 15, 10]} intensity={4} />
//       <directionalLight position={[-10, 5, -10]} intensity={3} />
//       <Car />
//     </>
//   );
// }


//this is correct
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { Box3, Vector3 } from "three";
import Car from "./Car";

export default function Scene() {
  const { camera } = useThree();

  useEffect(() => {
    // wait one frame for model to mount
    setTimeout(() => {
      const box = new Box3().setFromObject(camera.parent);
      const size = new Vector3();
      const center = new Vector3();

      box.getSize(size);
      box.getCenter(center);

      camera.position.set(
        center.x,
        center.y + size.y * 0.8,
        center.z + size.z * 1.5
      );

      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }, 100);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 20, 10]} intensity={4} />
      <directionalLight position={[-10, 10, -10]} intensity={3} />

      <Car />

      {/* TEMPORARY: lets you rotate & confirm visibility */}
      <OrbitControls enableZoom />
    </>
  );
}


