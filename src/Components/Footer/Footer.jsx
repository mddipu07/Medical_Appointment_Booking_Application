import React from 'react';
import footerLogo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
<footer className="footer sm:footer-horizontal bg-white text-base-content  justify-center p-10'">
  <div className='max-w-screen-xl mx-auto p-8'>
    <div className='flex items-center gap-3 w-5/12 mx-auto'>
        <img src={footerLogo} alt="" />
        <h1 className='text-2xl font-bold '>Phudu</h1>
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
    <hr className='border w-full'/>
<div className='flex justify-center items-center w-3/4 mx-auto gap-8 mt-3'>
<Link to='https://github.com/mddipu07'><FaGithub size={30}/></Link>
<Link to='https://www.facebook.com/dipu.mollah.687352/'><FaFacebook size={30}/></Link>
<Link to=''><FaTwitter size={30} /></Link>
<Link to='https://www.linkedin.com/in/mddipu09'><FaLinkedin size={30} />
</Link>

</div>
</div>


</footer>
    );
};

export default Footer;