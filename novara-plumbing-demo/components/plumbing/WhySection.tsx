import Image from "next/image";

import {
  COMPANY_PHONE,
  COMPANY_PHONE_LINK,
  reasons,
} from "./content";

export function WhySection() {
  return (
    <section id="why">
      <div className="why-inner">
        <div className="why-content">
          <p className="section-label">Why Ironside</p>
          <h2 className="section-title">
            Straight Talk.
            <br />
            Proper Work.
          </h2>
          <p className="why-body">
            We don&apos;t do call centres, vague quotes, or tradespeople who
            don&apos;t show up. Ironside is a Liverpool company, we live here, we
            work here, and our reputation matters to us more than any job fee.
          </p>

          <div className="reasons">
            {reasons.map((reason) => (
              <div className="reason reveal-on-scroll" key={reason.title}>
                <div className="reason-icon">{reason.icon}</div>
                <div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-desc">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-visual">
          <Image
            className="why-visual-photo"
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=900&q=80&fit=crop&crop=center"
            alt="Plumber working on pipes"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="why-visual-ghost" aria-hidden="true">
            24/7
          </div>
          <div className="emergency-box">
            <p className="emergency-label">Emergency Line</p>
            <h3 className="emergency-title">
              Got a
              <br />
              Problem
              <br />
              Right Now?
            </h3>
            <p className="emergency-sub">
              Don&apos;t let a leak get worse. Call our emergency line and speak
              to a real engineer, not a call centre.
            </p>
            <div className="emergency-number">
              <a href={COMPANY_PHONE_LINK}>{COMPANY_PHONE}</a>
            </div>
            <div className="emergency-note">Lines open 24 hours, 7 days</div>
            <div className="emergency-divider" />
            <div className="coverage-label">Areas We Cover</div>
            <div className="coverage-tags">
              {[
                "Liverpool City",
                "Wirral",
                "Bootle",
                "Crosby",
                "Huyton",
                "Wavertree",
                "Mossley Hill",
              ].map((area) => (
                <span className="tag" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
