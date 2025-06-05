"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 text-center bg-white dark:bg-black"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I specialize in crafting seamless user experiences, powerful automations, and data-driven SEO strategies. With a mix of creativity and technical expertise, I help brands grow smarter.
      </motion.p>
      <motion.ul
        className="mt-6 space-y-2 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <li>🚀 Building responsive websites</li>
        <li>🤖 Automating marketing campaigns</li>
        <li>📈 Optimizing for search engines</li>
      </motion.ul>
    </motion.section>
  );
}
