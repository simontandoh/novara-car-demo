"use client";

import { useEffect } from "react";

export function SquadInteractions() {
  useEffect(() => {
    const root = document.querySelector(".page-squad");
    if (!root) return;

    const filterBtns = root.querySelectorAll(".filter-btn");
    const filterCleanups: (() => void)[] = [];

    filterBtns.forEach((btn) => {
      const el = btn as HTMLButtonElement;
      const onClick = () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        el.classList.add("active");
      };
      el.addEventListener("click", onClick);
      filterCleanups.push(() => el.removeEventListener("click", onClick));
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            const node = x.target as HTMLElement;
            node.style.opacity = "1";
            node.style.transform = "translateY(0)";
            node.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        });
      },
      { threshold: 0.08 },
    );

    root.querySelectorAll(".player-card").forEach((el) => {
      const node = el as HTMLElement;
      node.style.opacity = "0";
      node.style.transform = "translateY(16px)";
      obs.observe(node);
    });

    return () => {
      filterCleanups.forEach((fn) => fn());
      obs.disconnect();
    };
  }, []);

  return null;
}
