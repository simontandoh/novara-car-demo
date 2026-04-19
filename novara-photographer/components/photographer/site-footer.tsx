import Link from "next/link";

type SiteFooterProps = {
  showNav?: boolean;
};

export function SiteFooter({ showNav = false }: SiteFooterProps) {
  return (
    <footer>
      <div className="fl">
        <em>Elodie</em> Marsh
      </div>
      {showNav ? (
        <div className="fn">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      ) : null}
      <div className="fc">
        Site by <a href="https://novarastudios.co.uk">Novara Studios Ltd</a> ·
        Co. 17025468
      </div>
    </footer>
  );
}
