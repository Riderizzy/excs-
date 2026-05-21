import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shirt } from 'lucide-react';
import { ExcserviceLogo } from './ExcserviceLogo';

export default function Hero() {
  return (
    <section id="services" className="pt-24 pb-12 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Section: Brand | Services | Lifestyle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[750px] mb-4">
          
          {/* Left Brand Area (Card 1) */}
          <div className="lg:col-span-3 bg-brand-deep-black rounded-[2.5rem] p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <ExcserviceLogo className="w-16 h-16" color="#FBCB02" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Excservice</h1>
              <p className="text-4xl font-medium leading-[1.1] mb-6">
                Modern living.<br />
                <span className="text-brand-accent-yellow">Handled.</span>
              </p>
              <div className="w-12 h-1 bg-brand-accent-yellow mb-10" />
              <p className="text-white/40 leading-relaxed text-lg max-w-[280px]">
                Excservice helps busy people handle everyday essentials with ease, so they can focus on what really matters.
              </p>
            </div>
            
            {/* Background shape */}
            <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
              <ExcserviceLogo className="w-96 h-96" />
            </div>
          </div>

          {/* Middle Service Cards (Cards 2-4) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Cleaning */}
            <div id="cleaning" className="bg-[#3e573e] rounded-[2.5rem] p-8 flex flex-col overflow-hidden relative group scroll-mt-24">
              <div className="mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center mb-6 text-brand-accent-yellow">
                  <Sparkles size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Excservice<br />Cleaning</h3>
                <p className="text-white/60 text-sm leading-relaxed">Spaces that feel<br />fresh and cared for.</p>
              </div>
              <div className="mt-auto -mx-8 -mb-8 overflow-hidden rounded-t-[3rem]">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Minimal Living Room" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Laundry */}
            <div id="laundry" className="bg-[#4D573E] rounded-[2.5rem] p-8 flex flex-col overflow-hidden relative group scroll-mt-24">
              <div className="mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center mb-6 text-brand-accent-yellow">
                  <Shirt size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Excservice<br />Laundry</h3>
                <p className="text-white/60 text-sm leading-relaxed">Clean clothes.<br />Delivered.</p>
              </div>
              <div className="mt-auto -mx-8 -mb-8 overflow-hidden rounded-t-[3rem]">
                <img 
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800" 
                  alt="Fresh Laundry" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Hero Section (Card 5) */}
          <div className="lg:col-span-3 relative rounded-[2.5rem] overflow-hidden group bg-brand-primary-green/10 flex flex-col justify-between p-12">
            <div className="relative z-10">
              <h2 className="text-6xl font-bold leading-[1] mb-8 tracking-tighter">More time <br /> for what <br /> matters.</h2>
              <div className="w-16 h-1 bg-brand-accent-yellow mb-8" />
              <p className="text-white/90 text-xl font-medium">We handle <br /> the rest.</p>
            </div>
            
            <div className="relative z-10 flex justify-end">
              <ExcserviceLogo className="w-12 h-12" color="#FBCB02" />
            </div>

            {/* Abstract Graphic instead of image */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-green/20 to-transparent" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-accent-yellow/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
