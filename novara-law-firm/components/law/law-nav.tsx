"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ActiveRoute = "home" | "services" | "team" | "contact";

type LawNavProps = {
  active: ActiveRoute;
  ctaHref: string;
};

const routes: { href: string; label: string; key: ActiveRoute }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/team", label: "Our Team", key: "team" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export function LawNav({ active, ctaHref }: LawNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <nav
      className={`law-site-nav${open ? " law-site-nav--open" : ""}`}
      aria-label="Primary"
    >
      <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
        Hale <span>&</span> Partners
      </Link>

      <ul className="nav-links">
        {routes.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className={active === item.key ? "active" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className="nav-cta law-nav-cta-desktop"
        onClick={() => setOpen(false)}
      >
        Free Consultation
      </Link>

      <button
        type="button"
        className="nav-menu-toggle"
        aria-expanded={open}
        aria-controls="law-nav-mobile-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
      </button>

      <div
        id="law-nav-mobile-panel"
        className="law-nav-mobile"
        aria-hidden={!open}
      >
        <ul className="law-nav-mobile-links">
          {routes.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={active === item.key ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className="law-nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Free Consultation
        </Link>
      </div>

      <button
        type="button"
        className={`law-nav-backdrop${open ? " is-open" : ""}`}
        tabIndex={open ? 0 : -1}
        aria-label="Close menu"
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}
