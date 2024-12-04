import React from "react";
// COMPONENTS
import Header from "../components/Header";
import Card from "../components/Card";
import Banner from "../components/Banner";
// IMAGES
import hands from "../assets/images/hands.png";
// ICONS
import mouse from "../assets/icons/mouse.svg";

const BlogList = () => {
  const data = [
    {
      image: hands,
      title: "Article 1",
      desc: "Article 1 description",
      key: "1",
    },
    {
      image: hands,
      title: "Article 2",
      desc: "Article 2 description",
      key: "2",
    },
    {
      image: hands,
      title: "Article 3",
      desc: "Article 3 description",
      key: "3",
    },
    {
      image: hands,
      title: "Article 4",
      desc: "Article 4 description",
      key: "4",
    },
    {
      image: hands,
      title: "Article 5",
      desc: "Article 5 description",
      key: "5",
    },
    {
      image: hands,
      title: "Article 6",
      desc: "Article 6 description",
      key: "6",
    },
  ];

  return (
    <main>
      <Header
        title="Read best articles from us"
        imageLeft={hands}
        imageRight={hands}
      />
      <div className="flex justify-center p-5">
        <img className="w-10" src={mouse} alt="mouse icon" />
      </div>

      <section className="p-10 md:p-14 lg:p-20">
        <h2 className="text-2xl font-bold my-10 text-center">
          Meet the heroes behind the magic
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {data.map((item, index) => (
            <Card key={index} readMore={true} data={item} />
          ))}
        </div>
        <div className="flex justify-center my-20">
          <button className="bg-black text-white py-3 px-5">Load More</button>
        </div>
      </section>

      <section className="my-14">
        <Banner />
      </section>
    </main>
  );
};

export default BlogList;
