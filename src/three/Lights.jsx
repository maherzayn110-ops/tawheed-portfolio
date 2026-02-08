export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
      />
      <spotLight
        position={[-5, 4, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
    </>
  );
}
