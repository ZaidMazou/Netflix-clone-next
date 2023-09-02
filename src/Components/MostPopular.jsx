import React from 'react';
import MostPopularBox from './MostPopularBox';

const MostPopular = () => {
    

    return (
        <div className=' w-[100vw] h-auto overflow-scroll'>
            <div className=' w-[150vw] h-[200px] flex flex-row px-[70px] mb-[50px]'>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
            <MostPopularBox/>
        </div>
        </div>
    );
};

export default MostPopular;