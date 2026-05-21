import { motion } from 'motion/react';
import Membership from '../components/Membership';

export default function SubscriptionPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Membership />
    </motion.div>
  );
}
