import React from 'react';

const ReusableTitle = ({ title, subtitle }) => {
    return (
        <div className='text-center my-10'>
            <h1 className='text-4xl mb-3'>{title}</h1>
            <p className='text-gray-500'>{subtitle}</p>
        </div>
    );
};

export default ReusableTitle;