import type { Metadata } from "next";
import { about } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "A brief introduction to Yixuan Wang.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">About</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Building a long-term digital home.</h1>
      <div className="mt-8 space-y-8 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
        <section>
          <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-neutral-500">Background</h2>
          <p className="mt-3">{about.background}</p>
        </section>
        <section>
          <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-neutral-500">Interests</h2>
          <ul className="mt-3 list-inside list-disc space-y-2">
            {about.interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-neutral-500">Current Focus</h2>
          <p className="mt-3">{about.currentFocus}</p>
        </section>
      </div>
    </div>
  );
}
