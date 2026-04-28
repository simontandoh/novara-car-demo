import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Terraced hillsides" },
  { src: "/images/residence-1.jpg", alt: "Olive Suite" },
  { src: "/images/gallery-3.jpg", alt: "Coastal waters" },
  { src: "/images/philosophy.jpg", alt: "Stone interior" },
  { src: "/images/gallery-5.jpg", alt: "Aerial coastline" },
  { src: "/images/experience-dining.jpg", alt: "Terrace dining" },
  { src: "/images/residence-3.jpg", alt: "Sea Room" },
  { src: "/images/experience-beach.jpg", alt: "Private cove" },
  { src: "/images/residence-4.jpg", alt: "Terrace" },
  { src: "/images/residence-2.jpg", alt: "Stone Bath" },
  { src: "/images/residence-5.jpg", alt: "Passage" },
  { src: "/images/contact-aerial.jpg", alt: "Aerial property" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gridRefs = useRef<HTMLDivElement[]>([]);

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

    gridRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox((prev) => (prev === null ? null : prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === "ArrowRight") setLightbox((prev) => (prev === null ? null : prev < images.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i === null ? null : i > 0 ? i - 1 : images.length - 1));
  const next = () => setLightbox((i) => (i === null ? null : i < images.length - 1 ? i + 1 : 0));

  return (
    <div className="relative">
      <GrainOverlay />
      <Navigation />
      <main>
        <section
          className="w-full flex items-end justify-center pb-12"
          style={{ height: "40vh", backgroundColor: "#1A1A1A" }}
        >
          <div className="text-center">
            <h1
              className="font-['Cormorant_Garamond'] font-light text-[48px] md:text-[72px]"
              style={{ color: "#FBF9F6", letterSpacing: "-0.03em" }}
            >
              Gallery
            </h1>
            <p
              className="text-[12px] font-light uppercase tracking-[0.12em] mt-4"
              style={{ color: "rgba(251, 249, 246, 0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              Moments of stillness
            </p>
          </div>
        </section>

        <section className="w-full py-[80px] md:py-[120px]" style={{ backgroundColor: "#F4EFE7" }}>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {images.map((img, i) => (
                <div
                  key={i}
                  ref={(el) => { if (el) gridRefs.current[i] = el; }}
                  className="break-inside-avoid mb-6 opacity-0 translate-y-[40px] cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-[800ms] hover:scale-[1.02]"
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.92)" }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 p-2 z-10"
            onClick={closeLightbox}
          >
            <X size={24} strokeWidth={1} color="#FBF9F6" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2 z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={32} strokeWidth={1} color="#FBF9F6" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={32} strokeWidth={1} color="#FBF9F6" />
          </button>

          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
