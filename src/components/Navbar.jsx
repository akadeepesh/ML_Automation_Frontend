import React from 'react';
import { Link } from 'react-scroll';
import './styling/Navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="bar">
                    <div className="flex justify-between h-16 px-10 shadow items-center">
                        <div className="flex items-center space-x-8">
                            <div className="text-xl text-brownish lg:text-2xl font-bold cursor-pointer">
                                <a href="/">DeCoder</a>
                            </div>
                            <ul className="hidden md:flex justify-around cursor-pointer space-x-20">
                                <li className='hover:text-indigo-600 ml-80 text-brownish transition-all ease-in-out'>
                                    <Link to='home' smooth duration={500}>Home</Link>
                                </li>
                                <li className='hover:text-indigo-600 text-brownish'>
                                    <Link to='about' smooth duration={500}>About</Link>
                                </li>
                                <li className='hover:text-indigo-600 text-brownish'>
                                    <Link to='contact' smooth duration={500}>Contact</Link>
                                </li>
                                <li className='hover:text-indigo-600 text-brownish'>
                                    <Link to='feedback' smooth duration={500}>Feedback</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <a href="/" className="text-brownish text-sm">LOGIN</a>
                            <li className="bg-indigo-600 px-4 py-2 cursor-pointer rounded-2xl text-white hover:bg-indigo-500 text-sm">
                                <Link to='Signup'>SIGN UP</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
