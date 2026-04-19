import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FootballNav } from "@/components/football/football-nav";
import { FooterHome } from "@/components/football/footer-home";
import { HomeScrollEffects } from "@/components/football/home-scroll-effects";
import { Ticker } from "@/components/football/ticker";

import "@/styles/pages/home.css";

export const metadata: Metadata = {
  title: { absolute: "Redfield FC — Home" },
};

export default function HomePage() {
  return (
    <div className="page-home">
      <FootballNav
        variant="default"
        active="home"
        ctaHref="/fixtures"
      />
      <Ticker />

      <section className="hero">
        <Image
          className="hero-img"
          src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=85&fit=crop&crop=center"
          alt="Redfield FC matchday"
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-ov" />
        <div className="hero-ov2" />
        <div className="hero-bg-text">RFC</div>
        <div className="hero-content">
          <p className="hero-eyebrow fu d1">
            2024/25 Season · Northern Premier League
          </p>
          <h1 className="fu d2">
            One Club.
            <br />
            <em>One City.</em>
          </h1>
          <p className="hero-sub fu d3">
            Redfield FC. Founded 1924. One hundred years of passion, grit, and
            identity. This is our century — and we&apos;re just getting started.
          </p>
          <div className="hero-btns fu d4">
            <Link href="/fixtures" className="btn-r">
              Next Match Tickets
            </Link>
            <Link href="/squad" className="btn-o">
              Meet the Squad
            </Link>
          </div>
        </div>
      </section>

      <div className="next-match">
        <div className="nm-inner">
          <div className="nm-team nm-home">
            <div className="nm-club">Redfield FC</div>
            <div className="nm-sub">Home · Redfield Stadium</div>
          </div>
          <div className="nm-mid">
            <div className="nm-vs-label">Next Match</div>
            <div className="nm-vs">VS</div>
            <div className="nm-date">Saturday 19 April 2025</div>
            <div className="nm-time">Kick-off 3:00 PM · Redfield Stadium</div>
          </div>
          <div className="nm-team nm-away">
            <div className="nm-club">Stanwick Athletic</div>
            <div className="nm-sub">Northern Premier League</div>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="sb-stat">
            <div className="sb-num">3rd</div>
            <div className="sb-label">League Position</div>
          </div>
          <div className="sb-stat">
            <div className="sb-num">18W</div>
            <div className="sb-label">Wins This Season</div>
          </div>
          <div className="sb-stat">
            <div className="sb-num">64</div>
            <div className="sb-label">Goals Scored</div>
          </div>
          <div className="sb-stat">
            <div className="sb-num">4,200</div>
            <div className="sb-label">Stadium Capacity</div>
          </div>
          <div className="sb-stat">
            <div className="sb-num">100</div>
            <div className="sb-label">Years Established</div>
          </div>
        </div>
      </div>

      <section id="news">
        <div className="news-wrap">
          <div className="news-hdr">
            <div>
              <p className="sec-label">Latest News</p>
              <h2 className="sec-title">Club Updates</h2>
            </div>
            <a href="/club" className="news-all-link">
              All News →
            </a>
          </div>
          <div className="news-grid">
            <div className="nc nc-main">
              <Image
                className="nc-img"
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80&fit=crop&crop=center"
                alt="Match report"
                width={900}
                height={460}
              />
              <div className="nc-ov" />
              <div className="nc-body">
                <div className="nc-cat">Match Report</div>
                <div className="nc-title">
                  Redfield FC 3–1 Harton United: Dominant Display Secures Top
                  Three Spot
                </div>
                <div className="nc-date">15 April 2025</div>
              </div>
            </div>
            <div className="news-side-col">
              <div className="nc nc-side">
                <Image
                  className="nc-img"
                  src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80&fit=crop&crop=center"
                  alt="Transfer"
                  width={600}
                  height={227}
                />
                <div className="nc-ov" />
                <div className="nc-body">
                  <div className="nc-cat">Transfer</div>
                  <div className="nc-title">
                    Club Signs Striker Theo Mensah on 2-Year Deal
                  </div>
                  <div className="nc-date">12 April 2025</div>
                </div>
              </div>
              <div className="nc nc-side">
                <Image
                  className="nc-img"
                  src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80&fit=crop&crop=center"
                  alt="FA Cup"
                  width={600}
                  height={227}
                />
                <div className="nc-ov" />
                <div className="nc-body">
                  <div className="nc-cat">FA Cup</div>
                  <div className="nc-title">
                    FA Cup 2nd Round: Redfield Drawn Away to Millwall
                  </div>
                  <div className="nc-date">10 April 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="table">
        <div className="table-wrap">
          <div className="table-hdr">
            <div>
              <p className="sec-label">Standings</p>
              <h2 className="sec-title">League Table</h2>
            </div>
            <Link href="/fixtures" className="table-fixtures-link">
              Full Fixtures →
            </Link>
          </div>
          <table className="lt">
            <thead>
              <tr>
                <th>#</th>
                <th>Club</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>Pts</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pos">1</td>
                <td className="tn">Northgate City</td>
                <td>34</td>
                <td>22</td>
                <td>6</td>
                <td>6</td>
                <td>+38</td>
                <td>72</td>
                <td>
                  <div className="form">
                    <span className="fd fw">W</span>
                    <span className="fd fw">W</span>
                    <span className="fd fd2">D</span>
                    <span className="fd fw">W</span>
                    <span className="fd fl">L</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pos">2</td>
                <td className="tn">Harton United</td>
                <td>34</td>
                <td>20</td>
                <td>7</td>
                <td>7</td>
                <td>+29</td>
                <td>67</td>
                <td>
                  <div className="form">
                    <span className="fd fl">L</span>
                    <span className="fd fw">W</span>
                    <span className="fd fw">W</span>
                    <span className="fd fd2">D</span>
                    <span className="fd fw">W</span>
                  </div>
                </td>
              </tr>
              <tr className="hl">
                <td className="pos">3</td>
                <td className="tn">Redfield FC</td>
                <td>34</td>
                <td>18</td>
                <td>8</td>
                <td>8</td>
                <td>+22</td>
                <td>62</td>
                <td>
                  <div className="form">
                    <span className="fd fw">W</span>
                    <span className="fd fw">W</span>
                    <span className="fd fw">W</span>
                    <span className="fd fd2">D</span>
                    <span className="fd fw">W</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pos">4</td>
                <td className="tn">Stanwick Athletic</td>
                <td>34</td>
                <td>17</td>
                <td>8</td>
                <td>9</td>
                <td>+14</td>
                <td>59</td>
                <td>
                  <div className="form">
                    <span className="fd fd2">D</span>
                    <span className="fd fw">W</span>
                    <span className="fd fl">L</span>
                    <span className="fd fw">W</span>
                    <span className="fd fd2">D</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pos">5</td>
                <td className="tn">Broxley Town</td>
                <td>34</td>
                <td>15</td>
                <td>9</td>
                <td>10</td>
                <td>+8</td>
                <td>54</td>
                <td>
                  <div className="form">
                    <span className="fd fw">W</span>
                    <span className="fd fl">L</span>
                    <span className="fd fd2">D</span>
                    <span className="fd fl">L</span>
                    <span className="fd fw">W</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pos">6</td>
                <td className="tn">Caldwell Rovers</td>
                <td>34</td>
                <td>13</td>
                <td>10</td>
                <td>11</td>
                <td>+2</td>
                <td>49</td>
                <td>
                  <div className="form">
                    <span className="fd fl">L</span>
                    <span className="fd fd2">D</span>
                    <span className="fd fw">W</span>
                    <span className="fd fl">L</span>
                    <span className="fd fd2">D</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="sponsors">
        <div className="sp-inner">
          <p className="sp-label">Club Partners & Sponsors</p>
          <div className="sp-logos">
            <span className="sp-logo">Mercer & Sons</span>
            <span className="sp-logo">Redfield Brewery</span>
            <span className="sp-logo">NorthBuild</span>
            <span className="sp-logo">Atlas Energy</span>
            <span className="sp-logo">Halton Sports</span>
          </div>
        </div>
      </div>

      <FooterHome />
      <HomeScrollEffects />
    </div>
  );
}
