import type { Metadata } from "next";
import Link from "next/link";

import { CustomCursor } from "@/components/photographer/custom-cursor";
import { HomeInteractions } from "@/components/photographer/home-interactions";
import { SiteFooter } from "@/components/photographer/site-footer";
import { SiteNav } from "@/components/photographer/site-nav";
import "@/styles/pages/photographer-common.css";
import "@/styles/pages/home.css";

export const metadata: Metadata = {
  title: "Elodie Marsh — Photographer",
};

export default function HomePage() {
  return (
    <div className="photographer-page home">
      <CustomCursor />
      <SiteNav active="home" />

      <section className="hero">
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85&fit=crop&crop=top"
          alt="Elodie Marsh Photography"
        />
        <div className="hero-ov" />
        <div className="hero-content">
          <h1 className="hero-title fu d1">
            Light.
            <br />
            <em>Feeling.</em>
            <br />
            Truth.
          </h1>
          <div className="hero-right">
            <p className="hero-spec fu d2">
              Wedding · Fashion · Commercial · Editorial
            </p>
            <Link href="/portfolio" className="hero-cta fu d3">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      <section className="work">
        <div className="work-header">
          <div>
            <p className="sec-label">Selected Work</p>
            <h2 className="sec-title">
              Recent
              <br />
              <em>Projects.</em>
            </h2>
          </div>
          <Link href="/portfolio" className="view-link">
            Full portfolio
          </Link>
        </div>
        <div className="work-grid">
          <div className="w-photo-wrap wg-1">
            <img
              className="w-photo"
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&fit=crop"
              alt="Wedding"
            />
            <div className="w-overlay" />
            <div className="w-info">
              <div className="w-cat">Wedding</div>
              <div className="w-name">Alice & James, Tuscany</div>
            </div>
          </div>
          <div className="w-photo-wrap wg-2">
            <img
              className="w-photo"
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&fit=crop"
              alt="Fashion"
            />
            <div className="w-overlay" />
            <div className="w-info">
              <div className="w-cat">Fashion</div>
              <div className="w-name">SS25 Editorial</div>
            </div>
          </div>
          <div className="w-photo-wrap wg-3">
            <img
              className="w-photo"
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80&fit=crop"
              alt="Commercial"
            />
            <div className="w-overlay" />
            <div className="w-info">
              <div className="w-cat">Commercial</div>
              <div className="w-name">Atelier Voss Campaign</div>
            </div>
          </div>
          <div className="w-photo-wrap wg-4">
            <img
              className="w-photo"
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500&q=80&fit=crop"
              alt="Wedding details"
            />
            <div className="w-overlay" />
            <div className="w-info">
              <div className="w-cat">Wedding</div>
              <div className="w-name">Details Series</div>
            </div>
          </div>
          <div className="w-photo-wrap wg-5">
            <img
              className="w-photo"
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80&fit=crop"
              alt="Editorial"
            />
            <div className="w-overlay" />
            <div className="w-info">
              <div className="w-cat">Editorial</div>
              <div className="w-name">Natural Light Series</div>
            </div>
          </div>
          <div className="w-photo-wrap wg-6">
            <img
              className="w-photo"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&fit=crop&crop=faces"
              alt="Portrait"
            />
            <div className="w-overlay" />
            <div className="w-info">
              <div className="w-cat">Commercial</div>
              <div className="w-name">Brand Portrait</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <div className="at-photo">
          <img
            className="at-img"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80&fit=crop&crop=faces"
            alt="Elodie Marsh, Photographer"
          />
        </div>
        <div className="at-content">
          <p className="at-eyebrow">The Photographer</p>
          <h2 className="at-title">
            I find the
            <br />
            moment before
            <br />
            <em>the moment.</em>
          </h2>
          <p className="at-body">
            Based between London and Paris, I&apos;ve spent fifteen years
            documenting the things people want to remember — weddings,
            collections, campaigns, and the quietly extraordinary in everyday
            life. My approach is instinctive and unhurried.
          </p>
          <Link href="/about" className="at-link">
            More about me →
          </Link>
        </div>
      </section>

      <div className="specialism">
        <div className="spec-items">
          <div className="spec-item">
            <span className="spec-name">Wedding Photography</span>
            <span className="spec-dot" />
          </div>
          <div className="spec-item">
            <span className="spec-name">Fashion Editorial</span>
            <span className="spec-dot" />
          </div>
          <div className="spec-item">
            <span className="spec-name">Commercial Campaigns</span>
            <span className="spec-dot" />
          </div>
          <div className="spec-item">
            <span className="spec-name">Fine Art Portraiture</span>
            <span className="spec-dot" />
          </div>
          <div className="spec-item">
            <span className="spec-name">Brand Identity</span>
            <span className="spec-dot" />
          </div>
          <div className="spec-item" style={{ borderRight: "none" }}>
            <span className="spec-name">Destination Shoots</span>
          </div>
        </div>
      </div>

      <section className="testimonials">
        <div className="test-inner" id="testimonial-block">
          <p className="test-quote">
            &quot;Elodie has a rare gift for making you feel completely at ease,
            and then capturing something far more beautiful than you imagined
            possible.&quot;
          </p>
          <p className="test-name">
            Isabelle & Marcus Alderton · Wedding Clients, 2024
          </p>
          <div className="test-dots">
            <span className="t-dot active" />
            <span className="t-dot" />
            <span className="t-dot" />
          </div>
        </div>
      </section>

      <section className="cta">
        <img
          className="cta-photo"
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80&fit=crop&crop=bottom"
          alt="Wedding photography"
        />
        <div className="cta-ov" />
        <div className="cta-inner">
          <h2 className="cta-title">
            Let&apos;s Make
            <br />
            <em>Something</em>
            <br />
            Beautiful.
          </h2>
          <p className="cta-sub">Weddings · Campaigns · Editorials · Portraits</p>
          <Link href="/contact" className="btn-white">
            Get in Touch
          </Link>
        </div>
      </section>

      <SiteFooter showNav />
      <HomeInteractions />
    </div>
  );
}
