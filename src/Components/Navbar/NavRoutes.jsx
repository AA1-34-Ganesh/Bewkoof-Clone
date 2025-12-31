import React from 'react';
import Navbar from './Navbar';
import MainRoutes from '../../Pages/MainRoutes/MainRoutes';
import Footer from '../Footer/Footer';

const NavRoutes = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default NavRoutes;