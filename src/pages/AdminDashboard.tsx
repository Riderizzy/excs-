import { motion } from 'motion/react';
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  MoreHorizontal, 
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  LayoutDashboard,
  ShieldCheck,
  Calendar
} from 'lucide-react';

const RECENT_ORDERS = [
  { id: 'ORD-001', customer: 'Lola Okunola', service: 'Cleaning', amount: '₦15,000', status: 'Completed', date: '2 mins ago' },
  { id: 'ORD-002', customer: 'Femi Johnson', service: 'Laundry', amount: '₦8,500', status: 'Pending', date: '15 mins ago' },
  { id: 'ORD-003', customer: 'Sarah Chidi', service: 'Cleaning', amount: '₦22,000', status: 'Processing', date: '45 mins ago' },
  { id: 'ORD-004', customer: 'Bose Ade', service: 'Laundry', amount: '₦12,000', status: 'Completed', date: '1 hour ago' },
];

const STATS = [
  { label: 'Total Revenue', value: '₦2.4M', trend: '+12%', icon: TrendingUp, color: 'text-brand-primary-green' },
  { label: 'Active Tasks', value: '142', trend: '+5%', icon: ShoppingBag, color: 'text-brand-accent-yellow' },
  { label: 'Total Pros', value: '86', trend: '0%', icon: Users, color: 'text-white' },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-brand-deep-black text-white pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Admin Header - Simplified for platform integration */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="text-brand-primary-green" size={24} />
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-tighter">Command Center.</h1>
              <p className="text-white/40">Platform overview and management.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-white/60 hover:text-white">
              <Filter size={16} /> Filter Results
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem]">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={22} />
                </div>
                <span className="text-[10px] font-bold text-brand-primary-green bg-brand-primary-green/10 px-2 py-1 rounded-full">{stat.trend}</span>
              </div>
              <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
              <p className="text-4xl font-bold tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders Table */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white/40">Recent Activity</h2>
                <button className="text-[10px] font-bold uppercase tracking-widest text-brand-primary-green">Real-time Logs</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 border-b border-white/5">
                      <th className="text-left px-8 py-6">Order ID</th>
                      <th className="text-left px-8 py-6">Customer</th>
                      <th className="text-left px-8 py-6">Status</th>
                      <th className="text-left px-8 py-6">Amount</th>
                      <th className="text-right px-8 py-6">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_ORDERS.map((order) => (
                      <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-0">
                        <td className="px-8 py-6 font-mono text-xs text-white/40">{order.id}</td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold">
                              {order.customer.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-bold text-sm">{order.customer}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                            {order.status === 'Completed' && <CheckCircle2 size={14} className="text-brand-primary-green" />}
                            {order.status === 'Pending' && <Clock size={14} className="text-brand-accent-yellow" />}
                            {order.status === 'Processing' && <AlertCircle size={14} className="text-white/40" />}
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${
                              order.status === 'Completed' ? 'text-brand-primary-green' : 
                              order.status === 'Pending' ? 'text-brand-accent-yellow' : 
                              'text-white/40'
                            }`}>{order.status}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-sm font-bold">{order.amount}</td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-2 bg-white/5 rounded-lg hover:text-brand-primary-green transition-colors">
                            <MoreHorizontal size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions & System Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem]">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8 text-center">Admin Controls</h2>
              <div className="grid gap-4">
                <button className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-brand-primary-green hover:text-brand-dark-green transition-all group">
                  <LayoutDashboard size={20} className="text-brand-primary-green group-hover:text-brand-dark-green" />
                  <span className="font-bold text-xs uppercase tracking-widest">Update Services</span>
                </button>
                <button className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-brand-primary-green hover:text-brand-dark-green transition-all group">
                  <Users size={20} className="text-brand-primary-green group-hover:text-brand-dark-green" />
                  <span className="font-bold text-xs uppercase tracking-widest">Manage Pros</span>
                </button>
                <button className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-brand-primary-green hover:text-brand-dark-green transition-all group">
                  <Calendar size={20} className="text-brand-primary-green group-hover:text-brand-dark-green" />
                  <span className="font-bold text-xs uppercase tracking-widest">Global Schedule</span>
                </button>
              </div>
            </div>

            <div className="bg-brand-accent-yellow p-8 rounded-[2.5rem] text-brand-dark-green">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-bold uppercase tracking-widest">System Health</p>
                <div className="w-2 h-2 bg-brand-dark-green rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold tracking-tighter mb-4">99.9% Uptime</h3>
              <p className="text-sm leading-relaxed opacity-60">All backend systems are operating within normal parameters across all nodes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
