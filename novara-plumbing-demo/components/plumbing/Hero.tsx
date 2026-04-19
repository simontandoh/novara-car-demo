import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <Image
        className="hero-photo"
        src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&q=85&fit=crop&crop=center"
        alt="Plumber at work"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-stripe" aria-hidden="true">
        <Image
          className="hero-stripe-photo"
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80&fit=crop&crop=center"
          alt=""
          fill
          sizes="(max-width: 900px) 0vw, 46vw"
        />
        <div className="hero-stripe-line" />
      </div>
      <div className="hero-ghost" aria-hidden="true">
        FIX
      </div>

      <div className="hero-content">
        <div className="hero-badge fade-up d1">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">
            Available Now - 24/7 Emergency Cover
          </span>
        </div>

        <h1 className="fade-up d2">
          Liverpool&apos;s
          <br />
          <em>Trusted</em>
          <br />
          Plumbers.
        </h1>

        <p className="hero-sub fade-up d3">
          Fast, reliable, fully qualified. No call-out fees. No hidden charges.
          Just straight-talking tradespeople who show up, fix the problem, and
          leave things cleaner than they found them.
        </p>

        <div className="hero-actions fade-up d4">
          <Link href="#contact" className="btn-primary">
            Get a Free Quote
          </Link>
          <Link href="#services" className="btn-outline">
            Our Services
          </Link>
        </div>

        <div className="hero-trust fade-up d4">
          {[
            "Gas Safe Registered",
            "No Call-Out Fee",
            "Same-Day Available",
            "All Work Guaranteed",
          ].map((item) => (
            <div className="trust-item" key={item}>
              <div className="trust-check">✓</div>
              <span className="trust-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
