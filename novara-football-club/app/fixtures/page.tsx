import type { Metadata } from "next";
import Image from "next/image";

import { FootballNav } from "@/components/football/football-nav";
import { FixturesTabsBar } from "@/components/football/fixtures-tabs-bar";
import { FooterSimple } from "@/components/football/footer-simple";

import "@/styles/pages/fixtures.css";

export const metadata: Metadata = {
  title: { absolute: "Redfield FC — Fixtures & Results" },
};

export default function FixturesPage() {
  return (
    <div className="page-fixtures">
      <FootballNav
        variant="default"
        active="fixtures"
        ctaHref="/contact"
      />

      <div className="page-header">
        <Image
          className="page-header-bg"
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&q=80&fit=crop&crop=center"
          alt="Stadium"
          fill
          sizes="100vw"
        />
        <div className="page-header-content">
          <p className="page-eyebrow">2024/25 Season</p>
          <h1 className="page-title">
            Fixtures &<br />
            Results
          </h1>
        </div>
      </div>

      <div className="featured-match">
        <div className="fm-inner">
          <div className="fm-team fm-home">
            <div className="fm-club">Redfield FC</div>
            <div className="fm-sub">Home · Redfield Stadium</div>
          </div>
          <div className="fm-mid">
            <div className="fm-vs">VS</div>
            <div className="fm-date">Sat 19 April 2025</div>
            <div className="fm-time">3:00 PM · Northern Premier League</div>
            <a href="/contact" className="fm-ticket">
              Buy Tickets
            </a>
          </div>
          <div className="fm-team fm-away">
            <div className="fm-club">Stanwick Athletic</div>
            <div className="fm-sub">Away Side</div>
          </div>
        </div>
      </div>

      <section className="fixtures-section">
        <div className="fixtures-inner">
          <FixturesTabsBar />

          <div className="fixture-row">
            <div className="fix-date">Sat 19 Apr</div>
            <div className="fix-home rfc">Redfield FC</div>
            <div className="fix-score upcoming">VS</div>
            <div className="fix-away">Stanwick Athletic</div>
            <div className="fix-comp">NPL</div>
            <a href="/contact" className="fix-ticket">
              Tickets
            </a>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Sat 26 Apr</div>
            <div className="fix-home">Broxley Town</div>
            <div className="fix-score upcoming">VS</div>
            <div className="fix-away rfc">Redfield FC</div>
            <div className="fix-comp">NPL</div>
            <a href="/contact" className="fix-ticket">
              Tickets
            </a>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Tue 29 Apr</div>
            <div className="fix-home rfc">Redfield FC</div>
            <div className="fix-score upcoming">VS</div>
            <div className="fix-away">Caldwell Rovers</div>
            <div className="fix-comp">NPL</div>
            <a href="/contact" className="fix-ticket">
              Tickets
            </a>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Sat 3 May</div>
            <div className="fix-home rfc">Redfield FC</div>
            <div className="fix-score upcoming">VS</div>
            <div className="fix-away">Northgate City</div>
            <div className="fix-comp">NPL</div>
            <a href="/contact" className="fix-ticket">
              Tickets
            </a>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Sat 10 May</div>
            <div className="fix-home">Harton United</div>
            <div className="fix-score upcoming">VS</div>
            <div className="fix-away rfc">Redfield FC</div>
            <div className="fix-comp">NPL</div>
            <a href="/contact" className="fix-ticket">
              Tickets
            </a>
          </div>

          <div className="results-divider">
            <span>Recent Results</span>
          </div>

          <div className="fixture-row">
            <div className="fix-date">Sat 15 Apr</div>
            <div className="fix-home rfc">Redfield FC</div>
            <div className="fix-score result-w">3–1</div>
            <div className="fix-away">Harton United</div>
            <div className="fix-comp">NPL</div>
            <span className="result-label result-w">WIN</span>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Tue 8 Apr</div>
            <div className="fix-home">Northgate City</div>
            <div className="fix-score result-d">0–0</div>
            <div className="fix-away rfc">Redfield FC</div>
            <div className="fix-comp">NPL</div>
            <span className="result-label result-d">DRAW</span>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Sat 5 Apr</div>
            <div className="fix-home rfc">Redfield FC</div>
            <div className="fix-score result-w">2–0</div>
            <div className="fix-away">Caldwell Rovers</div>
            <div className="fix-comp">NPL</div>
            <span className="result-label result-w">WIN</span>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Sat 29 Mar</div>
            <div className="fix-home rfc">Redfield FC</div>
            <div className="fix-score result-w">4–1</div>
            <div className="fix-away">Broxley Town</div>
            <div className="fix-comp">FA Cup</div>
            <span className="result-label result-w">WIN</span>
          </div>
          <div className="fixture-row">
            <div className="fix-date">Sat 22 Mar</div>
            <div className="fix-home">Stanwick Athletic</div>
            <div className="fix-score result-l">2–1</div>
            <div className="fix-away rfc">Redfield FC</div>
            <div className="fix-comp">NPL</div>
            <span className="result-label result-l">LOSS</span>
          </div>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
