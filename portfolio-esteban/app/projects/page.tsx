import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Projets</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="border p-6 rounded-md hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600">{project.context}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
