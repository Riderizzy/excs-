import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, MapPin, CreditCard, CheckCircle2, ChevronRight, Sparkles, Shirt } from 'lucide-react';

const SERVICES = [
  { id: 'cleaning', name: 'Excservice Cleaning', icon: Sparkles, color: 'text-brand-accent-yellow' },
  { id: 'laundry', name: 'Excservice Laundry', icon: Shirt, color: 'text-white' },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('cleaning');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-4 shrink-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${step >= s ? 'bg-brand-primary-green text-brand-dark-green' : 'border border-white/10 text-white/20'}`}>
                {s}
              </div>
              <div className={`text-[10px] font-bold uppercase tracking-widest ${step === s ? 'text-white' : 'text-white/20'}`}>
                {s === 1 && 'Select Service'}
                {s === 2 && 'Details'}
                {s === 3 && 'Schedule'}
                {s === 4 && 'Payment'}
              </div>
              {s < 4 && <ChevronRight size={14} className="text-white/10" />}
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-10 lg:p-16">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl font-bold tracking-tighter">What do you need <br /> help with?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => { setSelectedService(service.id); setStep(2); }}
                    className={`p-8 rounded-[2rem] border transition-all flex flex-col items-center gap-4 group ${selectedService === service.id ? 'bg-brand-primary-green border-brand-primary-green text-brand-dark-green' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                  >
                    <service.icon size={32} className={selectedService === service.id ? 'text-brand-dark-green' : service.color} />
                    <span className="font-bold text-sm uppercase tracking-widest">{service.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl font-bold tracking-tighter">Tell us a bit more.</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input placeholder="Enter your full address in Lagos..." className="w-full bg-brand-deep-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 focus:border-brand-primary-green outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Size</label>
                    <select className="w-full bg-brand-deep-black border border-white/5 rounded-2xl p-4 outline-none focus:border-brand-primary-green appearance-none">
                      <option>Studio Apartment</option>
                      <option>2 Bedroom</option>
                      <option>3-4 Bedroom</option>
                      <option>Duplex / Commercial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Frequency</label>
                    <select className="w-full bg-brand-deep-black border border-white/5 rounded-2xl p-4 outline-none focus:border-brand-primary-green appearance-none">
                      <option>One-time</option>
                      <option>Weekly (Save 10%)</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-xs">Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] bg-brand-primary-green text-brand-dark-green py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">Next Step</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl font-bold tracking-tighter">Choose a time.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input type="date" className="w-full bg-brand-deep-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 focus:border-brand-primary-green outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <select className="w-full bg-brand-deep-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 focus:border-brand-primary-green outline-none appearance-none">
                      <option>Morning (08:00 - 12:00)</option>
                      <option>Afternoon (12:00 - 16:00)</option>
                      <option>Evening (16:00 - 20:00)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-xs">Back</button>
                <button onClick={() => setStep(4)} className="flex-[2] bg-brand-primary-green text-brand-dark-green py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">Confirm Schedule</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-brand-primary-green/10 text-brand-primary-green flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-bold tracking-tighter mb-4">Almost there.</h2>
                <p className="text-white/40">Secure your booking with a payment.</p>
              </div>
              
              <div className="bg-brand-deep-black rounded-2xl p-8 border border-white/5">
                <div className="flex justify-between mb-4">
                  <span className="text-white/40 text-sm">{selectedService} Service</span>
                  <span className="font-bold">#25,000</span>
                </div>
                <div className="flex justify-between mb-6 pb-6 border-b border-white/5">
                  <span className="text-white/40 text-sm">Booking Fee</span>
                  <span className="font-bold">#1,500</span>
                </div>
                <div className="flex justify-between text-2xl font-bold tracking-tighter">
                  <span>Total</span>
                  <span className="text-brand-accent-yellow">#26,500</span>
                </div>
              </div>

              <button className="w-full bg-brand-primary-green text-brand-dark-green py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                <CreditCard size={18} /> Pay & Complete Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
