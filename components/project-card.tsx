import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-[var(--card)] p-5 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
        <span className="shrink-0 rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          {project.status}
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
            {tag}
          </span>
        ))}
      </div>
      {project.href ? (
        <a href={project.href} className="mt-5 text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-100" aria-label={`Open ${project.title}`}>
          View project →
        </a>
      ) : null}
    </article>
  );
}
