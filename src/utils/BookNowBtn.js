import React from 'react';

const BookNowBtn = ({children}) => {
    return (
        <div className='btn  border-0 text-white normal-case text-[20px] bg-gradient-to-r from-[#FA5A00] to-[#FF4004] py-1 px-3 rounded-xl'>
            {children}
        </div>
    );
};

export default BookNowBtn;