import React from "react";
// COMPONENTS
import Header from "../components/Header";
import Metrics from "../components/Metrics";
import Banner from "../components/Banner";
// IMAGES
import hands from "../assets/images/hands.png";
import sideContact from "../assets/images/side-contact.png";
import office from "../assets/images/office.png";
// ICONS
import mouse from "../assets/icons/mouse.svg";

const Contact = () => {
  return (
    <div>
      <Header imageRight={hands} title="We would love to hear from you" />
      <div className="flex justify-center p-5">
        <img className="w-10" src={mouse} alt="mouse icon" />
      </div>

      {/* FORM SECTION */}
      <section className="grid lg:grid-cols-2 gap-10 md:p-20">
        <div className="p-10">
          <img src={sideContact} alt="Sketch of two people talking" />
        </div>

        <div className="p-10 flex flex-col gap-10">
          <div className="flex lg:justify-end">
            <h2 className="text-2xl md:text-3xl font-bold w-full lg:w-6/12 text-center lg:text-right">
              We&apos;d love to hear from you
            </h2>
          </div>
          <form className="flex flex-col gap-5">
            <div>
              <label className="hidden" htmlFor="name" aria-hidden>
                Name
              </label>
              <input
                className="w-full border p-5 border-black placeholder:text-black"
                type="text"
                placeholder="Name*"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="hidden" htmlFor="email" aria-hidden>
                Email
              </label>
              <input
                className="w-full border p-5 border-black placeholder:text-black"
                type="email"
                placeholder="Email*"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="hidden" htmlFor="url" aria-hidden>
                Website URL
              </label>
              <input
                className="w-full border p-5 border-black placeholder:text-black"
                type="url"
                placeholder="Website URL*"
                id="url"
                name="url"
                required
              />
            </div>
            <div>
              <label className="hidden" htmlFor="project-detail" aria-hidden>
                Project Detail
              </label>
              <textarea
                className="w-full border p-5 border-black placeholder:text-black"
                rows="4"
                placeholder="Project Detail*"
                id="project-detail"
                name="project-detail"
                required
              ></textarea>
            </div>
            <button className="text-white bg-black p-5">Send Proposal</button>
          </form>
        </div>
      </section>

      {/* OFFICE SECTION */}
      <section>
        <h2 className="text-2xl md:text-3xl p-10 md:p-0 font-bold text-center">
          Come stop by our office sometime
        </h2>
        <div className="relative overflow-hidden md:p-20 h-[550px]">
          <img
            className="relative w-full h-full object-cover"
            src={office}
            alt="office"
          />
          <div className="bg-white absolute left-10 md:left-28 bottom-14 md:bottom-28 w-64 p-10 pt-16 flex flex-col gap-5">
            <p className="font-bold text-2xl">New York, USA</p>
            <p className="text-gray-500">
              7626 W, 8th St. Massapequa, NY 11758
            </p>
            <div>
              <p>info@dsgr.com</p>
              <p>(543)890 98</p>
            </div>
            <p className="text-sm font-bold">GET DIRECTION</p>
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="my-10">
        <Metrics />
      </section>

      <section className="my-20 flex flex-col gap-10 items-center">
        <h2 className="text-center text-2xl lg:text-3xl font-bold md:w-4/6 lg:w-2/6">
          We worked with the world&apos;s biggest brands and the most innovative
          startups
        </h2>
      </section>

      <section className="my-14">
        <Banner />
      </section>
    </div>
  );
};

export default Contact;
