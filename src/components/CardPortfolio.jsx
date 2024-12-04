import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CardPortfolio = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/portfolio/${data.key}`)}
      className="relative group cursor-pointer"
    >
      <img className="w-full object-cover" src={data.image} alt={data.title} />
      <div className="group-hover:opacity-100 opacity-0 duration-1000 transition-all absolute bottom-0 left-0 right-0 p-5 bg-black/50 text-white">
        <h3 className="text-center text-lg font-bold">{data.title}</h3>
      </div>
    </div>
  );
};

CardPortfolio.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    key: PropTypes.string,
  }),
};

export default CardPortfolio;
