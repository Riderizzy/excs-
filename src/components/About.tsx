import { motion } from 'motion/react';
import { ExcserviceLogo } from './ExcserviceLogo';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Story */}
          <div className="lg:col-span-12 mb-12">
            <div className="flex items-center gap-4 mb-12">
              <ExcserviceLogo className="w-16 h-16" color="#1ABB31" />
              <h2 className="text-7xl lg:text-9xl font-bold tracking-tighter uppercase italic">Our Story</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <p className="text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
                Born out of a simple need: <br />
                <span className="text-white/40">to make city living <br /> feel a little more </span> <br />
                <span className="text-brand-primary-green underline decoration-wavy underline-offset-8">human again.</span>
              </p>
              <div className="space-y-8">
                <p className="text-xl text-white/50 leading-relaxed">
                  Founded in Lagos, Excservice was built for the high-achievers, the dreamers, and the busy creators who spend so much time building the future that they sometimes forget to handle the present.
                </p>
                <p className="text-xl text-white/50 leading-relaxed">
                  We believe that a clean home and crisp laundry shouldn't be luxuries—they should be the foundation that allows you to fly. Our mission is to handle the essentials so you can handle what matters.
                </p>
                <div className="flex gap-12 mt-12">
                  <div>
                    <h4 className="text-5xl font-bold tracking-tighter mb-2">240+</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-primary-green">Vetted Pros</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-bold tracking-tighter mb-2">15k</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-primary-green">Tasks Done</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-bold tracking-tighter mb-2">4.9</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-primary-green">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Image */}
          <div className="lg:col-span-8 rounded-[3rem] overflow-hidden h-[600px] relative group">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
              alt="The Excservice Team" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[4s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary-green/10" />
            <div className="absolute bottom-12 left-12 max-w-lg">
              <h3 className="text-5xl font-bold text-white mb-4 leading-tight tracking-tighter">Focused on the core.</h3>
              <p className="text-white/60 text-xl font-medium">Every detail matters. Every service is a signature.</p>
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-4 bg-brand-deep-black rounded-[3rem] p-12 flex flex-col justify-between border border-white/5">
            <ExcserviceLogo className="w-12 h-12 mb-12 opacity-20" />
            <blockquote className="text-3xl font-bold italic leading-snug tracking-tighter mb-12">
              "We didn't just want to build a service app. We wanted to build a lifestyle helper that actually understands the rhythm of modern work."
            </blockquote>
            <div>
              <p className="font-bold text-lg">Tobi Aderemi</p>
              <p className="text-sm text-white/40 uppercase tracking-widest">Founder, Excservice</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
