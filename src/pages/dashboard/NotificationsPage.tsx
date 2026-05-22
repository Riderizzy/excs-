import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Bell, 
  Sparkles, 
  Shirt, 
  Wallet, 
  Tag, 
  Info,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NOTIFICATIONS = [
  { 
    id: 1, 
    type: 'service', 
    title: 'Cleaner Arriving', 
    desc: 'Bose Ade is 5 mins away from your Osborne Rd address.', 
    time: '2 mins ago', 
    icon: Sparkles, 
    color: 'text-brand-accent-yellow', 
    bg: 'bg-brand-accent-yellow/10',
    unread: true 
  },
  { 
    id: 2, 
    type: 'payment', 
    title: 'Payment Successful', 
    desc: '₦12,500 has been debited for your Standard Cleaning booking.', 
    time: '1 hour ago', 
    icon: Wallet, 
    color: 'text-brand-primary-green', 
    bg: 'bg-brand-primary-green/10',
    unread: true 
  },
  { 
    id: 3, 
    type: 'promo', 
    title: 'Club Member Perk', 
    desc: 'You have 2 free Deep Cleaning sessions left this quarter.', 
    time: 'Yesterday', 
    icon: Tag, 
    color: 'text-brand-primary-green', 
    bg: 'bg-brand-primary-green/10',
    unread: false 
  },
  { 
    id: 4, 
    type: 'system', 
    title: 'Address Verified', 
    desc: 'Your new office address in Victoria Island has been verified.', 
    time: 'May 18', 
    icon: Info, 
    color: 'text-white', 
    bg: 'bg-white/5',
    unread: false 
  },
];

export default function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h2 className="text-4xl font-bold tracking-tighter">Activity Center.</h2>
              <p className="text-white/40">Real-time updates and notifications.</p>
            </div>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Mark all as read</button>
        </div>

        <div className="space-y-4">
           {NOTIFICATIONS.map((notif, i) => (
             <motion.div
               key={notif.id}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.05 }}
               className={`glass-dark p-8 rounded-[2.5rem] border border-white/5 flex items-start justify-between hover:bg-white/[0.04] transition-all relative group cursor-pointer ${notif.unread ? 'bg-white/[0.03]' : ''}`}
             >
               <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${notif.bg} flex items-center justify-center ${notif.color} relative`}>
                     <notif.icon size={24} />
                     {notif.unread && (
                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-primary-green rounded-full border-2 border-brand-deep-black shadow-[0_0_8px_#1ABB31]" />
                     )}
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-3 mb-1">
                        <h3 className={`font-bold transition-colors ${notif.unread ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>{notif.title}</h3>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white/10">{notif.time}</span>
                     </div>
                     <p className={`text-sm leading-relaxed ${notif.unread ? 'text-white/60' : 'text-white/30'}`}>{notif.desc}</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="p-3 text-white/20 hover:text-red-400 transition-colors">
                    <Trash2 size={16} />
                 </button>
                 <button className="p-3 text-white/20 hover:text-white transition-colors">
                    <MoreVertical size={16} />
                 </button>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-12 p-10 bg-white/5 border border-white/5 rounded-[3rem] text-center">
           <Bell className="text-white/10 mx-auto mb-6" size={40} />
           <p className="text-sm font-medium text-white/30 leading-relaxed max-w-sm mx-auto">
              We'll notify you here about upcoming bookings, your professionals' status, and exclusive Club benefits.
           </p>
        </div>
      </div>
    </div>
  );
}
