import React from "react";
import PropTypes from "prop-types";

const HeaderFilter = ({ title, tags =[] }) => {
  return (
    <header className="lg:px-20 pt-10 m-10 md:m-20 flex flex-col lg:flex-row items-center justify-between">
      <h2 className="text-2xl md:3xl font-bold text-center">{title}</h2>
      <div>
        <ul className="uppercase overflow-x-auto flex gap-8 font-bold text-black/50 py-5">
          {tags.map((tag, index) => (
            <li key={index} className="hover:text-black hover:underline underline-offset-4 uppercase">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

HeaderFilter.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default HeaderFilter;
