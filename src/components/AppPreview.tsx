import { motion } from 'motion/react';
import { Sparkles, Shirt, Calendar, Plus, Home, Search, User, Bell, ArrowRight } from 'lucide-react';
import { ExcserviceLogo } from './ExcserviceLogo';

const PhoneScreen = () => {
  return (
    <div className="w-full h-full bg-brand-deep-black text-white p-6 flex flex-col font-sans">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-xs text-white/40 mb-1">Hello, Tobi 👋</p>
          <h4 className="text-xl font-bold leading-tight">What can we <br /> help you with <br /> today?</h4>
        </div>
        <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand-accent-yellow">
          <Bell size={18} />
        </div>
      </div>

      <div className="space-y-4">
        {/* Scheduled card mirror */}
        <div className="bg-brand-primary-green rounded-[2rem] p-6 text-brand-dark-green relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Scheduled</p>
              <div className="w-6 h-6 bg-brand-dark-green/20 rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold">✓</span>
              </div>
            </div>
            <h4 className="font-bold text-2xl mb-1">Cleaning ✨</h4>
            <p className="text-xs font-medium opacity-80">Today, 10:00 AM</p>
            <p className="text-xs font-medium opacity-80">2 Bedroom Apartment</p>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center blur-sm" />
          <div className="absolute bottom-6 right-6 z-10">
            <div className="w-10 h-10 bg-brand-dark-green rounded-full flex items-center justify-center text-white">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Next up card mirror */}
        <div className="bg-white/5 border border-white/5 rounded-[2rem] p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Next up</p>
              <h4 className="font-bold text-lg mb-1">Laundry Pickup</h4>
              <p className="text-xs text-white/40">Tomorrow, 9:00 AM</p>
            </div>
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/40">
              <Shirt size={24} />
            </div>
          </div>
        </div>

        {/* Join Excservice Club mirror */}
        <div className="bg-brand-accent-yellow rounded-[2rem] p-6 text-brand-dark-green flex flex-col justify-between h-44 relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-bold text-xl mb-1">Join Excservice Club</h4>
            <p className="text-xs font-medium opacity-80 mb-4">Save more. Stress less.</p>
            <button className="bg-brand-dark-green text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              Learn more <ArrowRight size={14} />
            </button>
          </div>
          
          {/* Member image mirror */}
          <div className="absolute -bottom-2 -right-2 w-32 h-44 z-0">
             <img 
               src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400" 
               alt="Excservice Club Member" 
               className="w-full h-full object-cover grayscale brightness-75 contrast-125 mix-blend-multiply" 
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </div>

      <div className="mt-auto flex justify-between px-6 py-4 bg-white/5 rounded-[2rem] mb-2">
        <Home size={22} className="text-brand-primary-green" />
        <Calendar size={22} className="text-white/20" />
        <Plus size={22} className="text-white/20" />
        <User size={22} className="text-white/20" />
      </div>
    </div>
  );
};

export default function AppPreview() {
  return (
    <section className="py-32 bg-brand-deep-black/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-accent-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Stay Connected
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Your home, <br /> in your pocket.</h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-md mb-12">
            The Excservice app puts world-class home services just a tap away. 
            Real-time tracking, easy scheduling, and premium support whenever you need it.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { title: 'Instant Booking', desc: 'Secure your pro in under 60 seconds.' },
              { title: 'Pro Tracking', desc: 'Watch your service arrive in real-time.' },
              { title: 'Secure Payments', desc: 'All transactions are encrypted and safe.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-1 h-12 bg-gradient-to-b from-brand-primary-green to-transparent rounded-full mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 mt-12">
            <button className="glass-dark px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" referrerPolicy="no-referrer" />
            </button>
            <button className="glass-dark px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" referrerPolicy="no-referrer" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ rotate: -5, y: 50, opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="relative mx-auto w-[320px] h-[650px] bg-brand-deep-black rounded-[3rem] border-[8px] border-brand-dark-green shadow-[0_50px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-brand-dark-green rounded-b-3xl z-20" />
            
            <PhoneScreen />
          </motion.div>

          {/* Floating Elements around phone */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 -left-10 glass p-4 rounded-2xl shadow-2xl z-20"
          >
            <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Notification</p>
            <p className="text-xs font-bold">Laundry is ready! 👕</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 -right-10 glass p-4 rounded-2xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-brand-primary-green rounded-full animate-pulse" />
              <p className="text-[10px] font-bold uppercase">Live Track</p>
            </div>
            <p className="text-xs font-bold italic">Cleaner arriving in 5m ✨</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
