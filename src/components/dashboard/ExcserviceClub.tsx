import { motion } from 'motion/react';
import { Crown, Star, Gift, ShieldCheck, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ExcserviceClub() {
  const navigate = useNavigate();

  return (
    <div className="mb-12 cursor-pointer" onClick={() => navigate('/dashboard/membership')}>
      <div className="bg-brand-primary-green p-1 group rounded-[3rem] overflow-hidden">
        <div className="bg-brand-dark-green rounded-[2.8rem] p-10 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden transition-all group-hover:bg-brand-dark-green/90">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary-green/5 blur-[100px] rounded-full animate-pulse" />
          
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="bg-brand-primary-green text-brand-dark-green p-2 rounded-lg">
                <Crown size={24} strokeWidth={2.5} />
              </div>
              <span className="text-brand-primary-green text-xs font-bold uppercase tracking-[0.3em]">Excservice Club</span>
            </div>
            <h2 className="text-5xl font-bold tracking-tighter mb-6">
              You're a <span className="text-brand-primary-green italic">Preferred Member.</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl mb-10 leading-relaxed font-medium">
              Your benefits are active. Priority scheduling and automated recurring bookings are enabled for your Lagos addresses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold mb-1">₦18.5k</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Monthly Savings</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold mb-1">Priority</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Service Level</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold mb-1">2 Free</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Deep Cleans Left</span>
              </div>
            </div>

            <button className="bg-brand-primary-green text-brand-dark-green px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-brand-accent-yellow transition-all shadow-xl shadow-brand-primary-green/20 mx-auto lg:mx-0">
              Explore Benefits <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10 w-full lg:w-96">
            <div className="bg-white/5 border border-white/5 p-6 rounded-[2rem] text-center backdrop-blur-md">
              <Gift className="text-brand-accent-yellow mb-3 mx-auto" size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Next Reward</span>
              <p className="font-bold text-sm mt-1">Car Wash</p>
            </div>
            <div className="bg-white/5 border border-white/5 p-6 rounded-[2rem] text-center backdrop-blur-md">
              <ShieldCheck className="text-brand-primary-green mb-3 mx-auto" size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Insurance</span>
              <p className="font-bold text-sm mt-1">Full Coverage</p>
            </div>
            <div className="bg-white/5 border border-white/5 p-6 rounded-[2rem] text-center backdrop-blur-md col-span-2">
              <Star className="text-brand-accent-yellow mb-3 mx-auto" size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Lifestyle Goal</span>
              <p className="font-bold text-sm mt-1">80% Automation Reached</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
