"use client";

import { useEffect } from "react";

export function PortfolioInteractions() {
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll(".filter-btn"));
    const items = Array.from(document.querySelectorAll(".g-item"));

    const handlers: Array<() => void> = [];

    buttons.forEach((button) => {
      const btn = button as HTMLButtonElement;
      const cat = btn.dataset.filter ?? "all";
      const handler = () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        items.forEach((item) => {
          const el = item as HTMLElement;
          const itemCat = el.dataset.cat;
          el.style.display = cat === "all" || itemCat === cat ? "block" : "none";
        });
      };
      btn.addEventListener("click", handler);
      handlers.push(() => btn.removeEventListener("click", handler));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transition = "opacity 0.6s ease";
          }
        });
      },
      { threshold: 0.05 },
    );

    document.querySelectorAll(".g-item,.cat-card").forEach((el) => {
      const node = el as HTMLElement;
      node.style.opacity = "0";
      observer.observe(node);
    });

    return () => {
      handlers.forEach((cleanup) => cleanup());
      observer.disconnect();
    };
  }, []);

  return null;
}
