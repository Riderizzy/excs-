import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Shield, 
  ChevronRight, 
  Sparkles,
  Calendar,
  AlertCircle,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';

const STATUS_STEPS = [
  { id: 1, label: 'Booking Confirmed', icon: CheckCircle2, time: '09:00 AM' },
  { id: 2, label: 'Professional Assigned', icon: Sparkles, time: '10:15 AM' },
  { id: 3, label: 'Heading to Location', icon: MapPin, time: '10:45 AM', current: true },
  { id: 4, label: 'Service Started', icon: Clock, time: '--:--' },
  { id: 5, label: 'Completed', icon: Shield, time: '--:--' },
];

export default function ActiveBookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCancel, setShowCancel] = useState(false);

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Booking #{id || 'B120'}</span>
            <button className="p-2 text-white/20 hover:text-white"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Hero Status */}
        <div className="bg-brand-primary-green p-1 group rounded-[3rem] overflow-hidden mb-8">
          <div className="bg-brand-dark-green rounded-[2.8rem] p-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary-green/5 blur-[80px] rounded-full" />
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full animate-pulse shadow-[0_0_8px_#1ABB31]" />
                  <span className="text-brand-primary-green text-[10px] font-bold uppercase tracking-widest">Live Tracking</span>
                </div>
                <h1 className="text-5xl font-bold tracking-tighter mb-4">Heading to <span className="text-brand-primary-green italic">Location.</span></h1>
                <p className="text-lg text-white/40 font-medium">Bose is approximately <span className="text-white">5 minutes</span> away from your Ikoyi residence.</p>
             </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            {/* Live Timeline */}
            <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-10">Service Progress</h3>
              <div className="space-y-8">
                {STATUS_STEPS.map((step, i) => (
                  <div key={step.id} className="relative flex items-start gap-6 group">
                    {i !== STATUS_STEPS.length - 1 && (
                      <div className={`absolute left-6 top-10 w-[2px] h-12 ${step.current || i < 2 ? 'bg-brand-primary-green/30' : 'bg-white/5'}`} />
                    )}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${step.current ? 'bg-brand-primary-green text-brand-dark-green' : i < 2 ? 'bg-brand-primary-green/10 text-brand-primary-green' : 'bg-white/5 text-white/20'}`}>
                      <step.icon size={20} className={step.current ? 'animate-bounce' : ''} />
                    </div>
                    <div className="pt-2">
                       <p className={`font-bold transition-all ${step.current ? 'text-white text-lg' : i < 2 ? 'text-white/60' : 'text-white/20'}`}>{step.label}</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Summary */}
            <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-10">Service Summary</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-4">
                      <Sparkles className="text-brand-accent-yellow" size={24} />
                      <div>
                        <p className="font-bold">Standard Cleaning</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">3 Bedrooms • 1 Kitchen</p>
                      </div>
                   </div>
                   <p className="font-bold">₦12,500</p>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                   <MapPin className="text-white/20" size={20} />
                   <div>
                     <p className="font-bold">14 Osborne Rd, Ikoyi</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Gate Code: 2042</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            {/* Pro Profile Card */}
            <div className="bg-white/5 border border-white/5 p-8 rounded-[3rem] text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-brand-primary-green rounded-full blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="w-24 h-24 bg-brand-primary-green rounded-[2rem] flex items-center justify-center text-brand-dark-green font-bold text-3xl relative z-10 overflow-hidden">
                   BA
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Bose Ade</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green mt-1">Elite Professional</p>
              <div className="flex items-center justify-center gap-1 mt-4 text-brand-accent-yellow">
                {[1,2,3,4,5].map(i => <CheckCircle2 key={i} size={10} fill="currentColor" />)}
                <span className="text-[10px] font-bold ml-2 text-white/40">4.9 (240)</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-8">
                <button className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-[1.5rem] hover:bg-white/10 transition-all group/btn">
                  <Phone size={20} className="text-brand-primary-green group-hover/btn:scale-110 transition-transform" />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Call</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-[1.5rem] hover:bg-white/10 transition-all group/btn">
                  <MessageSquare size={20} className="text-brand-accent-yellow group-hover/btn:scale-110 transition-transform" />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Chat</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <button className="w-full p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-[2rem] flex items-center justify-between group transition-all">
              <div className="flex items-center gap-4 text-left">
                 <Calendar className="text-white/20" size={20} />
                 <div>
                    <p className="text-sm font-bold">Reschedule</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Free before arrivel</p>
                 </div>
              </div>
              <ChevronRight size={16} className="text-white/10 group-hover:text-white" />
            </button>

            <button 
              onClick={() => setShowCancel(true)}
              className="w-full p-6 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-[2rem] flex items-center gap-4 text-red-400 group transition-all"
            >
              <AlertCircle size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Cancel Service</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
