import Link from "next/link";

export function LawFooterFull() {
  return (
    <footer>
      <div className="ft-inner">
        <div>
          <div className="ft-logo">
            Hale <span>&</span> Partners
          </div>
          <p className="ft-tag">
            Authorised and regulated by the Solicitors Regulation Authority. SRA
            Number 123456. Manchester, England.
          </p>
        </div>
        <div>
          <div className="ft-col-title">Services</div>
          <ul className="ft-links">
            <li>
              <Link href="/services">Employment</Link>
            </li>
            <li>
              <Link href="/services">Family Law</Link>
            </li>
            <li>
              <Link href="/services">Conveyancing</Link>
            </li>
            <li>
              <Link href="/services">Personal Injury</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="ft-col-title">Firm</div>
          <ul className="ft-links">
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Careers</Link>
            </li>
            <li>
              <Link href="/services">News</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="ft-col-title">Contact</div>
          <ul className="ft-links">
            <li>
              <Link href="/contact">Free Consultation</Link>
            </li>
            <li>
              <a href="tel:+441612345678">0161 234 5678</a>
            </li>
            <li>
              <a href="mailto:info@halepartners.co.uk">info@halepartners.co.uk</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-bottom">
        <span className="ft-copy">
          © 2025 Hale & Partners Solicitors. All rights reserved.
        </span>
        <span className="ft-credit">
          Site by{" "}
          <a href="https://novarastudios.co.uk">Novara Studios Ltd</a> · Co.
          17025468
        </span>
      </div>
    </footer>
  );
}
