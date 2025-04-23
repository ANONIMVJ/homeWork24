import React from 'react';
import LogoutButton from '../../components/LogoutButton';

const Navbar = () => {
    return (
        <div className="w-full h-[60px] bg-white flex items-center justify-between px-4 shadow">
            <h1 className="text-xl font-semibold">Navbar</h1>
            <LogoutButton />
        </div>
    );
};

export default Navbar;
