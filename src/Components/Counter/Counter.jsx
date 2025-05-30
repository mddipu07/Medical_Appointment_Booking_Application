import React from 'react';
import CountUp from 'react-countup';
import counterImg from '../../assets/success-doctor.png'
import counterImg2 from '../../assets/success-patients.png'
import counterImg3 from '../../assets/success-review.png'
import counterImg4 from '../../assets/success-staffs.png'
const Counter = () => {
    return (

      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 '>
          <div className='bg-white p-9 rounded-xl text-center font-bold'>
            <img className='w-10'  src={counterImg} alt="" />
            <CountUp className='text-4xl font-extrabold' end={199} suffix='+' >
                
            </CountUp>
            <h1 className='text-gray-500'>Total Doctors</h1>
        </div>
          <div className='bg-white p-9 rounded-xl text-center  font-bold'>
            <img className='w-10' src={counterImg2} alt="" />
            <CountUp className='text-4xl font-extrabold' end={467} suffix="+" >
            
            </CountUp>
            <h1 className='text-gray-500'>Total Reviews</h1>
        </div>
          <div className='bg-white p-9 rounded-xl text-center font-bold '>
            <img className='w-10' src={counterImg3} alt="" />

            <CountUp className='text-4xl font-extrabold' end={1900} suffix='+' >
                
            </CountUp>
            <h1 className='text-gray-500'>Patients</h1>
        </div>
          <div className='bg-white p-9 rounded-xl text-center  font-bold '>
            <img className='w-10' src={counterImg4} alt="" />

            <CountUp className='text-4xl font-extrabold' end={300} suffix='+' >
                
            </CountUp>
            <h1 className='text-gray-400'>Total Stuff</h1>
        </div>
      </div>
    );
};

export default Counter;