import React from 'react';
import LiveNowBox from './LiveNowBox';

const LiveNow = () => {
    return (
        <div className=' w-[100vw] h-auto overflow-scroll'>
            <div className=' w-[150vw] h-[200px] flex flex-row px-[70px] mb-[50px]'>
                <LiveNowBox/>
                <LiveNowBox/>
                <LiveNowBox/>
                <LiveNowBox/>
                <LiveNowBox/>
                <LiveNowBox/>
            </div>
        </div>
    );
};

export default LiveNow;