import { motion } from 'motion/react';
import { Cloud, Sun, Zap } from 'lucide-react';

export default function DashboardHeader() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 text-white/40 mb-4 px-1">
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
          <Sun size={14} className="text-brand-accent-yellow" />
          <span className="text-[10px] font-bold uppercase tracking-widest">28°C Lagos</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
          <Zap size={14} className="text-brand-primary-green" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Essentials on track</span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-6xl font-bold tracking-tighter mb-3">
          {greeting}, <span className="text-brand-primary-green italic font-medium">Tobi.</span>
        </h1>
        <p className="text-xl text-white/30 max-w-lg leading-relaxed">
          Your home is in good hands. You've saved <span className="text-white font-bold">12.5 hours</span> this month through your automated care.
        </p>
      </motion.div>
    </div>
  );
}
