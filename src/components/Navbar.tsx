import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-cdf.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/mixtapes", label: "Mixtapes" },
  { to: "/music", label: "Music" },
  { to: "/videos", label: "Videos" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ClassiQDJFAZE Logo" className="h-10 w-auto" />
          <span className="font-heading text-2xl font-bold tracking-wider">
            <span className="text-accent">ClassiQ</span>
            <span className="text-primary-foreground">DjFAZE</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-b border-primary-foreground/10 animate-fade-in">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`font-heading text-sm tracking-widest uppercase py-2 transition-colors hover:text-accent ${
                  location.pathname === link.to ? "text-accent" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
