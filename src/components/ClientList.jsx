import React from "react";
import spotify from "../assets/images/spotify.png";
import dropbox from "../assets/images/dropbox.png";
import tesla from "../assets/images/tesla.png";
import reddit from "../assets/images/reddit.png";
import google from "../assets/images/google.png";
import stripe from "../assets/images/stripe.png";
import dhl from "../assets/images/dhl.png";
import airbnb from "../assets/images/airbnb.png";

const ClientList = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="flex justify-center items-center border-r border-b border-black/60 pt-1">
          <img className="p-7" src={spotify} alt="spotify logo" />
        </div>
        <div className="flex justify-center items-center border-r border-b border-black/60 pt-1">
          <img className="p-7" src={dropbox} alt="dropbox logo" />
        </div>
        <div className="flex justify-center items-center border-r border-b border-black/60 pt-1">
          <img className="p-7" src={tesla} alt="tesla logo" />
        </div>
        <div className="flex justify-center items-center border-l border-b border-black/60 pt-1">
          <img className="p-7" src={reddit} alt="reddit logo" />
        </div>
        <div className="flex justify-center items-center border-r border-t border-black/60 pb-1">
          <img className="p-7" src={google} alt="google logo" />
        </div>
        <div className=" flex justify-center items-center border-l border-t border-black/60 pb-1">
          <img className="p-7" src={stripe} alt="stripe logo" />
        </div>
        <div className="flex justify-center items-center border-l  border-t border-black/60 pb-1">
          <img className="p-7" src={dhl} alt="DHL logo" />
        </div>
        <div className="flex justify-center items-center border-l border-t border-black/60 pb-1">
          <img className="p-7" src={airbnb} alt="arbnb logo" />
        </div>
      </div>
    </div>
  );
};

export default ClientList;
