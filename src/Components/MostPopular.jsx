"use client"
import React, { useEffect, useState } from 'react';
import MostPopularBox from './MostPopularBox';
import axios from 'axios';

const MostPopular = () => {
    const [movies, setmovies] = useState([]);
    const options = {
    method: 'GET',
    params: {
        year: '2022',
        page: '2'
    },
    headers: {
        'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    }
    };

    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles',options)
        .then((res)=>setmovies(res.data.results))
    },[])

    return (
        <div className=' w-[100vw] h-auto overflow-scroll'>
            <div className=' w-[160vw] h-[200px] flex flex-row px-[70px] mb-[50px]'>
                {
                    movies.map((item)=>(
                        <MostPopularBox item={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default MostPopular;