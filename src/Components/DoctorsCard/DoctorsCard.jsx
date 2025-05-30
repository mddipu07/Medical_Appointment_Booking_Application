import React from 'react';
import { Link } from 'react-router';
import { FaRegRegistered } from "react-icons/fa6";

const DoctorsCard = ({doctor}) => {
    
    const {name,education,image,registrationNumber,experience,id} = doctor || {}
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-90 h-80 p-4 object-cover rounded-4xl mt-5 mx-auto'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-5'>
      <h2 className='bg-[#E7F5EB] border rounded-2xl p-2 text-green-500 font-bold'>Avaliable</h2>
      <h2 className='border rounded-2xl p-2 bg-[#E8F1FD] border-sky-500 font-bold text-sky-500'>{experience}</h2>
    </div>
    <h2 className="text-2xl font-bold">{name}</h2>
    <h2 className='text-xl text-gray-500'>{education}</h2>
    <hr className='border-dashed border-gray-400 w-full ' />
   <h2 className='flex  gap-3 text-lg text-gray-500'>
     <span> <FaRegRegistered/></span>
     <span>Reg NO : {registrationNumber}</span>
   </h2>
    <div className="flex justify-center items-center">
      <Link to={`/doctorsdetails/${id}`}><button class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 ">
    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span class="absolute right-0 flex items-center justify-start w-11 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative">View Details</span>
</button></Link>
    </div>
  </div>
</div>
    );
};

export default DoctorsCard;