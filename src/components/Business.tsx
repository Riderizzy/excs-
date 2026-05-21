import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, BarChart, Rocket, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    title: 'Employee Wellness',
    description: 'Boost productivity by handling your team\'s essentials. From office lunches to home cleaning perks.',
    icon: Users,
  },
  {
    title: 'Fleet Management',
    description: 'Scalable cleaning and maintenance services for property managers and corporate offices.',
    icon: Briefcase,
  },
  {
    title: 'Detailed Reporting',
    description: 'Track spending and service frequency with our enterprise-grade dashboard.',
    icon: BarChart,
  },
  {
    title: 'Fast Onboarding',
    description: 'Get your entire organization settled in under 24 hours with dedicated support.',
    icon: Rocket,
  },
];

export default function Business() {
  return (
    <section id="excservice-for-business" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="bg-brand-deep-black rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Excservice for <br />
                <span className="text-brand-primary-green">Business.</span>
              </h2>
              <p className="text-xl text-white/50 mb-12 max-w-lg leading-relaxed">
                Elevate your company culture by providing world-class home and office support services to your team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="group">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-4 group-hover:bg-brand-primary-green transition-colors">
                      <feature.icon size={24} className="text-brand-primary-green group-hover:text-brand-dark-green" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              <Link to="/partner" className="mt-12 bg-white text-brand-dark-green px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs inline-flex items-center gap-3 hover:bg-brand-primary-green transition-all">
                Partner with us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[4s] hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary-green/20 mix-blend-multiply" />
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
