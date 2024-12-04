import React from "react";
import PropTypes from "prop-types";
// ICONS
import quotes from "../assets/icons/fa-quote-left.svg";

const TestimonialCard = ({ name, image, title, desc }) => {
  return (
    <div className="flex p-10 gap-5">
      <div className="max-w-10 min-w-10">
        <img src={quotes} alt="quotes" />
      </div>
      <div className="flex flex-col justify-between gap-10">
        <p>{desc}</p>
        <div className="flex gap-5 items-center">
          <div className="w-14 h-14">
            <img
              className="w-full h-full object-cover rounded-full"
              src={image}
              alt={name}
            />
          </div>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-black/50">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default TestimonialCard;
