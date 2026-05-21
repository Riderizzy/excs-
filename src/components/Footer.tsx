import { Instagram, Twitter, Facebook, ArrowUpRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExcserviceLogo } from './ExcserviceLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-32 pb-12 bg-brand-deep-black border-t border-white/5 relative overflow-hidden">
      <div className="ambient-light -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-primary-green/5" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-24">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <ExcserviceLogo className="w-10 h-10" color="#1ABB31" />
              <span className="text-xl font-display font-bold tracking-tight">Excservice</span>
            </div>
            <p className="text-white/40 max-w-sm mb-10 leading-relaxed text-lg">
              Redefining modern living for busy individuals across Nigeria. 
              Your essentials, handled with precision and care.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-brand-primary-green hover:border-brand-primary-green/20 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h5 className="font-bold mb-8 uppercase tracking-widest text-xs text-brand-primary-green">Services</h5>
            <ul className="space-y-4">
              <li>
                <Link to="/services/cleaning" className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  Excservice Cleaning <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/services/laundry" className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  Excservice Laundry <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  Excservice Club <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  Gift Cards <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h5 className="font-bold mb-8 uppercase tracking-widest text-xs text-brand-primary-green">Company</h5>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/40 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-white/40 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link to="/business" className="text-white/40 hover:text-white transition-colors text-sm">Excservice for Business</Link></li>
              <li><Link to="/contact" className="text-white/40 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h5 className="font-bold mb-8 uppercase tracking-widest text-xs text-brand-primary-green">Join our Network</h5>
            <p className="text-white/40 text-sm mb-6 leading-relaxed max-w-xs">
              Are you a professional cleaner or logistics expert? We're always looking for quality partners.
            </p>
            <Link to="/partner" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-brand-primary-green hover:text-brand-dark-green px-6 py-4 rounded-2xl transition-all">
              Become a Excservice Pro <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium italic">
            © {currentYear} Excservice Essentials Inc. Modern Living, Handled.
          </p>
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
