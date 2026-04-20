import dynamic from 'next/dynamic'

const CarScene = dynamic(() => import('./CarScene'), { ssr: false })

export default function Hero() {
  return (
    <section id="hero">
      <div id="canvas-container">
        <CarScene />
      </div>

      <div className="hero-text">
        <p className="hero-eyebrow">— 2025 Model Year</p>
        <h1>THE<em>APEX</em>GT</h1>
        <p className="hero-sub">Zero compromise. Zero emissions. The Vortech Apex GT redefines what electric performance means on road and track.</p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">2.1<span>s</span></div>
            <div className="stat-label">0–60 mph</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">847<span>hp</span></div>
            <div className="stat-label">Peak Power</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">390<span>mi</span></div>
            <div className="stat-label">Range</div>
          </div>
        </div>

        <a href="#models" className="hero-cta">
          Build yours
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 5h14M10 1l5 4-5 4" stroke="#f0ede8" strokeWidth="1.2"/>
          </svg>
        </a>
      </div>

      <div className="drag-hint">Drag to rotate</div>

      <div className="scroll-ind">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
