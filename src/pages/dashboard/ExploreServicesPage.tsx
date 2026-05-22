import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Sparkles, 
  Shirt, 
  ChefHat, 
  Car, 
  Warehouse, 
  ChevronRight,
  Star,
  ShieldCheck,
  TrendingUp,
  Clock,
  Lock
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 'C1', title: 'Home Care', icon: Sparkles, count: 12, color: 'text-brand-primary-green' },
  { id: 'C2', title: 'Wardrobe', icon: Shirt, count: 8, color: 'text-brand-accent-yellow' },
  { id: 'C3', title: 'Culinary', icon: ChefHat, count: 0, color: 'text-pink-400', comingSoon: true },
  { id: 'C4', title: 'Logistics', icon: Car, count: 0, color: 'text-purple-400', comingSoon: true },
  { id: 'C5', title: 'Warehouse', icon: Warehouse, count: 0, color: 'text-blue-400', comingSoon: true },
];

const FEATURED = [
  {
    id: 'F1',
    title: 'Post-Party Deep Clean',
    category: 'Home Care',
    price: 'From ₦25,000',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    time: '4-6 Hours'
  },
  {
    id: 'F2',
    title: 'Weekly Laundry + Press',
    category: 'Wardrobe',
    price: 'From ₦8,500',
    img: 'https://images.unsplash.com/photo-1545173168-9f1947e8017e?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    time: '24 Hour Return'
  }
];

export default function ExploreServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-24 lg:pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary-green bg-brand-primary-green/10 px-4 py-1.5 rounded-full">Luxe Marketplace</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
             <div className="max-w-2xl">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                  The <span className="italic font-medium text-brand-primary-green">Modern</span> 
                  <br />Concierge.
                </h1>
                <p className="text-xl text-white/30 max-w-lg leading-relaxed">
                  Everything you need to automate your lifestyle, from premium home care to culinary masterpieces.
                </p>
             </div>
             <div className="w-full lg:w-96">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search services..." 
                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-6 pl-16 pr-8 outline-none focus:border-brand-primary-green transition-all"
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Categories Scroller */}
        <div className="mb-20 overflow-x-auto pb-4 scrollbar-hide">
           <div className="flex gap-4 min-w-max">
              {CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-dark p-8 rounded-[2.5rem] border border-white/5 min-w-[200px] flex flex-col items-center gap-6 group transition-all relative overflow-hidden ${cat.comingSoon ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:bg-white/[0.04]'}`}
                >
                  {cat.comingSoon && (
                    <div className="absolute top-4 right-4 text-white/20">
                      <Lock size={12} />
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform duration-500`}>
                     <cat.icon size={28} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">{cat.title}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                      {cat.comingSoon ? 'Launching Soon' : `${cat.count} Services`}
                    </p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Featured Section */}
        <section className="mb-20">
           <div className="flex items-center justify-between mb-10 px-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Featured Collections</h2>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary-green">Explore All Service Tiers <ChevronRight size={14} /></button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURED.map((item, i) => (
                <Link key={item.id} to="/book">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-[450px] rounded-[3.5rem] overflow-hidden cursor-pointer"
                  >
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-black via-brand-deep-black/20 to-transparent" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-10">
                       <div className="flex items-center gap-3 mb-6">
                          <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-primary-green text-brand-dark-green px-3 py-1 rounded-full">{item.category}</span>
                          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent-yellow bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                             <Star size={10} fill="currentColor" /> {item.rating}
                          </span>
                       </div>
                       <h3 className="text-4xl font-bold tracking-tighter mb-4 pr-12 group-hover:text-brand-primary-green transition-colors">{item.title}</h3>
                       <div className="flex items-center gap-8 mb-8">
                          <div className="flex items-center gap-2 text-white/60">
                             <TrendingUp size={16} />
                             <span className="text-xs font-medium">{item.price}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/60">
                             <Clock size={16} />
                             <span className="text-xs font-medium">{item.time}</span>
                          </div>
                       </div>
                       
                       <div className="w-14 h-14 rounded-full bg-white text-brand-dark-green flex items-center justify-center absolute right-10 bottom-10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                          <Plus size={24} />
                       </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
           </div>
        </section>

        {/* Why Excservice */}
        <div className="bg-white/5 border border-white/5 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-primary-green/5 blur-[120px] rounded-full animate-pulse" />
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              <div className="lg:col-span-1">
                 <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">Elite <span className="text-brand-primary-green italic">Standards.</span></h2>
                 <p className="text-white/30 font-medium leading-relaxed">
                    We've curated the top 1% of service professionals in Nigeria to ensure your lifestyle is managed with surgical precision.
                 </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <ShieldCheck className="text-brand-primary-green" size={40} />
                    <h4 className="text-xl font-bold tracking-tight">Fully Insured</h4>
                    <p className="text-sm text-white/20 leading-relaxed">Every booking is protected by our comprehensive lifestyle insurance policy.</p>
                 </div>
                 <div className="space-y-6">
                    <Clock className="text-brand-accent-yellow" size={40} />
                    <h4 className="text-xl font-bold tracking-tight">On-Demand or Scheduled</h4>
                    <p className="text-sm text-white/20 leading-relaxed">Book for "Right Now" or automate your entire month in seconds.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function Plus({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} height={size} 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
  );
}
