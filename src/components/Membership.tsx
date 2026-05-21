import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Crown, ArrowRight } from 'lucide-react';
import { EXCSERVICE_CLUB_BENEFITS } from '../constants';

export default function Membership() {
  return (
    <section id="excservice-club" className="py-32 relative">
      <div className="ambient-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary-green/10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[4rem] overflow-hidden p-8 md:p-20 relative">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Crown size={300} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-accent-yellow rounded-xl flex items-center justify-center">
                  <Crown className="text-brand-dark-green" size={20} />
                </div>
                <span className="text-brand-accent-yellow font-bold uppercase tracking-widest text-xs">Join the club</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 transition-all">Elevate your <br /> lifestyle with <br /> <span className="text-brand-primary-green italic">Excservice Club.</span></h2>
              <p className="text-lg text-white/60 mb-10 max-w-sm leading-relaxed">
                Enjoy exclusive benefits, priority scheduling, and discounted rates across all services. Designed for those who value their time.
              </p>
              
              <div className="space-y-4">
                {EXCSERVICE_CLUB_BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary-green" />
                    <span className="text-white/80 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-deep-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary-green/10 blur-[60px] group-hover:bg-brand-primary-green/20 transition-all" />
              
              <div className="mb-8">
                <p className="text-white/40 uppercase tracking-widest font-bold text-xs mb-2">Annual Membership</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold italic">₦45,000</span>
                  <span className="text-white/40 font-bold">/year</span>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-white/40 mb-1">Weekly Plan Included</p>
                  <p className="font-bold text-sm">Full Home Clear + 2 Laundry Pickups</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-white/40 mb-1">Priority Service</p>
                  <p className="font-bold text-sm">Jump the queue on all bookings</p>
                </div>
              </div>

              <Link to="/book" className="w-full bg-white text-brand-dark-green py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary-green hover:text-brand-dark-green transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                Join Now <ArrowRight size={20} />
              </Link>
              
              <p className="text-center text-xs text-white/20 mt-6 font-medium">Cancel anytime. Terms & conditions apply.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
