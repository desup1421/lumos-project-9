import React from "react";
// COMPONENTS
import Banner from "../components/Banner";
import Metrics from "../components/Metrics";
import Header from "../components/Header";
// IMAGES
import hands from "../assets/images/hands.png";
import bannerAbout from "../assets/images/banner-about.png";
import ClientList from "../components/ClientList";
import UserList from "../components/UserList";

const About = () => {
  
  return (
    <main>
      <Header
        title="We specialize in problem solving."
        icon={true}
        imageLeft={hands}
        imageRight={hands}
      />

      <section className="p-10 md:p-14 lg:p-20">
        <h2 className="text-2xl font-bold my-5">Who We Are</h2>
        <div className="grid md:grid-cols-12 gap-5 my-10">
          <p className="col-span-7">
            We love what we do and create partnerships with our clients to
            ensure their digital transformation is positioned for long-term
            success.We believe that the human dimensions essential to start any
            successful project and that this is where splendid emotional
            relationships between the company and people are born.
          </p>
          <p className="text-xl font-bold text-black/70 col-span-4 flex justify-end items-center">
            EST.2020
          </p>
        </div>
        <div>
          <img className="w-full object-cover" src={bannerAbout} alt="image" />
        </div>
      </section>

      <section className="p-10 md:p-14 lg:p-20">
        <h2 className="text-2xl md:text-3xl font-bold my-10 text-center">
          Meet the heroes behind the magic
        </h2>
        <UserList />
      </section>

      <section>
        <Metrics />
      </section>

      <section className="my-20 flex flex-col gap-10 items-center">
        <h2 className="text-center text-2xl md:3xl font-bold md:w-4/6 lg:w-2/6">
          We worked with the world&apos;s biggest brands and the most innovative
          startups
        </h2>
        <div>
          <ClientList />
        </div>
      </section>

      <section className="my-14">
        <Banner />
      </section>
    </main>
  );
};

export default About;
