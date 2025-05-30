import React, { useContext } from 'react';
import { AppointmentContext } from '../Providers/ContextApi';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';
import BookingEmpty from './BookingEmpty';


const Booking = () => {
    

    const {appointments , setAppointments} = useContext(AppointmentContext)
    console.log(appointments);
 const handleCancle = (id) => {
       const remainingData = appointments.filter(appointment => appointment.id != id)
       setAppointments(remainingData)
 }
    if(appointments.length <= 0) return <BookingEmpty></BookingEmpty>
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
            <BarChart
      width={1300}
      height={300}
      data={appointments}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey='consultationFee' fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {appointments.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center'>My Today Appointments</h1>
              <p className='text-gray-500 text-center mb-4 mt-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='flex flex-col gap-10'>
               {
               appointments.map(appointment =>   <div className='bg-white text-black p-4 rounded-xl mb-4' key={appointment.id}>
                
                <div className='flex justify-around p-7'>
                  <h1 className='text-xl font-semibold'>{appointment.name}</h1>
                    <p>{appointment.speciality}</p>
                    <p>Appointment Fee : {appointment.consultationFee}</p>
                </div>
                <button className='w-full border-red-600 btn rounded-2xl mt-2' onClick={() => handleCancle(appointment.id)}>Cancel Appointment</button>
               </div>)
               }
            </div>
        </div>
    );
};

export default Booking;