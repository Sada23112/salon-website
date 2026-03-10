import { Scissors, Palette, Sparkles, Hand, Flower2, Smile, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { businessInfo } from '../config/businessInfo';
import AnimatedSection from './AnimatedSection';

const serviceDetails = [
  {
    icon: Scissors,
    name: 'Hair Cut & Style',
    price: '$65',
    description: 'Expert precision cuts and styling tailored to your unique look. Our stylists analyze your face shape, hair texture, and lifestyle to create the perfect cut.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Palette,
    name: 'Hair Coloring',
    price: '$120',
    description: 'Full spectrum color services from subtle highlights to bold transformations. We use premium, damage-free formulas for vibrant, long-lasting color.',
    image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Sparkles,
    name: 'Balayage Highlights',
    price: '$150',
    description: 'Hand-painted, sun-kissed highlights that blend seamlessly for a natural, dimensional look. Perfect for low-maintenance, high-impact color.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Hand,
    name: 'Manicure',
    price: '$35',
    description: 'Luxurious hand care with nail shaping, cuticle treatment, massage, and flawless polish application. Choose from classic, gel, or artistic nail designs.',
    image: 'https://images.pexels.com/photos/4325186/pexels-photo-4325186.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Flower2,
    name: 'Pedicure',
    price: '$45',
    description: 'Complete foot rejuvenation with exfoliation, deep moisturizing, massage, and perfect polish. Step out feeling refresh and pampered.',
    image: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Smile,
    name: 'Facial Treatment',
    price: '$85',
    description: 'Customized facial treatments using premium skincare products. Deep cleansing, exfoliation, mask, and massage for radiant, glowing skin.',
    image: 'https://images.pexels.com/photos/3807599/pexels-photo-3807599.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: 'easeOut',
    },
  }),
};

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-32 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
              Our Services
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
              Discover our full range of premium salon services, each designed to enhance your natural beauty
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-accent/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-accent">{service.price}</span>
                    <Link
                      to="/#booking"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg"
                    >
                      Book Now
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="text-center mt-16">
            <p className="text-foreground/60 text-sm mb-6">Ready for your transformation?</p>
            <Link
              to="/#booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Book Your Appointment
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
