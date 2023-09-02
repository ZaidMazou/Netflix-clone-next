"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const LiveNowBox = () => {
    const live = useRef()
    useEffect(()=>{
        const obv = new IntersectionObserver(h=>{
            if(h[0].isIntersecting){
                live.current.classList.add('active')
            }
        })
        obv.observe(live.current)
    },[])
    return (
        <div className=' w-[300px] h-full flex flex-row mr-10 p-[10px]'id='live' ref={live}>
            <Link href={`/movie/${1}`}><img src="film.jpeg" alt="" srcset="" className=' w-24 h-24 object-cover mr-5'/></Link>
            <div className=' w-auto h-full flex flex-col p-2'>
                <h2 className=' text-white text-[20px] font-light'>Titre</h2>
                <p className='text-white text-[12px] font-light'>Lorem ipsum dolor sit.</p>
                <span className='live text-[12px] px-5'>Live Now</span>
            </div>
        </div>
    );
};

export default LiveNowBox;