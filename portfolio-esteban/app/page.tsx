"use client";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiNotion,
  SiGithub,
  SiSolidity,
  SiEthereum,
} from "react-icons/si";
const skillIcons: Record<string, any> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Figma: SiFigma,
  Notion: SiNotion,
  GitHub: SiGithub,
  Solidity: SiSolidity,
  Blockchain: SiEthereum,
};

import Image from "next/image";

import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Mail,
  Linkedin,
} from "lucide-react";
import SkillsSection from "./components/SkillsSection";
import { projects } from "./data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section id="about" className="relative py-44">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

        <div className="max-w-6xl mx-auto px-6">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* ===== TEXTE À GAUCHE ===== */}
    <div>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Esteban Videira-Dumont
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.1 }}
        className="text-2xl text-gray-600 mb-10"
      >
        Gestion de projet · Marketing digital · Produits numériques
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="max-w-xl text-lg text-gray-700"
      >
        Étudiant à Epitech Digital School, je conçois et pilote des projets
        digitaux orientés stratégie, performance et expérience utilisateur.
      </motion.p>

      {/* BOUTONS À GAUCHE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="flex gap-4 mt-12"
      >
        <a
          href="#projects"
          className="flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full"
        >
          Voir mes projets <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href="/cv/CV_Esteban_VIDEIRA_DUMONT_2026.pdf"
          download
          className="flex items-center gap-2 px-7 py-3 border border-black rounded-full"
        >
          Télécharger le CV <FileText className="w-4 h-4" />
        </a>
      </motion.div>
    </div>

    {/* ===== PHOTO À DROITE ===== */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.4 }}
      className="flex justify-center md:justify-end"
    >
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border">
        <Image
          src="/profile.jpg"
          alt="Esteban Videira-Dumont"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>

  </div>
</div>

      </section>

      {/* ================= PROJETS ================= */}
            <section id="projects" className="relative py-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16"
          >
            Projets
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {projects.map((project) => (
              <motion.a
                key={project.slug}
                variants={fadeUp}
                href={`/projects/${project.slug}`}
                className="
                  group relative bg-white border rounded-3xl p-8
                  hover:-translate-y-1 hover:shadow-2xl
                  transition-all
                "
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition" />

                <h3 className="relative text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="relative text-gray-600 mb-6">
                  {project.description.slice(0, 140)}…
                </p>

                {/* LOGOS DES COMPÉTENCES */}
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {project.skills.slice(0, 5).map((skill) => {
                    const Icon = skillIcons[skill];

                    return (
                      <span
                        key={skill}
                        className="
                          flex items-center gap-2
                          px-3 py-1 text-xs font-medium
                          rounded-full border bg-gray-100
                        "
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>

                <span className="relative inline-block text-sm font-medium underline">
                  Voir le projet →
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ================= COMPÉTENCES ================= */}
      <SkillsSection />

      {/* ================= CV ================= */}
      <section id="cv" className="relative py-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-14"
          >
            Curriculum Vitae
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white border rounded-3xl shadow-sm p-10"
          >
            <a
              href="/cv/CV_Esteban_VIDEIRA_DUMONT_2026.pdf"
              download
              className="inline-flex items-center gap-2 mb-10 px-7 py-3 bg-black text-white rounded-full"
            >
              Télécharger le CV <FileText className="w-4 h-4" />
            </a>

            <iframe
              src="/cv/CV_Esteban_VIDEIRA_DUMONT_2026.pdf"
              className="w-full h-[720px] rounded-2xl border"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative py-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 via-white to-gray-200" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Me contacter
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-2xl mb-16"
          >
            Intéressé par mon profil ou un projet ?  
            Je suis disponible pour échanger et discuter d’opportunités.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid md:grid-cols-2 gap-10 max-w-3xl"
          >
            <motion.a
              variants={fadeUp}
              href="mailto:esteban.videira@epitech.digital"
              className="
                flex items-center gap-4 bg-white border rounded-3xl p-6
                hover:-translate-y-1 hover:shadow-xl transition-all
              "
            >
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">
                  esteban.videira@epitech.digital
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href="https://www.linkedin.com/in/esteban-videira-dumont-8649a4330"
              target="_blank"
              className="
                flex items-center gap-4 bg-white border rounded-3xl p-6
                hover:-translate-y-1 hover:shadow-xl transition-all
              "
            >
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-600">
                  Profil professionnel
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
