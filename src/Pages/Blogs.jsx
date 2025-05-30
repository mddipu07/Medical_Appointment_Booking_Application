import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
    const questionData = useLoaderData()
    console.log(questionData);
    return (

        
        <div>
            {
               questionData.map(questionData => <Blog question={questionData}></Blog>)
            }
        </div>
      
    );
};

export default Blogs;