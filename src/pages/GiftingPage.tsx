import { motion } from 'motion/react';
import Gifting from '../components/Gifting';

export default function GiftingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Gifting />
    </motion.div>
  );
}
