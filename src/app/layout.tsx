import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

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