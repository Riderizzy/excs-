import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Sparkles, Shirt, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'cleaning',
    title: 'Excservice Cleaning',
    description: 'Transforming your space into a sanctuary of calm.',
    icon: Sparkles,
    color: 'bg-[#3e573e]',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'laundry',
    title: 'Excservice Laundry',
    description: 'Zero-effort laundry handled with premium care.',
    icon: Shirt,
    color: 'bg-[#4D573E]',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800'
  }
];

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tighter mb-6">Our Services</h1>
            <p className="text-xl text-white/50 max-w-xl">
              We've distilled modern living into two core pillars. Each one is a promise of quality, handled by experts.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary-green bg-brand-primary-green/10 px-4 py-2 rounded-full border border-brand-primary-green/20">
              Vetted Pros
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-yellow bg-brand-accent-yellow/10 px-4 py-2 rounded-full border border-brand-accent-yellow/20">
              Insured
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {SERVICES.map((service) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id}
              className={`${service.color} rounded-[3rem] p-10 flex flex-col h-[600px] relative overflow-hidden group transition-transform hover:-translate-y-2`}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 text-brand-accent-yellow">
                  <service.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 mb-8 max-w-[240px]">{service.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-brand-accent-yellow transition-colors">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
              
              <div className="mt-auto -mx-10 -mb-10 h-72 overflow-hidden rounded-t-[3rem]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-brand-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
