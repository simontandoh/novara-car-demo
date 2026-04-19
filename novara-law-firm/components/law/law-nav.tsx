import Link from "next/link";

type ActiveRoute = "home" | "services" | "team" | "contact";

type LawNavProps = {
  active: ActiveRoute;
  ctaHref: string;
};

export function LawNav({ active, ctaHref }: LawNavProps) {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        Hale <span>&</span> Partners
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/" className={active === "home" ? "active" : undefined}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={active === "services" ? "active" : undefined}
          >
            Services
          </Link>
        </li>
        <li>
          <Link href="/team" className={active === "team" ? "active" : undefined}>
            Our Team
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={active === "contact" ? "active" : undefined}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link href={ctaHref} className="nav-cta">
        Free Consultation
      </Link>
    </nav>
  );
}
