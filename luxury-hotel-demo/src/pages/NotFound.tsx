import { Link } from "react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <GrainOverlay />
      <Navigation />
      <main className="flex items-center justify-center" style={{ minHeight: "60vh", backgroundColor: "#F4EFE7" }}>
        <div className="text-center">
          <h1
            className="font-['Cormorant_Garamond'] font-light text-[64px] md:text-[96px] mb-4"
            style={{ color: "#2E2E2E", letterSpacing: "-0.03em" }}
          >
            404
          </h1>
          <p
            className="text-[15px] font-light mb-8"
            style={{ color: "rgba(46, 46, 46, 0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            This page does not exist.
          </p>
          <Link
            to="/"
            className="text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B]"
            style={{ color: "#C67D5B", fontFamily: "'Inter', sans-serif" }}
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
