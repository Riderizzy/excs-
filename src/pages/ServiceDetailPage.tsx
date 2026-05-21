import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Sparkles, Shirt } from 'lucide-react';

const SERVICE_DATA: Record<string, any> = {
  cleaning: {
    title: 'Excservice Cleaning',
    description: 'Professional cleaners who treat your home with care. Schedule one-off or recurring deep cleans.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-[#3e573e]',
    icon: Sparkles,
    features: ['Experienced pros', 'Eco-friendly products', 'Vetted & background checked', 'Satisfacton guarantee']
  },
  laundry: {
    title: 'Excservice Laundry',
    description: 'Crisp, fresh, and perfectly folded. Pick up and delivery that fits your busy schedule.',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-[#4D573E]',
    icon: Shirt,
    features: ['48-hour turnaround', 'Premium detergent', 'Expert stain removal', 'Folding & ironing included']
  }
};

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = id ? SERVICE_DATA[id] : null;

  if (!service) return <div className="pt-40 text-center">Service not found.</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pb-24 pt-32 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className={`${service.color} rounded-[3rem] p-12 lg:p-20 grid lg:grid-cols-2 gap-16 items-center overflow-hidden relative`}>
          <div className="z-10">
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-10 text-brand-accent-yellow">
              <service.icon size={32} />
            </div>
            <h1 className="text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">{service.title}</h1>
            <p className="text-xl text-white/70 mb-12 max-w-lg leading-relaxed">{service.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.features.map((f: string) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full shadow-[0_0_10px_rgba(26,187,49,0.5)]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white/50">{f}</span>
                </div>
              ))}
            </div>

            <Link to="/book" className="bg-white text-brand-dark-green px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-primary-green transition-all inline-block">
              Book {id} Service
            </Link>
          </div>

          <div className="relative aspect-square lg:aspect-auto h-full rounded-[2.5rem] overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale brightness-75" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none">
             <service.icon size={400} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
