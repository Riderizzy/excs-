import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Plus, 
  CreditCard, 
  ArrowUpRight, 
  Download, 
  ShieldCheck, 
  History,
  TrendingUp,
  Wallet as WalletIcon,
  ChevronRight,
  MoreHorizontal,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TRANSACTIONS = [
  { id: 'TX1', title: 'Booking #B120', date: 'Today, 09:42 AM', amount: '-₦12,500', type: 'debit', status: 'Success' },
  { id: 'TX2', title: 'Wallet Top Up', date: 'Yesterday, 14:15 PM', amount: '+₦25,000', type: 'credit', status: 'Success' },
  { id: 'TX3', title: 'Laundry #L094', date: 'May 18, 2026', amount: '-₦8,400', type: 'debit', status: 'Success' },
  { id: 'TX4', title: 'Referral Bonus', date: 'May 15, 2026', amount: '+₦5,000', type: 'credit', status: 'Success' },
];

export default function WalletPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">My Wallet.</h1>
              <p className="text-white/40">Secure payments and billing management.</p>
            </div>
          </div>
          <button className="bg-brand-primary-green text-brand-dark-green px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-brand-accent-yellow transition-all">
            <Plus size={14} /> Add Payment Method
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Portfolio Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Balance Card */}
            <div className="bg-brand-primary-green p-1 rounded-[3rem]">
              <div className="bg-brand-dark-green rounded-[2.8rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary-green/5 blur-[60px] rounded-full" />
                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-8">
                      <WalletIcon size={18} className="text-brand-primary-green" />
                      <span className="text-brand-primary-green text-[10px] font-bold uppercase tracking-widest">Active Balance</span>
                   </div>
                   <h2 className="text-5xl font-bold tracking-tighter mb-4">₦42,500</h2>
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <TrendingUp size={12} className="text-brand-primary-green" />
                      <span>+12% this month</span>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 mt-10">
                      <button className="flex flex-col items-center gap-2 p-4 bg-brand-primary-green text-brand-dark-green rounded-2xl font-bold uppercase tracking-widest text-[8px] hover:bg-brand-accent-yellow transition-all">
                        <Plus size={18} /> Top Up
                      </button>
                      <button className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl font-bold uppercase tracking-widest text-[8px] hover:bg-white/10 transition-all">
                        <History size={18} /> Recuring
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Saved Cards */}
            <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8">Payment Methods</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 group cursor-pointer hover:bg-white/10 transition-all">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#005792] rounded-lg flex items-center justify-center text-[10px] font-bold">VISA</div>
                      <div>
                        <p className="font-bold text-sm">•••• 4242</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Expires 04/28</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-brand-primary-green" />
                      <ChevronRight size={14} className="text-white/10" />
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Insights Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex items-center justify-between">
                <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Saved with Club</h4>
                   <p className="text-3xl font-bold">₦24,100</p>
                </div>
                <div className="w-12 h-12 bg-brand-accent-yellow/10 rounded-2xl flex items-center justify-center text-brand-accent-yellow">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex items-center justify-between">
                <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Next Billing</h4>
                   <p className="text-3xl font-bold">Jun 01</p>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40">
                  <Clock size={24} />
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Transaction History</h3>
                 <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary-green hover:text-brand-accent-yellow transition-colors">
                    <Download size={14} /> Export All
                 </button>
              </div>
              
              <div className="space-y-4">
                {TRANSACTIONS.map((tx, i) => (
                  <motion.div 
                    key={tx.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-6 bg-white/[0.02] hover:bg-white/[0.05] rounded-[1.5rem] border border-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tx.type === 'credit' ? 'bg-brand-primary-green/10 text-brand-primary-green' : 'bg-red-500/10 text-red-500'}`}>
                          {tx.type === 'credit' ? <Plus size={20} /> : <ArrowUpRight size={20} className="rotate-45" />}
                       </div>
                       <div>
                          <p className="font-bold">{tx.title}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{tx.date}</p>
                       </div>
                    </div>
                    <div className="text-right flex items-center gap-6">
                       <div>
                         <p className={`font-bold ${tx.type === 'credit' ? 'text-brand-primary-green' : 'text-white'}`}>{tx.amount}</p>
                         <p className="text-[9px] font-bold uppercase tracking-widest text-white/20">{tx.status}</p>
                       </div>
                       <button className="p-2 text-white/5 hover:text-white transition-colors">
                          <MoreHorizontal size={20} />
                       </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
