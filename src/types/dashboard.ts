import { LucideIcon } from 'lucide-react';

export type ServiceStatus = 'Pending' | 'Confirmed' | 'In Progress' | 'Processing' | 'Completed' | 'Cancelled';

export interface Booking {
  id: string;
  service: string;
  category: 'cleaning' | 'laundry' | 'chef';
  status: ServiceStatus;
  date: string;
  time: string;
  amount: string;
  pro?: {
    name: string;
    avatar?: string;
    rating: number;
    phone: string;
  };
  address: {
    label: string;
    description: string;
  };
}

export interface UserStats {
  timeSaved: number;
  savings: number;
  bookingsCount: number;
  reliability: number;
}
