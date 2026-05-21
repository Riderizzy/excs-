/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
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
          <Route path="/book" element={<BookingPage />} />
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
      <main className="relative min-h-screen bg-brand-dark-green text-white selection:bg-brand-primary-green selection:text-brand-dark-green">
        <Navbar />
        <AppRoutes />
        <Footer />
      </main>
    </Router>
  );
}
