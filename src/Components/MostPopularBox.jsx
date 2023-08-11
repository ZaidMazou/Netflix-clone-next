import Link from 'next/link';
import React from 'react';
const MostPopularBox = () => {
    return (
        <div className=' w-[150px] h-full mr-10'>
            <Link href={`/movie/${1}`}><img src="film.jpeg" alt="" srcset="" className='w-full h-full object-cover'/></Link>
            <p className=' text-white text-[17px] relative -top-6 left-3'>Titre</p>
        </div>
    );
};

export default MostPopularBox;