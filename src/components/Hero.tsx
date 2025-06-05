import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="flex min-h-screen flex-col items-center justify-center text-center px-4"
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 className="mb-4 text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
        John Doe
      </motion.h1>
      <motion.p className="mb-8 max-w-xl text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        Welcome to my personal website built with Next.js!
      </motion.p>
      <motion.a
        href="#projects"
        className="rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        View Projects
      </motion.a>
    </motion.section>
  );
}
