import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExcserviceLogo } from './ExcserviceLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Excservice for Business', path: '/business' },
    { name: 'Gifting', path: '/gifting' },
    { name: 'About', path: '/about' }
  ];
  const SERVICES = [
    { name: 'Cleaning', id: 'cleaning' },
    { name: 'Laundry', id: 'laundry' }
  ];

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-3xl px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <ExcserviceLogo className="w-8 h-8" color="#1ABB31" />
          <span className="text-xl font-display font-bold tracking-tight">Excservice</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            if (item.name === 'Services') {
              return (
                <div 
                  key={item.name}
                  className="relative group py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-brand-primary-green transition-colors flex items-center gap-1">
                    {item.name} <ChevronDown size={12} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass rounded-2xl p-2 shadow-2xl border border-white/5"
                      >
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand-primary-green hover:bg-white/5 rounded-xl transition-all"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${location.pathname === item.path ? 'text-brand-primary-green' : 'text-white/50 hover:text-white'}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-brand-primary-green transition-colors">
            Log in
          </Link>
          <Link to="/book" className="bg-brand-primary-green text-brand-dark-green px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary-green/90 transition-all active:scale-95 flex items-center gap-2 text-glow-green">
            Book a service <ArrowRight size={14} />
          </Link>
        </div>

        <button 
          className="lg:hidden text-white/70 p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-6 right-6 glass rounded-[2.5rem] p-8 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
          >
            {NAV_ITEMS.map((item) => {
              if (item.name === 'Services') {
                return (
                  <div key={item.name} className="flex flex-col gap-4">
                    <button 
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="text-sm font-bold uppercase tracking-widest text-white/70 flex items-center justify-between"
                    >
                      {item.name} <ChevronDown size={14} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-4 pl-4 overflow-hidden"
                        >
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-brand-primary-green transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-brand-primary-green transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="h-px bg-white/10 my-2" />
            <Link
              to="/login"
              className="text-sm font-bold uppercase tracking-widest text-white/70"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </Link>
            <Link 
              to="/book"
              onClick={() => setIsOpen(false)}
              className="bg-brand-primary-green text-brand-dark-green w-full py-5 rounded-[1.5rem] font-bold uppercase tracking-widest text-xs active:scale-95 transition-transform mt-2 flex items-center justify-center"
            >
              Book a service
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
