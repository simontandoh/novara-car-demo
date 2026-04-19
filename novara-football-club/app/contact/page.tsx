import type { Metadata } from "next";
import Link from "next/link";

import { FootballNav } from "@/components/football/football-nav";

import "@/styles/pages/contact.css";

export const metadata: Metadata = {
  title: { absolute: "Redfield FC — Tickets & Contact" },
};

export default function ContactPage() {
  return (
    <div className="page-contact">
      <FootballNav
        variant="clubNav"
        active="contact"
        ctaHref="/contact"
      />

      <div className="page-hero">
        <p className="eyebrow">Matchday & General</p>
        <h1 className="page-title">
          Tickets &<br />
          Contact.
        </h1>
      </div>

      <section className="tickets">
        <p className="sec-label">Match Tickets</p>
        <h2 className="sec-title">Join Us at Redfield Park.</h2>
        <div className="ticket-grid">
          <div className="tk-card">
            <div className="tk-type">Match Day</div>
            <div className="tk-name">Adult</div>
            <div className="tk-price">£12</div>
            <div className="tk-per">per match</div>
            <ul className="tk-features">
              <li>Entry to all areas</li>
              <li>Match programme included</li>
              <li>Available on the gate</li>
            </ul>
            <Link href="#contact" className="btn-ticket">
              Buy Now
            </Link>
          </div>
          <div className="tk-card featured">
            <div className="tk-type">Full Season</div>
            <div className="tk-name">Season Ticket</div>
            <div className="tk-price">£165</div>
            <div className="tk-per">for the full season</div>
            <ul className="tk-features">
              <li>All home league games</li>
              <li>Priority cup match access</li>
              <li>Free programme each game</li>
              <li>Dedicated holder area</li>
              <li>10% off club shop</li>
            </ul>
            <Link href="#contact" className="btn-ticket">
              Get Season Ticket
            </Link>
          </div>
          <div className="tk-card">
            <div className="tk-type">Group / Premium</div>
            <div className="tk-name">Hospitality</div>
            <div className="tk-price">£45</div>
            <div className="tk-per">per person · min. 10</div>
            <ul className="tk-features">
              <li>Executive suite access</li>
              <li>Pre-match meal included</li>
              <li>Half-time refreshments</li>
              <li>Meet a club representative</li>
            </ul>
            <Link href="#contact" className="btn-ticket">
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div>
            <p className="sec-label">Club Contact</p>
            <h2 className="sec-title" style={{ marginBottom: 8 }}>
              Get in Touch.
            </h2>
            <div className="info-blocks">
              <div className="ib">
                <div className="ib-icon">📍</div>
                <div>
                  <div className="ib-label">Address</div>
                  <div className="ib-val">Redfield Park Stadium</div>
                  <div className="ib-sub">Stadium Road, Redfield, RD4 1FC</div>
                </div>
              </div>
              <div className="ib">
                <div className="ib-icon">📞</div>
                <div>
                  <div className="ib-label">Phone</div>
                  <div className="ib-val">
                    <a href="tel:+441612345678">0161 234 5678</a>
                  </div>
                  <div className="ib-sub">
                    Mon–Fri 9am–5pm · Matchdays 10am–7pm
                  </div>
                </div>
              </div>
              <div className="ib">
                <div className="ib-icon">✉️</div>
                <div>
                  <div className="ib-label">Email</div>
                  <div className="ib-val">
                    <a href="mailto:info@redfieldfc.co.uk">info@redfieldfc.co.uk</a>
                  </div>
                  <div className="ib-sub">Reply within 2 working days</div>
                </div>
              </div>
              <div className="ib">
                <div className="ib-icon">🎟️</div>
                <div>
                  <div className="ib-label">Ticket Office</div>
                  <div className="ib-val">
                    <a href="mailto:tickets@redfieldfc.co.uk">
                      tickets@redfieldfc.co.uk
                    </a>
                  </div>
                  <div className="ib-sub">Open matchdays from 12 noon</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="form-title">Send a Message.</div>
            <form action="/api/lead" method="POST">
              <input type="hidden" name="form-name" value="football-trial-request" />
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
                  <label className="form-label" htmlFor="age">
                    Age
                  </label>
                  <input
                    className="form-input"
                    id="age"
                    name="age"
                    type="number"
                    required
                    min={6}
                    max={60}
                    placeholder="Age"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="position">
                    Position
                  </label>
                  <input
                    className="form-input"
                    id="position"
                    name="position"
                    type="text"
                    required
                    placeholder="Preferred position"
                  />
                </div>
              </div>
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
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your background and request."
                />
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="fc">© 2025 Redfield FC. All rights reserved.</div>
        <div className="fc">
          Site by <a href="https://novarastudios.co.uk">Novara Studios Ltd</a> ·
          Co. 17025468
        </div>
      </footer>
    </div>
  );
}
