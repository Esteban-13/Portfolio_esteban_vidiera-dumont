import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <main className="py-40">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-16">
          Projets
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
                block p-6 rounded-3xl border
                bg-white hover:shadow-xl
                transition
              "
            >
              <h2 className="text-2xl font-semibold mb-2">
                {project.title}
              </h2>

              {/* ✅ DESCRIPTION CORRECTE */}
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <span className="text-sm font-medium text-gray-500">
                {project.type}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
