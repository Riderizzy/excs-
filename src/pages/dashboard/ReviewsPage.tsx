import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Star, 
  MessageSquare, 
  ThumbsUp, 
  Camera, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  Shirt,
  User,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PENDING = [
  { id: 'R1', service: 'Deep Cleaning', date: 'Yesterday', icon: Sparkles, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10' },
];

const COMPLETED = [
  { 
    id: 'C1', 
    service: 'Standard Maintenance', 
    date: 'May 10, 2026', 
    rating: 5, 
    comment: 'Absolutely impecable service. Bose pays attention to the smallest details in the kitchen.', 
    pro: 'Bose Ade',
    icon: Sparkles,
    color: 'text-brand-accent-yellow',
    bg: 'bg-brand-accent-yellow/10'
  },
  { 
    id: 'C2', 
    service: 'Luxe Wardrobe', 
    date: 'May 04, 2026', 
    rating: 4, 
    comment: 'Laundry was folded perfectly, but pickup was 10 mins later than expected.', 
    pro: 'Sola Peters',
    icon: Shirt,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  }
];

export default function ReviewsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-dark-green text-white pt-24 lg:pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Reviews & Feedback</h1>
            <p className="text-sm text-white/30 font-medium">Your voice shapes the Executive standard.</p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Pending Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green">Pending Feedback</h2>
              <div className="flex-1 h-px bg-brand-primary-green/20" />
            </div>

            <div className="grid gap-6">
              {PENDING.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-dark p-8 rounded-[3rem] border-2 border-brand-primary-green/30 relative overflow-hidden group cursor-pointer"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary-green/5 blur-[40px]" />
                   <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                      <div className="flex items-center gap-6">
                         <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                            <item.icon size={28} />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold tracking-tight mb-1">{item.service}</h3>
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20">
                               <Calendar size={12} />
                               {item.date}
                            </div>
                         </div>
                      </div>
                      <button className="w-full md:w-auto px-10 py-5 bg-brand-primary-green text-brand-dark-green rounded-[1.5rem] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-xl shadow-brand-primary-green/10">
                         Write Review <MessageSquare size={16} />
                      </button>
                   </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* History Section */}
          <section>
             <div className="flex items-center gap-4 mb-10">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-white/20">History Archive</h2>
                <div className="flex-1 h-px bg-white/5" />
             </div>

             <div className="grid gap-8">
                {COMPLETED.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-dark p-10 rounded-[3rem] border border-white/5 relative group"
                  >
                     <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-1">
                           <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-1">
                                 {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      size={18} 
                                      className={i < item.rating ? 'text-brand-accent-yellow' : 'text-white/10'} 
                                      fill={i < item.rating ? 'currentColor' : 'none'} 
                                    />
                                 ))}
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{item.date}</span>
                           </div>
                           <h3 className="text-2xl font-bold tracking-tight mb-4">{item.service}</h3>
                           <p className="text-white/60 leading-relaxed text-sm mb-8 font-medium">"{item.comment}"</p>
                           
                           <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl w-fit">
                              <div className="w-8 h-8 rounded-lg bg-brand-primary-green/10 flex items-center justify-center text-brand-primary-green">
                                 <User size={16} />
                              </div>
                              <div>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Executive Pro</p>
                                 <p className="text-sm font-bold">{item.pro}</p>
                              </div>
                           </div>
                        </div>

                        <div className="flex flex-col gap-4">
                           <button className="p-4 bg-white/5 rounded-2xl text-white/40 hover:text-white transition-colors">
                              <ThumbsUp size={20} />
                           </button>
                           <button className="p-4 bg-white/5 rounded-2xl text-white/40 hover:text-white transition-colors">
                              <Camera size={20} />
                           </button>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
