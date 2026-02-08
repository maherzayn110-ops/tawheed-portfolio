import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center backdrop-blur-md p-10
                   border border-white/10 rounded-xl"
      >
        <h2 className="font-luxury text-4xl mb-6">ABOUT</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a frontend developer currently studying at
          <span className="text-gold"> Sheryians Coding School</span>.
          I specialize in crafting premium, cinematic web experiences
          and I am learning backend technologies like MongoDB.
        </p>
      </motion.div>
    </section>
  );
}
