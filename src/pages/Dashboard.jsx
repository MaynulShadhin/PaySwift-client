import { CiMenuBurger } from "react-icons/ci";
import logo from '../assets/logo.png'
const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
                    <CiMenuBurger className="text-2xl" />
                    </label>
                </div>
                <div className="drawer-side bg-base-300">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div>
                        <img className="w-24 ml-8 pt-8" src={logo} alt="logo" />
                    </div>
                    <div className="divider"></div>
                    <ul className="menu bg-base-300 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;