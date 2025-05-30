import React from 'react';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import DoctorsContainer from '../Components/DoctorsContainer/DoctorsContainer';
import Counter from '../Components/Counter/Counter';
import Blogs from './Blogs';

const Home = () => {
    const Doctors = useLoaderData()
   
    return (

        <div>
               <div className='max-w-screen-xl mx-auto mt-3'>
                 <Banner></Banner>
               </div>
            <DoctorsContainer Doctors={Doctors}></DoctorsContainer>
               <div className='w-8/12 mx-auto'>
                <h1 className='font-bold text-5xl text-center py-5'>We Provide Best Medical Services</h1>
                <p className='text-center py-5 text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                 <Counter></Counter>
               </div>
        </div>
    );
};

export default Home;