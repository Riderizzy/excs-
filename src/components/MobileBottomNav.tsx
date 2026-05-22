import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Search, 
  Calendar, 
  User, 
  Plus
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ITEMS = [
  { name: 'Home', path: '/dashboard/user', icon: LayoutDashboard },
  { name: 'Explore', path: '/services/explore', icon: Search },
  { name: 'Book', path: '/book', icon: Plus, isAction: true },
  { name: 'Schedule', path: '/dashboard/calendar', icon: Calendar },
  { name: 'Profile', path: '/profile', icon: User },
];

export default function MobileBottomNav() {
  const location = useLocation();

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-md z-[100]">
      <div className="glass shadow-2xl border border-white/10 rounded-[2.5rem] px-4 py-3 flex items-center justify-between backdrop-blur-3xl">
        {ITEMS.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="relative flex flex-col items-center justify-center min-w-[64px] group"
          >
            {item.isAction ? (
              <div className="w-12 h-12 bg-brand-primary-green rounded-full flex items-center justify-center text-brand-dark-green shadow-lg shadow-brand-primary-green/20 -mt-8 border-4 border-brand-deep-black group-hover:scale-110 transition-transform">
                <item.icon size={24} strokeWidth={3} />
              </div>
            ) : (
              <>
                <item.icon 
                  size={22} 
                  className={`transition-colors ${
                    location.pathname === item.path ? 'text-brand-primary-green' : 'text-white/40'
                  }`}
                />
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="active-tab"
                    className="absolute -bottom-1 w-1 h-1 bg-brand-primary-green rounded-full"
                  />
                )}
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
