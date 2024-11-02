import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className='text-center my-12'>
            <h2 className='text-3xl '>{title}</h2>
            <h2>{subtitle}</h2>
        </div>
    );
};

export default Heading;