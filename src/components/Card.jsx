import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const dataDummy = {
  image: "https://picsum.photos/100",
  title: "Card Title",
  desc: "Card desc",
  key: "1",
  role: "",
  instagram: "",
  linkedin: "",
};

const Card = ({ data = dataDummy, readMore }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-base-100 shadow-xl p-5 flex flex-col gap-5 border rounded-md">
      <img className="w-full" src={data.image} alt={data.title} />
      <div>
        <h3 className="font-bold text-xl">{data.title || data.name}</h3>
        <p className="text-black/80 font-semibold">{data.role}</p>
      </div>
      <p>{data.desc}</p>
      <div className="flex gap-2">
        <button
          onClick={() => navigate(`/blog/${data.key}`)}
          className={`${!readMore && "hidden"} self-start font-semibold`}
        >
          Read More
        </button>
        <a
          href={data.linkedin}
          className={`${!data.linkedin && "hidden"} self-start font-semibold`}
        >
          LinkedIn
        </a>
        <a
          href={data.instagram}
          className={`${!data.instagram && "hidden"} self-start font-semibold`}
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    key: PropTypes.string,
    role: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
  }),
  readMore: PropTypes.any
  // readMore: oneOfType([(PropTypes.bool, PropTypes.string )]),
};

export default Card;
