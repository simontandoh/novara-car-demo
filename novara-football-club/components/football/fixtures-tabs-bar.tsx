"use client";

import { useEffect, useRef } from "react";

export function FixturesTabsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const tabs = root.querySelectorAll(".tab");
    const cleanups: (() => void)[] = [];

    tabs.forEach((t) => {
      const el = t as HTMLElement;
      const onClick = () => {
        tabs.forEach((x) => x.classList.remove("active"));
        el.classList.add("active");
      };
      el.addEventListener("click", onClick);
      cleanups.push(() => el.removeEventListener("click", onClick));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div ref={ref} className="fixtures-tabs">
      <button type="button" className="tab active">
        Upcoming
      </button>
      <button type="button" className="tab">
        Results
      </button>
      <button type="button" className="tab">
        All Fixtures
      </button>
    </div>
  );
}
