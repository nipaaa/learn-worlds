import React from 'react';

const BookNowBtn = ({children}) => {
    return (
        <div className='btn  border-0 text-white normal-case text-[14px] font-[400] leading-[17px] bg-gradient-to-r from-[#FA5A00] to-[#FF4004] py-[5px] px-[10px] rounded-[5px]'>
            {children}
        </div>
    );
};

export default BookNowBtn;