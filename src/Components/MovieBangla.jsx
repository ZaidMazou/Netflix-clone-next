import React from 'react';
import MovieBox from './MovieBox';
const MovieBangla = () => {
    return (
        <div className='w-[100vw] h-auto overflow-scroll'>
            <div className='w-[170vw] h-[250px] flex flex-row px-[70px] mb-[50px]'>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
            </div>
        </div>
    );
};

export default MovieBangla;