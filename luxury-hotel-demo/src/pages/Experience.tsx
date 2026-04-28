import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const experiences = [
  {
    title: "Private Beach Access",
    subtitle: "The Cove",
    desc: "A secluded inlet reserved for a maximum of twelve guests at any time. The water shifts from pale jade to deep turquoise through the course of the day. Limestone shelves provide natural seating. No music, no service staff unless requested. Just the sound of water and the warmth of stone.",
    image: "/images/experience-beach.jpg",
  },
  {
    title: "In-Residence Dining",
    subtitle: "The Kitchen",
    desc: "Our chefs arrive with ingredients from farms that have been in the same families for generations. Menus are composed around what the land offers that week. Meals are prepared in your residence kitchen and served at your table. No restaurant. No menu cards. Just food that tastes like where you are.",
    image: "/images/experience-dining.jpg",
  },
  {
    title: "Wellness Studio",
    subtitle: "The Studio",
    desc: "Morning movement facing the sea. Afternoon treatments using botanicals gathered from the surrounding hills. Evening meditation as the light leaves the water. The studio is open to the air on two sides. There are no memberships, no packages, no retail products. Only time, space, and someone who knows how to hold both.",
    image: "/images/residence-2.jpg",
  },
  {
    title: "The Library",
    subtitle: "Stillness",
    desc: "A single room with stone walls, a wood-burning hearth, and a collection of books chosen for depth rather than novelty. No phones. No laptops. Tea is brought once in the morning and once in the afternoon. The rest is yours.",
    image: "/images/philosophy.jpg",
  },
];

export default function Experience() {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            const img = el.querySelector(".exp-img") as HTMLElement;
            const texts = el.querySelectorAll(".exp-txt");

            if (img) {
              img.style.transition = "clip-path 1s cubic-bezier(0.76, 0, 0.24, 1)";
              img.style.clipPath = "inset(0% 0 0 0)";
            }
            texts.forEach((t, i) => {
              setTimeout(() => {
                (t as HTMLElement).style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                (t as HTMLElement).style.opacity = "1";
                (t as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
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
              The Experience
            </h1>
            <p
              className="text-[12px] font-light uppercase tracking-[0.12em] mt-4"
              style={{ color: "rgba(251, 249, 246, 0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              What happens when nothing is scheduled
            </p>
          </div>
        </section>

        <section className="w-full py-[100px]" style={{ backgroundColor: "#F4EFE7" }}>
          <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-[100px]">
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={(el) => { if (el) itemsRef.current[i] = el; }}
                className="flex flex-col gap-8"
              >
                <div
                  className="exp-img overflow-hidden"
                  style={{ clipPath: "inset(100% 0 0 0)" }}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-[50vh] object-cover"
                  />
                </div>
                <div className="max-w-[700px]">
                  <span
                    className="exp-txt text-[11px] font-normal uppercase tracking-[0.12em] block mb-3 opacity-0 translate-y-[40px]"
                    style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.subtitle}
                  </span>
                  <h2
                    className="exp-txt font-['Cormorant_Garamond'] text-[32px] md:text-[40px] font-normal mb-6 opacity-0 translate-y-[40px]"
                    style={{ color: "#2E2E2E", lineHeight: 1.15 }}
                  >
                    {exp.title}
                  </h2>
                  <p
                    className="exp-txt text-[15px] font-light leading-[1.7] opacity-0 translate-y-[40px]"
                    style={{ color: "rgba(46, 46, 46, 0.75)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.desc}
                  </p>
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
