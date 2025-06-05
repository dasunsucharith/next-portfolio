"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center p-6"
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi, I’m Dasun Sucharith
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Marketing Automation Developer | SEO Strategist | AI Enthusiast — Building clever, fast, and future-ready web experiences.
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        View My Work
      </motion.a>
    </motion.section>
  );
}
