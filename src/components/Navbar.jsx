import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { businessInfo } from '../config/businessInfo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Services', to: '/services' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Booking', to: isHomePage ? '#booking' : '/#booking' },
    { name: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.to.startsWith('#') && isHomePage) {
      const el = document.querySelector(link.to);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${businessInfo.social.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-2xl' : 'bg-background'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={businessInfo.logo}
              alt={`${businessInfo.name} logo`}
              className="w-12 h-12 rounded-lg object-cover shadow-lg"
            />
            <span className="text-lg font-serif font-bold text-foreground hidden sm:inline">
              {businessInfo.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) =>
              link.to.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.to}
                  onClick={() => handleNavClick(link)}
                  className="text-foreground hover:text-accent transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    location.pathname === link.to
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-6">

            <Link
              to={isHomePage ? '#booking' : '/#booking'}
              className="px-6 py-2.5 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-foreground/10 bg-dark-bg/50 backdrop-blur-sm">
            {navLinks.map((link) =>
              link.to.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.to}
                  className="block px-4 py-3 text-foreground hover:text-accent transition-colors text-sm font-medium uppercase tracking-wide"
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`block px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors ${
                    location.pathname === link.to
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="px-4 py-3 border-t border-foreground/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white hover:text-white rounded-lg font-medium text-sm transition-all w-full justify-center"
              >
                WhatsApp
              </a>
            </div>
            <Link
              to={isHomePage ? '#booking' : '/#booking'}
              className="block m-4 px-6 py-2.5 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg text-center font-medium text-sm transition-all shadow-md"
              onClick={(e) => {
                setIsOpen(false);
                if (isHomePage) {
                  e.preventDefault();
                  document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
        aria-label="WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-2.759 0-5.327 1.287-7.077 3.355-.422.489-.809 1.026-1.133 1.596-.55 1.018-.859 2.19-.869 3.393 0 2.758 1.288 5.326 3.355 7.077.488.423 1.026.809 1.595 1.132 1.019.55 2.19.859 3.393.869 2.758 0 5.327-1.287 7.077-3.355.423-.488.809-1.026 1.133-1.596.55-1.018.859-2.189.869-3.393 0-2.758-1.288-5.326-3.355-7.077-.488-.423-1.026-.809-1.595-1.132-1.019-.55-2.19-.859-3.393-.869zm0 0C6.463 2.449 2.449 6.463 2.449 11.224c0 2.725 1.089 5.277 3.055 7.242 1.966 1.966 4.517 3.055 7.242 3.055 4.761 0 8.775-4.014 8.775-8.775S16.985 2.449 12.224 2.449z"/>
        </svg>
      </a>
    </>
  );
}
