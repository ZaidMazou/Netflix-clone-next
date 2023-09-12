"use client"
import React, { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import axios from 'axios';

const Movie = () => {
    const [moviesbox, setmoviesbox] = useState([]);
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
        .then((res) => {
            setmoviesbox(res.data.results);
        })
        .catch((error) => {
            console.error('Error fetching movies:', error);
        });
    },[])
    console.log( moviesbox );
    return (
        <div className='w-[100vw] h-auto overflow-scroll'>
            <div className='w-[200vw] h-[250px] flex flex-row px-[70px] mb-[50px]'>
                {
                   moviesbox && moviesbox.map((element) =>(
                    <MovieBox element={element} key={element.id}/>
                   ))
                }
            </div>
        </div>
    );
};

export default Movie;