import type { Metadata } from "next";

import { CustomCursor } from "@/components/photographer/custom-cursor";
import { PortfolioInteractions } from "@/components/photographer/portfolio-interactions";
import { SiteFooter } from "@/components/photographer/site-footer";
import { SiteNav } from "@/components/photographer/site-nav";
import "@/styles/pages/photographer-common.css";
import "@/styles/pages/portfolio.css";

export const metadata: Metadata = {
  title: "Elodie Marsh — Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="photographer-page portfolio">
      <CustomCursor />
      <SiteNav active="portfolio" />

      <div className="page-hero">
        <p className="ph-label">Selected Work</p>
        <h1 className="ph-title">
          Portfolio &
          <br />
          <em>Projects.</em>
        </h1>
      </div>

      <div className="filter-bar">
        <span className="filter-label">Filter:</span>
        <div className="filter-btns">
          <button className="filter-btn active" data-filter="all" type="button">
            All
          </button>
          <button className="filter-btn" data-filter="wedding" type="button">
            Wedding
          </button>
          <button className="filter-btn" data-filter="fashion" type="button">
            Fashion
          </button>
          <button className="filter-btn" data-filter="commercial" type="button">
            Commercial
          </button>
          <button className="filter-btn" data-filter="editorial" type="button">
            Editorial
          </button>
        </div>
      </div>

      <section className="gallery">
        <div className="gallery-grid" id="gallery">
          <a className="g-item" href="/portfolio" data-cat="wedding">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&fit=crop"
              alt="Wedding"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Wedding</div>
              <div className="g-name">Alice & James, Tuscany</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="fashion">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&fit=crop"
              alt="Fashion"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Fashion</div>
              <div className="g-name">SS25 Editorial, London</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="wedding">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80&fit=crop"
              alt="Wedding"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Wedding</div>
              <div className="g-name">Sophie & Tom, Cotswolds</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="commercial">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80&fit=crop"
              alt="Commercial"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Commercial</div>
              <div className="g-name">Atelier Voss Campaign</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="editorial">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&fit=crop"
              alt="Editorial"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Editorial</div>
              <div className="g-name">Texture & Light Series</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="wedding">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80&fit=crop"
              alt="Wedding"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Wedding</div>
              <div className="g-name">Clara & Noah, Amalfi</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="fashion">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&fit=crop"
              alt="Fashion"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Fashion</div>
              <div className="g-name">AW24 Lookbook</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="commercial">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop"
              alt="Commercial"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Commercial</div>
              <div className="g-name">Product Campaign, Studio</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="editorial">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80&fit=crop"
              alt="Editorial"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Editorial</div>
              <div className="g-name">Golden Hour, Paris</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="wedding">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80&fit=crop"
              alt="Wedding"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Wedding</div>
              <div className="g-name">Anna & Will, Lake Como</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="fashion">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80&fit=crop"
              alt="Fashion"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Fashion</div>
              <div className="g-name">Independent Designer Series</div>
            </div>
          </a>
          <a className="g-item" href="/portfolio" data-cat="editorial">
            <img
              className="g-photo"
              src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&q=80&fit=crop"
              alt="Editorial"
            />
            <div className="g-ov" />
            <div className="g-info">
              <div className="g-cat">Editorial</div>
              <div className="g-name">Still Life Studies</div>
            </div>
          </a>
        </div>
      </section>

      <section className="categories">
        <div className="cat-card">
          <img
            className="cat-photo"
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80&fit=crop"
            alt="Wedding"
          />
          <div className="cat-body">
            <div className="cat-name">Wedding</div>
            <div className="cat-count">48 Projects</div>
          </div>
          <a href="/portfolio" className="cat-link" />
        </div>
        <div className="cat-card">
          <img
            className="cat-photo"
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop"
            alt="Fashion"
          />
          <div className="cat-body">
            <div className="cat-name">Fashion</div>
            <div className="cat-count">31 Projects</div>
          </div>
          <a href="/portfolio" className="cat-link" />
        </div>
        <div className="cat-card">
          <img
            className="cat-photo"
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&q=80&fit=crop"
            alt="Commercial"
          />
          <div className="cat-body">
            <div className="cat-name">Commercial</div>
            <div className="cat-count">27 Projects</div>
          </div>
          <a href="/portfolio" className="cat-link" />
        </div>
        <div className="cat-card">
          <img
            className="cat-photo"
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80&fit=crop"
            alt="Editorial"
          />
          <div className="cat-body">
            <div className="cat-name">Editorial</div>
            <div className="cat-count">19 Projects</div>
          </div>
          <a href="/portfolio" className="cat-link" />
        </div>
      </section>

      <SiteFooter />
      <PortfolioInteractions />
    </div>
  );
}
