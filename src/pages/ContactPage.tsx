import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tighter mb-8 italic">Get in <br /> touch.</h1>
            <p className="text-2xl text-white/50 max-w-md mb-16 leading-tight">
              Have a question about our services? Our lifestyle managers are ready to help.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand-primary-green shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Email</p>
                  <p className="text-xl font-bold">hello@excservice.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand-primary-green shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Phone</p>
                  <p className="text-xl font-bold">+234 800 EXCSERVICE</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand-primary-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Office</p>
                  <p className="text-xl font-bold">Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-6">
              {[Instagram, Twitter, MessageSquare].map((Icon, idx) => (
                <div key={idx} className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-brand-primary-green transition-all cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 rounded-[3rem] p-10 lg:p-16 border border-white/5">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Tobi Aderemi"
                      className="bg-brand-deep-black border border-white/10 rounded-2xl p-4 focus:border-brand-primary-green outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="tobi@example.com"
                      className="bg-brand-deep-black border border-white/10 rounded-2xl p-4 focus:border-brand-primary-green outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Subject</label>
                  <select className="bg-brand-deep-black border border-white/10 rounded-2xl p-4 focus:border-brand-primary-green outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Excservice for Business</option>
                    <option>Partnerships</option>
                    <option>Support</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us what you're thinking..."
                    className="bg-brand-deep-black border border-white/10 rounded-2xl p-4 focus:border-brand-primary-green outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="bg-brand-primary-green text-brand-dark-green w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-accent-yellow transition-all">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
