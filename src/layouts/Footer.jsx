import React from "react";
// ICONS
import twitter from "../assets/icons/fa-twitter.svg";
import facebook from "../assets/icons/fa-facebook-square.svg";
import google from "../assets/icons/fa-google-plus.svg";
import sms from "../assets/icons/sms-notification.svg";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="grid md:grid-cols-2">
        <div className="p-10 items-center md:items-start flex flex-col gap-5">
          <img className="h-8 w-28" src={logo} alt="" />
          <p className="text-center md:text-left">
            Dsgnr. is an award winning creative and design agency <br /> <span className="text-blue-500">based in New York, USA.</span>
          </p>
          <div className="flex gap-10 py-2 px-8 border-2 border-primary-600 max-w-80">
            <img className="w-8" src={sms} alt="message icon" />
            <p>info@dsgnr.com</p>
          </div>
        </div>
        <div className="grid grid-cols-2 p-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5">
            <p>What We Do</p>
            <ul>
              <li>Info</li>
              <li>Home</li>
              <li>Work</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5">
            <p>Who We Are</p>
            <ul>
              <li>About</li>
              <li>News</li>
              <li>Testimonial</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-10">
        <ul className="flex gap-10">
          <li>Privacy Policy</li>
          <li>Terms</li>
        </ul>
        <ul className="flex gap-10">
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={google} alt="google" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
