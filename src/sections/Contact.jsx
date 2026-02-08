import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col
                        items-center justify-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-luxury text-5xl mb-10"
      >
        LET’S CONNECT 
        <h6>It is a project Website</h6>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4 text-gray-300"
      >
        <p>Instagram: <span className="text-gold">@tawheed_08x</span></p>
        <p>Phone: <span className="text-gold">6005330324</span></p>
          <p>E-mail: <span className="text-gold">maherzayn110@gmail.com</span></p>
        <p>Studying at Sheryians Coding School</p>
      </motion.div>
    </section>
  );
}
