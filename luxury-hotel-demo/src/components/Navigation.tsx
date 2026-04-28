import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAdmin, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { label: "Residences", href: "/rooms" },
    { label: "Experience", href: "/experience" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          backgroundColor: "rgba(244, 239, 231, 0.92)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          height: "60px",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          <Link
            to="/"
            className="font-['Cormorant_Garamond'] text-[20px] font-normal tracking-tight"
            style={{ color: "#2E2E2E" }}
          >
            Novara
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[12px] font-normal uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-100"
                style={{ color: "#2E2E2E", opacity: 0.7 }}
              >
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className="text-[12px] font-normal uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-100"
                style={{ color: "#C67D5B", opacity: 0.9 }}
              >
                Admin
              </Link>
            )}
            {user ? (
              <button
                onClick={logout}
                className="text-[12px] font-normal uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-100"
                style={{ color: "#2E2E2E", opacity: 0.7 }}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="text-[12px] font-normal uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-100"
                style={{ color: "#2E2E2E", opacity: 0.7 }}
              >
                Sign In
              </Link>
            )}
          </div>

          <button
            className="md:hidden flex flex-col gap-[6px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1} color="#2E2E2E" />
            ) : (
              <Menu size={20} strokeWidth={1} color="#2E2E2E" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "#F4EFE7" }}
        >
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} strokeWidth={1} color="#2E2E2E" />
          </button>
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-['Cormorant_Garamond'] text-[36px] font-light"
              style={{ color: "#2E2E2E" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {isAdmin && (
            <Link
              to="/admin"
              className="font-['Cormorant_Garamond'] text-[36px] font-light"
              style={{ color: "#C67D5B" }}
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          )}
          {user ? (
            <button
              onClick={() => { logout(); setMenuOpen(false); }}
              className="font-['Cormorant_Garamond'] text-[36px] font-light"
              style={{ color: "#2E2E2E" }}
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="font-['Cormorant_Garamond'] text-[36px] font-light"
              style={{ color: "#2E2E2E" }}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </>
  );
}
