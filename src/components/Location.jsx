import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessInfo } from '../config/businessInfo';
import AnimatedSection from './AnimatedSection';

export default function Location() {
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
              Visit Our Salon
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
              Conveniently located and always ready to welcome you
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all group hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Address
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {businessInfo.contact.address}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg transition-all font-medium text-xs shadow-md"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all group hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Contact
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    <a
                      href={`tel:${businessInfo.contact.phone}`}
                      className="hover:text-accent transition-colors font-medium"
                    >
                      {businessInfo.contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all group hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Hours
                  </h3>
                  <div className="space-y-2 text-foreground/70 text-sm">
                    <p>
                      <span className="font-semibold text-foreground/80">Mon - Thu:</span>{' '}
                      {businessInfo.hours.monday}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground/80">Friday:</span>{' '}
                      {businessInfo.hours.friday}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground/80">Saturday:</span>{' '}
                      {businessInfo.hours.saturday}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground/80">Sunday:</span>{' '}
                      {businessInfo.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="rounded-sm overflow-hidden shadow-lg">
            <iframe
              src={businessInfo.googleMapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon location map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
