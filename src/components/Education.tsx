"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Technology (CSE)",
    institute: "Vignan Foundation for Science, Technology & Research",
    description:
      "Pursuing Computer Science Engineering with a strong focus on Full Stack Development, Data Structures, Databases, and Artificial Intelligence.",
  },
  {
    year: "2021 - 2023",
    title: "Intermediate (MPC)",
    institute: "Sri Chaitanya Junior College",
    description:
      "Completed Intermediate with Mathematics, Physics, and Chemistry.",
  },
  {
    year: "2020 - 2021",
    title: "SSC",
    institute: "Oxford Concept School",
    description:
      "Successfully completed Secondary School Education with excellent academic performance.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold md:text-5xl"
        >
          Education
        </motion.h2>

        <div className="relative border-l-2 border-cyan-500 pl-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="absolute -left-[41px] top-2 h-5 w-5 rounded-full bg-cyan-500"></div>

              <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
                <span className="text-sm font-semibold text-cyan-400">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.title}
                </h3>

                <h4 className="mt-2 text-lg text-slate-300">
                  {item.institute}
                </h4>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}