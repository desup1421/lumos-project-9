import React from "react";
import { Link } from "react-router-dom";
// ICONS
import menu from "../assets/icons/hamburger.svg";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between py-2 px-5 md:px-20 w-full top-0 left-0 z-10 bg-primary-500">
      <img className="h-7 w-28" src={logo} alt="Logo" />
      <div className="group relative">
        <button className="bg-white shadow-md">
          <img className="w-14" src={menu} alt="menu icon" />
        </button>
        <div className="absolute invisible transition-all group-hover:visible bg-white w-32 text-center top-[56px] right-[56px]">
          <ul className="flex flex-col gap-5 p-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
