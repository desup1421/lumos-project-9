import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ data, readMore }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <div className="w-full bg-base-100 shadow-xl p-5 flex flex-col gap-5 border rounded-md">
      <img className="w-full" src={data.banner || data.photo} alt={data.name || data.title} />
      <div>
        <h3 className="font-bold text-xl">{ data.name || data.title }</h3>
        <p className={`text-black/80 font-semibold visible ${readMore && 'invisible'} `}>{data.title}</p>
      </div>
      <p>{data?.content?.replace(/<[^>]*>/g, ' ')}</p>
      <div className="flex gap-2">
        <button
          onClick={() => navigate(`/blog/${data.slug}`)}
          className={`${!readMore && "hidden"} self-start font-semibold`}
        >
          Read More
        </button>
        <a
          href={data.linkedin_url}
          className={`${!data.linkedin_url && "hidden"} self-start font-semibold`}
        >
          LinkedIn
        </a>
        <a
          href={data.ig_url}
          className={`${!data.ig_url && "hidden"} self-start font-semibold`}
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string,
    content: PropTypes.string,
    slug: PropTypes.string,
    name: PropTypes.string,
    banner: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    key: PropTypes.string,
    linkedin_url: PropTypes.string,
    ig_url: PropTypes.string,
  }),
  readMore: PropTypes.any
  // readMore: oneOfType([(PropTypes.bool, PropTypes.string )]),
};

export default Card;
