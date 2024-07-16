import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className=" sm:h-8" src={logo} alt="Logo" />
                    </div>

                    <h3 className="mt-3 text-2xl font-medium text-center text-gray-600">Please Login</h3>

                    <form>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Email or Phone Number" aria-label="Email or Phone" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="number" placeholder="Pin" aria-label="Pin" />
                        </div>

                        <div className="w-full text-center mt-4">
                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#463746] rounded-lg hover:bg-[#674267] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50">
                    <span className="text-sm text-gray-600">Do not have an account? </span>

                    <Link to="/register">
                        <a href="#" className="mx-2 text-sm font-bold text-[#463746] hover:underline">Register</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;