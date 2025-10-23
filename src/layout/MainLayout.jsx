import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
       <div>
      <Navbar />
      <main className="mt-6">
        <Outlet />
      </main>
    </div>
    );
};

export default MainLayout;