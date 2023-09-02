"use client"
import React, { useEffect, useRef } from 'react';

const Header = () => {
    const header = useRef()
    useEffect(()=>{
        const obv = new IntersectionObserver(h=>{
            if(h[0].isIntersecting){
                header.current.classList.add('active')
            }
        })
        obv.observe(header.current)
    },[])
    return (
        <div className=' w-[100vw] h-[85vh] mt-[50px] flex items-center justify-between px-[70px] bg-100 mb-[50px]'>
            <div className=' w-1/2 h-auto flex flex-col items-start' id='header' ref={header}>
                <h4 className=' text-white text-[25px] mb-8'>Welcome to BD screen</h4>
                <p className=' text-white text-[38px] text-start font-semibold mb-8'>
                    Download Unlimited Movies,Drama,Music Video and More Content.
                </p>
                <p className=' text-white text-[15px] text-start mb-4'>
                    Enjoy exclusive Music Video popular movies and lives shows.
                </p>
                <h6 className=' text-white text-[13px] mb-3'>Subcribe BD Screen now</h6>
                <div className=' w-auto flex'>
                    <div className=" w-[320px]">
                        <input type="text" name="" id="number" placeholder="+880" className=' w-[80px] p-3 text-gray-800 border-r-2 border-r-[#ea2f67]'/>
                        <input type="text" name="" id="number-writte" placeholder="Enter mobil number" className=' w-[240px] p-3 text-gray-700 outline-none'/>
                    </div>
                    <button type="submit" className=' text-white p-3 bg-[#ea2f67]'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Header;