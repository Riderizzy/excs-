import { motion } from 'motion/react';
import { ExcserviceLogo } from './ExcserviceLogo';
import { Shield, Leaf, Smile, Heart } from 'lucide-react';

const VALUES = [
  { icon: Shield, title: 'Reliable', desc: 'You can count on us.' },
  { icon: Leaf, title: 'Thoughtful', desc: 'We care about people and our planet.' },
  { icon: Smile, title: 'Effortless', desc: 'Services that make life easier.' },
  { icon: Heart, title: 'Human', desc: 'Real people. Real care.' },
];

export default function Values() {
  return (
    <section className="py-20 border-y border-white/5 bg-brand-deep-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {VALUES.map((v, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-primary-green group-hover:scale-110 transition-transform">
                <v.icon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">{v.title}</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">{v.desc}</p>
              </div>
              {i < VALUES.length - 1 && (
                <div className="hidden lg:block h-8 w-px bg-white/5 ml-auto" />
              )}
            </div>
          ))}
          <div className="flex justify-end items-center md:col-start-4 lg:col-start-5">
            <ExcserviceLogo className="w-10 h-10" color="#FBCB02" />
          </div>
        </div>
      </div>
    </section>
  );
}
