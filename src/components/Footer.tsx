"use client";

import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              Hari<span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Computer Science Student & Full Stack Developer passionate
              about building scalable web applications and modern user
              experiences.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#" className="hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#certificates" className="hover:text-cyan-400">
                  Certificates
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Follow Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 p-4 text-2xl transition hover:bg-cyan-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 p-4 text-2xl transition hover:bg-cyan-500"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 p-4 text-2xl transition hover:bg-cyan-500"
              >
                <FaLaptopCode />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-slate-400">
            © 2026 Ramisetty Harisurya. All Rights Reserved.
          </p>

          <a
            href="#"
            className="rounded-full bg-cyan-500 p-3 transition hover:bg-cyan-600"
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}