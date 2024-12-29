import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

function GuestLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default GuestLayout;
