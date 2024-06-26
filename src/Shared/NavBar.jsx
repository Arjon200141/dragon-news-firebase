import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../assets/user.png" 

const NavBar = () => {
    const links = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-8 text-xl font-medium mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-xl font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {/* <img src="/src/assets/user.png" alt="" className="h-12 w-12" /> */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userDefaultPic} />
                        </div>
                    </div>
                    <Link>
                        <button className="btn">Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;