import { Link } from "@tanstack/react-router";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-amber-glow flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold">Generator Kariakoo</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Powering Tanzania with reliable electrical and power electronics solutions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Generator Sales</li>
            <li>Rentals</li>
            <li>Repairs & Maintenance</li>
            <li>Installation</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kariakoo, Dar es Salaam</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +255 000 000 000</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@generatorkariakoo.co.tz</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Generator Kariakoo Ltd. All rights reserved.
      </div>
    </footer>
  );
}
