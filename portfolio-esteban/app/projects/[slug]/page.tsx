import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import BackButton from "./BackButton";

import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiNotion,
  SiGithub,
  SiSolidity,
  SiEthereum,
} from "react-icons/si";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* Mapping skill → logo */
const skillIcons: Record<string, any> = {
  Python: SiPython,
  HTML: SiHtml5,
  CSS: SiCss3,
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative py-40">
      <div className="max-w-4xl mx-auto px-6">

        {/* BOUTON RETOUR */}
        <BackButton />

        {/* TITRE */}
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-700 leading-relaxed mb-16">
          {project.description}
        </p>

        {/* COMPÉTENCES */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Compétences & outils mobilisés
          </h2>

          <ul className="flex flex-wrap gap-3">
            {project.skills.map((skill) => {
              const Icon = skillIcons[skill];

              return (
                <li
                  key={skill}
                  className="
                    flex items-center gap-2
                    px-4 py-2 text-sm font-medium
                    rounded-full border
                    bg-gradient-to-br from-gray-100 to-gray-200
                  "
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {skill}
                </li>
              );
            })}
          </ul>
        </section>

        {/* TYPE */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Type de projet
          </h2>
          <p className="text-gray-700">
            {project.type}
          </p>
        </section>

        {/* PDF EMBED */}
        {project.presentationPdf && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">
              Présentation du projet
            </h2>

            <div
              className="
                w-full h-[80vh]
                border rounded-2xl
                overflow-hidden
                shadow-lg
              "
            >
              <iframe
                src={project.presentationPdf}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
