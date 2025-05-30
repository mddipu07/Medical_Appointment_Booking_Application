
import { useEffect, useState } from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const DoctorsContainer = ({Doctors}) => {
    const [displayDoctors , setDisplayDoctors] = useState([]);
    const [showAll , setShowAll] = useState(false)
    useEffect(() => {
        if(showAll){
            setDisplayDoctors(Doctors)
        }
        else{
            setDisplayDoctors(Doctors.slice(0, 6))
        }
    },[Doctors , showAll])
    return (
        <div className='mt-10'>
            <h1 className='font-bold text-center text-3xl lg:text-5xl'>Our Best Doctors</h1>
            <p className='text-center px-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a<br/> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 lg:gap-5 max-w-screen-xl mx-auto py-5 justify-center items-center '>

               {
                displayDoctors.map(doctor => <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>)
               }

            </div>
            <div className='flex justify-center items-center py-5'>
                <button  onClick={() =>{
                    setShowAll(prev => !prev)
                    if(showAll) window.scrollTo(0 , 400)
                }}   className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                 {showAll ? 'Show less Doctos' : 'Show All Doctors'}
            </button>
            </div>
        </div>
    );
};

export default DoctorsContainer;