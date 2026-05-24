import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/grt-logo.png";
import { WHATSAPP_URL } from "@/lib/constants";

const pageLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const sectionLinks = [
  { href: "/#services", label: "Solutions" },
  { href: "/#projects", label: "Projects" },
  { href: "/#generators", label: "Generators" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="GRT Kariakoo Company Limited logo"
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {pageLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md text-sm font-medium text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          {sectionLinks.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-md border border-[#25D366]/50 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/10 inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link to="/contact" className="ml-2 px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
            Get Quote
          </Link>
        </nav>

        <button type="button" className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-2">
            {pageLinks.map((l) => (
              <Link key={l.to} to={l.to} className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            {sectionLinks.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="py-2 text-sm font-medium text-[#25D366]">
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
