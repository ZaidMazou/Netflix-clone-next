import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';


export default async function page({params}) {
    return (
        <>
            <Navbar/>
                <div className=' w-[100vw] h-[100vh] px-[70px] mt-[30px] flex flex-row mb-[100px] justify-between'>
                    <div className=' w-[70%] h-full flex flex-col p-10 mt-20 items-start'>
                        <img src="/film.jpeg" alt="" srcset="" className='w-[90%] h-[75vh] object-cover'/>
                        <h2 className=' text-white text-3xl mt-20 mb-20'>Description</h2>
                        <p className='text-white text-xl font-light mb-20 text-start'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, et.
                        </p>
                    </div>
                    <div className=' w-[30%] h-[90vh] flex flex-wrap items-center justify-center'>
                        {/* <Link href={`/movie/${1}`}><img src="/film.jpeg" alt="" srcset="" className=' w-[40%] h-[150px] object-cover m-1'/></Link>
                        <Link href={`/movie/${1}`}><img src="/film.jpeg" alt="" srcset="" className=' w-[40%] h-[150px] object-cover m-1'/></Link>
                        <Link href={`/movie/${1}`}><img src="/film.jpeg" alt="" srcset="" className=' w-[40%] h-[150px] object-cover m-1'/></Link>
                        <Link href={`/movie/${1}`}><img src="/film.jpeg" alt="" srcset="" className=' w-[40%] h-[150px] object-cover m-1'/></Link>
                        <Link href={`/movie/${1}`}><img src="/film.jpeg" alt="" srcset="" className=' w-[40%] h-[150px] object-cover m-1'/></Link>
                        <Link href={`/movie/${1}`}><img src="/film.jpeg" alt="" srcset="" className=' w-[40%] h-[150px] object-cover m-1'/></Link> */}
                    </div>
                </div>
            <Footer/> 
        </>
    );
}