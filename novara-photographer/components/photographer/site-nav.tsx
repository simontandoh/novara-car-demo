"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ActivePage = "home" | "portfolio" | "about" | "contact";

type SiteNavProps = {
  active: ActivePage;
};

const links: { href: string; label: string; key: ActivePage }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/portfolio", label: "Portfolio", key: "portfolio" },
  { href: "/about", label: "About", key: "about" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export function SiteNav({ active }: SiteNavProps) {
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
      className={`photo-site-nav${open ? " photo-site-nav--open" : ""}`}
      aria-label="Primary"
    >
      <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
        <em>Elodie</em> Marsh
      </Link>
      <ul className="nav-links">
        {links.map((item) => (
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
        href="/contact"
        className="nav-contact photo-nav-cta-desktop"
        onClick={() => setOpen(false)}
      >
        Book a Shoot
      </Link>

      <button
        type="button"
        className="nav-menu-toggle"
        aria-expanded={open}
        aria-controls="photo-nav-mobile-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
      </button>

      <div
        id="photo-nav-mobile-panel"
        className="photo-nav-mobile"
        aria-hidden={!open}
      >
        <ul className="photo-nav-mobile-links">
          {links.map((item) => (
            <li key={`${item.key}-m`}>
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
          href="/contact"
          className="photo-nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Book a Shoot
        </Link>
      </div>

      <button
        type="button"
        className={`photo-nav-backdrop${open ? " is-open" : ""}`}
        tabIndex={open ? 0 : -1}
        aria-label="Close menu"
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}
