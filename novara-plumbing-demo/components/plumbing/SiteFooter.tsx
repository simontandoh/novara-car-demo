import Link from "next/link";

import {
  COMPANY_EMAIL_LINK,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_LINK,
} from "./content";

export function SiteFooter() {
  return (
    <footer>
      <Link href="#top" className="footer-logo">
        Ironside<span>.</span>
      </Link>

      <div className="footer-info">
        {COMPANY_NAME} · Gas Safe Registered · Liverpool, Merseyside
        <br />
        <a href={COMPANY_PHONE_LINK}>{COMPANY_PHONE}</a> ·{" "}
        <a href={COMPANY_EMAIL_LINK}>hello@ironsideplumbing.co.uk</a>
        <br />
        All work fully insured and guaranteed for 12 months
      </div>

      <ul className="footer-links">
        <li>
          <Link href="#contact">Free quote</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#why">Why us</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>

      <div className="footer-credit">
        Site by{" "}
        <a
          href="https://novarastudios.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Novara Studios Ltd
        </a>{" "}
        · Co. 17025468
      </div>
    </footer>
  );
}
