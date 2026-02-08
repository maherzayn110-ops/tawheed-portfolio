

// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import Scene from "../three/Scene";
// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   useEffect(() => {
//     gsap.to(".car-wrapper", {
//       scrollTrigger: {
//         trigger: ".hero",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//       y: -200,
//     });
//   }, []);

//   return (
//     <section className="hero h-screen w-full relative">
//       <div className="absolute z-10 top-1/2 left-1/2 
//                       -translate-x-1/2 -translate-y-1/2 text-center">
//         <h1 className="font-luxury text-6xl tracking-widest">
          
//           TAWHEED NAZIR
//         </h1>
//         <p className="mt-4 text-gray-400">
//           Software Developer · Crafting Luxury <br></br>UI Inspired by Masarati Motors
//         </p>
//       </div>

//       <div className="car-wrapper h-full">
        
//         <Canvas camera={{ fov: 25, near: 2.6, far: 600 }}>

//           <Scene />
//         </Canvas>
//       </div>
      
//     </section>
//   );
// }





import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import Scene from "../three/Scene";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    gsap.to(".car-wrapper", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -200,
    });
  }, []);

  return (
    <section className="hero relative w-full h-screen overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/media/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🌑 CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 📝 TEXT CONTENT */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <div>
          {/* <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            TAWHEED NAZIR
          </h1> */}

          <h1 className="font-luxury text-white text-4xl md:text-6xl font-semibold tracking-widest">
  TAWHEED NAZIR 
</h1>
          <p className="text-gray-300 mt-4 text-lg md:text-xl">
            Software Developer · Crafting Luxury <br />
            UI Inspired by Maserati Motors
          </p>
          
        </div>
      </div>

      {/* 🚗 3D CAR SCENE */}
      <div className="car-wrapper absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ fov:2555, near: 0.1, far: 60 }}>
          <Scene />
        </Canvas>
      </div>

    </section>
  );
}