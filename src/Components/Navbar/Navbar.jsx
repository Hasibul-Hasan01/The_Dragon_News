import { Link, NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    return (
        <div className="grid grid-cols-12 items-center py-5">
            <nav className="col-span-10 flex justify-center pl-50">
                <NavLink className="mr-3" to="/">Home</NavLink>
                <NavLink className="mr-3" to="/about">About</NavLink>
                <NavLink className="mr-3" to="/career">Career</NavLink>
            </nav>
            <div className="col-span-2 flex items-center">
                <Link><CgProfile className="text-4xl mr-2" /></Link>
                <button className="btn btn-primary w-[135px] h-[44px]">Login</button>
            </div>
        </div>
    );
};

export default Navbar;