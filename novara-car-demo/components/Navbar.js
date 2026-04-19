import { useState, useEffect } from "react";

const links = [
  { href: "#models", label: "Models" },
  { href: "#features", label: "Technology" },
  { href: "#features", label: "Performance" },
  { href: "#models", label: "About" },
];

export default function Navbar() {
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
    <nav className={`car-site-nav${open ? " car-site-nav--open" : ""}`}>
      <a href="#" className="nav-logo" onClick={() => setOpen(false)}>
        VOR<span>TECH</span>
      </a>

      <ul className="nav-links">
        {links.map((item, i) => (
          <li key={`${item.label}-${i}`}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      <a href="#models" className="nav-cta car-nav-cta-desktop" onClick={() => setOpen(false)}>
        Configure
      </a>

      <button
        type="button"
        className="nav-menu-toggle"
        aria-expanded={open}
        aria-controls="car-nav-mobile"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
      </button>

      <div id="car-nav-mobile" className="car-nav-mobile" aria-hidden={!open}>
        <ul className="car-nav-mobile-links">
          {links.map((item, i) => (
            <li key={`m-${item.label}-${i}`}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#models" className="car-nav-mobile-cta" onClick={() => setOpen(false)}>
          Configure
        </a>
      </div>

      <button
        type="button"
        className={`car-nav-backdrop${open ? " is-open" : ""}`}
        tabIndex={open ? 0 : -1}
        aria-label="Close menu"
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}
