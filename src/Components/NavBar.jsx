import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
const NavBar = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <NavLink className="hover:bg-base-300 transition duration-300 rounded-xl p-4 text-base" to="/">Home</NavLink>
      <NavLink className="hover:bg-base-300 transition duration-300 rounded-xl p-4 text-base" to="/auth/register">Register</NavLink>
      <NavLink className="hover:bg-base-300 transition duration-300 rounded-xl p-4 text-base" to="/auth/myprofile">My Profile</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >{links}</ul>
        </div>
        <div>
          <img className="w-30 h-32" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user & user?.email ? <button className="btn">Logout</button> : <Link to="/auth/login"><button className="btn">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default NavBar;
