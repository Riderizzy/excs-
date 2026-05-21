import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES, TRUST_FEATURES } from '../constants';

const ServiceCard = ({ service, index }: { service: any, index: number, key?: any }) => {
  const Icon = (LucideIcons as any)[service.icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[2.5rem] bg-brand-deep-black border border-white/5 h-[600px] flex flex-col"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-black via-brand-deep-black/20 to-transparent" />
      </div>

      <div className="relative z-10 mt-auto p-10">
        <div className="w-14 h-14 bg-brand-primary-green rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary-green/20">
          <Icon className="text-brand-dark-green" size={28} />
        </div>
        <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
        <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-xs">{service.description}</p>
        <button className="flex items-center gap-2 font-bold text-brand-primary-green group-hover:translate-x-2 transition-transform">
          Learn more <LucideIcons.ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-primary-green font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Essentials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Curated for <br />
            <span className="italic font-display font-light text-white/40">the modern life.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Trust Features */}
        <div className="mt-40 grid md:grid-cols-4 gap-12 border-t border-white/5 pt-32">
          {TRUST_FEATURES.map((feature, index) => {
            const Icon = (LucideIcons as any)[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-accent-yellow">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
