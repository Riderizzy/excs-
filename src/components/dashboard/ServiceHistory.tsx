import { motion } from 'motion/react';
import { Sparkles, Shirt, Star, RotateCcw, Download, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HISTORY = [
  { id: 'H1', service: 'Standard Cleaning', date: 'May 14, 2026', pro: 'Bose Ade', rating: 5, icon: Sparkles, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10' },
  { id: 'H2', service: 'Full Laundry Load', date: 'May 12, 2026', pro: 'Excservice Logistics', rating: 5, icon: Shirt, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10' },
  { id: 'H3', service: 'Deep Cleaning', date: 'May 05, 2026', pro: 'Samuel Okon', rating: 4, icon: Sparkles, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10' },
];

export default function ServiceHistory() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center justify-between mb-8 px-1">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Service History</h2>
        <button 
          onClick={() => navigate('/dashboard/history')}
          className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green hover:text-brand-accent-yellow transition-colors"
        >
          View All Archive
        </button>
      </div>

      <div className="grid gap-4">
        {HISTORY.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-dark p-6 rounded-[2.5rem] border border-white/5 flex items-center justify-between hover:bg-white/[0.04] transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform`}>
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold mb-1">{item.service}</h3>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 bg-white/5 rounded-full" />
                  <span>{item.pro}</span>
                  <span className="w-1 h-1 bg-white/5 rounded-full" />
                  <span className="flex items-center gap-1 text-brand-accent-yellow"><Star size={10} fill="currentColor" /> {item.rating}.0</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-3 bg-white/5 rounded-xl hover:bg-brand-primary-green hover:text-brand-dark-green transition-all group/btn" title="Repeat Service">
                <RotateCcw size={16} />
              </button>
              <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-white/20 hover:text-white" title="Invoice">
                <Download size={16} />
              </button>
              <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-white/20 hover:text-white">
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
