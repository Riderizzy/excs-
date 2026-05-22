import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronRight, 
  HelpCircle,
  Clock,
  Sparkles,
  Zap,
  Shield,
  LifeBuoy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQS = [
  { q: 'How do I reschedule a booking?', a: 'You can reschedule any active booking from your dashboard up to 4 hours before the service starts for free.' },
  { q: 'Are the professionals background checked?', a: 'Yes, every Excservice professional undergoes a rigorous 5-step verification process including physical background checks.' },
  { q: 'What is Excservice Club?', a: 'The Club is our premium membership that offers priority scheduling, automated bookings, and up to 25% savings on all services.' },
  { q: 'Do you provide cleaning supplies?', a: 'Standard services include basic supplies. You can opt for "Eco-Premium" supplies during the booking flow for an additional fee.' }
];

export default function SupportPage() {
  const navigate = useNavigate();

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
            <h1 className="text-4xl font-bold tracking-tighter">Concierge Support.</h1>
            <p className="text-white/40">We're here to manage your lifestyle seamlessly.</p>
          </div>
        </div>

        {/* Search Header */}
        <div className="glass shadow-2xl p-8 rounded-[3rem] border border-white/5 mb-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary-green/5 blur-[80px] rounded-full" />
           <div className="relative z-10">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                <input 
                  type="text" 
                  placeholder="How can we assist you today?" 
                  className="w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 outline-none focus:border-brand-primary-green transition-all text-lg font-medium placeholder:text-white/10"
                />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           {/* Contact Options */}
           <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6 px-1">Direct Assistance</h3>
              <button className="w-full p-8 bg-brand-primary-green text-brand-dark-green rounded-[2.5rem] flex items-center justify-between group transition-all shadow-xl shadow-brand-primary-green/10">
                 <div className="flex items-center gap-6">
                    <MessageSquare size={24} strokeWidth={2.5} />
                    <div className="text-left">
                       <p className="font-bold text-xl">Live Chat</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Wait time: ~2 mins</p>
                    </div>
                 </div>
                 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                 <button className="p-8 glass-dark rounded-[2.5rem] border border-white/5 flex flex-col items-center gap-4 hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:text-brand-primary-green transition-colors">
                       <Phone size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Call Center</span>
                 </button>
                 <button className="p-8 glass-dark rounded-[2.5rem] border border-white/5 flex flex-col items-center gap-4 hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:text-brand-accent-yellow transition-colors">
                       <Mail size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Email Team</span>
                 </button>
              </div>
           </div>

           {/* Quick Tips */}
           <div className="glass-dark p-10 rounded-[2.5rem] border border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8">System Health</h3>
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full shadow-[0_0_8px_#1ABB31]" />
                    <div>
                       <p className="font-bold text-sm">Services Operational</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">All pros active in Lagos</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-brand-primary-green rounded-full shadow-[0_0_8px_#1ABB31]" />
                    <div>
                       <p className="font-bold text-sm">Priority Support Active</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Club member hotline enabled</p>
                    </div>
                 </div>
                 
                 <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                    <LifeBuoy className="text-white/20 mx-auto mb-4" size={32} />
                    <p className="text-sm font-medium text-white/40 leading-relaxed italic">
                       "Extremely satisfied with the response time. The concierge managed my rescheduling effortlessly while I was in a meeting."
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green mt-4">— Sarah O.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* FAQs */}
        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8 px-1">Common Questions</h3>
          <div className="space-y-4">
             {FAQS.map((faq, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="glass-dark p-8 rounded-[2rem] border border-white/5 group cursor-pointer hover:bg-white/[0.04] transition-all"
               >
                 <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-lg">{faq.q}</h4>
                    <HelpCircle className="text-white/10 group-hover:text-brand-primary-green transition-colors" size={20} />
                 </div>
                 <p className="text-sm text-white/40 leading-relaxed max-w-2xl">{faq.a}</p>
               </motion.div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
}
