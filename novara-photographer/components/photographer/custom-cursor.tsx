"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("dot");
    const ring = document.getElementById("ring");
    if (!dot || !ring) return;

    const onMove = (event: MouseEvent) => {
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
      window.setTimeout(() => {
        ring.style.left = `${event.clientX}px`;
        ring.style.top = `${event.clientY}px`;
      }, 60);
    };

    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="cursor-dot" id="dot" />
      <div className="cursor-ring" id="ring" />
    </>
  );
}
