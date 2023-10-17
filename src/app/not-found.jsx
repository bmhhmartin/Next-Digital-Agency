import React from 'react';

const notFound = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-red-50'>
           <h2 className="text-red-600 text-2xl sm:text-5xl font-bold text-center">Page not Found</h2> 
        </div>
    );
};

export default notFound;