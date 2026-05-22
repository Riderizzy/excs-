import { motion } from 'motion/react';
import { CreditCard, Plus, ArrowUpRight, History, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WalletWidget() {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white/5 border border-white/5 rounded-[3rem] p-10 flex flex-col h-full group cursor-pointer"
      onClick={() => navigate('/dashboard/wallet')}
    >
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary-green/10 rounded-xl flex items-center justify-center text-brand-primary-green">
            <CreditCard size={20} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Active Wallet</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-primary-green/10 rounded-full">
          <Shield size={10} className="text-brand-primary-green" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-primary-green">Secured</span>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Available Balance</h3>
        <p className="text-5xl font-bold tracking-tighter mb-4">₦42,500.00</p>
        <div className="flex items-center gap-2 text-white/40 text-xs">
          <span className="flex items-center gap-1"><ArrowUpRight size={14} className="text-brand-primary-green" /> +₦5,000</span>
          <span className="opacity-50">credited today</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-auto">
        <button className="flex flex-col items-center gap-3 p-6 bg-brand-primary-green text-brand-dark-green rounded-[2rem] font-bold uppercase tracking-widest text-[10px] hover:bg-brand-accent-yellow transition-all group/btn shadow-lg shadow-brand-primary-green/5">
          <Plus size={24} className="group-hover/btn:scale-110 transition-transform" />
          Top Up
        </button>
        <button className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/5 rounded-[2rem] font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all group/btn">
          <History size={24} className="text-white/20 group-hover/btn:scale-110 transition-transform group-hover/btn:text-white" />
          Activity
        </button>
      </div>

      <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <span className="font-bold text-[10px]">VISA</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase">Main Card</p>
              <p className="text-[10px] tracking-widest text-white/20">•••• 4242</p>
            </div>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green">Edit</button>
        </div>
      </div>
    </div>
  );
}
