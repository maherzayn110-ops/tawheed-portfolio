// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// export default function Car() {
//   const ref = useRef();

//   useFrame(({ mouse }) => {
//     ref.current.rotation.y = mouse.x * 0.5;
//     ref.current.rotation.x = mouse.y * 0.2;
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[2, 1, 4]} />
//       <meshStandardMaterial color="#111111" metalness={0.6} roughness={0.2} />
//     </mesh>
//   );
// }



import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Car() {
  const ref = useRef();
  const { scene } = useGLTF("/models/car.glb");

 
  

  useFrame(({ mouse }) => {
    ref.current.rotation.y = mouse.x * 0.4;
    ref.current.rotation.x = mouse.y * 0.15;
  });

  return (
    <primitive
      ref={ref}
      object={scene}

      scale={1.1}
      position={[0.8, -2.9, -12]}
      rotation={[0,Math.PI,0]}
  
    />
  );
}