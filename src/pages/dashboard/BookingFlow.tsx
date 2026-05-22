import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Sparkles, 
  Home, 
  Clock, 
  Calendar, 
  CreditCard, 
  CheckCircle2,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STEPS = [
  'Service',
  'Package',
  'Schedule',
  'Details',
  'Payment'
];

export default function BookingFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setStep(s => Math.min(s + 1, STEPS.length - 1));
  };

  const handleBack = () => {
    if (step === 0) {
      navigate(-1);
      return;
    }
    setDirection(-1);
    setStep(s => Math.max(s - 1, 0));
  };

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={handleBack}
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${
                  i <= step ? 'w-8 bg-brand-primary-green' : 'w-4 bg-white/10'
                }`} 
              />
            ))}
          </div>
          <button className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Help</button>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="space-y-10"
          >
            {step === 0 && <ServiceSelection onNext={handleNext} />}
            {step === 1 && <PackageSelection onNext={handleNext} />}
            {step === 2 && <ScheduleSelection onNext={handleNext} />}
            {step === 3 && <DetailsSelection onNext={handleNext} />}
            {step === 4 && <PaymentSelection onNext={() => navigate('/dashboard/booking/B' + Math.floor(Math.random()*1000))} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ServiceSelection({ onNext }: { onNext: () => void }) {
  const services = [
    { id: '1', title: 'Standard Cleaning', desc: 'Elite maintenance for your sanctuary.', icon: Sparkles, color: 'text-brand-accent-yellow' },
    { id: '2', title: 'Deep Cleaning', desc: 'Surgical level precision for complex spaces.', icon: ShieldCheck, color: 'text-brand-primary-green' },
    { id: '3', title: 'Luxe Wardrobe', desc: 'Premium laundry and preservation service.', icon: Zap, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-10">
      <div className="text-center">
         <h1 className="text-5xl font-bold tracking-tighter mb-4">Choose your <span className="italic font-medium text-brand-primary-green">Service.</span></h1>
         <p className="text-white/40">Select the foundation of your lifestyle automation.</p>
      </div>

      <div className="grid gap-4">
        {services.map((s) => (
          <button 
            key={s.id} 
            onClick={onNext}
            className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] transition-all text-left"
          >
            <div className="flex items-center gap-8">
               <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${s.color} group-hover:scale-110 transition-transform`}>
                  <s.icon size={28} />
               </div>
               <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">{s.title}</h3>
                  <p className="text-sm text-white/30">{s.desc}</p>
               </div>
            </div>
            <ChevronRight className="text-white/5 group-hover:text-brand-primary-green transition-colors" size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}

function PackageSelection({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-10">
      <div className="text-center">
         <h1 className="text-5xl font-bold tracking-tighter mb-4">Select <span className="italic font-medium text-brand-primary-green">Tier.</span></h1>
         <p className="text-white/40">Choose the depth of service required.</p>
      </div>

      <div className="grid gap-6">
         <div onClick={onNext} className="glass-dark p-10 rounded-[3rem] border border-brand-primary-green/30 bg-brand-primary-green/[0.02] cursor-pointer group hover:bg-brand-primary-green/[0.05] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary-green/5 blur-[60px]" />
            <div className="flex items-center justify-between mb-8">
               <span className="bg-brand-primary-green text-brand-dark-green px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Preferred</span>
               <p className="text-3xl font-bold">₦12,500 <span className="text-xs text-white/30 font-normal">/ session</span></p>
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Executive Routine</h3>
            <ul className="space-y-3 text-sm text-white/40">
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-primary-green" /> Full Living & Kitchen Sanitization</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-primary-green" /> Premium Eco Supplies Included</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-primary-green" /> Trained Pro (Elite Level)</li>
            </ul>
         </div>

         <div onClick={onNext} className="glass-dark p-10 rounded-[3rem] border border-white/5 cursor-pointer group hover:bg-white/[0.04] transition-all">
            <div className="flex items-center justify-between mb-8">
               <span className="bg-white/5 text-white/40 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5">Essential</span>
               <p className="text-3xl font-bold">₦8,000 <span className="text-xs text-white/30 font-normal">/ session</span></p>
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Studio Light</h3>
            <ul className="space-y-3 text-sm text-white/40">
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white/20" /> Basic Area Maintenance</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white/20" /> Standard Supplies</li>
            </ul>
         </div>
      </div>
    </div>
  );
}

function ScheduleSelection({ onNext }: { onNext: () => void }) {
  const days = [
    { d: 'Mon', n: '25' }, { d: 'Tue', n: '26' }, { d: 'Wed', n: '27' }, 
    { d: 'Thu', n: '28', current: true }, { d: 'Fri', n: '29' }, { d: 'Sat', n: '30' }
  ];

  const times = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

  return (
    <div className="space-y-10">
      <div className="text-center">
         <h1 className="text-5xl font-bold tracking-tighter mb-4">Pick a <span className="italic font-medium text-brand-primary-green">Time.</span></h1>
         <p className="text-white/40">Smart recommendations based on your habits.</p>
      </div>

      <div className="space-y-10">
         <div className="flex justify-between gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {days.map((day) => (
               <button 
                key={day.n}
                className={`min-w-[80px] p-6 rounded-[2rem] border transition-all flex flex-col items-center gap-3 ${day.current ? 'bg-brand-primary-green border-brand-primary-green text-brand-dark-green' : 'bg-white/5 border-white/5 text-white/20 hover:bg-white/10'}`}
               >
                  <span className="text-[10px] font-bold uppercase tracking-widest">{day.d}</span>
                  <span className="text-2xl font-bold">{day.n}</span>
               </button>
            ))}
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {times.map((t, i) => (
               <button 
                key={t}
                onClick={onNext}
                className={`py-5 rounded-2xl border transition-all font-bold text-xs uppercase tracking-widest ${i === 0 ? 'bg-brand-primary-green/10 border-brand-primary-green/20 text-brand-primary-green shadow-[0_0_15px_#1ABB3122]' : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'}`}
               >
                  {t}
               </button>
            ))}
         </div>

         <div className="p-6 bg-brand-primary-green/5 rounded-[2rem] border border-brand-primary-green/10 flex items-center gap-4">
            <Info size={18} className="text-brand-primary-green" />
            <p className="text-[10px] uppercase font-bold tracking-widest leading-relaxed text-white/60">
               Club members get <span className="text-brand-primary-green">Priority Access</span> to peak morning slots.
            </p>
         </div>
      </div>
    </div>
  );
}

function DetailsSelection({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-10">
      <div className="text-center">
         <h1 className="text-5xl font-bold tracking-tighter mb-4">Review <span className="italic font-medium text-brand-primary-green">Oasis.</span></h1>
         <p className="text-white/40">Confirm destination and special details.</p>
      </div>

      <div className="space-y-6">
         <div className="glass-dark p-8 rounded-[3rem] border border-white/5 space-y-8">
            <div className="flex items-center gap-6">
               <div className="w-14 h-14 bg-brand-primary-green/10 rounded-2xl flex items-center justify-center text-brand-primary-green">
                  <MapPin size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold">14 Osborne Rd, Ikoyi</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Primary Residence • Lagos</p>
               </div>
            </div>

            <div className="space-y-4">
               <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2 mb-2 block">Special Instructions</label>
                  <textarea 
                    placeholder="E.g. Pay special attention to the master suite or use eco-premium scents..." 
                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 text-sm outline-none focus:border-brand-primary-green transition-all min-h-[160px] resize-none"
                  />
               </div>
            </div>
         </div>

         <button 
           onClick={onNext}
           className="w-full py-6 bg-brand-primary-green text-brand-dark-green rounded-[2rem] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-xl shadow-brand-primary-green/20"
         >
            Proceed to Checkout <ChevronRight size={18} />
         </button>
      </div>
    </div>
  );
}

function PaymentSelection({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-10">
      <div className="text-center">
         <h1 className="text-5xl font-bold tracking-tighter mb-4">Secure <span className="italic font-medium text-brand-primary-green">Checkout.</span></h1>
         <p className="text-white/40">Finalize your premium experience.</p>
      </div>

      <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
         <div className="space-y-6 mb-10">
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
               <span className="text-white/40">Standard Cleaning</span>
               <span className="font-bold">₦12,500</span>
            </div>
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
               <div className="flex items-center gap-2">
                  <span className="text-brand-primary-green">Club Reward Applied</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-brand-primary-green/10 px-2 py-0.5 rounded">Elite</span>
               </div>
               <span className="font-bold text-brand-primary-green">-₦1,500</span>
            </div>
            <div className="flex items-center justify-between pt-4">
               <span className="text-xl font-bold">Total Amount</span>
               <span className="text-3xl font-bold tracking-tighter">₦11,000</span>
            </div>
         </div>

         <div className="space-y-4 mb-10">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20 ml-2">Pay with</h4>
            <div className="p-6 bg-white/5 border border-brand-primary-green/30 rounded-2xl flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <CreditCard className="text-brand-primary-green" size={20} />
                  <div>
                     <p className="font-bold">Visa •••• 4242</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Active Method</p>
                  </div>
               </div>
               <CheckCircle2 size={20} className="text-brand-primary-green" />
            </div>
         </div>

         <button 
           onClick={onNext}
           className="w-full py-8 bg-brand-primary-green text-brand-dark-green rounded-[2.5rem] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-accent-yellow transition-all shadow-2xl shadow-brand-primary-green/20"
         >
            Confirm & Secure Booking <ShieldCheck size={20} />
         </button>
      </div>
    </div>
  );
}
