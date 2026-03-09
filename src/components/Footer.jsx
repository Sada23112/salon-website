import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '../config/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-foreground border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              {business.businessName}
            </h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Experience luxury salon services dedicated to your beauty and confidence
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-foreground/70 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 text-foreground/70 text-sm">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <p className="leading-relaxed">
                  {business.address}
                  <br />
                  {business.city}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-6">Follow</h4>
            <div className="flex gap-4">
              <a
                href={business.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={business.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={business.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8">
          <p className="text-center text-foreground/60 text-xs">
            &copy; {currentYear} {business.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
