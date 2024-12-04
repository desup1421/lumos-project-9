import React from "react";
// COMPONENTS
import Card from "../components/Card";
import Banner from "../components/Banner";
import HeaderFilter from "../components/HeaderFilter";
import TestimonialCard from "../components/TestimonialCard";
import CardPortfolio from "../components/CardPortfolio";
// IMAGE
import sideImage from "../assets/images/side-image.png";
import heroImage from "../assets/images/hero-element.png";
// ICONS
import icon1 from "../assets/icons/pen-tool-2.svg";
import icon2 from "../assets/icons/search-normal.svg";
import icon3 from "../assets/icons/briefcase.svg";
import icon4 from "../assets/icons/scroll.svg";
import arrow from "../assets/icons/arrow.svg";

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
      <header className="bg-primary-500 text-black flex flex-col justify-center gap-10 relative overflow-hidden">
        <div className="px-20 md:px-60 pb-10 md:pb-24 lg:pb-52 mt-10 md:mt-28 lg:mt-60 flex flex-col gap-16">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold w-10/12">
            Let&apos;s create something great together.
          </h1>
          <div className="flex gap-2">
            <p className="font-bold text-base md:text-xl uppercase">Book a free call</p>
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
          <a className="uppercase font-semibold text-center lg:text-start my-3 lg:my-0 underline">
            our info
          </a>
        </div>
      </section>

      {/* WORK DISPLAY */}
      <section>
        <HeaderFilter />
        {/* IMAGES */}
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {
            portfolio.map((item, index) => (
              <CardPortfolio key={index} data={item} />
            ))
          }
        </div>
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
          <a href="#" className="font-semibold underline">
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
      <section className="md:my-20 p-28 lg:p-60 bg-black/5">
        <div className="grid grid-cols-4 opacity-70">
          <div className="border-r border-b border-black/60 pt-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
          <div className="border-r border-b border-black/60 pt-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
          <div className="border-r border-b border-black/60 pt-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
          <div className="border-l border-b border-black/60 pt-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
          <div className="border-r border-t border-black/60 pb-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
          <div className=" border-l border-t border-black/60 pb-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
          <div className="border-l  border-t border-black/60 pb-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
          <div className="border-l border-t border-black/60 pb-1">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
        </div>
      </section>

      {/* articles */}
      <section className="md:my-40 mx-2">
        <HeaderFilter title="Our Work So Far" tags={["See All"]} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-32 gap-5">
          <Card title="MyTitle" readMore={true} />
          <Card title="MyTitle" readMore={true} />
          <Card title="MyTitle" readMore={true} />
        </div>
      </section>

      {/* BANNER */}
      <section className="my-20">
        <Banner />
      </section>
    </main>
  );
};

export default Home;
