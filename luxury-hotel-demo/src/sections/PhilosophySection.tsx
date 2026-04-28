import { useEffect, useRef } from "react";
import { Link } from "react-router";

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = imageRef.current;
            if (image) {
              image.style.transition = "clip-path 1.2s cubic-bezier(0.76, 0, 0.24, 1)";
              image.style.clipPath = "inset(0 0% 0 0)";
            }

            textRefs.current.forEach((el, i) => {
              if (el) {
                setTimeout(() => {
                  el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 120);
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const addTextRef = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-[120px] md:py-[120px]"
      style={{ backgroundColor: "#F4EFE7" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-[5%]">
        <div
          ref={imageRef}
          className="w-full md:w-[45%] overflow-hidden"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          <img
            src="/images/philosophy.jpg"
            alt="Novara interior"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <div
            ref={addTextRef}
            className="opacity-0 translate-y-[40px]"
          >
            <span
              className="text-[11px] font-normal uppercase tracking-[0.12em] block mb-6"
              style={{ color: "#8A9B8C", fontFamily: "'Inter', sans-serif" }}
            >
              Our Philosophy
            </span>
          </div>

          <div
            ref={addTextRef}
            className="opacity-0 translate-y-[40px]"
          >
            <h2
              className="font-['Cormorant_Garamond'] font-normal text-[40px] md:text-[48px] mb-8"
              style={{ color: "#2E2E2E", lineHeight: 1.15 }}
            >
              Stillness is the greatest luxury
            </h2>
          </div>

          <div
            ref={addTextRef}
            className="opacity-0 translate-y-[40px]"
          >
            <p
              className="text-[15px] font-light leading-[1.7] mb-4 max-w-[440px]"
              style={{ color: "rgba(46, 46, 46, 0.75)", fontFamily: "'Inter', sans-serif" }}
            >
              Every space at Novara is designed to slow time. We believe the most
              memorable stays are defined not by what is added, but by what is
              removed.
            </p>
          </div>

          <div
            ref={addTextRef}
            className="opacity-0 translate-y-[40px]"
          >
            <p
              className="text-[15px] font-light leading-[1.7] mb-8 max-w-[440px]"
              style={{ color: "rgba(46, 46, 46, 0.75)", fontFamily: "'Inter', sans-serif" }}
            >
              Natural materials, unhurried service, and the quiet rhythm of the
              Mediterranean.
            </p>
          </div>

          <div
            ref={addTextRef}
            className="opacity-0 translate-y-[40px]"
          >
            <Link
              to="/rooms"
              className="inline-block text-[13px] font-normal uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C67D5B]"
              style={{ color: "#C67D5B", fontFamily: "'Inter', sans-serif" }}
            >
              Explore Residences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
