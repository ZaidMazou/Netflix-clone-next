"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
const MostPopularBox = () => {
    const most = useRef()
    useEffect(()=>{
        const obv = new IntersectionObserver(h=>{
            if(h[0].isIntersecting){
                most.current.classList.add('active')
            }
        })
        obv.observe(most.current)
    },[])
    return (
        <div className=' w-[150px] h-full mr-10' id='most' ref={most}>
            <Link href={`/movie/${1}`}><img src="film.jpeg" alt="" srcset="" className='w-full h-full object-cover'/></Link>
            <p className=' text-white text-[17px] relative -top-6 left-3'>Titre</p>
        </div>
    );
};

export default MostPopularBox;