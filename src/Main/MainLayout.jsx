import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#EFEFEF]'>
           <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
           </div>
           <Outlet></Outlet>
          <div className='pt-24'>
             <Footer></Footer>
          </div>
        </div>
    );
};

export default MainLayout;