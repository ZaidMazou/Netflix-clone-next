import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default async function page() {
    return(
       <>
            <Navbar/>
            <h1 className=" mt-10">Comédie</h1>
            <Footer/>
       </>
    )
}