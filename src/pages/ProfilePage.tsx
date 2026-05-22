import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Settings, CreditCard, Shield, Bell, LogOut, ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-32 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">Profile Settings.</h1>
          <p className="text-white/40">Manage your account and preferences.</p>
        </div>

        <div className="space-y-6">
          {/* User Info */}
          <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 flex items-center gap-8">
            <div className="w-24 h-24 bg-brand-primary-green rounded-full flex items-center justify-center text-brand-dark-green font-bold text-3xl">
              TA
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Tobi Adesanya</h2>
              <p className="text-white/40 text-sm">tobi@example.com</p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-brand-primary-green/10 text-brand-primary-green rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-primary-green/20">
                  Club Member
                </span>
              </div>
            </div>
          </div>

          {/* Settings Groups */}
          <div className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
            <div className="p-8 border-b border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Personal Information</h3>
            </div>
            <div className="divide-y divide-white/5">
              <button className="w-full flex items-center justify-between p-8 hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-6">
                  <User size={20} className="text-white/20" />
                  <div className="text-left">
                    <p className="font-bold">Account Details</p>
                    <p className="text-xs text-white/40 mt-1">Name, email, and phone number</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/10 group-hover:text-white transition-colors" />
              </button>
              <button 
                onClick={() => navigate('/dashboard/addresses')}
                className="w-full flex items-center justify-between p-8 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <MapPin size={20} className="text-white/20" />
                  <div className="text-left">
                    <p className="font-bold">Addresses</p>
                    <p className="text-xs text-white/40 mt-1">Manage your service locations</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/10 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
            <div className="p-8 border-b border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Security & Billing</h3>
            </div>
            <div className="divide-y divide-white/5">
              <button 
                onClick={() => navigate('/dashboard/wallet')}
                className="w-full flex items-center justify-between p-8 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <CreditCard size={20} className="text-white/20" />
                  <div className="text-left">
                    <p className="font-bold">Payment Methods</p>
                    <p className="text-xs text-white/40 mt-1">Default cards and billing history</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/10 group-hover:text-white transition-colors" />
              </button>
              <button 
                onClick={() => navigate('/dashboard/settings')}
                className="w-full flex items-center justify-between p-8 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <Shield size={20} className="text-white/20" />
                  <div className="text-left">
                    <p className="font-bold">Password & Security</p>
                    <p className="text-xs text-white/40 mt-1">Privacy and account safety</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/10 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
            <div className="p-8 border-b border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Preferences</h3>
            </div>
            <div className="p-8 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Bell size={20} className="text-white/20" />
                <div className="text-left">
                  <p className="font-bold">Push Notifications</p>
                  <p className="text-xs text-white/40 mt-1">Booking confirmations & professional arrival updates</p>
                </div>
              </div>
              <button 
                onClick={() => setPushEnabled(!pushEnabled)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${pushEnabled ? 'bg-brand-primary-green' : 'bg-white/10'}`}
              >
                <motion.div 
                  className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-lg"
                  animate={{ x: pushEnabled ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          </div>

          <button 
            onClick={() => navigate('/login')}
            className="w-full flex items-center gap-4 p-8 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-[2.5rem] text-red-400 font-bold uppercase tracking-widest text-xs transition-all justify-center"
          >
            <LogOut size={18} /> Logout from all devices
          </button>
        </div>
      </div>
    </div>
  );
}
