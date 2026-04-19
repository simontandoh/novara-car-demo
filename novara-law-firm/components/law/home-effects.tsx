"use client";

import { useEffect } from "react";

export function HomeEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        });
      },
      { threshold: 0.08 },
    );

    document
      .querySelectorAll(".service-card,.team-card,.test-card,.as-stat")
      .forEach((el) => {
        const node = el as HTMLElement;
        node.style.opacity = "0";
        node.style.transform = "translateY(16px)";
        observer.observe(node);
      });

    return () => observer.disconnect();
  }, []);

  return null;
}
