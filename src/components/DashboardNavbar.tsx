import { motion } from 'motion/react';
import { 
  Bell, 
  Search, 
  User, 
  LogOut, 
  LayoutDashboard, 
  Calendar, 
  Settings,
  ShieldCheck,
  Menu,
  X,
  Wallet,
  Compass
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ExcserviceLogo } from './ExcserviceLogo';

export default function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.pathname.includes('/admin');

  const NAV_ITEMS = isAdmin ? [
    { name: 'Overview', path: '/dashboard/admin', icon: LayoutDashboard },
    { name: 'Recent Activity', path: '/dashboard/admin', icon: Calendar },
    { name: 'System Status', path: '/dashboard/admin', icon: ShieldCheck },
  ] : [
    { name: 'Overview', path: '/dashboard/user', icon: LayoutDashboard },
    { name: 'Schedule', path: '/dashboard/calendar', icon: Calendar },
    { name: 'Explore', path: '/services/explore', icon: Compass },
    { name: 'History', path: '/dashboard/history', icon: Settings },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass shadow-2xl border border-white/5 rounded-3xl px-6 py-3">
        {/* Left side: Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link to={isAdmin ? "/dashboard/admin" : "/dashboard/user"} className="flex items-center gap-2">
            <ExcserviceLogo className="w-8 h-8" color="#1ABB31" />
            <span className="text-xl font-display font-bold tracking-tight hidden sm:block">Excservice</span>
          </Link>

          {isAdmin && (
            <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    location.pathname === item.path 
                      ? 'bg-brand-primary-green text-brand-dark-green' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon size={14} />
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {!isAdmin && (
            <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    location.pathname === item.path 
                      ? 'bg-brand-primary-green text-brand-dark-green' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon size={14} />
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right side: Search, Notifications, User */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center relative mr-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white/5 border border-white/5 rounded-xl py-2 pl-12 pr-6 outline-none focus:border-brand-primary-green transition-all text-xs w-48"
            />
          </div>

          <button 
            onClick={() => navigate('/dashboard/wallet')}
            className="hidden sm:flex items-center gap-2 p-2.5 bg-white/5 rounded-xl text-white/40 hover:text-white transition-colors group"
          >
            <Wallet size={18} />
          </button>

          <button 
            onClick={() => navigate('/dashboard/notifications')}
            className="relative p-2.5 bg-white/5 rounded-xl text-white/40 hover:text-white transition-colors group"
          >
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary-green rounded-full border-2 border-brand-dark-green group-hover:scale-125 transition-transform" />
          </button>

          <div className="h-8 w-px bg-white/5 mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/profile')}
              className="flex items-center gap-3 p-1.5 pr-4 bg-white/5 hover:bg-brand-primary-green/10 rounded-xl transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-primary-green flex items-center justify-center text-brand-dark-green font-bold text-xs">
                TA
              </div>
              <div className="hidden md:block text-left">
                <p className="text-[10px] font-bold uppercase leading-none mb-1 tracking-tight">Tobi A.</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-brand-primary-green leading-none font-medium">Club Member</p>
              </div>
            </button>

            <button 
              onClick={() => navigate('/login')}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-white/20 hover:text-white transition-all group"
              title="Logout"
            >
              <LogOut size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          <button 
            className="lg:hidden text-white/70 p-1 ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, height: 'auto', marginTop: 16 } : { opacity: 0, height: 0, marginTop: 0 }}
        className="lg:hidden max-w-7xl mx-auto glass rounded-[2.5rem] overflow-hidden"
      >
        <div className="p-6 flex flex-col gap-2">
          {isAdmin && NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                location.pathname === item.path 
                  ? 'bg-brand-primary-green text-brand-dark-green' 
                  : 'text-white/40 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
          <div className="h-px bg-white/5 my-4" />
          <button 
            onClick={() => {
              setIsOpen(false);
              navigate('/login');
            }}
            className="flex items-center gap-4 p-4 rounded-2xl text-xs font-bold uppercase tracking-widest text-red-400 hover:bg-red-400/10 transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
