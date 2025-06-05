"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Driven SEO Tool",
    description:
      "Built using Next.js and OpenAI APIs for content strategy automation.",
  },
  {
    title: "Expense Tracker App",
    description:
      "React-based financial tracker with currency support and user profiles.",
  },
  {
    title: "Podcast Platform MVP",
    description:
      "Two-way video/audio podcast recording platform with export options.",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="mb-4 text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Projects
      </motion.h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="rounded-xl bg-white p-6 shadow dark:bg-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          >
            <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
