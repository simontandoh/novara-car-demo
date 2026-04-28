import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const indicator = indicatorRef.current;
    if (!text || !indicator) return;

    text.style.opacity = "0";
    text.style.transform = "translateY(20px)";
    indicator.style.opacity = "0";

    const timer = setTimeout(() => {
      text.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";

      setTimeout(() => {
        indicator.style.transition = "opacity 1s ease-out";
        indicator.style.opacity = "1";
      }, 1500);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / vh, 1);
      const text = textRef.current;
      if (text) {
        text.style.opacity = String(1 - progress * 1.5);
      }
      const indicator = indicatorRef.current;
      if (indicator) {
        indicator.style.opacity = String(Math.max(0, 0.3 - progress));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.75)" }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <h1
          className="font-['Cormorant_Garamond'] font-light text-center"
          style={{
            fontSize: "clamp(48px, 8vw, 72px)",
            color: "#FBF9F6",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Novara
        </h1>
        <p
          className="text-center mt-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            color: "rgba(251, 249, 246, 0.7)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Hotels & Residences
        </p>
      </div>

      <div
        ref={indicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{
          width: "1px",
          height: "40px",
          backgroundColor: "rgba(251, 249, 246, 0.3)",
        }}
      />
    </section>
  );
}
