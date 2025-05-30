import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink  to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink  to='/booking'>My-Bookings</NavLink>
        </li>
        <li>
        <NavLink to='/blogs'>Blogs</NavLink>
        </li>
        <li>
        <NavLink to='/contactus'>Contact Us</NavLink>
        </li>
        
      </ul>
    </div>
     {/* logo */}
    <div className='flex justify-center items-center gap-3'>
      <img className='w-10' src={logo} alt="" />
      <h1 className='text-[#0F0F0F] font-bold text-2xl'>Phudu</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li>
        <NavLink className={({isActive}) => isActive ? 'border-b-2' : ''} to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink className={({isActive}) => isActive ? 'border-b-2' : ''} to='/booking'>My-Bookings</NavLink>
        </li>
        <li>
        <NavLink className={({isActive}) => isActive ? 'border-b-2' : ''} to='/blogs'>Blogs</NavLink>
        </li>
        <li>
        <NavLink className={({isActive}) => isActive ? 'border-b-2' : ''} to='/contactus'>Contact Us</NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn  bg-[#176AE5] rounded-full text-white font-bold 
">Emergency</a>
  </div>
</div>
    );
};

export default Navbar;