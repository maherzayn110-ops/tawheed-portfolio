import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Floating({ children, speed = 0.5 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.y =
      Math.sin(clock.elapsedTime * speed) * 0.15;



  });

  return <group ref={ref}>{children}</group>;
  
}
