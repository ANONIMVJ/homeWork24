import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

function MainLayout() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
