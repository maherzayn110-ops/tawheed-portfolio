import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SoundControl() {
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sound");
    if (saved === "on") setSoundOn(true);
  }, []);

  const toggleSound = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    localStorage.setItem("sound", newState ? "on" : "off");
  };

  return (
    <motion.button
      onClick={toggleSound}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-50 px-4 py-2 border border-white/30 text-white text-xs tracking-widest backdrop-blur-lg bg-black/40 hover:bg-white hover:text-black transition"
    >
      {soundOn ? "SOUND ON" : "SOUND OFF"}
    </motion.button>
  );
}
