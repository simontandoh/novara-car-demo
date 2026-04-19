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

  return (
    <nav>
      <Link href="/" className="nav-brand">
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
      <Link href={ctaHref} className="nav-cta">
        {ctaLabel}
      </Link>
    </nav>
  );
}
