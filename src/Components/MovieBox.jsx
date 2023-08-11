import Link from 'next/link';
import React from 'react';

const MovieBox = () => {
    return (
        <div className=' w-[450px] h-full mr-3'>
            <Link href={`/movie/${3}`}><img src="film.jpeg" alt="" srcset="" className=' w-full h-full object-cover'/></Link>
            <p className='text-white text-[17px] relative -top-6 left-3'>Titre</p>
        </div>
    );
};

export default MovieBox;