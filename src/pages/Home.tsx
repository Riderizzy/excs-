import { motion } from 'motion/react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Values from '../components/Values';
import AppPreview from '../components/AppPreview';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <HowItWorks />
      <Values />
      <AppPreview />
    </motion.div>
  );
}
