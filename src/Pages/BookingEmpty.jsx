import React from 'react';
import { Link } from 'react-router';
import { Line } from 'recharts';

const BookingEmpty = () => {
    return (
        <div  className='text-center '>
            <h1 className='text-4xl font-bold mb-2'>You Have not Booked any appointment yet</h1>
            <p className='text-gray-500'>Our platform connects you with verified,experience doctors across various speciailites-all at your convenience</p>
            <Link to='/'>
             <button className='btn rounded-xl mt-3 bg-[#176AE5] text-white'>Book an Appointment</button>
            </Link>
        </div>
    );
};

export default BookingEmpty;