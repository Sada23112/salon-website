import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Client',
      text: 'Absolutely love the results! The team is professional and the salon has such a welcoming atmosphere. I always leave feeling pampered and beautiful.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Regular Client',
      text: 'Best salon experience ever. The stylists really listen to what you want and deliver beyond expectations. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Jessica Lee',
      role: 'Client',
      text: 'From the moment I walked in, I felt at home. The attention to detail and quality of service is unmatched. Worth every penny!',
      rating: 5,
    },
  ];

  const reviewVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Client Testimonials</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
              Trusted by Our Clients
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
              Real experiences from our happy customers
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={reviewVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:translate-y-[-4px] group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground mb-8 leading-relaxed italic text-sm">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
