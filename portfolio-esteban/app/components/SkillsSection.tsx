"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNotion,
} from "react-icons/si";

import {
  Briefcase,
  Users,
  Award,
} from "lucide-react";

/* ================= TYPES ================= */

type Skill = {
  label: string;
  icon?: IconType;
};

type SkillSection = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

/* ================= ANIMATIONS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const badge = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

/* ================= DATA ================= */

const skillSections: SkillSection[] = [
  {
    title: "Gestion & Organisation",
    icon: Briefcase,
    skills: [
      { label: "Gestion de projet" },
      { label: "Gestion d’équipe" },
      { label: "Budgétisation" },
      { label: "Études de marché" },
      { label: "Gestion du temps" },
    ],
  },
  {
    title: "Communication",
    icon: Users,
    skills: [
      { label: "Communication écrite et orale" },
      { label: "Présentations" },
      { label: "Adaptabilité" },
      { label: "Autonomie" },
      { label: "Travail en équipe" },
    ],
  },
  {
    title: "Technologies",
    icon: Award,
    skills: [
      { label: "Python", icon: SiPython },
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss3 },
      { label: "JavaScript", icon: SiJavascript },
      { label: "React.js", icon: SiReact },
    ],
  },
  {
    title: "Design & Création",
    icon: Award,
    skills: [
      { label: "Figma", icon: SiFigma },
      { label: "Canva", icon: SiCanva },
      { label: "Photoshop", icon: SiAdobephotoshop },
      { label: "Illustrator", icon: SiAdobeillustrator },
    ],
  },
  {
    title: "Productivité",
    icon: Award,
    skills: [
      { label: "Notion", icon: SiNotion },
    ],
  },
  {
    title: "Rôle & Représentation",
    icon: Award,
    skills: [
      { label: "Ambassadeur académique" },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-40">
      {/* FOND FULL WIDTH */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-100 via-white to-gray-50" />

      {/* CONTENU CENTRÉ */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-16"
        >
          Compétences
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {skillSections.map((section) => {
            const SectionIcon = section.icon;

            return (
              <motion.div
                key={section.title}
                variants={card}
                className="
                  bg-white border rounded-3xl p-8
                  shadow-sm hover:shadow-xl
                  transition-all
                "
              >
                {/* HEADER CARTE */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white">
                    <SectionIcon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {section.title}
                  </h3>
                </div>

                {/* BADGES */}
                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.span
                        key={skill.label}
                        variants={badge}
                        whileHover={{ scale: 1.05 }}
                        className="
                          flex items-center gap-2
                          px-4 py-2 text-sm font-medium
                          rounded-full border
                          bg-gradient-to-br from-gray-100 to-gray-200
                          hover:from-black hover:to-black hover:text-white
                          transition
                        "
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {skill.label}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
