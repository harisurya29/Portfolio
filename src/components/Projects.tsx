"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Drizzle ORM",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#020617] py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            A showcase of my development work.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0F172A] shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left Side - Screenshot */}
            <div className="flex items-center justify-center bg-slate-950 p-8">
              <Image
                src="/projects/ramilearn/ramilearn.jpg"
                alt="RamiLearn Project"
                width={900}
                height={500}
                priority
                className="rounded-2xl shadow-2xl object-contain transition duration-500 hover:scale-105"
              />
            </div>

            {/* Right Side - Details */}
            <div className="flex flex-col justify-center p-10">

              <span className="w-fit rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
                ⭐ Featured Project
              </span>

              <h3 className="mt-6 text-4xl font-bold">
                RamiLearn
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                RamiLearn is a modern Learning Management System built using
                Next.js, TypeScript, PostgreSQL and Drizzle ORM. It provides
                students with online courses, assessments, certificates,
                dashboards and progress tracking while trainers and
                administrators can efficiently manage learning content.
              </p>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex gap-4">

                <a
                  href="#"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}