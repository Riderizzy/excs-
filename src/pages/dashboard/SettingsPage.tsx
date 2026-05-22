import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  User, 
  Shield, 
  Bell, 
  Smartphone, 
  Globe, 
  Trash2, 
  Database, 
  Key,
  ChevronRight,
  Eye,
  LogOut,
  Moon,
  Zap,
  CreditCard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SettingsPage() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Personalization',
      items: [
        { id: '1', label: 'Account Profile', desc: 'Manage your global identity & identity verification', icon: User, color: 'text-blue-400' },
        { id: '2', label: 'Preferred Style', desc: 'Notification preferences & display mechanics', icon: Moon, color: 'text-purple-400' },
      ]
    },
    {
      title: 'Trust & Safety',
      items: [
        { id: '3', label: 'Security & Auth', desc: 'Two-factor authentication & hardware keys', icon: Key, color: 'text-brand-primary-green' },
        { id: '4', label: 'Privacy & Data', desc: 'Manage your data footprint and exports', icon: Shield, color: 'text-brand-accent-yellow' },
      ]
    },
    {
      title: 'Infrastructure',
      items: [
        { id: '5', label: 'Payments', desc: 'Connected cards and billing history', icon: CreditCard, color: 'text-cyan-400' },
        { id: '6', label: 'Connected Apps', desc: 'Manage 3rd party ecosystem access', icon: Zap, color: 'text-orange-400' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark-green text-white pt-24 lg:pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all hover:bg-white/10"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
            <p className="text-sm text-white/30 font-medium">Fine-tune your Executive experience.</p>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 ml-6 mb-6">{section.title}</h2>
              <div className="glass-dark border border-white/5 rounded-[2.5rem] overflow-hidden">
                {section.items.map((item, i) => (
                  <button 
                    key={item.id}
                    className={`w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.04] transition-all group ${i !== section.items.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold tracking-tight text-lg">{item.label}</h3>
                        <p className="text-sm text-white/30">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-white/5 group-hover:text-brand-primary-green group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <div className="flex flex-col gap-4">
              <button className="w-full p-8 rounded-[2.5rem] bg-white/5 border border-white/5 flex items-center justify-center gap-4 text-white/40 hover:text-white hover:bg-white/10 transition-all font-bold uppercase tracking-widest text-[10px]">
                <LogOut size={16} /> Sign Out of All Devices
              </button>
              <button className="w-full p-8 rounded-[2.5rem] bg-red-500/5 border border-red-500/10 flex items-center justify-center gap-4 text-red-500/40 hover:text-red-500 hover:bg-red-500/10 transition-all font-bold uppercase tracking-widest text-[10px]">
                <Trash2 size={16} /> Request Account Deletion
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/10 italic">Revision 2026.04.14</span>
               <div className="w-1 h-1 bg-white/10 rounded-full" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/10">v4.8.2-stable</span>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/5">Excservice Global Ecosystems • London • Lagos • Dubai</p>
        </div>
      </div>
    </div>
  );
}
