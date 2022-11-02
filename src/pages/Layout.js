import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => (
    <div id="layout" className='bg-primary text-white h-screen px-3'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );

export default Layout;
