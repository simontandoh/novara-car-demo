import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="m-0">{siteConfig.footer.tagline}</p>
        <ul className="m-0 flex list-none gap-6 p-0">
          {siteConfig.footer.legal.map((item) => (
            <li key={item.href}>
              <Link className="transition-colors hover:text-foreground" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
