import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import userAvatar from "../assets/user.png";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut();
  };
  const links = (
    <>
      <NavLink
        className="hover:bg-base-300 transition duration-300 rounded-xl p-4 text-base"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="hover:bg-base-300 transition duration-300 rounded-xl p-4 text-base"
        to="/auth/register"
      >
        Register
      </NavLink>
      <NavLink
        className="hover:bg-base-300 transition duration-300 rounded-xl p-4 text-base"
        to="/auth/myprofile"
      >
        My Profile
      </NavLink>
      <NavLink
        className="hover:bg-base-300 transition duration-300 rounded-xl p-4 text-base"
        to="/exclusive"
      >
        Exclusive Offers
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-200">
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
          >
            {links}
          </ul>
        </div>
        <div>
          <img className="w-30 h-32" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <img
            data-tooltip-id="username-tooltip"
            data-tooltip-content={user?.displayName || "Anonymous"}
            data-tooltip-place="bottom"
            className="w-10 h-10 rounded-full object-cover"
            src={user?.photoURL || userAvatar}
          />
        ) : (
          <img
            data-tooltip-id="username-tooltip"
            data-tooltip-content={user?.displayName || "Anonymous"}
            data-tooltip-place="bottom"
            className="w-10 h-10 rounded-full object-cover"
            src={userAvatar}
          />
        )}
        {user ? (
          <button onClick={handleLogOut} className="btn btn-accent">
            Logout
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-accent">Login</button>
          </Link>
        )}
        <Tooltip id="username-tooltip"></Tooltip>
      </div>
    </div>
  );
};

export default NavBar;
