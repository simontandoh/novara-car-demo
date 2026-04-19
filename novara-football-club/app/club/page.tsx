import type { Metadata } from "next";
import Image from "next/image";

import { FootballNav } from "@/components/football/football-nav";

import "@/styles/pages/club.css";

export const metadata: Metadata = {
  title: { absolute: "Redfield FC — The Club" },
};

export default function ClubPage() {
  return (
    <div className="page-club">
      <FootballNav
        variant="clubNav"
        active="club"
        ctaHref="/contact"
      />

      <div className="hero">
        <Image
          className="hero-img"
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&q=85&fit=crop"
          alt="Stadium"
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-ov" />
        <div className="hero-ov2" />
        <div className="hero-content">
          <p className="eyebrow">Est. 1887</p>
          <h1 className="page-title">The Club.</h1>
        </div>
      </div>

      <section style={{ background: "var(--black)" }}>
        <div className="history-inner">
          <div>
            <p className="sec-label">Our History</p>
            <h2 className="sec-title history-title-gap">
              Over a Century of Football.
            </h2>
            <p className="body-text">
              Redfield FC was founded in 1887 by factory workers who wanted to
              give their community a club to be proud of. Starting on a
              roped-off pitch on the edge of town, the club grew through local
              pride and determination.
            </p>
            <p className="body-text">
              Through two world wars, multiple league restructures, and the
              changing landscape of non-league football, Redfield FC has
              endured. We&apos;ve been promoted, relegated, rebuilt, and
              returned — always with the same values.
            </p>
            <p className="body-text">
              Today, under manager Steve Holden, we&apos;re the most ambitious
              version of this club in a generation, pushing for promotion and
              building something that will last.
            </p>
          </div>
          <div>
            <p className="sec-label">Milestones</p>
            <div className="milestones">
              <div className="milestone">
                <div className="m-year">1887</div>
                <div className="m-text">
                  Club founded by workers of the Redfield Iron Works
                </div>
              </div>
              <div className="milestone">
                <div className="m-year">1923</div>
                <div className="m-text">
                  First county cup win — a landmark in club history
                </div>
              </div>
              <div className="milestone">
                <div className="m-year">1967</div>
                <div className="m-text">
                  Redfield Park Stadium opens with 4,000 capacity
                </div>
              </div>
              <div className="milestone">
                <div className="m-year">1994</div>
                <div className="m-text">
                  Best FA Cup run — reached the 2nd Round Proper
                </div>
              </div>
              <div className="milestone">
                <div className="m-year">2011</div>
                <div className="m-text">
                  Promotion to Northern Premier League Division One
                </div>
              </div>
              <div className="milestone">
                <div className="m-year">2019</div>
                <div className="m-text">
                  Promotion to Northern Premier League Premier Division
                </div>
              </div>
              <div className="milestone">
                <div className="m-year">2024</div>
                <div className="m-text">
                  Record 3rd-place finish — highest in 30 years
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stadium">
        <p className="sec-label">Home Ground</p>
        <h2 className="sec-title">Redfield Park Stadium.</h2>
        <div className="stad-grid">
          <div className="stad-photo">
            <Image
              className="stad-img"
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80&fit=crop"
              alt="Stadium"
              width={800}
              height={260}
            />
          </div>
          <div className="stad-info">
            <div className="si-title">Home Since 1967</div>
            <p className="si-body">
              Redfield Park has been our fortress for over 50 years. The Main
              Stand, rebuilt in 2008, holds 1,200 covered seats. The iconic North
              Terrace is where our most passionate supporters gather every
              matchday.
            </p>
            <div className="si-stats">
              <div className="si-stat">
                <div className="si-num">3,200</div>
                <div className="si-lbl">Total Capacity</div>
              </div>
              <div className="si-stat">
                <div className="si-num">1,200</div>
                <div className="si-lbl">Seated</div>
              </div>
              <div className="si-stat">
                <div className="si-num">1967</div>
                <div className="si-lbl">Year Opened</div>
              </div>
              <div className="si-stat">
                <div className="si-num">2,800</div>
                <div className="si-lbl">Avg Attendance</div>
              </div>
            </div>
          </div>
          <div className="stad-photo">
            <Image
              className="stad-img"
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80&fit=crop"
              alt="Match day"
              width={600}
              height={260}
            />
          </div>
        </div>
      </section>

      <section className="honours">
        <p className="hon-eyebrow">Honours Board</p>
        <h2 className="hon-title">A Proud Record.</h2>
        <div className="hon-grid">
          <div className="hon-card">
            <div className="hon-num">3</div>
            <div className="hon-lbl">County Cup Wins</div>
          </div>
          <div className="hon-card">
            <div className="hon-num">2</div>
            <div className="hon-lbl">League Titles</div>
          </div>
          <div className="hon-card">
            <div className="hon-num">138</div>
            <div className="hon-lbl">Years in Football</div>
          </div>
          <div className="hon-card">
            <div className="hon-num">FA</div>
            <div className="hon-lbl">Cup 2nd Round 1994</div>
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
