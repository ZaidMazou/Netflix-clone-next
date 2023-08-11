import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar/>
            <div className=' w-[100vw] h-[90vh] flex items-center justify-center p-[10px]'>
                <div className=' w-1/3 h-auto'>
                    <div className=' w-full h-auto flex flex-col p-3'>
                        <label htmlFor="email" className=' text-[22px] text-[#ea2f67] font-light] mb-3'>Email</label>
                        <input type="email" name="email" id="email" className=' p-3 bg-black text-[#fff] border-[1px] text-[18px] border-[#ea2f67] rounded-lg outline-none'/>
                    </div>
                    <div className=' w-full h-auto flex flex-col p-3'>
                        <label htmlFor="password" className=' text-[22px] text-[#ea2f67] font-light] mb-3'>Mot de passe</label>
                        <input type="password" name="password" id="password" className=' p-3 bg-black text-[#fff] border-[1px] text-[18px] border-[#ea2f67] rounded-lg outline-none'/>
                    </div>
                    <div className=' w-auto h-auto p-3'>
                        <button type="submit" className=' text-white text-lg p-2 bg-[#ea2f67] rounded-md hover:bg-red-500'>Connexion</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default page;