"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import type { FootballNavVariant } from "./types";

export type FootballActive =
  | "home"
  | "squad"
  | "fixtures"
  | "club"
  | "contact";

type Props = {
  variant: FootballNavVariant;
  active: FootballActive;
  ctaHref: string;
  ctaLabel?: string;
};

const defaultOrder: { href: string; label: string; key: FootballActive }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/squad", label: "Squad", key: "squad" },
  { href: "/fixtures", label: "Fixtures", key: "fixtures" },
  { href: "/club", label: "The Club", key: "club" },
  { href: "/contact", label: "Contact", key: "contact" },
];

const clubOrder: { href: string; label: string; key: FootballActive }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/fixtures", label: "Fixtures", key: "fixtures" },
  { href: "/squad", label: "Squad", key: "squad" },
  { href: "/club", label: "The Club", key: "club" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export function FootballNav({
  variant,
  active,
  ctaHref,
  ctaLabel = "Buy Tickets",
}: Props) {
  const links = variant === "clubNav" ? clubOrder : defaultOrder;
  const brandPlain = variant === "clubNav";
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
      className={`football-site-nav${open ? " football-site-nav--open" : ""}`}
      aria-label="Primary"
    >
      <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
        <div className="nav-crest">RFC</div>
        {brandPlain ? (
          <span className="nav-name">Redfield FC</span>
        ) : (
          <span className="nav-name">
            Redfield <span>FC</span>
          </span>
        )}
      </Link>
      <ul className="nav-links">
        {links.map((item) => (
          <li key={item.href + item.label}>
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
        className="nav-cta foot-nav-cta-desktop"
        onClick={() => setOpen(false)}
      >
        {ctaLabel}
      </Link>

      <button
        type="button"
        className="nav-menu-toggle"
        aria-expanded={open}
        aria-controls="foot-nav-mobile-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
      </button>

      <div
        id="foot-nav-mobile-panel"
        className="foot-nav-mobile"
        aria-hidden={!open}
      >
        <ul className="foot-nav-mobile-links">
          {links.map((item) => (
            <li key={item.href + item.label + "-m"}>
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
          className="foot-nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          {ctaLabel}
        </Link>
      </div>

      <button
        type="button"
        className={`foot-nav-backdrop${open ? " is-open" : ""}`}
        tabIndex={open ? 0 : -1}
        aria-label="Close menu"
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}
