export default function Features() {
  return (
    <section id="features">
      <div className="features-header">
        <div>
          <p className="section-label">Engineering</p>
          <h2 className="section-title">BUILT<br />DIFFERENT</h2>
        </div>
        <p className="section-desc">Every component engineered to the thousandth of a millimeter. Every system rethought from first principles.</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-num">01</div>
          <div className="feature-name">Dual Motor AWD</div>
          <p className="feature-text">Independent front and rear motors deliver precise torque vectoring through every corner, in every condition.</p>
        </div>
        <div className="feature-card">
          <div className="feature-num">02</div>
          <div className="feature-name">Carbon Chassis</div>
          <p className="feature-text">Monocoque carbon fibre construction saves 340kg over comparable steel platforms while tripling rigidity.</p>
        </div>
        <div className="feature-card">
          <div className="feature-num">03</div>
          <div className="feature-name">Adaptive Air</div>
          <p className="feature-text">Electronically controlled suspension reads road surface 1000 times per second and adjusts in real time.</p>
        </div>
        <div className="feature-card">
          <div className="feature-num">04</div>
          <div className="feature-name">100kWh Pack</div>
          <p className="feature-text">Proprietary prismatic cell architecture with liquid cooling achieves industry-leading energy density and longevity.</p>
        </div>
        <div className="feature-card">
          <div className="feature-num">05</div>
          <div className="feature-name">350kW Charge</div>
          <p className="feature-text">Ultra-fast DC charging adds 180 miles in under 12 minutes. From 10% to 80% in under 20 minutes.</p>
        </div>
        <div className="feature-card">
          <div className="feature-num">06</div>
          <div className="feature-name">Track Mode</div>
          <p className="feature-text">Dedicated track software unlocks full power output, disables stability intervention, and logs every lap.</p>
        </div>
      </div>
    </section>
  )
}
