import type { Metadata } from "next";

import { CustomCursor } from "@/components/photographer/custom-cursor";
import { SiteFooter } from "@/components/photographer/site-footer";
import { SiteNav } from "@/components/photographer/site-nav";
import "@/styles/pages/photographer-common.css";
import "@/styles/pages/contact.css";

export const metadata: Metadata = {
  title: "Elodie Marsh — Contact",
};

export default function ContactPage() {
  return (
    <div className="photographer-page contact">
      <CustomCursor />
      <SiteNav active="contact" />

      <section className="contact-hero">
        <div className="ch-photo">
          <img
            className="ch-img"
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80&fit=crop&crop=top"
            alt="Photography"
          />
          <div className="ch-overlay" />
          <div className="ch-caption">
            <p className="ch-cap-text">
              &quot;Every enquiry begins a conversation — and every conversation
              begins with listening.&quot;
            </p>
          </div>
        </div>
        <div className="ch-form">
          <p className="form-eyebrow">Book a Shoot or Enquire</p>
          <h1 className="form-title">
            Let&apos;s Start
            <br />
            <em>Talking.</em>
          </h1>
          <form action="/api/lead" method="POST">
            <input type="hidden" name="form-name" value="photographer-enquiry" />
            <div className="form-group">
              <label className="form-label" htmlFor="full-name">
                Name
              </label>
              <input
                className="form-input"
                id="full-name"
                name="name"
                type="text"
                required
                placeholder="Full name"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="form-input"
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+44 ..."
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="shoot-type">
                Shoot Type
              </label>
              <select className="form-select" id="shoot-type" name="shoot_type" required>
                <option value="">Select...</option>
                <option>Wedding</option>
                <option>Fashion / Editorial</option>
                <option>Commercial Campaign</option>
                <option>Brand Portrait</option>
                <option>Fine Art / Personal</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="date">
                  Date
                </label>
                <input className="form-input" id="date" name="date" type="date" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input
                  className="form-input"
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="City / Country"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="details">
                Message
              </label>
              <textarea
                className="form-textarea"
                id="details"
                name="message"
                required
                placeholder="A little about your project, vision, or what you're hoping to capture..."
              />
            </div>
            <div className="form-note">
              I reply to all enquiries within 48 hours.
            </div>
            <button className="btn-submit" type="submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <div className="info-strip">
        <div className="info-block">
          <div className="ib-label">Base</div>
          <div className="ib-val">London & Paris</div>
          <div className="ib-sub">Available worldwide</div>
        </div>
        <div className="info-block">
          <div className="ib-label">Email</div>
          <div className="ib-val">
            <a href="mailto:hello@elodiemarsh.com">hello@elodiemarsh.com</a>
          </div>
          <div className="ib-sub">Response within 48 hours</div>
        </div>
        <div className="info-block">
          <div className="ib-label">Instagram</div>
          <div className="ib-val">
            <a href="https://www.instagram.com/elodiemarsh/" target="_blank" rel="noopener noreferrer">
              @elodiemarsh
            </a>
          </div>
          <div className="ib-sub">Latest work & updates</div>
        </div>
        <div className="info-block">
          <div className="ib-label">Availability</div>
          <div className="ib-val">Booking 2025–26</div>
          <div className="ib-sub">Limited dates remaining</div>
        </div>
      </div>

      <section className="pricing">
        <div className="pricing-inner">
          <p className="sec-label">Investment</p>
          <h2 className="sec-title">
            Starting
            <br />
            <em>Prices.</em>
          </h2>
          <div className="price-list">
            <div className="price-row">
              <div className="pr-left">
                <div className="pr-name">Wedding Photography</div>
                <div className="pr-desc">
                  Full day coverage, two locations, online gallery, print
                  release
                </div>
              </div>
              <div>
                <div className="pr-price">From £2,800</div>
                <div className="pr-per">per wedding</div>
              </div>
            </div>
            <div className="price-row">
              <div className="pr-left">
                <div className="pr-name">Editorial Session</div>
                <div className="pr-desc">
                  Half-day studio or location shoot, 40+ selects, full licensing
                </div>
              </div>
              <div>
                <div className="pr-price">From £1,200</div>
                <div className="pr-per">per day</div>
              </div>
            </div>
            <div className="price-row">
              <div className="pr-left">
                <div className="pr-name">Commercial Campaign</div>
                <div className="pr-desc">
                  Bespoke quote based on scope, usage, and production needs
                </div>
              </div>
              <div>
                <div className="pr-price">POA</div>
                <div className="pr-per">enquire for quote</div>
              </div>
            </div>
            <div className="price-row">
              <div className="pr-left">
                <div className="pr-name">Brand Portraits</div>
                <div className="pr-desc">
                  2-hour studio session, 20+ selects, full digital delivery
                </div>
              </div>
              <div>
                <div className="pr-price">From £650</div>
                <div className="pr-per">per session</div>
              </div>
            </div>
          </div>
          <p className="price-note">
            All packages are fully customisable. Travel to most locations
            included within the UK. International shoots quoted separately. A
            25% deposit secures your date.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
