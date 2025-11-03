import React from 'react';
import AuthNav from '../Components/Navbar/AuthNav';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <AuthNav />
            <Outlet />
        </div>
    );
};

export default AuthLayout;