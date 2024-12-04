import React from "react";
import { Link } from "react-router-dom";
// ICONS
import menu from "../assets/icons/hamburger.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-16 right-10 md:right-20 group  z-10">
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
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
