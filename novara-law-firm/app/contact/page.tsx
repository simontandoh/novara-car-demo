import type { Metadata } from "next";
import Image from "next/image";

import { LawFooterSimple } from "@/components/law/law-footer-simple";
import { LawNav } from "@/components/law/law-nav";
import "@/styles/pages/contact.css";

export const metadata: Metadata = {
  title: "Hale & Partners — Contact",
};

export default function ContactPage() {
  return (
    <div className="law-contact">
      <LawNav active="contact" ctaHref="/contact" />

      <div className="hero-contact">
        <div className="hc-left">
          <p className="hc-eyebrow">Get in Touch</p>
          <h1 className="hc-title">
            Let&apos;s talk
            <br />
            about your
            <br />
            situation.
          </h1>
          <p className="hc-sub">
            Your first consultation is free and completely confidential. No
            obligation to proceed, and no charge for our initial advice.
          </p>
        </div>
        <div className="hc-right">
          <Image
            className="hc-right-photo"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&fit=crop&crop=center"
            alt="Office"
            width={900}
            height={540}
          />
        </div>
      </div>

      <section className="contact-body">
        <div className="cb-inner">
          <div className="contact-details">
            <div className="cd-block">
              <div className="cd-label">Office Address</div>
              <div className="cd-value">14 King Street, Manchester M2 6AQ</div>
              <div className="cd-sub">
                We also offer remote consultations via video call.
              </div>
            </div>
            <div className="cd-block">
              <div className="cd-label">Phone</div>
              <div className="cd-value">
                <a href="tel:+441612345678">0161 234 5678</a>
              </div>
              <div className="cd-sub">
                Mon–Fri 9am–5:30pm
                <br />
                Emergency line available for existing clients
              </div>
            </div>
            <div className="cd-block">
              <div className="cd-label">Email</div>
              <div className="cd-value">
                <a href="mailto:info@halepartners.co.uk">
                  info@halepartners.co.uk
                </a>
              </div>
              <div className="cd-sub">
                We aim to respond to all emails within 4 working hours.
              </div>
            </div>
            <div className="cd-block">
              <div className="cd-label">Regulatory</div>
              <div className="cd-sub">
                Hale & Partners is authorised and regulated by the Solicitors
                Regulation Authority (SRA No. 123456). All client funds are held
                in accordance with SRA Accounts Rules.
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2 className="cf-title">
              Book a free
              <br />
              <em>consultation</em>
            </h2>
            <form action="/api/lead" method="POST">
              <input type="hidden" name="form-name" value="law-consultation" />
              <div className="fg">
                <label htmlFor="full-name" className="fl">
                  Name
                </label>
                <input
                  id="full-name"
                  name="name"
                  className="fi"
                  type="text"
                  required
                  placeholder="Full name"
                />
              </div>
              <div className="fg-row">
                <div className="fg">
                  <label htmlFor="email" className="fl">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="fi"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="fg">
                  <label htmlFor="phone" className="fl">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="fi"
                    type="tel"
                    required
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div className="fg">
                <label htmlFor="case-type" className="fl">
                  Case Type
                </label>
                <select id="case-type" name="case_type" className="fi" required>
                  <option value="">Select a case type</option>
                  <option value="Employment Law">Employment Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Conveyancing">Conveyancing</option>
                  <option value="Personal Injury">Personal Injury</option>
                  <option value="Wills & Probate">Wills & Probate</option>
                  <option value="Commercial Law">Commercial Law</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>
              <div className="fg">
                <label htmlFor="description" className="fl">
                  Message
                </label>
                <textarea
                  id="description"
                  name="message"
                  className="fi"
                  required
                  placeholder="Tell us briefly about your situation..."
                />
              </div>
              <button className="fs" type="submit">
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <LawFooterSimple />
    </div>
  );
}
