import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExcserviceLogo } from '../components/ExcserviceLogo';
import { Heart, Globe, Zap, Users, ArrowRight } from 'lucide-react';

const OPEN_ROLES = [
  { title: 'Home Manager', location: 'Lagos', type: 'Full-time' },
  { title: 'Logistics Coordinator', location: 'Lagos', type: 'Contract' },
  { title: 'Quality Assurance', location: 'Abuja', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8">
            <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter uppercase italic leading-[0.8] mb-12">
              Join the <br /> <span className="text-brand-primary-green">Excservice</span> Team
            </h1>
            <p className="text-3xl text-white/50 leading-tight tracking-tight max-w-2xl">
              We aren't just hiring workers. We're building a network of professionals who believe in the art of service.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-brand-primary-green/10 rounded-[2.5rem] p-10 border border-brand-primary-green/20">
              <ExcserviceLogo className="w-12 h-12 mb-6" color="#1ABB31" />
              <h3 className="text-2xl font-bold mb-4">The Excservice Standard</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                All our pros go through a rigorous vetting process and the Excservice Training Academy.
              </p>
              <Link to="/partner" className="text-xs font-bold uppercase tracking-widest text-brand-primary-green hover:text-white transition-colors flex items-center gap-2">
                Apply as a pro <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { icon: Globe, title: 'Regional Impact', desc: 'Starting in Lagos, scaling across Africa.' },
            { icon: Heart, title: 'Care First', desc: 'We treat every home as if it were our own.' },
            { icon: Zap, title: 'Fast Growth', desc: 'Be part of a high-growth lifestyle platform.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-[2.5rem] p-12 border border-white/5">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-accent-yellow mb-8">
                <item.icon size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl font-bold tracking-tighter">Open Roles</h2>
            <div className="w-24 h-1 bg-brand-primary-green" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {OPEN_ROLES.map((role, idx) => (
              <div key={idx} className="group bg-brand-deep-black rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center justify-between border border-white/5 hover:bg-white/5 transition-all cursor-pointer">
                <div>
                  <h4 className="text-2xl font-bold mb-1">{role.title}</h4>
                  <div className="flex gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/30">{role.location}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-primary-green">{role.type}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-brand-primary-green group-hover:text-brand-dark-green transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
