import React from 'react';
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
                        </div>
                        <div className="flex space-x-4 items-center">
                            <RouteLink to='/'><ul className="bg-indigo-600 cursor-pointer px-4 py-2 rounded-2xl text-white hover:bg-indigo-500 text-sm">LOG OUT</ul></RouteLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
