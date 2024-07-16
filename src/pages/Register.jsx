import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axiosPublic.post('/register',{name,pin,mobileNumber,email});
            navigate('/');
            toast.success("Registration Successful. Please wait for admin approval.")
            

        } catch(error){
            toast.error(error.response?.data?.error || 'An error occurred');
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className=" sm:h-8" src={logo} alt="Logo" />
                    </div>

                    <h3 className="mt-3 text-2xl font-medium text-center text-gray-600">Please Register</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name" aria-label="Name" />
                        </div>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="number"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                placeholder="Pin" aria-label="Pin" />
                        </div>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" placeholder="Your Email" aria-label="Email" />
                        </div>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                placeholder="Mobile Number" aria-label="Mobile Number" />
                        </div>
                        <div className="w-full text-center mt-4">
                            <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#463746] rounded-lg hover:bg-[#674267] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Register
                            </button>
                        </div>
                    </form>
                    <ToastContainer></ToastContainer>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50">
                    <span className="text-sm text-gray-600">Do not have an account? </span>

                    <Link to="/">
                        <p className="mx-2 text-sm font-bold text-[#463746] hover:underline">Login</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;