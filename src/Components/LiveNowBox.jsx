"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const LiveNowBox = ({item}) => {
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
            <Link href={`/movie/${item.id}`}>
                {
                    item.primaryImage ? <img src={item.primaryImage.url} alt="" className=" w-24 h-28 object-cover mr-5" /> : <img src="/film.jpeg" alt="" className=" w-24 h-24 object-cover mr-5"/> 
                }
            </Link>
            <div className=' w-auto h-full flex flex-col p-2'>
                <div className=' h-[50%]'>
                    <h2 className=' text-white text-[15px] font-light'>{item.titleText.text}</h2>
                    <p className="text-white text-[12px] font-light">{item.releaseYear.year}</p>
                </div>
                <span className='live text-[12px] px-3'>Live Now</span>
            </div>
        </div>
    );
};

export default LiveNowBox;