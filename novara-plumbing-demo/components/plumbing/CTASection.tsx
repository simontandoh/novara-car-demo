import Image from "next/image";
import Link from "next/link";

import { COMPANY_PHONE, COMPANY_PHONE_LINK } from "./content";

export function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-heading">
      <Image
        className="cta-photo"
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80&fit=crop&crop=center"
        alt="Plumbing work"
        fill
        sizes="100vw"
      />
      <div className="cta-tint" />
      <div className="cta-inner">
        <h2 className="cta-title" id="cta-heading">
          Need a
          <br />
          Plumber?
        </h2>
        <p className="cta-sub">
          Get a free, no-obligation quote today. Most jobs quoted within the
          hour. Emergency cover available now.
        </p>
        <div className="cta-number">
          <a href={COMPANY_PHONE_LINK}>{COMPANY_PHONE}</a>
        </div>
        <div className="cta-note">24/7 - No call-out fee - All areas covered</div>
        <Link href="#contact" className="btn-navy">
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
}
