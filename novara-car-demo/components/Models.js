export default function Models() {
  return (
    <section id="models">
      <div className="features-header">
        <div>
          <p className="section-label">Lineup</p>
          <h2 className="section-title">CHOOSE<br />YOUR VORTECH</h2>
        </div>
        <p className="section-desc">Three configurations. One obsession. Find the Vortech built for how you drive.</p>
      </div>

      <div className="models-grid">
        <div className="model-card">
          <img className="model-img" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80" alt="Vortech Apex S" />
          <div className="model-info">
            <span className="model-badge">Entry</span>
            <div className="model-name">APEX S</div>
            <div className="model-price">From £89,000</div>
            <div className="model-specs">
              <div className="spec">
                <div className="spec-val">3.4<small>s</small></div>
                <div className="spec-key">0–60</div>
              </div>
              <div className="spec">
                <div className="spec-val">480<small>hp</small></div>
                <div className="spec-key">Power</div>
              </div>
              <div className="spec">
                <div className="spec-val">340<small>mi</small></div>
                <div className="spec-key">Range</div>
              </div>
            </div>
          </div>
        </div>

        <div className="model-card">
          <img className="model-img" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" alt="Vortech Apex GT" />
          <div className="model-info">
            <span className="model-badge">Signature</span>
            <div className="model-name">APEX GT</div>
            <div className="model-price">From £142,000</div>
            <div className="model-specs">
              <div className="spec">
                <div className="spec-val">2.1<small>s</small></div>
                <div className="spec-key">0–60</div>
              </div>
              <div className="spec">
                <div className="spec-val">847<small>hp</small></div>
                <div className="spec-key">Power</div>
              </div>
              <div className="spec">
                <div className="spec-val">390<small>mi</small></div>
                <div className="spec-key">Range</div>
              </div>
            </div>
          </div>
        </div>

        <div className="model-card">
          <img className="model-img" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80" alt="Vortech Apex R" />
          <div className="model-info">
            <span className="model-badge">Track</span>
            <div className="model-name">APEX R</div>
            <div className="model-price">From £210,000</div>
            <div className="model-specs">
              <div className="spec">
                <div className="spec-val">1.7<small>s</small></div>
                <div className="spec-key">0–60</div>
              </div>
              <div className="spec">
                <div className="spec-val">1200<small>hp</small></div>
                <div className="spec-key">Power</div>
              </div>
              <div className="spec">
                <div className="spec-val">280<small>mi</small></div>
                <div className="spec-key">Range</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
