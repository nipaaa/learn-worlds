import React from 'react';

const BlueBtn = ({children}) => {
    return (
        <div className="btn border-0 text-white normal-case text-[20px] bg-[#0A0762] py-2 px-5 rounded-xl">
        {children}
    </div>
    );
};

export default BlueBtn;