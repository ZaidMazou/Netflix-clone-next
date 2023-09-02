import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default async function page() {
    return(
       <>
            <Navbar/>
                <section className=" w-[100vw] h-auto p-3 flex flex-wrap mt-[100px] mb-[100px]">
                    <div className=" w-[33%] h-[350px] rounded-[15px] m-0.5">
                        <div className=" w-full h-full">
                            <img src="film.jpeg" alt="" srcset="" className=" rounded-md" />
                        </div>
                    </div>
                    <div className=" w-[33%] h-[350px] rounded-[15px] m-0.5">
                        <div className=" w-full h-full">
                            <img src="film.jpeg" alt="" srcset="" className=" rounded-md" />
                        </div>
                    </div>
                    <div className=" w-[33%] h-[350px] rounded-[15px] m-0.5">
                        <div className=" w-full h-full">
                            <img src="film.jpeg" alt="" srcset="" className=" rounded-md" />
                        </div>
                    </div>
                </section>
            <Footer/>
       </>
    )
}