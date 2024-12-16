import Link from "next/link";
import { BsCartDash } from "react-icons/bs";

export default function Navbar (){
    return(
        <div className="w-full bg-black">
            <nav className="container mx-auto flex flex-wrap justify-between items-center px-6 py-4">
                {/*Logo*/}
                <div className="text-white text-xl font-bold">
                    <Link href="/Home">
                    The Car Shop
                    </Link>
                </div>
                {/*Mobile Menu*/}
                <div className="md:hidden">
                    <button id="toggle-menu" className="text-white text-2xl focus:outline-none">
                    ☰
                    </button>
                </div>
                {/*Links*/}
                <div id="menu" className="hidden text-white flex-col w-full md:flex md:flex-row md:items-center md:w-auto md:space-x-8 space-y-4 md:space-y-0">
                    <Link href="/Home" className="font-semi-bold hover:text-blue-500">Home</Link>
                    <Link href="/Shop" className="font-semi-bold hover:text-blue-500">Shop</Link>
                    <Link href="/FAQs" className="font-semi-bold hover:text-blue-500">FAQs</Link>
                    <Link href="/AboutUs" className="font-semi-bold hover:text-blue-500">About Us</Link>
                    <Link href="/Contact" className="font-semi-bold hover:text-blue-500">Contact</Link>
                </div>
                 {/* cart */}
                 <div className="relative hidden md:flex justify-between items-center">
                    <BsCartDash size={25} className="text-white" />
                    <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
                    2
                    </span>
                </div>
            </nav>
        </div>
    )
};