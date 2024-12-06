import React, { useEffect } from "react";
import CardPortfolio from "./CardPortfolio";
import HeaderFilter from "./HeaderFilter";
import { useSelector, useDispatch } from "react-redux";
import { getPortfolio } from "../redux/slices/portfolioSlice";

const HomePortfolio = () => {
  const dispatch = useDispatch();
  const { portfolios, isLoading, isError, message } = useSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(getPortfolio(1));
  }, [dispatch]);

  if(isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message.message}</div>;
  }

  return (
    <>
      <HeaderFilter title="Our work so far" tags={["All", "Web Design", "Development", "Illustration"]} />
      {/* IMAGES */}
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {portfolios.map((item, index) => (
          <CardPortfolio key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default HomePortfolio;
