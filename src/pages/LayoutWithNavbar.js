// src/components/LayoutWithNavbar.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWithNavbar = () => {
    return (
        <div>
            <Navbar/>
            <div className="mt-16"> {/* Add margin-top to avoid content being hidden behind the fixed navbar */}
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default LayoutWithNavbar;
