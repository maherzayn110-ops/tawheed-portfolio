// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section className="min-h-screen flex items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-xl text-center backdrop-blur-md p-10
//                    border border-white/10 rounded-xl"
//       >
//         <h2 className="font-luxury text-4xl mb-6">ABOUT</h2>
//         <p className="text-gray-400 leading-relaxed">
//           I am a frontend developer currently studying at
//           <span className="text-gold"> Sheryians Coding School</span>.
//           I specialize in crafting premium, cinematic web experiences
//           and I am learning backend technologies like MongoDB.
//         </p>
//       </motion.div>
//     </section>
//   );
// }






import { motion } from "framer-motion";
import { useRef,useEffect } from "react";


export default function About() {






  return (
    
    <section className="relative h-screen w-full overflow-hidden">
      

      {/* 🎥 Background Video */}
      <video
       // className="absolute inset-0 w-full h-full object-cover"
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"

        src="/media/hero4.mp4"
        autoPlay
        loop
        muted
        playsInline
        
      />

      {/* 🌫 Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-sm" />

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
      >
        <h2 className="text-5xl md:text-6xl tracking-widest font-light mb-6">
          ABOUT ME
        </h2>

        <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
          I am currently studying at Sheryians Coding School, building
          luxury digital experiences using React and modern frontend
          technologies. I’m also learning backend development with MongoDB
          to become a full-stack engineer.
        </p>
      </motion.div>

    </section>
  );
}
