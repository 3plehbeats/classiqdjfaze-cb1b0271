import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border section-padding !py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">
            <span className="text-gold-gradient">CLASSIQ</span> DJFAZE
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            CEO, CDF Entertainment. Piper of Remix. In-house DJ at StarPlus 101.5FM & Konga 103.7FM.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-primary mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Gallery", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm uppercase tracking-widest text-primary mb-3">Connect</h4>
          <p className="text-muted-foreground text-sm">classiqdjfaze.ng</p>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} ClassiQ DjFAZE / CDF Entertainment. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
