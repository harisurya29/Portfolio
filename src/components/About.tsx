"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold md:text-5xl"
        >
          About Me
        </motion.h2>

        <div className="grid items-center gap-12 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-2xl">
                <Image
                    src="/profile/profile.jpg"
                    alt="Ramisetty Harisurya"
                    fill
                    className="object-cover"
                    priority
                />
                </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold">
              Ramisetty Harisurya
            </h3>

            <p className="mb-4 text-lg leading-8 text-slate-300">
              I am a Computer Science Engineering student passionate about
              Full Stack Web Development, modern UI/UX, and building scalable
              applications using React, Next.js, TypeScript, and Node.js.
            </p>

            <p className="mb-8 text-lg leading-8 text-slate-300">
              My primary project is <span className="font-semibold text-cyan-400">RamiLearn</span>,
              an online learning platform designed to help students learn
              through structured courses and interactive experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-slate-900 p-5">
                <h4 className="text-cyan-400 font-semibold">Education</h4>
                <p className="mt-2 text-slate-300">
                  B.Tech CSE
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-5">
                <h4 className="text-cyan-400 font-semibold">Experience</h4>
                <p className="mt-2 text-slate-300">
                  Full Stack Developer
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-5">
                <h4 className="text-cyan-400 font-semibold">Location</h4>
                <p className="mt-2 text-slate-300">
                  Andhra Pradesh, India
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-5">
                <h4 className="text-cyan-400 font-semibold">Focus</h4>
                <p className="mt-2 text-slate-300">
                  Web Development
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}