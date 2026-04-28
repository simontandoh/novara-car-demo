import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const col1Images = [
  { src: "/images/gallery-1.jpg", aspect: "tall" },
  { src: "/images/residence-4.jpg", aspect: "wide" },
  { src: "/images/residence-5.jpg", aspect: "tall" },
];

const col2Images = [
  { src: "/images/gallery-3.jpg", aspect: "wide" },
  { src: "/images/philosophy.jpg", aspect: "tall" },
  { src: "/images/experience-beach.jpg", aspect: "wide" },
  { src: "/images/residence-3.jpg", aspect: "tall" },
];

const col3Images = [
  { src: "/images/residence-2.jpg", aspect: "tall" },
  { src: "/images/gallery-5.jpg", aspect: "wide" },
  { src: "/images/experience-dining.jpg", aspect: "tall" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${section.offsetHeight}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      });

      // Parallax columns
      const speeds = [-200, -100, -150];
      colsRef.current.forEach((col, i) => {
        if (!col) return;
        const imgs = col.querySelectorAll("img");
        imgs.forEach((img) => {
          gsap.to(img, {
            y: () => (1 - Math.abs(speeds[i]) / 200) * ScrollTrigger.maxScroll(window) * -0.15,
            ease: "none",
            scrollTrigger: {
              trigger: col,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const addColRef = (el: HTMLDivElement | null, i: number) => {
    if (el) colsRef.current[i] = el;
  };

  const renderCol = (images: { src: string; aspect: string }[], index: number) => (
    <div
      key={index}
      ref={(el) => addColRef(el, index)}
      className="flex flex-col gap-6"
      style={{ width: "30%" }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="overflow-hidden"
          style={{
            height: img.aspect === "tall" ? "45vh" : "30vh",
          }}
        >
          <img
            src={img.src}
            alt="Gallery"
            className="w-full h-full object-cover transition-transform duration-[800ms] hover:scale-105"
            style={{ transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)" }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#1A1A1A", minHeight: "100vh" }}
    >
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2
          className="font-['Cormorant_Garamond'] font-light text-[48px] md:text-[64px] text-center"
          style={{
            color: "#FBF9F6",
            mixBlendMode: "difference",
          }}
        >
          A Private World
        </h2>
      </div>

      <div className="flex justify-between gap-6 px-6 py-[120px]">
        {renderCol(col1Images, 0)}
        {renderCol(col2Images, 1)}
        {renderCol(col3Images, 2)}
      </div>
    </section>
  );
}
