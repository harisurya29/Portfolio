"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6"
    >
      {/* Background Blur */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-lg text-cyan-400"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-5xl font-extrabold text-white md:text-7xl"
        >
          Ramisetty <br />
          <span className="text-cyan-400">Harisurya</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 text-xl text-slate-300 md:text-3xl"
        >
          Computer Science Student • Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-400"
        >
          Passionate about building modern web applications with Next.js,
          React, TypeScript and creating innovative learning platforms like
          <span className="font-semibold text-cyan-400"> RamiLearn</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600"
          >
            Contact Me
          </a>

          <a
            href="#ramilearn"
            className="rounded-xl border border-cyan-400 px-8 py-4 text-lg font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
          >
            View RamiLearn
          </a>
        </motion.div>
      </div>
    </section>
  );
}