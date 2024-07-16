import { CiMenuBurger } from "react-icons/ci";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
                        <CiMenuBurger className="text-black text-2xl" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-300 text-base-content min-h-full w-80 p-4">
                        <div>
                            <img className="w-24 ml-4 pt-8" src={logo} alt="logo" />
                        </div>
                        <div className="divider"></div>
                        {/* Sidebar content here */}
                        <Link>
                            <li className="text-gray-600 text-lg mb-4 hover:bg-gray-300 p-2 rounded-sm transition-colors duration-100">Sidebar Item 1</li>
                        </Link>
                        <Link>
                            <li className="text-gray-600 text-lg mb-4 hover:bg-gray-300 p-2 rounded-sm transition-colors duration-100">Sidebar Item 1</li>
                        </Link>
                        <Link>
                            <li className="text-gray-600 text-lg mb-4 hover:bg-gray-300 p-2 rounded-sm transition-colors duration-100">Sidebar Item 1</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;