import React from "react";
// CCOMPONENTS
import Header from "../components/Header";
import CardPortfolio from "../components/CardPortfolio";
import Banner from "../components/Banner";
//IMAGES
import hands from "../assets/images/hands.png";

const Portfolio = () => {
  const portfolio = [
    {
      image: "https://picsum.photos/100",
      title: "Project 1",
      key: "1",
    },
    {
      image: "https://picsum.photos/200",
      title: "Project 2",
      key: "2",
    },
    {
      image: "https://picsum.photos/100/200",
      title: "Project 3",
      key: "3",
    },
    {
      image: "https://picsum.photos/300",
      title: "Project 4",
      key: "4",
    },
    {
      image: "https://picsum.photos/400",
      title: "Project 5",
      key: "5",
    },
    {
      image: "https://picsum.photos/500",
      title: "Project 6",
      key: "6",
    },
    {
      image: "https://picsum.photos/600",
      title: "Project 7",
      key: "7",
    },
  ];
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
          <h2 className="font-bold text-center md:text-left text-2xl md:text-3xl p-5">Featured Work</h2>
          <div className="flex justify-end">
            <p className="text-black/90 font-semibold md:w-72 text-center md:text-right">
              we are an award-winning creative & design agency committed to
              excellence since forever.
            </p>
          </div>
        </header>
        <div className="columns-2 gap-10 space-y-10">
        {/* <div className="grid grid-cols-2 gap-5"> */}
          {portfolio.map((item, index) => (
            <CardPortfolio
              key={index}
              data={item}
            />
          ))}
        </div>
      </section>

      <section className="my-20 flex flex-col gap-10 items-center">
        <h2 className="text-center text-2xl md:text-3xl font-bold md:w-4/6 lg:w-2/6">
          We worked with the world&apos;s biggest brands and the most innovative
          startups
        </h2>
      </section>

      <section className="my-14">
        <Banner />
      </section>
    </main>
  );
};

export default Portfolio;
