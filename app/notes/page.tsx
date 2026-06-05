import type { Metadata } from "next";
import { notes } from "@/data/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "A lightweight note archive by Yixuan Wang.",
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Notes</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A small digital garden</h1>
        <p className="mt-5 leading-7 text-neutral-600 dark:text-neutral-400">
          Short notes, references, and observations. Static data is enough for V0; markdown and CMS can wait.
        </p>
      </header>
      <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-[var(--card)] dark:divide-neutral-800 dark:border-neutral-800">
        {notes.map((note) => (
          <article key={note.title} className="p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-xl font-medium tracking-tight">{note.title}</h2>
              <time dateTime={note.date} className="text-sm text-neutral-500">{note.date}</time>
            </div>
            <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">{note.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
