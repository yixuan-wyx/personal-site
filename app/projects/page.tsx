import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and experiments by Yixuan Wang.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Explorations in progress</h1>
        <p className="mt-5 leading-7 text-neutral-600 dark:text-neutral-400">
          A simple archive of projects, experiments, and systems. These entries are intentionally easy to update from structured data.
        </p>
      </header>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </div>
  );
}
