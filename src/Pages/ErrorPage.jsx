import React from 'react';
import errorImg from '../assets/error.jpg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
     <>
        <div className='flex justify-center items-center shadow-md rounded-2xl w-3/12 mx-auto mt-55'>
           <img src={errorImg} alt="" />
        </div>
        <div className='text-center'>
            <h1 className='text-red-600 text-5xl mt-3'>404 Page Not Found</h1>
            <h1>Oops! the page you're looking doesn't exist</h1>
            <Link to='/'>  
            <button className='btn rounded-xl mt-3 bg-[#176AE5] text-white'>Go Back Home</button>
            </Link>
        </div>
     </>
        
    );
};

export default ErrorPage;