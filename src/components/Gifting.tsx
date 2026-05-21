import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Gift, Heart, Stars, Clock, ArrowRight } from 'lucide-react';

export default function Gifting() {
  return (
    <section id="gifting" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Card 1: Give the Gift of Time */}
          <div className="bg-brand-accent-yellow rounded-[3rem] p-12 lg:p-20 text-brand-dark-green relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-[2rem] bg-brand-dark-green text-brand-accent-yellow flex items-center justify-center mb-8">
                <Gift size={32} />
              </div>
              <h2 className="text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                The Gift <br /> of Time.
              </h2>
              <p className="text-xl font-medium max-w-sm mb-12 opacity-80">
                Show someone you care by handling their to-do list. The perfect gift for busy parents, newlyweds, or friends.
              </p>
              <Link to="/book" className="bg-brand-dark-green text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs inline-flex items-center gap-3 hover:scale-105 transition-all">
                Purchase Gift Card <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* Visual element */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 border-[40px] border-brand-dark-green/5 rounded-full" />
          </div>

          {/* Right side: Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Cleaning Pack */}
            <div className="md:col-span-2 bg-white/5 rounded-[2.5rem] p-10 flex flex-col md:flex-row md:items-center justify-between border border-white/5 transition-colors hover:bg-white/[0.08]">
              <div className="mb-8 md:mb-0">
                <div className="mb-4 text-brand-primary-green">
                  <Stars size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Deep Clean Pack</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">A full home refresh. Perfect for housewarming.</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold tracking-tighter text-brand-accent-yellow mb-4">#45,000</span>
                <Link to="/book" className="bg-white text-brand-dark-green px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-primary-green transition-colors">
                  Send Pack
                </Link>
              </div>
            </div>

            {/* Club Trial */}
            <div className="md:col-span-2 bg-[#1e4a1e] rounded-[2.5rem] p-10 flex flex-col md:flex-row md:items-center justify-between border border-white/10 group overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-brand-accent-yellow">
                  <Clock size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Limited Edition</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
                  Excservice Club Trial
                  <span className="text-xs font-bold bg-brand-primary-green text-brand-dark-green px-3 py-1 rounded-full">1 Month</span>
                </h3>
                <p className="text-white/60 text-base max-w-md leading-relaxed">
                  Gift a full month of membership benefits including 20% off all services and priority booking.
                </p>
              </div>
              <div className="mt-8 md:mt-0 relative z-10 flex flex-col items-center">
                 <span className="text-5xl font-bold tracking-tighter mb-4">#15,000</span>
                 <Link to="/book" className="bg-white text-brand-dark-green px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-accent-yellow transition-colors">
                   Send Trial
                 </Link>
              </div>
              
              {/* Bg Logo */}
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Gift size={200} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
