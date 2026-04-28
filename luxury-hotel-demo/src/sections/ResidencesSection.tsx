import { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const residences = [
  {
    name: "The Olive Suite",
    desc: "Garden level · 65 sqm",
    image: "/images/residence-1.jpg",
  },
  {
    name: "The Stone Bath",
    desc: "Garden level · 80 sqm",
    image: "/images/residence-2.jpg",
  },
  {
    name: "The Sea Room",
    desc: "Cliffside · 95 sqm",
    image: "/images/residence-3.jpg",
  },
  {
    name: "The Terrace",
    desc: "Penthouse · 120 sqm",
    image: "/images/residence-4.jpg",
  },
  {
    name: "The Passage",
    desc: "Garden level · 70 sqm",
    image: "/images/residence-5.jpg",
  },
];

export default function ResidencesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const title = titleRef.current;
    if (!section || !track) return;

    const cards = track.querySelectorAll(".residence-card");
    const totalWidth = track.scrollWidth - window.innerWidth;

    // Title fade in
    if (title) {
      gsap.fromTo(
        title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    // Horizontal scroll
    const scrollTween = gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // 3D card reveals
    cards.forEach((card) => {
      const inner = card.querySelector(".residence-card-inner");
      if (!inner) return;

      gsap.set(inner, { transformOrigin: "50% 100%" });
      gsap.to(inner, {
        ease: "none",
        startAt: { scale: 1.4, rotateY: 40, opacity: 0 },
        scale: 1,
        rotateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween,
          start: "left right",
          end: "center center",
          scrub: true,
          onLeave: () => gsap.set(inner, { transformOrigin: "50% 0%" }),
        },
      });

      gsap.to(inner, {
        rotateY: -40,
        opacity: 0.3,
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween,
          start: "center center",
          end: "right left",
          scrub: true,
          onEnter: () => gsap.set(inner, { transformOrigin: "50% 0%" }),
          onEnterBack: () => gsap.set(inner, { transformOrigin: "50% 0%" }),
          onLeaveBack: () => gsap.set(inner, { transformOrigin: "50% 100%" }),
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FBF9F6", height: "100vh" }}
    >
      <div
        ref={titleRef}
        className="absolute top-10 left-6 md:left-10 z-10 opacity-0"
      >
        <h2
          className="font-['Cormorant_Garamond'] font-normal text-[32px] md:text-[36px]"
          style={{ color: "#2E2E2E" }}
        >
          The Residences
        </h2>
      </div>

      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-[2.5vw] pl-[5vw]"
        style={{ paddingTop: "80px" }}
      >
        {residences.map((res, i) => (
          <Link
            key={i}
            to="/rooms"
            className="residence-card flex-shrink-0 relative overflow-hidden group"
            style={{
              width: "40vw",
              height: "70vh",
              perspective: "1000px",
            }}
          >
            <div
              className="residence-card-inner w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={res.image}
                alt={res.name}
                className="w-full h-full object-cover transition-all duration-[600ms]"
                style={{
                  filter: "grayscale(100%)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.filter = "grayscale(0%)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.filter = "grayscale(100%)";
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
                }}
              >
                <h3
                  className="font-['Cormorant_Garamond'] text-[24px] md:text-[28px] font-normal"
                  style={{ color: "#FBF9F6" }}
                >
                  {res.name}
                </h3>
                <p
                  className="text-[12px] font-light uppercase tracking-[0.08em] mt-1"
                  style={{ color: "rgba(251, 249, 246, 0.7)", fontFamily: "'Inter', sans-serif" }}
                >
                  {res.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
        <div className="flex-shrink-0" style={{ width: "5vw" }} />
      </div>
    </section>
  );
}
