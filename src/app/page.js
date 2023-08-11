import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import LiveNow from "@/Components/LiveNow";
import MostPopular from "@/Components/MostPopular";
import Movie from "@/Components/Movie";
import MovieBangla from "@/Components/MovieBangla";
import Navbar from "@/Components/Navbar";
import Spacer from "@/Components/Spacer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Spacer nom ={'Live Now'}/>
      <LiveNow/>
      <Spacer nom={'Most Popular'}/>
      <MostPopular/>
      <Spacer nom={'Movies for you'}/>
      <Movie/>
      <Spacer nom={'Latest Bangla'}/>
      <MovieBangla/>
      <Footer/>
    </>
  )
}
