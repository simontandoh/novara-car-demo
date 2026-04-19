import type { Metadata } from "next";
import Link from "next/link";

import { AboutInteractions } from "@/components/photographer/about-interactions";
import { CustomCursor } from "@/components/photographer/custom-cursor";
import { SiteFooter } from "@/components/photographer/site-footer";
import { SiteNav } from "@/components/photographer/site-nav";
import "@/styles/pages/photographer-common.css";
import "@/styles/pages/about.css";

export const metadata: Metadata = {
  title: "Elodie Marsh — About",
};

export default function AboutPage() {
  return (
    <div className="photographer-page about">
      <CustomCursor />
      <SiteNav active="about" />

      <section className="about-intro">
        <div className="ai-photo">
          <img
            className="ai-img"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop&crop=top"
            alt="Elodie Marsh"
          />
        </div>
        <div className="ai-content">
          <p className="ai-eyebrow">Elodie Marsh</p>
          <h1 className="ai-title">
            Photographer &
            <br />
            <em>Visual Artist.</em>
          </h1>
          <div className="ai-body">
            <p>
              I&apos;m a photographer based between London and Paris, working
              across wedding, fashion, commercial, and editorial photography.
              I&apos;ve been making photographs professionally for fifteen years.
            </p>
            <p>
              My style is instinctive and unhurried. I don&apos;t direct much — I
              watch, I wait, I respond. Whether it&apos;s a couple on their
              wedding day or a model on a Paris rooftop, I&apos;m looking for the
              thing that&apos;s happening beneath the surface.
            </p>
            <p>
              Before photography, I studied fine art at the Slade. That
              background still shapes everything I do — the way I see light, the
              way I think about composition, the way I hold patience as a tool.
            </p>
          </div>
          <div className="ai-stats">
            <div className="ai-stat">
              <div className="as-num">15</div>
              <div className="as-label">Years in Practice</div>
            </div>
            <div className="ai-stat">
              <div className="as-num">340+</div>
              <div className="as-label">Weddings</div>
            </div>
            <div className="ai-stat">
              <div className="as-num">22</div>
              <div className="as-label">Countries Shot In</div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach">
        <div className="approach-inner">
          <p className="sec-label">Philosophy</p>
          <h2 className="sec-title">
            The Way I
            <br />
            <em>Work.</em>
          </h2>
          <div className="approach-points">
            <div className="ap-point">
              <div className="ap-num">01</div>
              <div className="ap-title">Instinct over direction</div>
              <p className="ap-body">
                I rarely ask people to pose. The best images come from what
                happens naturally — a glance, a laugh, a pause. I position
                myself to catch those moments as they unfold.
              </p>
            </div>
            <div className="ap-point">
              <div className="ap-num">02</div>
              <div className="ap-title">Light as language</div>
              <p className="ap-body">
                I trained as a painter first. Light isn&apos;t just illumination
                — it&apos;s texture, mood, time. I choose locations and times of
                day the way a painter chooses colour.
              </p>
            </div>
            <div className="ap-point">
              <div className="ap-num">03</div>
              <div className="ap-title">Unhurried presence</div>
              <p className="ap-body">
                I arrive early, stay late, and don&apos;t rush. Great photographs
                need time. I build rapport before I lift the camera — the images
                are better for it.
              </p>
            </div>
            <div className="ap-point">
              <div className="ap-num">04</div>
              <div className="ap-title">Minimal retouching</div>
              <p className="ap-body">
                I believe in real skin, real light, real scenes. My
                post-processing is careful and restrained. I&apos;m not trying to
                make photographs look like paintings — I&apos;m trying to make
                them look like truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="clients">
        <div className="clients-inner">
          <p className="clients-label">Clients & Collaborators</p>
          <div className="clients-logos">
            <span className="client-name">Vogue</span>
            <span className="client-name">Selfridges</span>
            <span className="client-name">Anya Hindmarch</span>
            <span className="client-name">The Times</span>
            <span className="client-name">Liberty London</span>
            <span className="client-name">Tatler</span>
          </div>
        </div>
      </div>

      <section className="press">
        <div className="press-inner">
          <p className="sec-label">Press</p>
          <h2 className="press-title">
            As <em>Featured In.</em>
          </h2>
          <div className="press-grid">
            <div className="press-card">
              <div className="press-pub">Vogue UK</div>
              <p className="press-quote">
                One of Britain&apos;s most distinctive voices in wedding and
                fashion photography. Her restraint is her superpower.
              </p>
              <div className="press-issue">Feature · Spring 2024</div>
            </div>
            <div className="press-card">
              <div className="press-pub">The Sunday Times</div>
              <p className="press-quote">
                Marsh&apos;s images hold a kind of suspended time — you feel like
                you&apos;ve stepped into a moment that was never meant for you.
              </p>
              <div className="press-issue">Style Magazine · 2023</div>
            </div>
            <div className="press-card">
              <div className="press-pub">Tatler</div>
              <p className="press-quote">
                The most sought-after wedding photographer in the country for a
                reason. Book early.
              </p>
              <div className="press-issue">Wedding Edition · 2024</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">
          Shall We
          <br />
          <em>Work Together?</em>
        </h2>
        <p className="cta-sub">Weddings · Campaigns · Editorials · Portraits</p>
        <Link href="/contact" className="btn-white">
          Get in Touch
        </Link>
      </section>

      <SiteFooter />
      <AboutInteractions />
    </div>
  );
}
