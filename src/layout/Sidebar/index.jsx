import React from 'react';
import { Link, useLocation } from 'react-router';

function Sidebar(props) {
    const location = useLocation();


    const menuItems = [
        {
            title: 'Statistics',
            route: '/dashboard/statistics'
        },
        {
            title: 'Announcements',
            route: '/dashboard/announcements'
        },
    ];

    return (
        <div className='w-[260px] h-[100vh] bg-white'>
            <div className='h-[60px] flex items-center px-6 bg-teal-400'>
                <p className='text-2xl font-bold'>LOGO</p>
            </div>
            <div>
                <div className='flex flex-col gap-4 p-6'>
                    {menuItems.map(item => {
                        const isActive = location.pathname === item.route;

                        return (
                            <Link
                                className={`w-full p-2 block ${isActive ? "bg-teal-100" : null}`}
                                to={item.route}
                                key={item.route}
                            >
                                <span>{item.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;