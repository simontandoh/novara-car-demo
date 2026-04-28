import { useEffect, useRef } from "react";

const features = [
  {
    title: "Private Beach Access",
    desc: "A cove reserved for twelve guests. Water so clear it changes color by the hour.",
    image: "/images/experience-beach.jpg",
    layout: "full",
  },
  {
    title: "In-Residence Dining",
    desc: "Seasonal menus prepared in your kitchen by our private chefs. Ingredients from the region's oldest farms.",
    image: "/images/experience-dining.jpg",
    layout: "split-right",
  },
  {
    title: "Wellness Studio",
    desc: "Morning yoga facing the sea, afternoon treatments with local botanicals, evening meditation under the stars.",
    image: "/images/residence-2.jpg",
    layout: "split-left",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            const img = el.querySelector(".exp-image") as HTMLElement;
            const texts = el.querySelectorAll(".exp-text");

            if (img) {
              img.style.transition = "clip-path 1s cubic-bezier(0.76, 0, 0.24, 1)";
              img.style.clipPath = "inset(0% 0 0 0)";
            }

            texts.forEach((t, i) => {
              setTimeout(() => {
                (t as HTMLElement).style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                (t as HTMLElement).style.opacity = "1";
                (t as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addItemRef = (el: HTMLDivElement | null) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-[120px]"
      style={{ backgroundColor: "#F4EFE7" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[80px]">
          <span
            className="text-[11px] font-normal uppercase tracking-[0.12em] block mb-4"
            style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
          >
            The Experience
          </span>
          <h2
            className="font-['Cormorant_Garamond'] font-light text-[40px] md:text-[56px]"
            style={{ color: "#2E2E2E", lineHeight: 1.1 }}
          >
            Arrive. Breathe. Stay.
          </h2>
        </div>

        <div className="flex flex-col gap-[80px]">
          {features.map((feat, i) => (
            <div
              key={i}
              ref={addItemRef}
              className={`flex flex-col ${
                feat.layout === "split-right"
                  ? "md:flex-row"
                  : feat.layout === "split-left"
                  ? "md:flex-row-reverse"
                  : ""
              } gap-8 md:gap-12 items-center`}
            >
              <div
                className={`exp-image overflow-hidden ${
                  feat.layout === "full" ? "w-full" : "w-full md:w-1/2"
                }`}
                style={{ clipPath: "inset(100% 0 0 0)" }}
              >
                <img
                  src={feat.image}
                  alt={feat.title}
                  className={`w-full object-cover ${
                    feat.layout === "full" ? "h-[50vh]" : "h-[400px]"
                  }`}
                />
              </div>
              <div
                className={`${
                  feat.layout === "full"
                    ? "w-full mt-6"
                    : "w-full md:w-1/2"
                }`}
              >
                <h3
                  className="exp-text font-['Cormorant_Garamond'] text-[24px] md:text-[28px] font-normal mb-4 opacity-0 translate-y-[40px]"
                  style={{ color: "#2E2E2E" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="exp-text text-[15px] font-light leading-[1.7] opacity-0 translate-y-[40px]"
                  style={{ color: "rgba(46, 46, 46, 0.75)", fontFamily: "'Inter', sans-serif" }}
                >
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
