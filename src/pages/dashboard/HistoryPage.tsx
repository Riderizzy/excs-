import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Sparkles, 
  Shirt, 
  Star, 
  RotateCcw, 
  Download, 
  ChevronRight,
  Gift,
  Award,
  Zap,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HISTORY = [
  { id: 'H1', service: 'Standard Cleaning', date: 'May 14, 2026', pro: 'Bose Ade', rating: 5, amount: '₦12,500', icon: Sparkles, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10', status: 'Completed' },
  { id: 'H2', service: 'Full Laundry Load', date: 'May 12, 2026', pro: 'Excservice Logistics', rating: 5, amount: '₦8,400', icon: Shirt, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10', status: 'Completed' },
  { id: 'H3', service: 'Deep Cleaning', date: 'May 05, 2026', pro: 'Samuel Okon', rating: 4, amount: '₦28,000', icon: Sparkles, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10', status: 'Completed' },
  { id: 'H4', service: 'Standard Cleaning', date: 'Apr 28, 2026', pro: 'Bose Ade', rating: 5, amount: '₦12,500', icon: Sparkles, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10', status: 'Completed' },
  { id: 'H5', service: 'Laundry + Pressing', date: 'Apr 24, 2026', pro: 'Excservice Logistics', rating: 5, amount: '₦10,200', icon: Shirt, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10', status: 'Completed' },
];

export default function HistoryPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">Your Journey.</h1>
              <p className="text-white/40">Complete archive of your lifestyle improvements.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                <input 
                  type="text" 
                  placeholder="Find a service..." 
                  className="bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-6 outline-none focus:border-brand-primary-green transition-all text-sm w-64"
                />
             </div>
             <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-white/60">
                <Filter size={16} /> Filter
             </button>
          </div>
        </div>

        {/* Rewards Context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-brand-primary-green/5 border border-brand-primary-green/10 p-8 rounded-[3rem] flex flex-col items-center text-center">
              <Award className="text-brand-primary-green mb-4" size={32} />
              <h3 className="font-bold text-lg mb-1 italic">Club Elite Goal</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 leading-tight">3 more bookings to level up</p>
           </div>
           <div className="bg-brand-accent-yellow/5 border border-brand-accent-yellow/10 p-8 rounded-[3rem] flex flex-col items-center text-center">
              <Gift className="text-brand-accent-yellow mb-4" size={32} />
              <h3 className="font-bold text-lg mb-1 italic">Next Voucher</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 leading-tight">Unlocked at 15 total services</p>
           </div>
           <div className="glass-dark border border-white/5 p-8 rounded-[3rem] flex flex-col items-center text-center">
              <Zap className="text-white/40 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-1 italic">Priority Slots</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 leading-tight">100% Reliability Status</p>
           </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
           {HISTORY.map((item, i) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.04] transition-all group"
             >
               <div className="flex items-center gap-8">
                  <div className={`w-16 h-16 rounded-[1.5rem] ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform duration-500`}>
                     <item.icon size={28} />
                  </div>
                  <div>
                     <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold tracking-tight">{item.service}</h3>
                        <span className="text-[9px] font-bold uppercase tracking-widest bg-brand-primary-green/10 text-brand-primary-green px-2 py-0.5 rounded italic">Paid</span>
                     </div>
                     <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
                        <span className="flex items-center gap-2"><Calendar size={12} /> {item.date}</span>
                        <span className="w-1 h-1 bg-white/5 rounded-full" />
                        <span>{item.pro}</span>
                        <span className="w-1 h-1 bg-white/5 rounded-full" />
                        <span className="flex items-center gap-1 text-brand-accent-yellow"><Star size={10} fill="currentColor" /> {item.rating}.0</span>
                     </div>
                  </div>
               </div>

               <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                  <div className="text-right mr-4 hidden sm:block">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Service Fee</p>
                     <p className="font-bold text-lg">{item.amount}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-6 py-4 bg-brand-primary-green text-brand-dark-green rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-accent-yellow transition-all">
                       <RotateCcw size={14} /> Rebook
                    </button>
                    <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 text-white/20 hover:text-white transition-all">
                       <Download size={18} />
                    </button>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-12 text-center">
           <button className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-brand-primary-green transition-colors">
              Load More History
           </button>
        </div>
      </div>
    </div>
  );
}
