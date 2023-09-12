"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const MovieBox = ({ element }) => {
    const live = useRef()
    useEffect(()=>{
        const obv = new IntersectionObserver(h=>{
            if(h[0].isIntersecting){
                live.current.classList.add('active')
            }
        })
        obv.observe(live.current)
    },[])
    console.log(element);
    return (
        <div className=' w-[450px] h-full mr-3' id='live' ref={live}>
            <Link href={`/movie/${element.id}`}>
                {
                    item.primaryImage ? 
                    <img src={item.primaryImage.url} alt="" className=" w-full h-full object-cover"/>
                    :
                    <img src="film.jpeg" alt="" className=" w-full h-full object-cover"/>
                }
            </Link>
            <p className='text-white text-[17px] relative -top-6 left-3'>{item.titleText.text}</p>
        </div>
    );
};

export default MovieBox;