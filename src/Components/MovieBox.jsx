"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const MovieBox = () => {
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
        <div className=' w-[450px] h-full mr-3' id='live' ref={live}>
            <Link href={`/movie/${3}`}><img src="film.jpeg" alt="" srcset="" className=' w-full h-full object-cover'/></Link>
            <p className='text-white text-[17px] relative -top-6 left-3'>Titre</p>
        </div>
    );
};

export default MovieBox;