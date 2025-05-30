import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaRegRegistered } from "react-icons/fa6";
import { BsInfo } from 'react-icons/bs';
import { AppointmentContext } from '../Providers/ContextApi';
const DoctorsDetails = () => {
    const LoadDoctors = useLoaderData()

    const {handleAppointMent} = useContext(AppointmentContext)
    const {id} = useParams()
    const [singleDoctors , setSingleDoctors] = useState({})
    // const singleDoctor = LoadDoctors.find(Doctor => Doctor.id === parseInt(id))
    useEffect(() =>{
        const remainingDoctors = LoadDoctors.find(doctor => doctor.id == id)
        setSingleDoctors(remainingDoctors)
    },[LoadDoctors , id])
      
    const {name,education,image,registrationNumber,workingOn,available,consultationFee} = singleDoctors || {}
   
    

    return (
      <>
        <div>
          <div className='text-center bg-white max-w-screen-xl mx-auto p-4 mb-5 rounded-2xl'>
            <h1 className='text-2xl font-bold'>Doctor’s Profile Details</h1>
            <p className='text-gray-500 mt-2 mb-2'>typically provides patients with basic information about a physician, including their<br/> specialties, experience, and educational background, to help them choose a doctor that suits their needs.</p>
          </div>
          <div className='bg-white p-10 max-w-screen-xl mx-auto rounded-2xl'>
          <div className='flex  gap-8'>
           <div>
             <img className='w-89 rounded-2xl' src={image} alt="" />
           </div>
           <div>
             <h1 className='font-bold text-2xl'>Name:{name}</h1>
             <h1 className='text-xl text-gray-500'>{education}</h1>
             <h1><span className='text-xl text-gray-400'>Working at </span>:<br/> <span className='text-xl font-bold'>{workingOn}</span></h1>
               <hr className='border-dashed border-gray-400 w-full mt-3 ' />
             <h2 className='flex items-center gap-3 text-lg text-gray-500'>
                 <span> <FaRegRegistered/></span>
                 <span>Reg NO : {registrationNumber}</span>
               </h2>
                 <hr className='border-dashed border-gray-400 w-full mb-3 ' />
                <h1 className='text-lg font-bold mt-3'>Availablity : {available}</h1>
                <h1><span className='text-lg font-bold'>Consultation Fee: </span><span className='text-lg '>{consultationFee}</span></h1>
           </div>
          </div>
        </div>
        <div>
           <div className="max-w-screen-xl mt-4 mx-auto p-6 bg-white rounded-2xl">
      <h2 className="text-xl font-semibold text-center mb-4">Book an Appointment</h2>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-700">Availability</span>
        <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full font-medium">
          Doctor Available Today
        </span>
      </div>

      <div className="flex items-start bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-md p-3 mb-6">
        <BsInfo className="mt-0.5 mr-2" />
        <p>
          Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
        </p>
      </div>

    <Link to='/booking'>
      <button onClick={() => handleAppointMent(singleDoctors)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition duration-200"
      >
        Book Appointment Now
      </button>
    </Link>
    </div>
        </div>
        </div>
      </>
    );
};

export default DoctorsDetails;