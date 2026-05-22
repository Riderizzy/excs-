import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  MapPin, 
  Plus, 
  Home, 
  Briefcase, 
  Star, 
  ChevronRight, 
  Shield, 
  Trash2,
  Navigation,
  Compass,
  Edit2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ADDRESSES = [
  { id: 'A1', label: 'Primary Home', address: '14 Osborne Rd, Ikoyi, Lagos', icon: Home, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10', default: true },
  { id: 'A2', label: 'Tech Studio', address: 'Plot 10, VI Extension, Lagos', icon: Briefcase, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10', default: false },
  { id: 'A3', label: 'Parents House', address: 'Maitama, Abuja', icon: Star, color: 'text-pink-400', bg: 'bg-pink-400/10', default: false },
];

export default function AddressesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">My Oasis.</h1>
              <p className="text-white/40">Manage your service locations and preferences.</p>
            </div>
          </div>
          <button className="bg-brand-primary-green text-brand-dark-green px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-brand-accent-yellow transition-all">
            <Plus size={14} /> Add Location
          </button>
        </div>

        {/* Hero Map Style Info */}
        <div className="glass-dark p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden mb-12 group">
           <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-primary-green/5 blur-[120px] rounded-full" />
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-32 h-32 bg-brand-primary-green/10 rounded-full flex items-center justify-center text-brand-primary-green group-hover:scale-110 transition-transform duration-1000">
                 <Compass size={60} strokeWidth={1} className="animate-spin-slow" />
              </div>
              <div className="text-center md:text-left">
                 <p className="text-brand-primary-green text-xs font-bold uppercase tracking-[0.4em] mb-4">Geolocation Profile</p>
                 <h2 className="text-4xl font-bold tracking-tighter mb-4 pr-12">Your addresses are <span className="italic font-medium text-brand-primary-green">verified.</span></h2>
                 <p className="text-white/30 font-medium leading-relaxed max-w-sm">
                   Precision routing is active for your Ikoyi and VI locations. Our professionals use these coordinates for seamless arrival.
                 </p>
              </div>
           </div>
        </div>

        {/* Address List */}
        <div className="space-y-6 mb-12">
           <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8 px-1">Saved Locations</h3>
           <div className="grid gap-4">
              {ADDRESSES.map((addr, i) => (
                <motion.div
                  key={addr.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-8">
                     <div className={`w-16 h-16 rounded-2xl ${addr.bg} flex items-center justify-center ${addr.color} group-hover:rotate-12 transition-transform`}>
                        <addr.icon size={28} />
                     </div>
                     <div>
                        <div className="flex items-center gap-3 mb-1">
                           <h4 className="text-xl font-bold tracking-tight">{addr.label}</h4>
                           {addr.default && (
                             <span className="text-[9px] font-bold uppercase tracking-widest bg-brand-primary-green/10 text-brand-primary-green px-2 py-0.5 rounded-full border border-brand-primary-green/20">Default</span>
                           )}
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed">{addr.address}</p>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-3 md:justify-end border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                     <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 text-white/20 hover:text-white transition-all">
                        <Edit2 size={18} />
                     </button>
                     <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 text-white/20 hover:text-red-400 transition-all">
                        <Trash2 size={18} />
                     </button>
                     <button className="flex items-center gap-3 px-8 py-4 bg-white text-brand-dark-green rounded-2xl font-bold uppercase tracking-widest text-[9px] hover:bg-brand-primary-green transition-all shadow-xl">
                        <Navigation size={14} /> Route Here
                     </button>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Preferences Quick-Toggle Center */}
        <div className="glass-dark p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
           <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                 <Shield className="text-brand-primary-green" size={24} />
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Service Preferences</h3>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green">Master Settings</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                 <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-brand-primary-green/5 transition-all cursor-pointer group">
                    <div>
                       <p className="font-bold text-sm group-hover:text-brand-primary-green transition-colors">Gate Code Privacy</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Hidden until arrival</p>
                    </div>
                    <ChevronRight size={16} className="text-white/10 group-hover:text-white" />
                 </div>
                 <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-brand-accent-yellow/5 transition-all cursor-pointer group">
                    <div>
                       <p className="font-bold text-sm group-hover:text-brand-accent-yellow transition-colors">Eco Supplies</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Always use eco-friendly</p>
                    </div>
                    <ChevronRight size={16} className="text-white/10 group-hover:text-white" />
                 </div>
              </div>

              <div className="space-y-6">
                 <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-pink-400/5 transition-all cursor-pointer group">
                    <div>
                       <p className="font-bold text-sm group-hover:text-pink-400 transition-colors">Pet Instructions</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Friendly golden retriever</p>
                    </div>
                    <ChevronRight size={16} className="text-white/10 group-hover:text-white" />
                 </div>
                 <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-brand-primary-green/5 transition-all cursor-pointer group">
                    <div>
                       <p className="font-bold text-sm group-hover:text-brand-primary-green transition-colors">Digital Reception</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Remote entrance active</p>
                    </div>
                    <ChevronRight size={16} className="text-white/10 group-hover:text-white" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
