import React from 'react';
import { NavLink } from 'react-router';

const AuthNav = () => {
    const navLink = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
    </>
    return (
       <div>
        <div className='flex justify-center py-4 gap-5'>
            {navLink}
        </div>
       </div>
    );
};

export default AuthNav;