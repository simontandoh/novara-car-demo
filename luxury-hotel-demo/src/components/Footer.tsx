import { Link } from "react-router";

export default function Footer() {
  const links = [
    { label: "Philosophy", href: "/" },
    { label: "Residences", href: "/rooms" },
    { label: "Gallery", href: "/gallery" },
    { label: "Experience", href: "/experience" },
  ];

  return (
    <footer className="w-full" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          to="/"
          className="font-['Cormorant_Garamond'] text-[18px] font-normal"
          style={{ color: "#FBF9F6" }}
        >
          Novara Hotels & Residences
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[12px] font-normal uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-100"
              style={{ color: "#FBF9F6", opacity: 0.6 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span
          className="text-[12px] font-light"
          style={{ color: "#FBF9F6", opacity: 0.4 }}
        >
          &copy; 2026 Novara
        </span>
      </div>
    </footer>
  );
}
