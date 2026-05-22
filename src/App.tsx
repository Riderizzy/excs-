/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import DashboardNavbar from './components/DashboardNavbar';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubscriptionPage from './pages/SubscriptionPage';
import BusinessPage from './pages/BusinessPage';
import GiftingPage from './pages/GiftingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LoginPage from './pages/LoginPage';
import PartnerPage from './pages/PartnerPage';
import BookingPage from './pages/BookingPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProfilePage from './pages/ProfilePage';
import ActiveBookingPage from './pages/dashboard/ActiveBookingPage';
import WalletPage from './pages/dashboard/WalletPage';
import MembershipPage from './pages/dashboard/MembershipPage';
import SupportPage from './pages/dashboard/SupportPage';
import NotificationsPage from './pages/dashboard/NotificationsPage';
import HistoryPage from './pages/dashboard/HistoryPage';
import ExploreServicesPage from './pages/dashboard/ExploreServicesPage';
import BookingFlow from './pages/dashboard/BookingFlow';
import ServiceTrackingPage from './pages/dashboard/ServiceTrackingPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import ReviewsPage from './pages/dashboard/ReviewsPage';
import RewardsPage from './pages/dashboard/RewardsPage';
import AddressesPage from './pages/dashboard/AddressesPage';
import FavoritesPage from './pages/dashboard/FavoritesPage';
import CalendarPage from './pages/dashboard/CalendarPage';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/gifting" element={<GiftingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/book" element={<BookingFlow />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard/booking/:id" element={<ActiveBookingPage />} />
          <Route path="/dashboard/tracking/:id" element={<ServiceTrackingPage />} />
          <Route path="/dashboard/wallet" element={<WalletPage />} />
          <Route path="/dashboard/membership" element={<MembershipPage />} />
          <Route path="/dashboard/support" element={<SupportPage />} />
          <Route path="/dashboard/notifications" element={<NotificationsPage />} />
          <Route path="/dashboard/history" element={<HistoryPage />} />
          <Route path="/dashboard/rewards" element={<RewardsPage />} />
          <Route path="/dashboard/addresses" element={<AddressesPage />} />
          <Route path="/dashboard/favorites" element={<FavoritesPage />} />
          <Route path="/dashboard/calendar" element={<CalendarPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/dashboard/reviews" element={<ReviewsPage />} />
          <Route path="/services/explore" element={<ExploreServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                      location.pathname === '/profile' || 
                      location.pathname === '/services/explore' || 
                      location.pathname === '/book';

  return (
    <main className="relative min-h-screen bg-brand-dark-green text-white selection:bg-brand-primary-green selection:text-brand-dark-green">
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
      <AppRoutes />
      {isDashboard && <MobileBottomNav />}
      {!isDashboard && <Footer />}
    </main>
  );
}
