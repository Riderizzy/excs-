import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Star, 
  Heart, 
  RotateCcw, 
  ChevronRight, 
  Sparkles, 
  Shirt, 
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAVORITES = [
  { 
    id: 'P1', 
    name: 'Bose Ade', 
    category: 'Home Care', 
    icon: Sparkles, 
    rating: 5.0, 
    jobs: 142, 
    initials: 'BA', 
    color: 'text-brand-accent-yellow', 
    bg: 'bg-brand-accent-yellow/10',
    available: true
  },
  { 
    id: 'P2', 
    name: 'Samuel Okon', 
    category: 'Home Care', 
    icon: Sparkles, 
    rating: 4.9, 
    jobs: 86, 
    initials: 'SO', 
    color: 'text-brand-accent-yellow', 
    bg: 'bg-brand-accent-yellow/10',
    available: false
  },
  { 
    id: 'P3', 
    name: 'Excservice Express', 
    category: 'Wardrobe', 
    icon: Shirt, 
    rating: 5.0, 
    jobs: 310, 
    initials: 'EE', 
    color: 'text-brand-primary-green', 
    bg: 'bg-brand-primary-green/10',
    available: true
  },
];

export default function FavoritesPage() {
  const navigate = useNavigate();

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
              <h1 className="text-4xl font-bold tracking-tighter">My Dream Team.</h1>
              <p className="text-white/40">The professionals who keep your lifestyle on track.</p>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
            <input 
              type="text" 
              placeholder="Search favorites..." 
              className="bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-6 outline-none focus:border-brand-primary-green transition-all text-sm w-64"
            />
          </div>
        </div>

        {/* Favorite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {FAVORITES.map((pro, i) => (
             <motion.div
               key={pro.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="glass-dark p-8 rounded-[3rem] border border-white/5 relative group hover:bg-white/[0.04] transition-all"
             >
               <div className="absolute top-6 right-6">
                  <Heart className="text-red-500 fill-red-500" size={20} />
               </div>

               <div className="text-center mb-10 mt-4">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                     <div className="absolute inset-0 bg-brand-primary-green/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     <div className={`w-24 h-24 rounded-[2rem] bg-brand-primary-green flex items-center justify-center text-brand-dark-green font-bold text-3xl relative z-10 overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                        {pro.initials}
                     </div>
                     {pro.available && (
                       <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-primary-green rounded-full border-4 border-brand-deep-black shadow-[0_0_8px_#1ABB31] z-20 flex items-center justify-center">
                          <CheckCircle2 size={10} className="text-brand-dark-green" strokeWidth={3} />
                       </div>
                     )}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">{pro.name}</h3>
                  <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/20">
                     <pro.icon size={12} className={pro.color} />
                     <span>{pro.category}</span>
                     <span className="w-1 h-1 bg-white/5 rounded-full" />
                     <span className="flex items-center gap-1 text-brand-accent-yellow"><Star size={10} fill="currentColor" /> {pro.rating}</span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-8 text-center bg-white/5 rounded-[1.5rem] p-6 border border-white/5">
                  <div>
                    <p className="text-lg font-bold">{pro.jobs}</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-white/20 leading-tight">Total Tasks</p>
                  </div>
                  <div className="border-l border-white/5">
                    <p className="text-lg font-bold">14</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-white/20 leading-tight">Your Services</p>
                  </div>
               </div>

               <div className="space-y-3">
                  <button className="w-full py-4 bg-brand-primary-green text-brand-dark-green rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-brand-accent-yellow transition-all">
                     <RotateCcw size={14} /> Quick Rebook
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                     <button className="py-4 bg-white/5 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <MessageSquare size={14} /> Chat
                     </button>
                     <button className="py-4 bg-white/5 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <Calendar size={14} /> Schedule
                     </button>
                  </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-brand-primary-green">
                     <ShieldCheck size={12} /> Elite Approved
                  </div>
                  <button className="text-[9px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-all flex items-center gap-1">Details <ChevronRight size={10} /></button>
               </div>
             </motion.div>
           ))}

           {/* Empty/Add Slot */}
           <div className="p-1 border-2 border-dashed border-white/5 rounded-[3rem] h-full min-h-[450px] group cursor-pointer hover:border-brand-primary-green/20 transition-all">
              <div className="w-full h-full rounded-[2.8rem] flex flex-col items-center justify-center text-center p-12 bg-white/[0.01] hover:bg-brand-primary-green/5 transition-all">
                 <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/10 group-hover:scale-110 group-hover:text-brand-primary-green transition-all duration-700">
                    <Star size={40} strokeWidth={1} />
                 </div>
                 <h4 className="text-xl font-bold mt-10 mb-4 tracking-tight">Add a Favorite</h4>
                 <p className="text-sm text-white/20 leading-relaxed font-medium">
                    Rate your next performance to add a pro to your permanent Dream Team.
                 </p>
                 <button className="mt-10 px-8 py-4 bg-white/5 border border-white/5 rounded-2xl font-bold uppercase tracking-widest text-[9px] group-hover:bg-brand-primary-green group-hover:text-brand-dark-green transition-all">
                    Explore Pros
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
