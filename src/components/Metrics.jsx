import React from "react";

const Metrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 bg-black p-10">
      <div className="flex flex-col gap-1">
        <p className="text-primary-500 text-2xl md:text-3xl font-bold">350 +</p>
        <p className="text-white">Clients Worldwide</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-primary-500 text-2xl md:text-3xl font-bold">20 +</p>
        <p className="text-white">Team Members</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-primary-500 text-2xl md:text-3xl font-bold">100 +</p>
        <p className="text-white">Project Completed</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-primary-500 text-2xl md:text-3xl font-bold">85M +</p>
        <p className="text-white">Revenue Generated</p>
      </div>
    </div>
  );
};

export default Metrics;
