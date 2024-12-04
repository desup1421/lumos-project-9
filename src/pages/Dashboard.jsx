import React from "react";
import logo from "../assets/images/logo.svg";

const Dashboard = () => {
  return (
    <div className="relative flex">
      <aside className="h-lvh w-96 bg-black text-white p-10 absolute">
        <header className="pb-10">
          <img className="h-8 w-28" src={logo} alt="" />
        </header>
        <div className="mt-20">
          <ul className="text-xl flex flex-col gap-5">
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Content</li>
          </ul>
          <button>Logout</button>
        </div>
      </aside>
      <main className="bg-white h-screen w-full lg:ml-96 p-10 ">
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">350 +</p>
            </div>
            <p className="text-lg font-semibold text-center">
              Clients Worldwide
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">20 +</p>
            </div>
            <p className="text-lg font-semibold text-center">Team Members</p>
          </div>

          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">100 +</p>
            </div>
            <p className="text-lg font-semibold text-center">Project</p>
          </div>

          <div className="flex flex-col justify-between gap-5 items-center">
            <div className="h-36 w-36 border-8 border-primary-500 rounded-full flex justify-center items-center bg-white">
              <p className="font-bold text-3xl">85M +</p>
            </div>
            <p className="text-lg font-semibold text-center">
              Revenue Generated
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
