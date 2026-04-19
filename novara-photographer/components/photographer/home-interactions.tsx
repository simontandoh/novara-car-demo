"use client";

import { useEffect } from "react";

const TESTIMONIALS = [
  {
    quote:
      "\"Elodie has a rare gift for making you feel completely at ease, and then capturing something far more beautiful than you imagined possible.\"",
    name: "Isabelle & Marcus Alderton · Wedding Clients, 2024",
  },
  {
    quote:
      "\"Working with Elodie on our SS25 campaign was effortless. She understood the brief instantly and brought something we didn't even know we were looking for.\"",
    name: "Creative Director, Maison Voss · Fashion Campaign",
  },
  {
    quote:
      "\"Every image she took told a story. We look at our wedding photos every single week. They are perfect.\"",
    name: "Sophie & Tom Clarke · Wedding Clients, 2023",
  },
];

export function HomeInteractions() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "opacity 0.75s ease, transform 0.75s ease";
          }
        });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll(".w-photo-wrap,.spec-item").forEach((el) => {
      const node = el as HTMLElement;
      node.style.opacity = "0";
      node.style.transform = "translateY(14px)";
      observer.observe(node);
    });

    const block = document.getElementById("testimonial-block");
    const dots = Array.from(document.querySelectorAll(".t-dot"));

    const clickHandlers: Array<() => void> = [];

    dots.forEach((dot, idx) => {
      const handler = () => {
        if (!block) return;
        const quoteEl = block.querySelector(".test-quote");
        const nameEl = block.querySelector(".test-name");
        if (quoteEl) quoteEl.textContent = TESTIMONIALS[idx].quote;
        if (nameEl) nameEl.textContent = TESTIMONIALS[idx].name;
        dots.forEach((d, i) => d.classList.toggle("active", i === idx));
      };
      dot.addEventListener("click", handler);
      clickHandlers.push(() => dot.removeEventListener("click", handler));
    });

    return () => {
      observer.disconnect();
      clickHandlers.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
