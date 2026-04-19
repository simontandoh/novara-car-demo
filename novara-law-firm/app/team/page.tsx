import type { Metadata } from "next";
import Image from "next/image";

import { LawFooterSimple } from "@/components/law/law-footer-simple";
import { LawNav } from "@/components/law/law-nav";
import { TeamEffects } from "@/components/law/team-effects";
import "@/styles/pages/team.css";

export const metadata: Metadata = {
  title: "Hale & Partners — Our Team",
};

export default function TeamPage() {
  return (
    <div className="law-team">
      <LawNav active="team" ctaHref="/contact" />

      <div className="page-header">
        <div className="ph-content">
          <p className="ph-eyebrow">The Solicitors</p>
          <h1 className="ph-title">Our Team</h1>
          <p className="ph-sub">
            18 specialist solicitors across six practice areas. Every one of
            them chosen for their expertise, their judgment, and their
            commitment to clients.
          </p>
        </div>
      </div>

      <section className="team-section">
        <div className="team-inner">
          <p className="team-intro">
            We don&apos;t believe in generalists who dabble. Every solicitor at
            Hale & Partners is a specialist in their area — which means you get
            expert advice from day one, not someone learning on the job.
          </p>
          <div className="team-grid">
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&fit=crop&crop=top"
                alt="Sarah Hale"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">Sarah Hale</div>
                <div className="tc-role">Managing Partner</div>
                <div className="tc-spec">Employment Law · 22 years&apos; experience</div>
                <div className="tc-qual">
                  LLB (Hons), LPC · Law Society accredited
                </div>
              </div>
            </div>
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop&crop=top"
                alt="David Chen"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">David Chen</div>
                <div className="tc-role">Partner</div>
                <div className="tc-spec">Commercial Law · 18 years&apos; experience</div>
                <div className="tc-qual">LLB (Hons), LPC · Notary Public</div>
              </div>
            </div>
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=top"
                alt="Priya Nair"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">Priya Nair</div>
                <div className="tc-role">Senior Solicitor</div>
                <div className="tc-spec">Family Law · 14 years&apos; experience</div>
                <div className="tc-qual">LLB (Hons), LPC · Resolution accredited</div>
              </div>
            </div>
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=top"
                alt="James Okafor"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">James Okafor</div>
                <div className="tc-role">Senior Solicitor</div>
                <div className="tc-spec">Personal Injury · 11 years&apos; experience</div>
                <div className="tc-qual">LLB (Hons), LPC · APIL member</div>
              </div>
            </div>
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop&crop=top"
                alt="Anna Peters"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">Anna Peters</div>
                <div className="tc-role">Solicitor</div>
                <div className="tc-spec">Conveyancing · 8 years&apos; experience</div>
                <div className="tc-qual">LLB (Hons), LPC · CQS accredited</div>
              </div>
            </div>
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=top"
                alt="Marcus Reid"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">Marcus Reid</div>
                <div className="tc-role">Solicitor</div>
                <div className="tc-spec">Wills & Probate · 9 years&apos; experience</div>
                <div className="tc-qual">LLB (Hons), LPC · STEP member</div>
              </div>
            </div>
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fit=crop&crop=top"
                alt="Chloe Barnes"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">Chloe Barnes</div>
                <div className="tc-role">Solicitor</div>
                <div className="tc-spec">Employment Law · 6 years&apos; experience</div>
                <div className="tc-qual">LLB (Hons), LPC</div>
              </div>
            </div>
            <div className="tc">
              <Image
                className="tc-photo"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop&crop=top"
                alt="Tom Clarke"
                width={400}
                height={533}
              />
              <div className="tc-body">
                <div className="tc-name">Tom Clarke</div>
                <div className="tc-role">Solicitor</div>
                <div className="tc-spec">
                  Dispute Resolution · 7 years&apos; experience
                </div>
                <div className="tc-qual">LLB (Hons), LPC · CEDR accredited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="values-inner">
          <div className="val-card">
            <div className="val-num">01</div>
            <h3 className="val-title">Honesty first</h3>
            <p className="val-desc">
              We tell you what your case is worth and what it isn&apos;t. No
              false hope, no inflated promises. Just straight talk so you can
              make informed decisions.
            </p>
          </div>
          <div className="val-card">
            <div className="val-num">02</div>
            <h3 className="val-title">Genuine specialism</h3>
            <p className="val-desc">
              Every solicitor at Hale & Partners works in a defined area.
              You&apos;ll always be advised by someone who does this specific
              type of work every day.
            </p>
          </div>
          <div className="val-card">
            <div className="val-num">03</div>
            <h3 className="val-title">Clear costs</h3>
            <p className="val-desc">
              We provide written cost estimates upfront and stick to them. Where
              fixed fees are available, we offer them. No one should get a
              surprise bill from their solicitor.
            </p>
          </div>
        </div>
      </section>

      <LawFooterSimple />
      <TeamEffects />
    </div>
  );
}
