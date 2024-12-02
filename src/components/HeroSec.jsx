import React from "react";

const HeroSection = () => {
  return (
    <div className="text-left p-4 pl-32 mt-24">
      <h1 className="text-2xl font-bold">
        <span className="text-gray-700 text-6xl font-normal"> Muhammad Hassan Khan</span>
      </h1>
      <p className="text-gray-700 text-2xl mt-14">
        Free fake and reliable API for testing and prototyping. <br />
        Powered by JSON Server + LowDB.
      </p>
      <p className="text-gray-700 mt-2 font-bold mt-6">
        Serving ~3 billion requests each month.
      </p>
    </div>
  );
};

export default HeroSection;
