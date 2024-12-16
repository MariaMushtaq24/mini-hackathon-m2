import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home(){
  return(
    <html>
      <body>
      <div>
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
      </body>
    </html>
  )
};