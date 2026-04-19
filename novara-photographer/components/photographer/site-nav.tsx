import Link from "next/link";

type ActivePage = "home" | "portfolio" | "about" | "contact";

type SiteNavProps = {
  active: ActivePage;
};

export function SiteNav({ active }: SiteNavProps) {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <em>Elodie</em> Marsh
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/" className={active === "home" ? "active" : undefined}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={active === "portfolio" ? "active" : undefined}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/about" className={active === "about" ? "active" : undefined}>
            About
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
      <Link href="/contact" className="nav-contact">
        Book a Shoot
      </Link>
    </nav>
  );
}
