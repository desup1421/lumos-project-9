import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// COMPONENTS
import Header from "../components/Header";
import Banner from "../components/Banner";
// IMAGES
import hands from "../assets/images/hands.png";
// ICONS
import mouse from "../assets/icons/mouse.svg";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getPortfolioDetail } from "../redux/slices/portfolioSlice";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const PortfolioDetail = () => {
  const dispatch = useDispatch();
  const { portfolio, isLoading, isError, message } = useSelector(
    (state) => state.portfolio
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPortfolioDetail(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{message}</div>;
  }
  if (!portfolio) {
    return <div>No portfolio found</div>;
  }
  console.log(portfolio)

  return (
    <main>
      <Header title="We work with love." imageRight={hands} />
      <div className="flex justify-center p-10">
        <img className="w-10" src={mouse} alt="mouse icons" />
      </div>

      <section className="p-10 grid gap-5">
        <div className="overflow-hidden">
          <img className="w-full object-cover" src={portfolio.banner} alt={portfolio.title} />
        </div>
        <h2 className="text-4xl font-bold">{portfolio.title}</h2>
        <div>{parse(DOMPurify.sanitize(portfolio.content))}</div>
      </section>

      <section className="my-10">
        <Banner />
      </section>
    </main>
  );
};

export default PortfolioDetail;
