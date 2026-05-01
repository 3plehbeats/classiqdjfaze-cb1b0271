import { Link } from "react-router-dom";
import { Mail, Phone, Globe, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.87a8.16 8.16 0 0 0 4.77 1.52V6.94a4.85 4.85 0 0 1-1.84-.25z" />
  </svg>
);
import logo from "@/assets/logo-cdf.png";

const Footer = () => (
  <footer className="bg-card border-t border-border section-padding !py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Brand */}
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt="CDF Entertainment Logo" className="w-24 h-auto" />
          <h3 className="font-heading text-xl font-bold">
            <span className="text-accent">ClassiQ</span>DjFAZE
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            CEO, CDF Entertainment. Piper of Remix. In-house DJ at StarPlus 101.5FM & Konga 103.7FM.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Gallery", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-accent transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-3">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:booking@classiqdjfaze.ng" className="flex flex-col gap-0.5 text-muted-foreground text-sm hover:text-accent transition-colors">
              <span className="text-xs uppercase tracking-widest text-accent">For bookings</span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" /> booking@classiqdjfaze.ng
              </span>
            </a>
            <a href="mailto:info@classiqdjfaze.ng" className="flex flex-col gap-0.5 text-muted-foreground text-sm hover:text-accent transition-colors">
              <span className="text-xs uppercase tracking-widest text-accent">For enquiries</span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" /> info@classiqdjfaze.ng
              </span>
            </a>
            <a href="tel:08034478512" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" /> 08034478512
            </a>
            <a href="tel:08087412512" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" /> 08087412512
            </a>
            <a href="https://classiqdjfaze.ng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
              <Globe className="w-4 h-4 text-accent flex-shrink-0" /> classiqdjfaze.ng
            </a>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0" /> MiTV/StarFM Plaza, Obafemi Awolowo Way, Alausa Ikeja
            </span>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-3">Follow</h4>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/classiqdjfaze?igsh=MTlqMHR1eDg4bWhnNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/18KrSytvAP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://x.com/classiqdjfaze?s=21" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <XIcon className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@classiqdjfaze?si=_oO-uri25UqtJ73_" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://tiktok.com/@classiqdjfaze" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} ClassiQDjFAZE / CDF Entertainment. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
