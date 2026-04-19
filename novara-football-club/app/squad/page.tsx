import type { Metadata } from "next";
import Image from "next/image";

import { FootballNav } from "@/components/football/football-nav";
import { FooterSimple } from "@/components/football/footer-simple";
import { SquadInteractions } from "@/components/football/squad-interactions";

import "@/styles/pages/squad.css";

export const metadata: Metadata = {
  title: { absolute: "Redfield FC — Squad" },
};

export default function SquadPage() {
  return (
    <div className="page-squad">
      <FootballNav
        variant="default"
        active="squad"
        ctaHref="/fixtures"
      />

      <div className="page-header">
        <Image
          className="page-header-bg"
          src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1600&q=80&fit=crop&crop=center"
          alt="Squad"
          fill
          sizes="100vw"
        />
        <div className="page-header-content">
          <p className="page-eyebrow">2024/25 Season</p>
          <h1 className="page-title">The Squad</h1>
          <p className="page-sub">
            Meet the players who wear the red. Every one of them committed to
            the badge, the city, and each other.
          </p>
        </div>
      </div>

      <div className="squad-filter">
        <div className="squad-filter-inner">
          <button type="button" className="filter-btn active">
            All Players
          </button>
          <button type="button" className="filter-btn">
            Goalkeepers
          </button>
          <button type="button" className="filter-btn">
            Defenders
          </button>
          <button type="button" className="filter-btn">
            Midfielders
          </button>
          <button type="button" className="filter-btn">
            Forwards
          </button>
        </div>
      </div>

      <section className="squad-section">
        <div className="squad-section-inner">
          <div className="squad-pos-title">Goalkeepers</div>
          <div className="squad-grid">
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80&fit=crop&crop=top"
                alt="GK"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">1</div>
              <div className="player-body">
                <div className="player-name">Marcus Reid</div>
                <div className="player-pos">Goalkeeper</div>
                <div className="player-nat">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </div>
              </div>
            </div>
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=top"
                alt="GK2"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">13</div>
              <div className="player-body">
                <div className="player-name">Jamie Holt</div>
                <div className="player-pos">Goalkeeper</div>
                <div className="player-nat">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </div>
              </div>
            </div>
          </div>

          <div className="squad-pos-title">Defenders</div>
          <div className="squad-grid">
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=top"
                alt="DEF"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">2</div>
              <div className="player-body">
                <div className="player-name">Callum Nash</div>
                <div className="player-pos">Right Back</div>
                <div className="player-nat">
                  🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland
                </div>
              </div>
            </div>
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop&crop=top"
                alt="DEF2"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">5</div>
              <div className="player-body">
                <div className="player-name">Dele Okafor</div>
                <div className="player-pos">Centre Back</div>
                <div className="player-nat">🇳🇬 Nigeria</div>
              </div>
            </div>
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80&fit=crop&crop=top"
                alt="DEF3"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">6</div>
              <div className="player-body">
                <div className="player-name">Tom Bridges</div>
                <div className="player-pos">Centre Back</div>
                <div className="player-nat">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </div>
              </div>
            </div>
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&crop=top"
                alt="DEF4"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">3</div>
              <div className="player-body">
                <div className="player-name">Luca Ferretti</div>
                <div className="player-pos">Left Back</div>
                <div className="player-nat">🇮🇹 Italy</div>
              </div>
            </div>
          </div>

          <div className="squad-pos-title">Midfielders</div>
          <div className="squad-grid">
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80&fit=crop&crop=top"
                alt="MID"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">8</div>
              <div className="player-body">
                <div className="player-name">Ryan Whitfield</div>
                <div className="player-pos">Central Midfield</div>
                <div className="player-nat">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </div>
              </div>
            </div>
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80&fit=crop&crop=top"
                alt="MID2"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">10</div>
              <div className="player-body">
                <div className="player-name">Kofi Asante</div>
                <div className="player-pos">Attacking Mid</div>
                <div className="player-nat">🇬🇭 Ghana</div>
              </div>
            </div>
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80&fit=crop&crop=top"
                alt="MID3"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">7</div>
              <div className="player-body">
                <div className="player-name">Dean Pryce</div>
                <div className="player-pos">Right Wing</div>
                <div className="player-nat">
                  🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales
                </div>
              </div>
            </div>
          </div>

          <div className="squad-pos-title">Forwards</div>
          <div className="squad-grid">
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80&fit=crop&crop=top"
                alt="FWD"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">9</div>
              <div className="player-body">
                <div className="player-name">Theo Mensah</div>
                <div className="player-pos">Striker</div>
                <div className="player-nat">🇬🇭 Ghana</div>
              </div>
            </div>
            <div className="player-card">
              <Image
                className="player-photo"
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&q=80&fit=crop&crop=top"
                alt="FWD2"
                width={400}
                height={533}
              />
              <div className="player-overlay" />
              <div className="player-num">11</div>
              <div className="player-body">
                <div className="player-name">Jake Mullen</div>
                <div className="player-pos">Striker</div>
                <div className="player-nat">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="manager-section">
        <div className="manager-inner">
          <div className="manager-hdr-wrap">
            <p className="manager-hdr-label">Management</p>
            <h2 className="manager-hdr-title">The Gaffer</h2>
          </div>
          <div className="manager-card">
            <div className="manager-photo-wrap">
              <Image
                className="manager-photo"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&fit=crop&crop=top"
                alt="Manager"
                width={600}
                height={360}
              />
            </div>
            <div className="manager-info">
              <div className="manager-label">Head Manager · Appointed 2021</div>
              <div className="manager-name">Sandra Keane</div>
              <p className="manager-bio">
                Sandra Keane arrived at Redfield in 2021 with a record of
                promotion at two previous clubs and an uncompromising style that
                immediately won the dressing room. Under her leadership,
                Redfield reached the play-off final in 2023 and are now pushing
                for automatic promotion in one of the most competitive seasons
                the Northern Premier League has seen in a decade.
              </p>
              <div className="manager-stats">
                <div className="ms-item">
                  <div className="ms-num">64%</div>
                  <div className="ms-label">Win Rate</div>
                </div>
                <div className="ms-item">
                  <div className="ms-num">1</div>
                  <div className="ms-label">Promotion Achieved</div>
                </div>
                <div className="ms-item">
                  <div className="ms-num">4</div>
                  <div className="ms-label">Years at Club</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSimple />
      <SquadInteractions />
    </div>
  );
}
