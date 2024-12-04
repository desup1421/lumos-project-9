import React from "react";
import PropTypes from "prop-types";
// IMAGES
import hands from "../assets/images/hands.png";
// ICONS
import logo from "../assets/images/logo.svg";

const Banner = ({
  text1 = "Grow Your Business.",
  text2 = "Build Great Products.",
  buttonText = "Book a free call",
  image = hands,
}) => {
  return (
    <section className="bg-primary-500">
      <div className="grid grid-cols-3 p-10 pb-0 gap-5 md:gap-10 lg:w-[88%]">
        <img className="h-20" src={logo} alt="" />
        <div className="col-span-2 md:col-span-1">
          <p className="font-bold text-xl">{text1}</p>
          <p className="font-bold text-xl">{text2}</p>
        </div>
        <button className="bg-black col-span-3 md:col-span-1 text-white font-semibold">
          {buttonText}
        </button>
      </div>
      <div className="flex justify-end">
        <img className="h-32" src={image} alt="banner image" />
      </div>
    </section>
  );
};
Banner.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string,
};

export default Banner;
