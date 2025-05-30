import React, { useState } from 'react';
import { AppointmentContext } from './ContextApi';
import toast from 'react-hot-toast';



const ContextProvider = ({children}) => {
    const [appointments, setAppointments] = useState([])
    const handleAppointMent = (doctor) => {
        const alreadyHave  = appointments.find(appointment => appointment.id == doctor.id)
        if(alreadyHave) return toast.error("This Data Already Have")
         setAppointments([...appointments,doctor])
        toast.success('Successfully Added')

   }
   

   const ContextInfo = {
    handleAppointMent,
    setAppointments,
    appointments
   }
    return (
        <div>
            <AppointmentContext.Provider value={ContextInfo}>
                {children}
            </AppointmentContext.Provider>
        </div>
    );
};

export default ContextProvider;