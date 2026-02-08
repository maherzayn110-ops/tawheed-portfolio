// import { useEffect } from "react";
// //import Lenis from "@studio-freight/lenis";
// import Lenis from "lenis";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Skills from "./sections/Skills";
// import Projects from "./sections/Projects.";
// import Contact from "./sections/Contact";

// function App() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//       lerp: 0.08,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   return (
//     <>
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </>
//   );
// }

// export default App;
import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}