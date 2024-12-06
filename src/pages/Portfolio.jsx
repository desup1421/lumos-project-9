import React, { useEffect } from "react";
// CCOMPONENTS
import Header from "../components/Header";
import CardPortfolio from "../components/CardPortfolio";
import Banner from "../components/Banner";
import ClientList from "../components/ClientList";
//IMAGES
import hands from "../assets/images/hands.png";

import { useSelector, useDispatch } from "react-redux";
import { getPortfolio } from "../redux/slices/portfolioSlice";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { portfolios, isLoading, isError, message } = useSelector(
    (state) => state.portfolio
  );
  const currentPage = 1;

  useEffect(() => {
    dispatch(getPortfolio(currentPage));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {message.message}</div>;
  }
  return (
    <main>
      <Header
        title="The work we do, and the people we help."
        icon={true}
        imageLeft={hands}
        imageRight={hands}
      />

      <section className="p-10">
        <header className="mb-10">
          <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl p-5">
            Featured Work
          </h2>
          <div className="flex justify-end">
            <p className="text-black/90 font-semibold md:w-72 text-center md:text-right">
              we are an award-winning creative & design agency committed to
              excellence since forever.
            </p>
          </div>
        </header>
        <div className="columns-2 gap-10 space-y-10">
          {/* <div className="grid grid-cols-2 gap-5"> */}
          {portfolios.map((item, index) => (
            <CardPortfolio key={index} data={item} />
          ))}
        </div>
      </section>

      <section className="my-20 flex flex-col gap-10 items-center">
        <h2 className="text-center text-2xl md:text-3xl font-bold md:w-4/6 lg:w-2/6">
          We worked with the world&apos;s biggest brands and the most innovative
          startups
        </h2>
        <div className="opacity-70">
          <ClientList />
        </div>
      </section>

      <section className="my-14">
        <Banner />
      </section>
    </main>
  );
};

export default Portfolio;
