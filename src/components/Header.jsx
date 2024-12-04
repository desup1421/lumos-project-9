import React from "react";
import PropTypes from "prop-types";
// ICONS
import mouse from "../assets/icons/mouse.svg";
import logo from "../assets/images/logo.svg";

const Header = ({ title, imageLeft, imageRight, icon }) => {
  return (
    <header className="relative bg-primary-500">
      <div className="absolute top-16 left-10 md:left-20">
        <img className="h-8 w-28" src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center">
          <h1 className=" font-bold text-4xl md:text-7xl mt-72 mb-20 text-center w-9/12">
            {title}
          </h1>
        </div>
        <img
          className={`w-12 ${!icon && "hidden"}`}
          src={typeof icon === "string" ? icon : mouse}
          alt="mouse icons"
        />
        <div className="grid grid-cols-2 gap-1  w-full">
          <img
            className={`${!imageLeft && "invisible"} w-full`}
            src={imageLeft}
            alt={title}
          />
          <img
            className={`${!imageRight && "invisible"} w-full`}
            src={imageRight}
            alt={title}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  imageLeft: PropTypes.string,
  imageRight: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Header;
