import { motion } from 'motion/react';
import { ExcserviceLogo } from '../components/ExcserviceLogo';
import { Briefcase, ShieldCheck, MapPin, DollarSign, ArrowRight } from 'lucide-react';

const PERKS = [
  { icon: DollarSign, title: 'Top Earnings', desc: 'Earn more than twice the industry average.' },
  { icon: ShieldCheck, title: 'Full Insurance', desc: 'We\'ve got you covered on every single task.' },
  { icon: MapPin, title: 'Flexible Tech', desc: 'Choose where and when you want to work.' },
];

export default function PartnerPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full glass-dark text-brand-primary-green text-[10px] font-bold uppercase tracking-widest mb-6">
              Become a Excservice Pro
            </span>
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Turn your skill into <span className="text-brand-accent-yellow italic">sustainable income.</span>
            </h1>
            <p className="text-xl text-white/50 mb-12 max-w-lg leading-relaxed">
              We're looking for the best cleaners and logistics experts in Nigeria. Join 200+ pros earning on Excservice.
            </p>
            <div className="space-y-6">
              {PERKS.map((perk, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand-primary-green shrink-0">
                    <perk.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{perk.title}</h4>
                    <p className="text-sm text-white/40">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/5 rounded-[3rem] p-10 lg:p-16">
              <h3 className="text-3xl font-bold mb-8">Start Application</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <input placeholder="First Name" className="bg-brand-deep-black border border-white/5 rounded-2xl p-4 outline-none focus:border-brand-primary-green transition-all" />
                  <input placeholder="Last Name" className="bg-brand-deep-black border border-white/5 rounded-2xl p-4 outline-none focus:border-brand-primary-green transition-all" />
                </div>
                <input placeholder="Email Address" className="w-full bg-brand-deep-black border border-white/5 rounded-2xl p-4 outline-none focus:border-brand-primary-green transition-all" />
                <select className="w-full bg-brand-deep-black border border-white/5 rounded-2xl p-4 outline-none focus:border-brand-primary-green transition-all appearance-none">
                  <option>Select your specialty</option>
                  <option>Professional Cleaning</option>
                  <option>Laundry & Dry Cleaning</option>
                </select>
                <button className="w-full bg-brand-primary-green text-brand-dark-green py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-accent-yellow transition-all">
                  Submit Interest <ArrowRight size={16} />
                </button>
              </form>
            </div>
            
            {/* Background floating badge */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-6 shadow-2xl animate-bounce">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary-green">Now Hiring</p>
              <p className="text-xl font-bold">Lagos & Abuja</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
