import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExcserviceLogo } from '../components/ExcserviceLogo';
import { ArrowRight, Mail, Lock, Chrome, Eye, EyeOff, ChevronLeft } from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'selection' | 'email'>('selection');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-brand-deep-black"
    >
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <Link to="/" className="inline-block mb-8 hover:scale-110 transition-transform">
            <ExcserviceLogo className="w-16 h-16 mx-auto" color="#1ABB31" />
          </Link>
          <h1 className="text-5xl font-bold tracking-tighter mb-4 text-white">Welcome back.</h1>
          <p className="text-white/40">Log in to handle your essentials.</p>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {mode === 'selection' ? (
              <motion.div
                key="selection"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <button 
                  className="w-full bg-white text-brand-dark-green py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-brand-primary-green transition-all shadow-xl shadow-white/5"
                >
                  <Chrome size={18} /> Sign in with Google
                </button>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-[#0f0f0f] px-4 text-white/20 tracking-widest font-bold">Or</span></div>
                </div>

                <button 
                  onClick={() => setMode('email')}
                  className="w-full bg-white/5 border border-white/5 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                >
                  <Mail size={18} /> Sign in with Email
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="email-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <button 
                  onClick={() => setMode('selection')}
                  className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Back</span>
                </button>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="email" 
                        placeholder="tobi@example.com"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-14 pr-6 focus:border-brand-primary-green outline-none transition-all placeholder:text-white/10 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-4">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Password</label>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green hover:text-brand-accent-yellow transition-colors">
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="••••••••"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-14 pr-14 focus:border-brand-primary-green outline-none transition-all placeholder:text-white/10 text-white"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-brand-primary-green text-brand-dark-green py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-brand-accent-yellow transition-all shadow-xl shadow-brand-primary-green/20">
                    Sign In <ArrowRight size={16} />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center mt-8 text-sm text-white/40">
          Don't have an account? <Link to="/signup" className="text-brand-primary-green font-bold hover:underline">Create one</Link>
        </p>
      </div>
    </motion.div>
  );
}

