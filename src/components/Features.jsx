import { Scissors, CalendarCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const features = [
    {
        icon: Scissors,
        title: 'Professional Stylists',
        description:
            'Experienced beauty professionals dedicated to quality service.',
    },
    {
        icon: CalendarCheck,
        title: 'Easy Online Booking',
        description:
            'Customers can book appointments online anytime with our simple booking system.',
    },
    {
        icon: Sparkles,
        title: 'Wide Range of Beauty Services',
        description:
            'Hair, skincare, and beauty treatments tailored to your needs.',
    },
];

export default function Features() {
    const cardVariants = {
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
        <section id="features" className="py-20 sm:py-32 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
                            Why Choose Us
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
                            Our Highlights
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
                            Everything you need for a seamless salon experience, all in one
                            place
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariants}
                                viewport={{ once: true, margin: '-50px' }}
                                className="relative bg-dark-bg border border-foreground/10 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 p-8 group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-secondary"></div>
                                <div className="mb-6">
                                    <Icon
                                        size={36}
                                        className="text-accent group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-foreground/70 leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <AnimatedSection>
                    <div className="text-center mt-16">
                        <p className="text-sm font-medium text-foreground/60 mb-2">
                            Trusted by local beauty professionals
                        </p>
                        <p className="text-sm text-foreground/50 max-w-xl mx-auto leading-relaxed font-light">
                            Modern website designed to attract more customers and simplify
                            appointment booking.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
