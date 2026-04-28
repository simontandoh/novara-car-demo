import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const rooms = [
  {
    name: "The Olive Suite",
    desc: "Garden level residence with private courtyard, raw stone walls, and linen-draped platform bed. Morning light filters through olive branches.",
    size: "65 sqm",
    guests: "2",
    image: "/images/residence-1.jpg",
  },
  {
    name: "The Stone Bath",
    desc: "A sanctuary centered around a freestanding stone tub beneath a skylight. Natural materials and absolute privacy.",
    size: "80 sqm",
    guests: "2",
    image: "/images/residence-2.jpg",
  },
  {
    name: "The Sea Room",
    desc: "Cliffside living with an open fireplace and floor-to-ceiling glass. The horizon is your only neighbor.",
    size: "95 sqm",
    guests: "2-3",
    image: "/images/residence-3.jpg",
  },
  {
    name: "The Terrace",
    desc: "Penthouse residence with expansive outdoor living, woven seating, and views that stretch to the horizon.",
    size: "120 sqm",
    guests: "2-4",
    image: "/images/residence-4.jpg",
  },
  {
    name: "The Passage",
    desc: "An intimate retreat entered through a private stone corridor. Warm indirect light and curated art.",
    size: "70 sqm",
    guests: "2",
    image: "/images/residence-5.jpg",
  },
];

export default function Rooms() {
  const [hovered, setHovered] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <GrainOverlay />
      <Navigation />
      <main>
        <section
          className="w-full flex items-end justify-center pb-12"
          style={{ height: "50vh", backgroundColor: "#1A1A1A" }}
        >
          <div className="text-center">
            <h1
              className="font-['Cormorant_Garamond'] font-light text-[48px] md:text-[72px]"
              style={{ color: "#FBF9F6", letterSpacing: "-0.03em" }}
            >
              The Residences
            </h1>
            <p
              className="text-[12px] font-light uppercase tracking-[0.12em] mt-4"
              style={{ color: "rgba(251, 249, 246, 0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              Five spaces. One philosophy.
            </p>
          </div>
        </section>

        <section className="w-full py-[100px]" style={{ backgroundColor: "#F4EFE7" }}>
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-[60px]">
            {rooms.map((room, i) => (
              <div
                key={i}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center opacity-0 translate-y-[40px]`}
              >
                <div
                  className="w-full md:w-1/2 overflow-hidden"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-[800ms]"
                    style={{
                      filter: hovered === i ? "grayscale(0%)" : "grayscale(30%)",
                      transform: hovered === i ? "scale(1.03)" : "scale(1)",
                      transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span
                    className="text-[11px] font-normal uppercase tracking-[0.12em] block mb-4"
                    style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
                  >
                    {room.size} · {room.guests} guests
                  </span>
                  <h2
                    className="font-['Cormorant_Garamond'] text-[32px] md:text-[40px] font-normal mb-6"
                    style={{ color: "#2E2E2E", lineHeight: 1.15 }}
                  >
                    {room.name}
                  </h2>
                  <p
                    className="text-[15px] font-light leading-[1.7] mb-8 max-w-[440px]"
                    style={{ color: "rgba(46, 46, 46, 0.75)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {room.desc}
                  </p>
                  <Link
                    to="/booking"
                    className="inline-block text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B]"
                    style={{ color: "#C67D5B", fontFamily: "'Inter', sans-serif" }}
                  >
                    Reserve This Residence
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
