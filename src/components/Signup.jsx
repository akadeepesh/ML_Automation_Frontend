import React from 'react';
import './styling/Signup.css';

function App() {
    return (
        <div className="background-radial-gradient overflow-hidden">
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 text-center md:text-md-start md:flex md:flex-col justify-center">
                        <h1 className="my-5 text-3xl font-bold leading-tight text-indigo-50">
                            One step to <br />
                            <span className="text-indigo-100">Dataset Creation</span>
                        </h1>

                        <p className="text-indigo-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>
                    </div>

                    <div className="relative md:w-1/2">
                        <div id="radius-shape-1" className="absolute rounded-full shadow-xl"></div>
                        <div id="radius-shape-2" className="absolute shadow-xl"></div>

                        <div className="my-5 bg-opacity-75 bg-white rounded-lg shadow-xl bg-glass">
                            <div className="p-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-4 text-gray-700">First name</label>
                                        <input
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                            type="text"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-4 text-gray-700">Last name</label>
                                        <input
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <label className="block mb-4 mt-6 text-gray-700">Email</label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                    type="email"
                                />

                                <label className="block mb-4 mt-6 text-gray-700">Password</label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                    type="password"
                                />

                                <button
                                    className="w-full py-2 mt-10 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                                <p className="mt-4 text-gray-700 text-center">
                                    Already have an account? <a href="/login" className="text-indigo-500">Log in here</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
