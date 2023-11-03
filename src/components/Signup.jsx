import React, { useState } from 'react'
import './styling/Signup.css';
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        console.log(data);
        navigate('/');
    };

    return (
        <div className="background-radial-gradient overflow-hidden">
            <div className="container mx-auto p-4">
                <div className='text-white cursor-pointer hover:text-black w-fit'><a href="/"><BsArrowLeftCircle size={30} /></a></div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 text-center md:text-md-start md:flex md:flex-col justify-center">
                        <h1 className="my-5 text-3xl font-bold leading-tight text-indigo-50">
                            One step to <br />
                            <span className="text-indigo-100">Dataset Creation</span>
                        </h1>

                        <p className="text-indigo-200">
                            Signup to get started!
                        </p>
                    </div>

                    <div className="relative md:w-1/2">
                        <div id="radius-shape-1" className="absolute rounded-full shadow-xl"></div>
                        <div id="radius-shape-2" className="absolute shadow-xl"></div>

                        <div className="my-5 bg-opacity-75 bg-white rounded-lg shadow-xl bg-glass">
                            <form onSubmit={handleSubmit} className="p-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-4 text-gray-700">First name</label>
                                        <input
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                            type="text"
                                            value={formData.firstname}
                                            onChange={e => setFormData({ ...formData, firstname: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-4 text-gray-700">Last name</label>
                                        <input
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                            type="text"
                                            value={formData.lastname}
                                            onChange={e => setFormData({ ...formData, lastname: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <label className="block mb-4 mt-6 text-gray-700">Email</label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />

                                <label className="block mb-4 mt-6 text-gray-700">Password</label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                                    type="password"
                                    value={formData.password}
                                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                                />

                                <button
                                    className="w-full py-2 mt-10 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                                <p className="mt-4 text-gray-700 text-center">
                                    Already have an account? <a href="/login" className="text-indigo-500">Log in here</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}