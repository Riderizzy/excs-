import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Navigation, 
  Clock, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  MoreVertical,
  Zap,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServiceTrackingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep-black text-white relative overflow-hidden">
      {/* Conceptual Map Background */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute inset-0 bg-[#0a0a0a]" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(26,187,49,0.05),_transparent_70%)]" />
         {/* Simple Path and Marker Representation */}
         <svg className="w-full h-full p-20 opacity-20">
            <path d="M 100 100 Q 300 200 500 100 T 900 300" stroke="#1ABB31" strokeWidth="4" fill="none" strokeDasharray="12 12" />
            <circle cx="900" cy="300" r="10" fill="#1ABB31" />
            <circle cx="100" cy="100" r="10" fill="#fff" />
         </svg>
      </div>

      <div className="relative z-10 p-6 pt-24 lg:pt-32 min-h-screen flex flex-col">
         <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
            {/* Header Overlay */}
            <div className="flex items-center justify-between mb-8">
               <button 
                  onClick={() => navigate(-1)}
                  className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all shadow-2xl"
               >
                  <ArrowLeft size={20} />
               </button>
               <div className="bg-black/40 backdrop-blur-xl border border-white/5 px-6 py-2 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Live Service Tracking</span>
               </div>
               <button className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 flex items-center justify-center text-white/40"><MoreVertical size={20} /></button>
            </div>

            {/* ETA Banner */}
            <div className="mb-auto pt-20 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block"
               >
                  <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 pr-4">04 <span className="text-3xl font-display uppercase tracking-[0.2em] text-white/20">Mins</span></h1>
                  <p className="text-xl font-medium text-brand-primary-green tracking-tight italic">Bose is arriving at Osborne Road.</p>
               </motion.div>
            </div>

            {/* Card Dock */}
            <div className="space-y-6 mt-12">
               {/* Pro Details */}
               <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass shadow-2xl border border-white/10 rounded-[3rem] p-8 lg:p-10 backdrop-blur-3xl"
               >
                  <div className="flex flex-col md:flex-row items-center gap-10">
                     <div className="relative group">
                        <div className="absolute inset-0 bg-brand-primary-green/20 rounded-[2.5rem] blur-[20px]" />
                        <div className="w-24 h-24 bg-brand-primary-green rounded-[2rem] flex items-center justify-center text-brand-dark-green font-bold text-3xl relative z-10 group-hover:scale-105 transition-transform duration-700">
                           BA
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-brand-accent-yellow rounded-2xl flex items-center justify-center text-brand-dark-green shadow-xl border-4 border-brand-deep-black">
                           <ShieldCheck size={18} strokeWidth={2.5} />
                        </div>
                     </div>

                     <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                           <h2 className="text-3xl font-bold tracking-tight">Bose Ade</h2>
                           <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-brand-primary-green/10 text-brand-primary-green px-3 py-1 rounded-full border border-brand-primary-green/20">Elite Tier</span>
                        </div>
                        <p className="text-sm font-medium text-white/30 leading-relaxed mb-6 max-w-sm">
                           Specialist in standard residence maintenance with 240 successful bookings.
                        </p>
                        
                        <div className="flex items-center justify-center md:justify-start gap-4">
                           <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-white/40">
                              <Star size={14} className="text-brand-accent-yellow" fill="currentColor" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">4.9 Average</span>
                           </div>
                           <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-white/40">
                              <Zap size={14} className="text-brand-primary-green" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Rapid Response</span>
                           </div>
                        </div>
                     </div>

                     <div className="flex items-center gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none p-6 bg-brand-primary-green text-brand-dark-green rounded-[2rem] hover:bg-brand-accent-yellow transition-all shadow-xl shadow-brand-primary-green/10">
                           <MessageSquare size={24} />
                        </button>
                        <button className="flex-1 md:flex-none p-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all">
                           <Phone size={24} />
                        </button>
                     </div>
                  </div>
               </motion.div>

               {/* Service Milestones */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass shadow-xl border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 group-hover:text-brand-primary-green transition-colors">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Destination</p>
                           <p className="font-bold text-sm">14 Osborne Rd, Ikoyi</p>
                        </div>
                     </div>
                     <Navigation size={18} className="text-white/10 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="glass shadow-xl border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 group-hover:text-brand-accent-yellow transition-colors">
                           <Sparkles size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Service Type</p>
                           <p className="font-bold text-sm">Executive Routine</p>
                        </div>
                     </div>
                     <ChevronRight size={18} className="text-white/10 group-hover:text-white transition-colors" />
                  </div>
               </div>

               {/* Interaction Hint */}
               <div className="text-center pb-8">
                  <div className="inline-flex items-center gap-3 py-2 px-6 bg-white/[0.03] border border-white/5 rounded-full">
                     <Info size={14} className="text-brand-primary-green" />
                     <p className="text-[9px] font-bold uppercase tracking-widest text-white/30">Your professional is currently navigating Lagos traffic</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function Star({ size, className, fill }: { size: number, className?: string, fill?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} height={size} 
      viewBox="0 0 24 24" fill={fill || "none"} 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
