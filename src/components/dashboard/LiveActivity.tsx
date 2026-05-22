import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shirt, ChevronRight, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ACTIVITIES = [
  {
    id: 'act1',
    type: 'cleaning',
    title: 'Cleaner Arriving',
    description: 'Bose is 5 mins away from your location.',
    time: '2 mins ago',
    icon: Sparkles,
    status: 'In Progress',
    color: 'text-brand-accent-yellow',
    bg: 'bg-brand-accent-yellow/10'
  },
  {
    id: 'act2',
    type: 'laundry',
    title: 'Laundry Picked Up',
    description: 'Your items reached the processing center.',
    time: '1 hour ago',
    icon: Shirt,
    status: 'Processing',
    color: 'text-brand-primary-green',
    bg: 'bg-brand-primary-green/10'
  }
];

export default function LiveActivity() {
  const navigate = useNavigate();

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6 px-1">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Live Activity</h2>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-brand-primary-green rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green">Real-time</span>
        </div>
      </div>

      <div className="space-y-4">
        {ACTIVITIES.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(`/dashboard/booking/${activity.id}`)}
            className="glass-dark p-6 rounded-[2.5rem] border border-white/5 flex items-center justify-between hover:bg-white/[0.04] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 rounded-[1.25rem] ${activity.bg} flex items-center justify-center ${activity.color} relative overflow-hidden`}>
                <activity.icon size={28} />
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  animate={{ y: ["100%", "-100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg tracking-tight group-hover:text-brand-primary-green transition-colors">{activity.title}</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded text-white/40">{activity.status}</span>
                </div>
                <p className="text-white/40 text-[13px] leading-relaxed mb-2">{activity.description}</p>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {activity.time}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> Ikoyi, Lagos</span>
                </div>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-brand-primary-green group-hover:text-brand-dark-green transition-all">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
