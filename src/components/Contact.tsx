"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Contact Me
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Feel free to connect with me for internships, collaborations,
            projects, or exciting opportunities.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="flex items-center gap-5 rounded-2xl bg-slate-900 p-5">
              <Mail className="text-cyan-400" size={24} />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p>harisurya2979@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-slate-900 p-5">
              <Phone className="text-cyan-400" size={24} />
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p>+91 9059460735</p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-slate-900 p-5">
              <MapPin className="text-cyan-400" size={24} />
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p>Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="mb-4 text-xl font-semibold">
                Connect With Me
              </h3>

              <div className="flex gap-4">

                <a
                  href="https://github.com/harisurya29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-slate-900 p-4 text-2xl transition hover:bg-cyan-500"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/hari-surya-ramisetty-927036352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-slate-900 p-4 text-2xl transition hover:bg-cyan-500"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://leetcode.com/u/HskYfJg9HY/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-slate-900 p-4 text-2xl transition hover:bg-cyan-500"
                >
                  <FaLaptopCode />
                </a>

              </div>

              <a
                href="/resume/resume.pdf"
                target="_blank"
                className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-900 p-8"
          >

            <h3 className="mb-6 text-2xl font-bold">
              Send a Message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <button
                className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-semibold transition hover:bg-cyan-600"
              >
                Send Message
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}