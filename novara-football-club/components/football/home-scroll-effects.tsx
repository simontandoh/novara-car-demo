"use client";

import { useEffect } from "react";

export function HomeScrollEffects() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            const el = x.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll(".nc, .sb-stat").forEach((el) => {
      const node = el as HTMLElement;
      node.style.opacity = "0";
      node.style.transform = "translateY(16px)";
      obs.observe(node);
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
