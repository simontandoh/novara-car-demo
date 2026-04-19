"use client";

import { useEffect } from "react";

export function AboutInteractions() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        });
      },
      { threshold: 0.06 },
    );

    document.querySelectorAll(".ap-point,.press-card").forEach((el) => {
      const node = el as HTMLElement;
      node.style.opacity = "0";
      node.style.transform = "translateY(14px)";
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
