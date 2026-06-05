import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { focusAreas, site } from "@/data/site";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      <section className="flex min-h-[58vh] flex-col items-center justify-center text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-500">Personal Lab</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{site.name}</h1>
        <div className="mt-6 space-y-1 text-2xl text-neutral-700 dark:text-neutral-300 sm:text-3xl">
          {site.roleLines.map((line) => <p key={line}>{line}</p>)}
        </div>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">{site.description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/projects" className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-neutral-50 transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-300">
            View Projects
          </Link>
          <Link href="/notes" className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-neutral-950 dark:border-neutral-700 dark:hover:border-neutral-100">
            Notes
          </Link>
        </div>
      </section>

      <section className="py-10" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="text-2xl font-semibold tracking-tight">Current Focus</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-neutral-200 bg-[var(--card)] p-5 dark:border-neutral-800">
              <h3 className="font-medium">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10" aria-labelledby="featured-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured-heading" className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">All projects →</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="py-10" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {site.contacts.map((contact) => (
            <a key={contact.label} href={contact.href} className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:text-neutral-50">
              {contact.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
