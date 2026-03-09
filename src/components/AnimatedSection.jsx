import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AnimatedSection({ children, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
