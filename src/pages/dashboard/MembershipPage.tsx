import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Crown, 
  Star, 
  Gift, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Heart,
  Gem,
  Award,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PERKS = [
  { icon: Zap, title: 'Priority Scheduling', desc: 'Secure peak slots before anyone else.', color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10' },
  { icon: ShieldCheck, title: 'Elite Insurance', desc: 'Full coverage for all high-value items.', color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10' },
  { icon: Gift, title: 'Birthday Treats', desc: 'Special monthly rewards on your birthday.', color: 'text-pink-400', bg: 'bg-pink-400/10' },
  { icon: Star, title: 'Preferred Pros', desc: 'Permanent assignment of your favorites.', color: 'text-purple-400', bg: 'bg-purple-400/10' },
];

export default function MembershipPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">Club Dashboard.</h1>
              <p className="text-white/40">Exclusive perks and membership management.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-brand-primary-green/10 border border-brand-primary-green/20 px-6 py-3 rounded-2xl">
             <Crown size={16} className="text-brand-primary-green" />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary-green">Preferred Status</span>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-brand-primary-green p-1 rounded-[3.5rem] mb-12 overflow-hidden group">
          <div className="bg-brand-dark-green rounded-[3.3rem] p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-primary-green/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
             
             <div className="flex-1 relative z-10 text-center lg:text-left">
                <p className="text-brand-primary-green text-xs font-bold uppercase tracking-[0.4em] mb-8">Current Tier: Preferred</p>
                <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
                  Unlock the <span className="italic font-medium text-brand-primary-green">Master</span> Tier.
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                   <div>
                     <p className="text-3xl font-bold mb-1">12</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">Services This Year</p>
                   </div>
                   <div>
                     <p className="text-3xl font-bold mb-1">₦18.5k</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">Monthly Savings</p>
                   </div>
                   <div>
                     <p className="text-3xl font-bold mb-1">80%</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">Automation Reached</p>
                   </div>
                   <div>
                     <p className="text-3xl font-bold mb-1">Elite</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">Service Level</p>
                   </div>
                </div>
                
                <button className="bg-brand-primary-green text-brand-dark-green px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-accent-yellow transition-all shadow-2xl shadow-brand-primary-green/20 mx-auto lg:mx-0 group/btn">
                  Upgrade Membership <Gem size={18} className="group-hover/btn:scale-110 transition-transform" />
                </button>
             </div>

             <div className="w-full lg:w-96 relative z-10">
                <div className="glass shadow-2xl border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-3xl">
                   <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-8 text-center">Next Milestone</h3>
                   <div className="flex flex-col items-center gap-6">
                      <div className="relative">
                        <svg className="w-32 h-32 transform -rotate-90">
                           <circle cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
                           <circle cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="8" className="text-brand-primary-green" strokeDasharray="376.8" strokeDashoffset="75.36" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <Award size={32} className="text-brand-accent-yellow" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold mb-1 italic">Master Status</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 leading-tight">3 bookings away from Elite Benefits</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Perks Grid */}
        <div className="mb-12">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8 px-1">Active Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {PERKS.map((perk, i) => (
               <motion.div
                 key={perk.title}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="glass-dark p-8 rounded-[2.5rem] border border-white/5 relative group cursor-pointer hover:bg-white/[0.04] transition-all"
               >
                 <div className={`w-14 h-14 rounded-2xl ${perk.bg} flex items-center justify-center ${perk.color} mb-8 group-hover:scale-110 transition-transform`}>
                    <perk.icon size={28} />
                 </div>
                 <h4 className="text-xl font-bold mb-2">{perk.title}</h4>
                 <p className="text-sm text-white/40 leading-relaxed">{perk.desc}</p>
                 
                 <div className="absolute top-4 right-4 text-white/5 group-hover:text-brand-primary-green transition-colors">
                    <CheckCircle2 size={20} />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           <div className="lg:col-span-8">
              <div className="glass-dark p-10 rounded-[3rem] border border-white/5 h-full">
                 <div className="flex items-center justify-between mb-10">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Lifestyle Impact</h3>
                    <BarChart3 size={18} className="text-white/20" />
                 </div>
                 <div className="flex flex-col md:flex-row items-end justify-between gap-8 h-48">
                    {[40, 60, 30, 80, 50, 95, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          className={`w-full absolute bottom-0 rounded-t-xl transition-all ${h > 80 ? 'bg-brand-primary-green' : 'bg-white/10 group-hover:bg-brand-primary-green/40'}`} 
                        />
                        {i === 5 && <Sparkles size={14} className="absolute -top-6 left-1/2 -translate-x-1/2 text-brand-accent-yellow" />}
                      </div>
                    ))}
                 </div>
                 <div className="flex justify-between mt-6 text-[9px] font-bold uppercase tracking-widest text-white/20">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4">
              <div className="glass-dark p-10 rounded-[3rem] border border-white/5 text-center">
                 <Heart className="text-pink-400 mx-auto mb-8 animate-pulse" size={40} />
                 <h3 className="text-xl font-bold tracking-tight mb-4">You're in our Top 5%</h3>
                 <p className="text-sm text-white/40 leading-relaxed mb-10">
                    Your consistency in maintaining your home environment has earned you early access to our new "Luxe Chef" services launching next month.
                 </p>
                 <button className="w-full py-5 bg-white/5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                    View Early Access
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle2({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} height={size} 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
