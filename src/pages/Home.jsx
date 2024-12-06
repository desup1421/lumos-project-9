import React from "react";
// COMPONENTS
import Banner from "../components/Banner";
import HeaderFilter from "../components/HeaderFilter";
import TestimonialCard from "../components/TestimonialCard";
import HomePortfolio from "../components/HomePortfolio";
import HomeArticle from "../components/HomeArticle";
// IMAGE
import sideImage from "../assets/images/side-image.png";
import heroImage from "../assets/images/hero-element.png";
// ICONS
import icon1 from "../assets/icons/pen-tool-2.svg";
import icon2 from "../assets/icons/search-normal.svg";
import icon3 from "../assets/icons/briefcase.svg";
import icon4 from "../assets/icons/scroll.svg";
import arrow from "../assets/icons/arrow.svg";
import ClientList from "../components/ClientList";

const Home = () => {
  // Data for branding section
  const branding = [
    {
      icon: icon1,
      text: "Exceptional Design",
    },
    {
      icon: icon2,
      text: "In depth research",
      style: "opacity-80",
    },
    {
      icon: icon3,
      text: "Product management",
    },
    {
      icon: icon4,
      text: "No-code development",
    },
  ];
  return (
    <main>
      <header className="bg-primary-500 pt-24 md:pt-0 text-black flex flex-col justify-center gap-10 relative overflow-hidden">
        <div className="px-20 md:px-60 pb-10 md:pb-24 lg:pb-52 mt-10 md:mt-28 lg:mt-60 flex flex-col gap-16">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold w-10/12">
            Let&apos;s create something great together.
          </h1>
          <div className="flex gap-2 z-20">
            <a href="tel:+6257575757" className="font-bold text-base md:text-xl uppercase">Book a free call</a>
            <img src={arrow} alt="arrow icon" />
          </div>
        </div>
        <div className="absolute md:-bottom-12 lg:-bottom-20">
          <img className="w-full" src={heroImage} alt="Hero Image" />
        </div>
      </header>

      {/* BRANDING */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {branding.map((item, index) => (
          <div
            key={index}
            className={`w-full h-28 flex flex-col justify-between items-center ${item.style}`}
          >
            <img className="w-[50px]" src={item.icon} alt="icon 1" />
            <p className="uppercase font-bold text-center">{item.text}</p>
          </div>
        ))}
      </section>

      {/* HELLO */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 py-52 my-2 border-b border-black/50">
        <div className="flex items-end justify-center">
          <p className="text-primary-500 text-8xl font-bold">
            hello<span className="text-black">.</span>
          </p>
        </div>

        <div className="flex justify-center lg:justify-start items-center lg:items-end">
          <p className="text-4xl text-center lg:text-right font-bold w-10/12">
            Award winning agency specializing in creative design
          </p>
        </div>

        <div className="flex flex-col justify-center lg:justify-between">
          <p className="text-center lg:text-start">
            We help bussinesses grow, launch products and build enduring
            relationships with our comunities.
          </p>
          <a href="#" className="uppercase font-semibold text-center lg:text-start my-3 lg:my-0 underline">
            our info
          </a>
        </div>
      </section>

      {/* WORK DISPLAY */}
      <section>
        <HomePortfolio />
      </section>

      {/* STEPS */}
      <section className="my-60">
        <div className="grid lg:grid-cols-2 gap-10 px-5 lg:px-48">
          {/* IMAGE */}
          <img className="w-full" src={sideImage} alt="" />

          {/* TEXT */}
          <div className="md:px-20 flex flex-col gap-20">
            <h2 className="text-2xl md:text-3xl text-center font-bold">
              A simple, yet effective three step process
            </h2>

            {/* LISTS */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <div className="border rounded-full shadow-md p-6 text-2xl w-14 h-14 flex items-center justify-center">
                  <p>💡</p>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold">Ide Initiation</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, similique?
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <div className="border rounded-full shadow-md p-6 text-2xl w-14 h-14 flex items-center justify-center">
                  <p>🎯</p>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold">Ide Initiation</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, similique?
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <div className="border rounded-full shadow-md p-6 text-2xl w-14 h-14 flex items-center justify-center">
                  <p>🚀</p>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold">Ide Initiation</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, similique?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center px-5 mt-20">
          Wherever you are in your journey, we&apos;d love to hear from you.{" "}
          <a href="tel:+6257575757" className="font-semibold underline">
            Book a free call
          </a>
        </p>
      </section>

      {/* TESTIMONIAL */}
      <section>
        {/* HEADER */}
        <HeaderFilter title="What our clients say about us" tags={[]} />

        {/* TESTIMONIAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TestimonialCard
            name="Milton Austin"
            title="Product Manager, Slack"
            image="https://picsum.photos/id/1005/200/300"
            desc="I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them again and would recommend them to anyone else looking for a designer and developer. They know their stuff!"
          />
          <TestimonialCard
            name="Jane Cooper"
            title="Co-founder, catco."
            image="https://picsum.photos/id/1005/200/300"
            desc="Great work ethic and very reliable! Brooklyn was our logo designer. She walked us through many iterations and guided us on all aspects of the process. Very professional, will use them again soon!"
          />
        </div>
      </section>

      {/* Clients */}
      <section className="md:my-20 p-28 lg:p-60 opacity-70">
        <ClientList />
      </section>

      {/* articles */}
      <section className="md:my-40 mx-2">
        <HomeArticle />
      </section>

      {/* BANNER */}
      <section className="my-20">
        <Banner />
      </section>
    </main>
  );
};

export default Home;
