"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Certificate 1",
    issuer: "Issuing Organization",
    date: "2026",
    image: "/certificates/certificate1.jpg",
    link: "#",
  },
  {
    title: "Certificate 2",
    issuer: "Issuing Organization",
    date: "2026",
    image: "/certificates/certificate2.jpg",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Certificates
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Professional certifications and achievements.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-lg"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-slate-300">
                  {certificate.issuer}
                </p>

                <p className="mt-2 text-sm text-cyan-400">
                  {certificate.date}
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-600"
                >
                  View Certificate
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}