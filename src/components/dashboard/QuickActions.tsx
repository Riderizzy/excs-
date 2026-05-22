import { motion } from 'motion/react';
import { Sparkles, Shirt, RotateCcw, MapPin, Headset, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ACTIONS = [
  { icon: Sparkles, label: 'Book Cleaning', path: '/book', color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10' },
  { icon: Shirt, label: 'Schedule Laundry', path: '/book', color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10' },
  { icon: RotateCcw, label: 'Repeat Service', path: '/book', color: 'text-white', bg: 'bg-white/5' },
  { icon: MapPin, label: 'Track Booking', path: '/dashboard/user', color: 'text-white', bg: 'bg-white/5' },
  { icon: Headset, label: 'Get Support', path: '/contact', color: 'text-white', bg: 'bg-white/5' },
  { icon: UserPlus, label: 'Refer Friend', path: '/partner', color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10' },
];

export default function QuickActions() {
  return (
    <div className="mb-12">
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6 px-1">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {ACTIONS.map((action, i) => (
          <Link key={action.label} to={action.path}>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass p-6 rounded-[2rem] flex flex-col items-center gap-4 text-center cursor-pointer border border-white/5 hover:border-brand-primary-green/30 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl ${action.bg} flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform duration-500`}>
                <action.icon size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest leading-tight text-white/60 group-hover:text-white">{action.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
