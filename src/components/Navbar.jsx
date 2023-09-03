import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './styling/Navbar.css'

const Navbar = () => {
    // const [nav, setNav] = useState(false);
    return (
        <header>
            <nav>
                <div class="bar">
                    <div class="flex justify-between h-16 px-10 shadow items-center">
                        <div class="flex items-center space-x-8">
                            <div class="text-xl text-brownish lg:text-2xl font-bold cursor-pointer">
                                <a href="/">DeCoder</a>
                            </div>
                            <ul class="hidden md:flex justify-around cursor-pointer space-x-20 transition ease-in-out">
                                <li className='hover:text-indigo-600 ml-80 text-brownish'>
                                    <Link to='home' smooth duration={500}>Home</Link>
                                </li>
                                <li className='hover:text-indigo-600 text-brownish'>
                                    <Link to='about' smooth duration={500}>About</Link>
                                </li>
                                <li className='hover:text-indigo-600 text-brownish'>
                                    <Link to='service' smooth duration={500}>Service</Link>
                                </li>
                                <li className='hover:text-indigo-600 text-brownish'>
                                    <Link to='contact' smooth duration={500}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="flex space-x-4 items-center">
                            <a href="#" class="text-brownish text-sm">LOGIN</a>
                            <a href="#" class="bg-indigo-600 px-4 py-2 rounded-2xl text-white hover:bg-indigo-500 text-sm">SIGN UP</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

