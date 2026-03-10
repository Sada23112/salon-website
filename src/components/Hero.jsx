import { MessageCircle, ArrowRight } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${businessInfo.social.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <img
        src={businessInfo.heroImage}
        alt="Salon interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-black/60 to-background/40"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center py-20">
        <p className="text-accent text-xs font-medium tracking-widest uppercase mb-6 letter-spacing-lg">Luxury Excellence</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 leading-tight text-balance">
          {businessInfo.heroHeadline}
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {businessInfo.heroSubtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#booking"
            className="px-8 py-4 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg font-medium flex items-center gap-2 group transition-all shadow-lg hover:shadow-xl"
          >
            Book Appointment
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-foreground/10 backdrop-blur-lg text-white hover:bg-foreground/20 hover:text-white rounded-lg font-medium flex items-center justify-center gap-2 border border-foreground/30 transition-all"
          >
            <MessageCircle size={18} />
            WhatsApp Chat
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
