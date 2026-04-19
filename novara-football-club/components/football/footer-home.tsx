import Link from "next/link";

export function FooterHome() {
  return (
    <footer>
      <div className="ft-inner">
        <div>
          <div className="ft-logo">
            Redfield <span>FC</span>
          </div>
          <p className="ft-tag">
            Founded 1924. One hundred years of community, pride, and football in
            the heart of Redfield.
          </p>
        </div>
        <div>
          <div className="ft-col-title">Club</div>
          <ul className="ft-links">
            <li>
              <Link href="/club">History</Link>
            </li>
            <li>
              <Link href="/squad">Squad</Link>
            </li>
            <li>
              <Link href="/fixtures">Fixtures</Link>
            </li>
            <li>
              <Link href="/team">Academy</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="ft-col-title">Matchday</div>
          <ul className="ft-links">
            <li>
              <Link href="/fixtures">Buy Tickets</Link>
            </li>
            <li>
              <Link href="/club">Stadium Info</Link>
            </li>
            <li>
              <Link href="/contact">Hospitality</Link>
            </li>
            <li>
              <Link href="/contact">Club Shop</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="ft-col-title">Connect</div>
          <ul className="ft-links">
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">Twitter / X</a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-bottom">
        <span className="ft-copy">© 2025 Redfield FC. All rights reserved.</span>
        <span className="ft-credit">
          Site by <a href="https://novarastudios.co.uk">Novara Studios Ltd</a> ·
          Co. 17025468
        </span>
      </div>
    </footer>
  );
}
