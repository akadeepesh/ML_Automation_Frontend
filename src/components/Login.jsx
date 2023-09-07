import React from 'react';
import './styling/Signup.css';

function Login() {
    return (
        <div className="background-radial-gradient overflow-hidden">
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 text-center md:text-md-start md:flex md:flex-col justify-center">
                        <h1 className="my-5 text-3xl font-bold leading-tight text-indigo-50">
                            Welcome back to <br />
                            <span className="text-indigo-100">Your App</span>
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
                                <label className="block mb-4 text-gray-700">Email</label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                    type="email"
                                    placeholder="Email"
                                />

                                <label className="block mb-4 text-gray-700">Password</label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                    type="password"
                                    placeholder="Password"
                                />

                                <button
                                    className="w-full py-2 mt-10 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                                    type="button"
                                >
                                    Log In
                                </button>

                                <div className="text-center mt-4">
                                    <p>Or log in with:</p>

                                    <div className="flex justify-center mt-2">
                                        <button className="mx-3 text-indigo-500 hover:text-indigo-600">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button className="mx-3 text-indigo-500 hover:text-indigo-600">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                        <button className="mx-3 text-indigo-500 hover:text-indigo-600">
                                            <i className="fab fa-google"></i>
                                        </button>
                                        <button className="mx-3 text-indigo-500 hover:text-indigo-600">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-700 text-center">
                                    Don't have an account? <a href="/signup" className="text-indigo-500">Sign up here</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
