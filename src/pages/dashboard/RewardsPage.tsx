import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Gift, 
  Copy, 
  Share2, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle2,
  Zap,
  Star,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const REWARDS = [
  { id: 1, title: '₦5,000 Credit', condition: 'Refer 1 friend', progress: 100, completed: true },
  { id: 2, title: 'Free Deep Clean', condition: 'Refer 3 friends', progress: 66, completed: false },
  { id: 3, title: 'Club Master Status', condition: 'Refer 10 friends', progress: 20, completed: false },
];

export default function RewardsPage() {
  const navigate = useNavigate();
  const referralCode = 'EXC-TOBI-2026';

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Grow Together.</h1>
            <p className="text-white/40">Share the lifestyle and earn exclusive rewards.</p>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-brand-accent-yellow p-1 rounded-[3.5rem] mb-12 overflow-hidden group">
           <div className="bg-[#0f0f0f] rounded-[3.3rem] p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-accent-yellow/5 blur-[120px] rounded-full" />
              
              <div className="relative z-10 text-center lg:text-left flex-1">
                 <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <Gift className="text-brand-accent-yellow" size={24} />
                    <span className="text-brand-accent-yellow text-[10px] font-bold uppercase tracking-[0.4em]">Rewards Program</span>
                 </div>
                 <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-none">
                    Give ₦5,000, <br /><span className="italic font-medium text-brand-accent-yellow">Get ₦5,000.</span>
                 </h2>
                 <p className="text-lg text-white/40 font-medium mb-10 leading-relaxed max-w-sm mx-auto lg:mx-0">
                    Invite your friends to Excservice. When they complete their first service, you both get ₦5,000 account credit.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row items-stretch gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between min-w-[280px]">
                       <span className="font-mono font-bold text-lg tracking-widest px-4">{referralCode}</span>
                       <button className="p-3 bg-brand-accent-yellow text-brand-dark-green rounded-xl hover:scale-105 transition-transform" title="Copy Code">
                          <Copy size={16} />
                       </button>
                    </div>
                    <button className="bg-white text-brand-dark-green px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-brand-primary-green transition-all shadow-xl">
                       <Share2 size={16} /> Share Link
                    </button>
                 </div>
              </div>

              <div className="w-full lg:w-80 relative z-10">
                 <div className="glass-dark border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-brand-accent-yellow/10 rounded-full flex items-center justify-center text-brand-accent-yellow mb-6">
                       <Users size={32} />
                    </div>
                    <p className="text-4xl font-bold tracking-tighter mb-2">12</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Successful Invites</p>
                    <div className="w-full h-1.5 bg-white/5 rounded-full mt-8 overflow-hidden">
                       <div className="h-full bg-brand-accent-yellow rounded-full w-[60%]" />
                    </div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/20 mt-4 italic">Next Level: Elite Partner</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Rewards Tracking */}
        <section className="mb-20">
           <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8 px-1">Reward Milestones</h3>
           <div className="space-y-4">
              {REWARDS.map((reward, i) => (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
                >
                  <div className="flex items-center gap-8">
                     <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center ${reward.completed ? 'bg-brand-primary-green/10 text-brand-primary-green' : 'bg-white/5 text-white/20'}`}>
                        {reward.completed ? <CheckCircle2 size={28} /> : <Award size={28} />}
                     </div>
                     <div>
                        <h4 className={`text-xl font-bold tracking-tight mb-1 ${reward.completed ? 'text-white' : 'text-white/60'}`}>{reward.title}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{reward.condition}</p>
                     </div>
                  </div>
                  
                  <div className="flex-1 max-w-sm">
                     <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-white/20 mb-3">
                        <span>Progress</span>
                        <span>{reward.progress}%</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${reward.progress}%` }} 
                          className={`h-full rounded-full ${reward.completed ? 'bg-brand-primary-green' : 'bg-brand-accent-yellow'}`} 
                        />
                     </div>
                  </div>

                  <button className={`px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all ${reward.completed ? 'bg-white/5 text-white/40 cursor-default' : 'bg-white text-brand-dark-green hover:bg-brand-accent-yellow'}`}>
                     {reward.completed ? 'Claimed' : 'Ongoing'}
                  </button>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="glass-dark p-10 rounded-[2.5rem] border border-white/5 flex gap-8 group cursor-pointer hover:bg-white/[0.04] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary-green/10 flex items-center justify-center text-brand-primary-green group-hover:scale-110 transition-transform">
                 <Zap size={24} />
              </div>
              <div className="flex-1">
                 <h4 className="text-xl font-bold mb-2">Priority Selection</h4>
                 <p className="text-sm text-white/40 leading-relaxed mb-6">Partners get exclusive first access to new service launches and seasonal discounts.</p>
                 <button className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green flex items-center gap-2">View Partner Perks <ChevronRight size={14} /></button>
              </div>
           </div>
           <div className="glass-dark p-10 rounded-[2.5rem] border border-white/5 flex gap-8 group cursor-pointer hover:bg-white/[0.04] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent-yellow/10 flex items-center justify-center text-brand-accent-yellow group-hover:scale-110 transition-transform">
                 <Star size={24} />
              </div>
              <div className="flex-1">
                 <h4 className="text-xl font-bold mb-2">Legacy Rewards</h4>
                 <p className="text-sm text-white/40 leading-relaxed mb-6">Long-term referrers unlock permanent 5% discount on all service categories.</p>
                 <button className="text-[10px] font-bold uppercase tracking-widest text-brand-accent-yellow flex items-center gap-2">Check Eligibility <ChevronRight size={14} /></button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
