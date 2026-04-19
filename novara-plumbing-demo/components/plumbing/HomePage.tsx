"use client";

import { useEffect, useState } from "react";

import { CTASection } from "./CTASection";
import { ContactSection } from "./ContactSection";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ReviewsSection } from "./ReviewsSection";
import { ServicesSection } from "./ServicesSection";
import { ServicesStrip } from "./ServicesStrip";
import { SiteFooter } from "./SiteFooter";
import { StatsSection } from "./StatsSection";
import { TeamSection } from "./TeamSection";
import { WhySection } from "./WhySection";

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main id="top">
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((previous) => !previous)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <Hero />
      <ServicesStrip />
      <StatsSection />
      <ServicesSection />
      <WhySection />
      <TeamSection />
      <ReviewsSection />
      <CTASection />
      <ContactSection
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      <SiteFooter />
    </main>
  );
}
