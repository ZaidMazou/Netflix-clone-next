import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className=' w-full h-auto p-16 flex items-center justify-between border-t-2 border-t-[#4f4e50]'>
            <div className=' w-auto flex items-center justify-between'>
                <div className=' pr-3 border-r-2 border-r-[#4f4e50] m-2'><span className=' text-[17px] text-white'>Feedback</span></div>
                <div className=' pr-3 border-r-2 border-r-[#4f4e50] m-2'><span className=' text-[17px] text-white'>FAQ</span></div>
                <div className=' pr-3'><span className=' text-[17px] text-white'>Help</span></div>
            </div>
            <div className=' w-auto flex flex-col'>
                <h2 className=' text-white text-[30px] mb-10 text-center'>Logo</h2>
                <p className=' text-white text-lg font-extralight m-auto'>2023 All rights reserved</p>
            </div>
            <div className=' w-auto flex flex-row'>
                <Link href={'https://facebook.com'}><img src="/facebook.png" alt="" srcset=""className=' m-1' /></Link>
                <img src="/Group.png" alt="" srcset="" className=' m-1'/>
                <img src="/twitter.png" alt="" srcset=""className=' m-1' />
            </div>
        </div>
    );
};

export default Footer;