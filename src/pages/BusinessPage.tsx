import { motion } from 'motion/react';
import Business from '../components/Business';

export default function BusinessPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Business />
    </motion.div>
  );
}
