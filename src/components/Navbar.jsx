// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50">
//         <h5 className="text-white text-xl tracking-widest font-light">
        
//         </h5>

//         {/* Hamburger */}
//         <div
//           className="cursor-pointer space-y-2"
//           onClick={() => setOpen(!open)}
//         >
//           <span className="block w-8 h-[2px] bg-white"></span>
//           <span className="block w-8 h-[2px] bg-white"></span>
//           <span className="block w-8 h-[2px] bg-white"></span>
//         </div>
//       </div>

//       {/* Slide Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.6 }}
//             className="fixed top-0 right-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white z-40"
//           >
//             <ul className="space-y-8 text-3xl tracking-widest">
//               <li className="hover:text-gray-400 cursor-pointer">Home</li>
//               <li className="hover:text-gray-400 cursor-pointer">About</li>
//               <li className="hover:text-gray-400 cursor-pointer">Skills</li>
//               <li className="hover:text-gray-400 cursor-pointer">Projects</li>
//               <li className="hover:text-gray-400 cursor-pointer">Contact</li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }






import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const audio = new Audio("/media/engine.mp3");
      audio.volume = 0.4;
      audio.play();
    }
  }, [open]);

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

useEffect(() => {
  const handleMouseMove = (e) => {
    const glow = document.querySelector(".bg-white\\/5");
    if (!glow) return;
    glow.style.transform = `translate(${e.clientX * 0.02}px, ${e.clientY * 0.02}px)`;
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);


// useEffect(() => {
//   const soundEnabled = localStorage.getItem("sound") === "on";
//   if (open && soundEnabled) {
//     const audio = new Audio("/media/hero4.mp3");
//     audio.volume = 0.4;
//     audio.play();
//   }
  
// }, [open]);

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50">
        <h1 className="text-white tracking-widest">
        21 Oct
        </h1>

        {/* Animated Hamburger */}
        <div
          className="cursor-pointer relative w-8 h-6"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="absolute w-8 h-[2px] bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-8 h-[2px] bg-white top-2"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="absolute w-8 h-[2px] bg-white top-4"
          />
        </div>
      </div>

      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center backdrop-blur-2xl bg-black/70"
          >
            {/* Parallax background glow */}
            <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" />

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="relative z-10 space-y-8 text-4xl tracking-widest text-white"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className="cursor-pointer hover:text-gray-400 transition"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}









