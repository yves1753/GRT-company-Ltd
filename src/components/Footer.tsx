import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import logo from "@/assets/optimized/grt-logo.webp";
import {
  ADDRESS_LINES,
  COMPANY_NAME,
  COMPANY_SHORT,
  EMAIL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_TEL_PRIMARY,
  PHONE_TEL_SECONDARY,
  INSTAGRAM_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt={COMPANY_NAME} width={160} height={155} className="h-16 w-auto object-contain mb-4" loading="lazy" decoding="async" />
          <p className="text-sm font-medium">{COMPANY_SHORT}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Industrial power solutions — generators, ATS, rentals & nationwide support across Tanzania.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 mt-4 text-muted-foreground hover:text-primary transition-colors"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><a href="/#services" className="hover:text-primary">Solutions</a></li>
            <li><Link to="/services" className="hover:text-primary">All Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Generator Sales & Rental</li>
            <li>ATS Installation</li>
            <li>Load Testing & Sync</li>
            <li>Maintenance & Spares</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
              <span>{ADDRESS_LINES.join(", ")}</span>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL_PRIMARY}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="w-4 h-4" /> {PHONE_PRIMARY}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL_SECONDARY}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="w-4 h-4" /> {PHONE_SECONDARY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary break-all">
                <Mail className="w-4 h-4 shrink-0" /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
