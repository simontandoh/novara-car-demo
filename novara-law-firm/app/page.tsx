import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LawFooterFull } from "@/components/law/law-footer-full";
import { HomeEffects } from "@/components/law/home-effects";
import { LawNav } from "@/components/law/law-nav";
import "@/styles/pages/home.css";

export const metadata: Metadata = {
  title: "Hale & Partners — Solicitors",
};

export default function HomePage() {
  return (
    <div className="law-home">
      <LawNav active="home" ctaHref="/contact" />

      <section className="hero">
        <div className="hero-left">
          <div className="hero-left-pattern" />
          <div className="hero-left-content">
            <p className="hero-eyebrow fu d1">Solicitors · Manchester</p>
            <h1 className="fu d2">
              Legal advice
              <br />
              that works for
              <br />
              <em>real people.</em>
            </h1>
            <p className="hero-sub fu d3">
              Clear, honest legal support — without the jargon, without the
              intimidation, without the hidden costs. Just good lawyers doing
              excellent work.
            </p>
            <div className="hero-btns fu d4">
              <Link href="/contact" className="btn-gold">
                Free Consultation
              </Link>
              <Link href="/services" className="btn-outline-light">
                Our Services
              </Link>
            </div>
            <div className="hero-trust fu d4">
              <div className="ht-item">
                <div className="ht-dot" />
                <span className="ht-text">SRA Regulated</span>
              </div>
              <div className="ht-item">
                <div className="ht-dot" />
                <span className="ht-text">No Win No Fee Available</span>
              </div>
              <div className="ht-item">
                <div className="ht-dot" />
                <span className="ht-text">Fixed Fees on Request</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Image
            className="hero-right-photo"
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=85&fit=crop&crop=center"
            alt="Law firm — modern office"
            width={900}
            height={1200}
            priority
          />
          <div className="hero-right-overlay" />
          <div className="hero-stat-box">
            <div className="hsb-num">94%</div>
            <div className="hsb-label">
              Client satisfaction rate
              <br />
              across all practice areas
            </div>
          </div>
        </div>
      </section>

      <div className="services-strip">
        <span className="strip-item">Employment Law</span>
        <span className="strip-item">Family Law</span>
        <span className="strip-item">Conveyancing</span>
        <span className="strip-item">Personal Injury</span>
        <span className="strip-item">Wills & Probate</span>
        <span className="strip-item">Commercial Law</span>
        <span className="strip-item">Dispute Resolution</span>
      </div>

      <div className="about-strip">
        <div className="about-strip-inner">
          <div>
            <p className="as-label">About Hale & Partners</p>
            <h2 className="as-title">
              Straightforward
              <br />
              legal advice, since
              <br />
              <em>1998.</em>
            </h2>
            <p className="as-body">
              We started Hale & Partners with one belief: that good legal advice
              shouldn&apos;t be out of reach for individuals and small businesses.
              Twenty-five years later, we&apos;ve helped thousands of clients
              navigate some of the most difficult moments of their lives — and
              we&apos;ve never lost sight of what matters.
            </p>
          </div>
          <div className="as-stats">
            <div className="as-stat">
              <div className="as-stat-num">25+</div>
              <div className="as-stat-label">Years in practice</div>
            </div>
            <div className="as-stat">
              <div className="as-stat-num">8,000+</div>
              <div className="as-stat-label">Clients represented</div>
            </div>
            <div className="as-stat">
              <div className="as-stat-num">18</div>
              <div className="as-stat-label">Specialist solicitors</div>
            </div>
          </div>
        </div>
      </div>

      <section id="services">
        <div className="services-inner">
          <p className="sec-label">Practice Areas</p>
          <h2 className="sec-title">
            How we
            <br />
            can help you.
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="sc-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <div className="sc-title">Employment Law</div>
              <p className="sc-desc">
                Unfair dismissal, discrimination, settlement agreements, TUPE,
                and workplace disputes. We act for both employees and employers.
              </p>
              <Link href="/services" className="sc-link">
                Learn more
              </Link>
            </div>
            <div className="service-card">
              <div className="sc-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="sc-title">Conveyancing</div>
              <p className="sc-desc">
                Buying, selling, or remortgaging? Our conveyancing team keeps
                the process moving with clear communication and no nasty
                surprises.
              </p>
              <Link href="/services" className="sc-link">
                Learn more
              </Link>
            </div>
            <div className="service-card">
              <div className="sc-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div className="sc-title">Family Law</div>
              <p className="sc-desc">
                Divorce, financial settlements, child arrangements, and
                cohabitation disputes. Sensitive, practical support during
                difficult times.
              </p>
              <Link href="/services" className="sc-link">
                Learn more
              </Link>
            </div>
            <div className="service-card">
              <div className="sc-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="sc-title">Personal Injury</div>
              <p className="sc-desc">
                Road accidents, workplace injuries, public liability claims. No
                win, no fee. You don&apos;t pay unless we win your case.
              </p>
              <Link href="/services" className="sc-link">
                Learn more
              </Link>
            </div>
            <div className="service-card">
              <div className="sc-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="sc-title">Wills & Probate</div>
              <p className="sc-desc">
                Writing a will, setting up Lasting Power of Attorney, or
                administering an estate. Clear guidance at every stage.
              </p>
              <Link href="/services" className="sc-link">
                Learn more
              </Link>
            </div>
            <div className="service-card">
              <div className="sc-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <div className="sc-title">Commercial Law</div>
              <p className="sc-desc">
                Contracts, business disputes, commercial property, and company
                formation. Practical legal support for growing businesses.
              </p>
              <Link href="/services" className="sc-link">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="team-inner">
          <div className="team-hdr">
            <div>
              <p className="team-hdr-eyebrow">Our Solicitors</p>
              <h2 className="team-hdr-title">Meet the Team</h2>
            </div>
            <Link href="/team" className="team-hdr-link">
              Full Team →
            </Link>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <Image
                className="team-photo"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&fit=crop&crop=top"
                alt="Partner"
                width={400}
                height={533}
              />
              <div className="team-overlay" />
              <div className="team-body">
                <div className="team-name">Sarah Hale</div>
                <div className="team-role">Managing Partner · Employment</div>
              </div>
            </div>
            <div className="team-card">
              <Image
                className="team-photo"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop&crop=top"
                alt="Partner"
                width={400}
                height={533}
              />
              <div className="team-overlay" />
              <div className="team-body">
                <div className="team-name">David Chen</div>
                <div className="team-role">Partner · Commercial Law</div>
              </div>
            </div>
            <div className="team-card">
              <Image
                className="team-photo"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=top"
                alt="Solicitor"
                width={400}
                height={533}
              />
              <div className="team-overlay" />
              <div className="team-body">
                <div className="team-name">Priya Nair</div>
                <div className="team-role">Senior Solicitor · Family</div>
              </div>
            </div>
            <div className="team-card">
              <Image
                className="team-photo"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=top"
                alt="Solicitor"
                width={400}
                height={533}
              />
              <div className="team-overlay" />
              <div className="team-body">
                <div className="team-name">James Okafor</div>
                <div className="team-role">Senior Solicitor · PI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="test-inner">
          <p className="sec-label">Client Testimonials</p>
          <h2 className="sec-title">What our clients say.</h2>
          <div className="test-grid">
            <div className="test-card">
              <p className="test-quote">
                &quot;After a difficult redundancy situation, Hale & Partners
                guided me through every step with clarity and compassion. The
                outcome exceeded what I thought was possible. I can&apos;t
                recommend them enough.&quot;
              </p>
              <div className="test-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="test-name">Rachel M.</div>
              <div className="test-detail">Employment — Unfair Dismissal</div>
            </div>
            <div className="test-card">
              <p className="test-quote">
                &quot;Our house purchase was complicated but the conveyancing team
                kept everything on track. They were available, proactive, and
                genuinely cared about getting us into our home.&quot;
              </p>
              <div className="test-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="test-name">Marcus & Lynn T.</div>
              <div className="test-detail">Residential Conveyancing</div>
            </div>
            <div className="test-card">
              <p className="test-quote">
                &quot;Priya handled our divorce with sensitivity and
                professionalism at every turn. She was always honest about likely
                outcomes and never ran up unnecessary costs. Exactly what you
                need in a difficult situation.&quot;
              </p>
              <div className="test-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="test-name">Anonymous</div>
              <div className="test-detail">Family Law — Divorce</div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2 className="cta-title">
          Not sure where
          <br />
          to <em>start?</em>
        </h2>
        <p className="cta-sub">
          Book a free 30-minute consultation with one of our solicitors. No
          commitment, no charge — just honest advice about your situation.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-gold">
            Book Free Consultation
          </Link>
          <Link href="/services" className="btn-outline-light">
            View All Services
          </Link>
        </div>
      </div>

      <LawFooterFull />
      <HomeEffects />
    </div>
  );
}
