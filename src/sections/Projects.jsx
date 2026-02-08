import { motion } from "framer-motion";

const projects = [
  "Luxury Landing Page",
  "Animated Portfolio",
  "3D UI Experiment",
  "React Dashboard",
];

export default function Projects() {
  return (
    <section className="h-screen flex items-center overflow-x-hidden">
      <motion.div
        className="flex gap-20 px-20"
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="min-w-[350px] h-[450px]
                       bg-white/5 backdrop-blur-xl
                       border border-white/10 rounded-3xl
                       flex items-center justify-center text-xl"
          >
            {project}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
