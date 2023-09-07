import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';
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
                            <ul className="text-brownish cursor-pointer text-sm">
                                <RouteLink to='/login'>LOGIN</RouteLink>
                            </ul>
                            <ul className="bg-indigo-600 cursor-pointer px-4 py-2 rounded-2xl text-white hover:bg-indigo-500 text-sm">
                                <RouteLink to='/signup'>SIGN UP</RouteLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
