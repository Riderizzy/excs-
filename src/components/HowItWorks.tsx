import { motion } from 'motion/react';
import { Search, Calendar, Coffee } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose a service',
    description: 'Select from our wide range of premium essentials like cleaning and laundry.',
    color: 'text-brand-primary-green'
  },
  {
    icon: Calendar,
    title: 'Schedule booking',
    description: 'Pick a time that fits your lifestyle. One-off or recurring, you decide.',
    color: 'text-brand-accent-yellow'
  },
  {
    icon: Coffee,
    title: 'Relax & Enjoy',
    description: 'Sit back and relax while our professionals handle the rest for you.',
    color: 'text-white/60'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">Simple living.</h2>
          <p className="text-white/40 max-w-sm mx-auto">Three simple steps to unlock more time for what truly matters to you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative text-center group"
            >
              <div className={`w-20 h-20 glass rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${step.color}`}>
                <step.icon size={32} />
                <span className="absolute -top-4 -right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-xs font-bold border-white/10">0{idx + 1}</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
              <p className="text-white/40 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
