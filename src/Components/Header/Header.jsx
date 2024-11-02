import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='h-16'>
            <div class="navbar bg-white/30 backdrop-blur-xl z-50 fixed">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/coffees'>Coffees</NavLink>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className='text-xl font-bold'>Coffee Book</Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 gap-12 font-bold text-xl">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/coffees'>Coffees</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;