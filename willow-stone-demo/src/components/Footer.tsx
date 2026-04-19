import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="font-display text-xl font-medium">Willow & Stone</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Premium wellness experiences across Liverpool, Wirral, Chester & Warrington.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium tracking-wide uppercase">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium tracking-wide uppercase">Treatments</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/services/massage-therapy" className="hover:text-primary transition-colors">Massage Therapy</Link>
            <Link to="/services/facial-treatments" className="hover:text-primary transition-colors">Facial Treatments</Link>
            <Link to="/services/body-treatments" className="hover:text-primary transition-colors">Body Treatments</Link>
            <Link to="/services/holistic-therapies" className="hover:text-primary transition-colors">Holistic Therapies</Link>
            <Link to="/services/wellness-packages" className="hover:text-primary transition-colors">Wellness Packages</Link>
            <Link to="/services/spa-experiences" className="hover:text-primary transition-colors">Spa Experiences</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium tracking-wide uppercase">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>hello@willowandstone.co.uk</p>
            <p>0151 000 0000</p>
            <p className="leading-relaxed">Liverpool · Wirral · Chester · Warrington</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Willow & Stone Wellness. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;