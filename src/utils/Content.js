import React from 'react';

const Content = ({children}) => {
    return (
        <div className='text-[#444444] text-[16px] font-[400] leading-[26px]'>
           {children} 
        </div>
    );
};

export default Content;