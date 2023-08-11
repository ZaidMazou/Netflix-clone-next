import React from 'react';

const Spacer = ({nom}) => {
    return (
        <div className=' w-full h-auto flex justify-between px-[70px] mb-20'>
            <h2 className=' text-white font-semibold text-[20px]'>{nom}</h2>
            <h4 className=' text-white font-semibold text-[13px]'>See all</h4>
        </div>
    );
};

export default Spacer;