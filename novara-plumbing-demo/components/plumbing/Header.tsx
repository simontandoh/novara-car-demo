"use client";

import Link from "next/link";

import { COMPANY_PHONE, COMPANY_PHONE_LINK } from "./content";

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: HeaderProps) {
  return (
    <header>
      <nav aria-label="Primary" className="site-nav">
        <Link href="#top" className="nav-logo" onClick={onCloseMenu}>
          Ironside<span>.</span>
        </Link>

        <ul className="nav-links">
          {links.slice(0, 3).map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="navMobile"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <a href={COMPANY_PHONE_LINK} className="nav-phone">
          <span aria-hidden="true">📞</span>
          {COMPANY_PHONE}
        </a>
      </nav>

      <button
        type="button"
        className={`nav-mobile-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={onCloseMenu}
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        hidden={!menuOpen}
      />

      <nav
        className={`nav-mobile ${menuOpen ? "is-open" : ""}`}
        id="navMobile"
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={onCloseMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href={COMPANY_PHONE_LINK} className="nav-mobile-phone">
          Call {COMPANY_PHONE}
        </a>
        <Link href="#contact" className="nav-mobile-cta" onClick={onCloseMenu}>
          Free quote
        </Link>
      </nav>
    </header>
  );
}
