import { motion } from 'motion/react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import QuickActions from '../components/dashboard/QuickActions';
import LiveActivity from '../components/dashboard/LiveActivity';
import InsightsGrid from '../components/dashboard/InsightsGrid';
import ExcserviceClub from '../components/dashboard/ExcserviceClub';
import ServiceHistory from '../components/dashboard/ServiceHistory';
import WalletWidget from '../components/dashboard/WalletWidget';
import BottomNav from '../components/dashboard/BottomNav';
import { Calendar as CalendarIcon, Sparkles, ChevronRight, Bell, Clock, Search, MapPin } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-32 lg:pt-40 pb-32 px-6 overflow-x-hidden">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent-yellow/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <DashboardHeader />

        {/* Quick Actions Row */}
        <QuickActions />

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Activity Loop (Left/Wide Column) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Real-time Tracking & Interaction */}
            <LiveActivity />

            {/* Smart Insights & Stats */}
            <InsightsGrid />

            {/* Membership Experience Tier */}
            <ExcserviceClub />

            {/* Archive & Past Experiences */}
            <ServiceHistory />
          </div>

          {/* Business & Operations Side (Right/Narrow Column) */}
          <div className="lg:col-span-4 space-y-8 sticky top-32">
            
            {/* Wallet & Fintech Experience */}
            <WalletWidget />

            {/* Upcoming Schedule Mini-view */}
            <div className="bg-white/5 border border-white/5 rounded-[3rem] p-10 group overflow-hidden relative">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/40">
                    <CalendarIcon size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Upcoming Week</span>
                </div>
                <button 
                  onClick={() => navigate('/dashboard/calendar')}
                  className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green"
                >
                  Calendar
                </button>
              </div>

              <div className="space-y-6">
                {[
                  { day: 'Wed', date: '22', service: 'Dry Cleaning', time: '14:00' },
                  { day: 'Fri', date: '24', service: 'Standard Clean', time: '10:00' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group/item cursor-pointer">
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/20 mb-1">{item.day}</span>
                      <span className="text-xl font-bold group-hover/item:text-brand-primary-green transition-colors">{item.date}</span>
                    </div>
                    <div className="flex-1 border-l border-white/5 pl-6">
                      <p className="font-bold text-sm tracking-tight">{item.service}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">{item.time} PM</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/10 group-hover/item:bg-brand-primary-green group-hover/item:text-brand-dark-green transition-all">
                      <ChevronRight size={14} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-brand-accent-yellow/5 border border-brand-accent-yellow/10 rounded-[2rem] text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent-yellow mb-2">Smart Tip</p>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium px-4">
                  Weekend cleaning slots are filling up. Book <span className="text-white">Saturday</span> now to keep your streak.
                </p>
              </div>
            </div>

            {/* Preferences Context */}
            <div className="bg-white/5 border border-white/5 rounded-[3rem] p-10 cursor-pointer" onClick={() => navigate('/dashboard/addresses')}>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-8 text-center">Current Context</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-brand-primary-green" />
                    <span className="text-[11px] font-bold">14 Osborne Rd, Ikoyi</span>
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/20">Primary</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-brand-primary-green/20">
                  <div className="flex items-center gap-3">
                    <Bell size={14} className="text-brand-accent-yellow" />
                    <span className="text-[11px] font-bold">Priority Notifications</span>
                  </div>
                  <div className="w-2 h-2 bg-brand-primary-green rounded-full shadow-[0_0_8px_#1ABB31]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed Redundant BottomNav - Now handled by App.tsx */}
    </div>
  );
}
