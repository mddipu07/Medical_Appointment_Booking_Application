import React from 'react';

const Blog = ({question}) => {
    
      const {title , date , content} =  question || {}
    return (
        
        <div className='bg-white w-8/12 mx-auto p-8 rounded-2xl mt-3'>
            <hr className='border-dashed'/>
            <h1 className='mb-2'><span className='font-semibold text-xl'> Question: </span>{title}</h1>
            <p className='mt-2'><span className='font-semibold text-xl'> Answer :</span> {content}</p>
            <h2><span className='font-semibold text-xl'>Date :</span> {date}</h2>
            <hr className='border-dashed'/>
        </div>
    );
};

export default Blog;