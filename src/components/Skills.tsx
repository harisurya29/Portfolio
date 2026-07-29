"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",    
  "Node.js",
  "Express.js",
  "Python",
  "SQL",
  "MySQL",
  "Machine Learning",
  "Git",
  "GitHub",
  "Power BI",
  "Excel",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold md:text-5xl"
        >
          Technical Skills
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}