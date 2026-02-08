import { motion } from "framer-motion";

const skills = [
  { title: "HTML", level: "Expert" },
  { title: "CSS", level: "Expert" },
  { title: "JavaScript", level: "Advanced" },
  { title: "React", level: "Advanced" },
  { title: "Node.js", level: "Learning" },
  { title: "MongoDB", level: "Learning" },
];

export default function Skills() {
  return (
    <section className="min-h-screen py-32 px-10">
      <h2 className="font-luxury text-5xl text-center mb-20">
        ENGINE SPECS/SKILLS
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -15,
              rotateX: 8,
              rotateY: -8,
              boxShadow: "0px 30px 80px rgba(200,169,81,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-8 border border-white/10 rounded-2xl
                       bg-white/5 backdrop-blur-lg"
          >
            <h3 className="text-2xl mb-3">{skill.title}</h3>
            <p className="text-gold">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
