import React from 'react';
import bannerImg from '../../assets/banner-img-1.png'
const Banner = () => {
    return (
         <div className='bg-gradient-to-b from-[#FFFFFF] to-white p-1  rounded-xl'>
                 <div className=" bg-[#F4F4F4] rounded-xl  bg-linear-to-t from-[#F3F3F3] via-[#F3F3F370] to-[#F3F3F360] shadow-md ">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold">Dependable Care, Backed by Trusted<br/> Professionals.</h1>
      <p className="py-6">
       Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a<br/> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      
     <form>
         <input className='px-3 lg:px-32 p-2 rounded-full focus:outline-none bg-white mr-3 ' type="text" placeholder='Search any Doctor...' />
        <button className='bg-[#176AE5] text-white px-8 rounded-full p-2'>Search Now</button>
     
     </form>
      {/* banner-Image */}
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-3 gap-4'>
        <img src={bannerImg} alt="" />
        <img src={bannerImg} alt="" />
        
      </div>
    </div>
  </div>
</div>
         </div>
    );
};

export default Banner;