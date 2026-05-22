import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Sparkles, 
  Shirt, 
  Plus, 
  Clock, 
  MapPin,
  RefreshCw,
  Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UPCOMING = [
  { id: 'U1', day: 'Today', date: '21', month: 'May', service: 'Active Cleaning', time: '10:00 AM', icon: Sparkles, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10', active: true },
  { id: 'U2', day: 'Tomorrow', date: '22', month: 'May', service: 'Laundry Pickup', time: '02:00 PM', icon: Shirt, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10', active: false },
  { id: 'U3', day: 'Sat', date: '24', month: 'May', service: 'Standard Cleaning', time: '09:00 AM', icon: Sparkles, color: 'text-brand-accent-yellow', bg: 'bg-brand-accent-yellow/10', active: false },
  { id: 'U4', day: 'Mon', date: '26', month: 'May', service: 'Weekly Laundry', time: '11:00 AM', icon: Shirt, color: 'text-brand-primary-green', bg: 'bg-brand-primary-green/10', active: false },
];

export default function CalendarPage() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(21);

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">My Schedule.</h1>
              <p className="text-white/40">Synchronized home and lifestyle routines.</p>
            </div>
          </div>
          <button className="bg-brand-primary-green text-brand-dark-green px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-xl shadow-brand-primary-green/10">
            <Plus size={16} /> New Booking
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           {/* Calendar Core */}
           <div className="lg:col-span-8 space-y-10">
              {/* Month Selector */}
              <div className="glass-dark p-8 rounded-[3rem] border border-white/5 flex items-center justify-between">
                 <button className="p-3 bg-white/5 rounded-xl hover:text-brand-primary-green transition-colors"><ChevronLeft size={20} /></button>
                 <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight">May 2026</h2>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green mt-1">Lagos, Proper Time</p>
                 </div>
                 <button className="p-3 bg-white/5 rounded-xl hover:text-brand-primary-green transition-colors"><ChevronRight size={20} /></button>
              </div>

              {/* Day Wheel */}
              <div className="flex justify-between gap-4 overflow-x-auto pb-4 scrollbar-hide px-1">
                 {[18, 19, 20, 21, 22, 23, 24, 25, 26].map((day) => (
                   <button 
                     key={day}
                     onClick={() => setSelectedDay(day)}
                     className={`flex flex-col items-center gap-3 min-w-[70px] p-6 rounded-[1.8rem] transition-all border ${selectedDay === day ? 'bg-brand-primary-green border-brand-primary-green text-brand-dark-green' : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'}`}
                   >
                     <span className="text-[9px] font-bold uppercase tracking-widest">May</span>
                     <span className="text-2xl font-bold">{day}</span>
                     {day === 21 && (
                        <div className={`w-1 h-1 rounded-full ${selectedDay === day ? 'bg-brand-dark-green' : 'bg-brand-primary-green shadow-[0_0_8px_#1ABB31]'}`} />
                     )}
                   </button>
                 ))}
              </div>

              {/* Daily Timeline */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 px-4">Timeline</h3>
                <div className="relative pl-12 border-l-2 border-white/5 space-y-12 py-4 ml-6">
                   {UPCOMING.filter(u => selectedDay === 21 ? u.day === 'Today' : true).map((item, i) => (
                     <motion.div
                       key={item.id}
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="relative group"
                     >
                       <div className={`absolute -left-[57px] top-6 w-5 h-5 rounded-full border-4 border-brand-deep-black z-10 ${item.active ? 'bg-brand-primary-green shadow-[0_0_10px_#1ABB31]' : 'bg-white/10 group-hover:bg-brand-primary-green/40 transition-colors'}`} />
                       
                       <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.04] transition-all flex flex-col md:flex-row md:items-center justify-between gap-8">
                          <div className="flex items-center gap-8">
                             <div className={`w-16 h-16 rounded-[1.5rem] ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                                <item.icon size={28} />
                             </div>
                             <div>
                                <div className="flex items-center gap-3 mb-2">
                                   <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green italic">{item.time}</p>
                                   {item.active && <span className="text-[8px] font-bold uppercase tracking-widest bg-brand-primary-green/10 px-2 py-0.5 rounded animate-pulse">Running Now</span>}
                                </div>
                                <h4 className="text-2xl font-bold tracking-tight mb-2">{item.service}</h4>
                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
                                   <span className="flex items-center gap-1.5"><MapPin size={12} /> Ikoyi Residence</span>
                                   <span className="w-1 h-1 bg-white/5 rounded-full" />
                                   <span className="flex items-center gap-1.5"><Clock size={12} /> 3h Estimation</span>
                                </div>
                             </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                             <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 text-white/20 hover:text-white transition-all">
                                <RefreshCw size={18} />
                             </button>
                             <button className="flex items-center gap-3 px-8 py-4 bg-white text-brand-dark-green rounded-2xl font-bold uppercase tracking-widest text-[9px] hover:bg-brand-primary-green transition-all shadow-xl">
                                View Details <ChevronRight size={14} />
                             </button>
                          </div>
                       </div>
                     </motion.div>
                   ))}
                </div>
              </div>
           </div>

           {/* Sidebar Insights */}
           <div className="lg:col-span-4 space-y-8">
              {/* Automation Insight */}
              <div className="glass-dark p-10 rounded-[3rem] border border-white/5 text-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary-green/5 blur-[60px] rounded-full" />
                 <CalendarIcon className="text-brand-primary-green mx-auto mb-8" size={40} strokeWidth={1} />
                 <h3 className="text-xl font-bold tracking-tight mb-4">Master Your Routine</h3>
                 <p className="text-sm text-white/30 leading-relaxed mb-10">
                   You have <span className="text-white">4 recurring</span> automations active. Click below to bulk-edit and save ₦12,000 extra this month.
                 </p>
                 <button className="w-full py-5 bg-brand-primary-green text-brand-dark-green rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-accent-yellow transition-all">
                    Manage Automations
                 </button>
              </div>

              {/* Reminders */}
              <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-10 flex items-center justify-between">
                    Smart Reminders <Bell size={14} />
                 </h3>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4 group cursor-pointer">
                       <div className="mt-1 w-2 h-2 bg-brand-accent-yellow rounded-full" />
                       <div>
                          <p className="text-sm font-bold group-hover:text-brand-accent-yellow transition-colors">Weekend Deep Clean</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Book before Fri 6PM</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 group cursor-pointer opacity-40">
                       <div className="mt-1 w-2 h-2 bg-white/20 rounded-full" />
                       <div>
                          <p className="text-sm font-bold group-hover:text-white transition-colors">Laundry Restock</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mt-1">Scheduled for Wed</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
