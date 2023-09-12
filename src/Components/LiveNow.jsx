'use client'
import React, { useEffect, useState } from 'react';
import LiveNowBox from './LiveNowBox';
import axios from 'axios';

const LiveNow = () => {

    const [state, setstate] = useState([]);
    const options = {
    method: 'GET',
    params: {year: '2023'},
    headers: {
        'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    }
    };

    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles',options)
        .then((res)=>setstate(res.data.results))
    },[])

    
    return (
        <div className=' w-[100vw] h-auto overflow-scroll'>
            <div className=' w-[265vw] h-[200px] flex flex-row px-[70px] mb-[50px]'>
               {
                    state.map((item)=>(<LiveNowBox item={item} key={item.id}/> )) 
               } 
            </div>
        </div>
    );
};

export default LiveNow;