import Link from 'next/link';
import { FaCartPlus, FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import Image from 'next/image';


export default function Navbar() {
    const [drop, setDrop] = useState(false);
    const dropDown = () => {
        setDrop(!drop);
    }
    return (
        <nav  className="z-10 bg-navbar-bg bg-cover bg-center lg:mb-16 relative shadow-lg shadow-black h-[200px] lg:h-[300px] mx-auto px-6 py-3 flex justify-between items-end">
            <div className="flex items-end">
            <Link href="/">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/carLogo.png"
                    alt="Next.js Logo"
                    width={50}
                    height={50}
                    priority
                /></Link>
            </div>  
            <ul className="hidden md:flex gap-7 text-2xl text-black font-serif" >
                <Link href="/"><li className='hover:bg-white md:py-2 md:px-2 lg:py-3 lg:px-4 duration-200 rounded-lg'>Home</li></Link>
                {/* <Link href="/posts/galerie"><li className='hover:bg-white py-2 px-2 duration-200'>Galerie</li></Link> */}
                <Link href="/deals/"><li className='hover:bg-white md:py-2 md:px-2 lg:py-3 lg:px-4 duration-200 px-2 rounded-lg'>Deals</li></Link>
                <Link href="/oldTimer/"><li className='hover:bg-white md:py-2 md:px-2 lg:py-3 lg:px-4 duration-200 px-2 rounded-lg'>Old Timer</li></Link>
                <Link href="/stocks/"><li className='hover:bg-white md:py-2 md:px-2 lg:py-3 lg:px-4 duration-200 px-2 rounded-lg'>All</li></Link>
            </ul>
            <div className="md:hidden">
                <button onClick={dropDown} className="text-white focus:outline-none">
                    <IoIosArrowDropdown className="h-6 w-6" />
                </button>
            </div>
            
            <div className="flex items-center gap-7">
                {/* <FaCartPlus className="h-8 w-8 text-white cursor-pointer" /> */}
                <Link href="/login/"><FaUserCircle className="h-8 w-8 text-black cursor-pointer" /></Link>
            </div>
            
            {/* ici dropdown */}
            {drop && (
                <div className="z-20 md:hidden bg-white shadow-md mt-36 absolute text-center left-40 rounded-lg">
                    <ul className="p-2">
                        <li className="py-1 hover:bg-gray-200">
                            <Link href="/"><p className="text-gray-700">Home</p></Link>
                        </li>
                        {/* <li className="py-1 hover:bg-gray-200">
                            <Link href="/posts/galerie"><p className="text-gray-700">Galerie</p></Link>
                        </li> */}
                        <li className="py-1 hover:bg-gray-200">
                            <Link href="/deals/"><p className="text-gray-700">Deals</p></Link>
                        </li>
                        <li className="py-1 hover:bg-gray-200">
                            <Link href="/oldTimer/"><p className="text-gray-700">Old Timers</p></Link>
                        </li>
                        <li className="py-1 hover:bg-gray-200">
                            <Link href="/stocks/"><p className="text-gray-700">Stocks</p></Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
