import { Link } from "react-router-dom";
import { Mail, Phone, Globe, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
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
            <a href="mailto:booking@classiqdjfaze.ng" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" /> booking@classiqdjfaze.ng
            </a>
            <a href="mailto:info@classiqdjfaze.ng" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" /> info@classiqdjfaze.ng
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
            <a href="https://instagram.com/classiqdjfaze" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/classiqdjfaze" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://x.com/classiqdjfaze" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@classiqdjfaze" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-colors">
              <Youtube className="w-5 h-5" />
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
