import Link from "next/link";
import { site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-[var(--background)]/85 backdrop-blur dark:border-neutral-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4" aria-label="Main navigation">
        <Link href="/" className="font-medium tracking-tight">
          {site.name}
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 sm:flex">
            {site.nav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-neutral-950 dark:hover:text-neutral-50">
                {item.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
