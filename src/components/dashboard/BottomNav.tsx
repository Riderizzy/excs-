import { motion } from 'motion/react';
import { Home, LayoutGrid, Calendar, Crown, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TABS = [
  { icon: Home, label: 'Home', path: '/dashboard/user' },
  { icon: LayoutGrid, label: 'Services', path: '/services' },
  { icon: Calendar, label: 'Activity', path: '/dashboard/user' },
  { icon: Crown, label: 'Club', path: '/dashboard/user' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
      <div className="glass shadow-2xl border border-white/10 rounded-[2.5rem] px-4 py-3 flex items-center justify-between backdrop-blur-2xl">
        {TABS.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link 
              key={tab.label} 
              to={tab.path}
              className="relative flex flex-col items-center gap-1.5 py-1 px-4 group"
            >
              {isActive && (
                <motion.div 
                  layoutId="bottom-nav-indicator"
                  className="absolute -top-1 w-1 h-1 bg-brand-primary-green rounded-full shadow-[0_0_10px_#1ABB31]"
                />
              )}
              <tab.icon 
                size={20} 
                className={`transition-all duration-300 ${isActive ? 'text-brand-primary-green scale-110' : 'text-white/30 group-hover:text-white'}`} 
              />
              <span className={`text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-brand-primary-green opacity-100' : 'text-white/20 opacity-0 group-hover:opacity-100'}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
