import React from "react";
import { useParams } from "react-router-dom";
// COMPONENTS
import Header from "../components/Header";
import Banner from "../components/Banner";
// IMAGES
import hands from "../assets/images/hands.png";
import office from "../assets/images/office.png";
// ICONS
import mouse from "../assets/icons/mouse.svg";

const PortfolioDetail = () => {
    const {id} = useParams();
  return (
    <main>
      <Header title="We work with love." imageRight={hands} />
      <div className="flex justify-center p-10">
        <img className="w-10" src={mouse} alt="mouse icons" />
      </div>

      <section className="p-10 grid gap-5">
        <img src={office} alt="Office" />
        <h2 className="text-4xl font-bold">Portfolio Title</h2>
        <div>{`Content of key: ${id}`}</div>
      </section>

      <section className="my-10">
        <Banner />
      </section>
    </main>
  );
};

export default PortfolioDetail;
