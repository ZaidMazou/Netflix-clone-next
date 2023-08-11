import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    return (
        <div className=' w-full h-[60px] flex p-1 bg-[#0A070B] items-center justify-between fixed top-0 z-10'>
            <div className=' px-[70px]'>
                <span className=' text-3xl font-semibold text-[#ea2f67]'>Screen</span>
            </div>
            <ul className=' w-auto flex items-center justify-between'>
                <li><Link href="/" className=' text-white text-[15px] m-3'>Home</Link></li>
                <li><Link href="/film" className=' text-white text-[15px] m-3'>Movies</Link></li>
                <li><Link href="/drame" className=' text-white text-[15px] m-3'>Drame</Link></li>
                <li><Link href="/musicVideos" className=' text-white text-[15px] m-3'>Music Video</Link></li>
                <li><Link href="/liveShow" className=' text-white text-[15px] m-3'>Live Show</Link></li>
                <li><Link href="/comedie" className=' text-white text-[15px] m-3'>Comedies</Link></li>
            </ul>
            <div className=' w-auto h-full'>
                <form action="" method="get">
                    <input type="text" name="q" id="" placeholder='Search...' className=' py-2 rounded-xl px-3 mt-1 outline-none text-[#ea2f67] bg-gray-950 border-[1px] border-[#eee]'/>
                </form>
            </div>
            <Link href="/login" className=' text-[15px] bg-[#ea2f67] text-white p-[6px] mr-5 rounded-[6px]'>Sign In</Link>
        </div>
    );
};

export default Navbar;