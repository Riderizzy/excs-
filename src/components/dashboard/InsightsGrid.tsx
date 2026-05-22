import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Wallet, Clock, Zap } from 'lucide-react';

const INSIGHTS = [
  { label: 'Time Saved', value: '14.5 Hrs', detail: '+2h vs. last month', icon: Clock, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10' },
  { label: 'Platform Savings', value: '₦18,500', detail: 'Club member perks', icon: Wallet, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10' },
  { label: 'Service Reliability', value: '100%', detail: 'No cancellations', icon: Zap, color: 'text-white', bg: 'bg-white/5' },
  { label: 'Efficiency Score', value: '98', detail: 'Elite lifestyle tier', icon: TrendingUp, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10' },
];

export default function InsightsGrid() {
  return (
    <div className="mb-12">
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6 px-1">Intelligent Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {INSIGHTS.map((insight, i) => (
          <motion.div
            key={insight.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-dark p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
          >
            <div className={`w-12 h-12 rounded-xl ${insight.bg} flex items-center justify-center ${insight.color} mb-6`}>
              <insight.icon size={22} />
            </div>
            <div>
              <h3 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2">{insight.label}</h3>
              <p className="text-3xl font-bold tracking-tighter mb-1">{insight.value}</p>
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{insight.detail}</p>
            </div>
            
            {/* Visual element */}
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-primary-green/5 blur-3xl rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
