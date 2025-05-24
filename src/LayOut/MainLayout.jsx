import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Share/Navbar';
import Footer from '../pages/Share/footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;