import React from 'react';

const GradientBtn = ({children}) => {
    return (
        <div className="btn border-0 text-white bg-gradient-to-r from-[#FF047D] to-[#FF8804] py-2 px-5 rounded-xl">
            {children}
        </div>
    );
};

export default GradientBtn;