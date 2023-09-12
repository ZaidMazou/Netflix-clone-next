"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';


const MostPopularBox = ({item}) => {
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
            <Link href={`/movie/${item.id}`}>
                {
                    item.primaryImage ?
                    <img src={item.primaryImage.url} alt=""className='w-full h-full object-cover'/>
                    :
                    <img src="film.jpeg" alt=""className='w-full h-full object-cover'/>
                }
            </Link>
            <p className=' text-white text-[17px] relative -top-6 left-3'>{item.titleText.text}</p>
        </div>
    );
};

export default MostPopularBox;