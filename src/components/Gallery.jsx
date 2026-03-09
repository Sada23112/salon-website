import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { business } from '../config/business';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Gallery() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Visual Stories</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
              Gallery
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our collection of beautiful transformations and salon experiences
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {business.galleryImages.map((image, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={imageVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square border border-foreground/5"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium px-4">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl group"
            >
              View All Gallery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
