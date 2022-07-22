import React from "react";
import { latestData } from "./LatestData";
const Latest = () => {
  return (
    <div className="w-full bg-gray-100 py-14">
      
        <h1 className="text-3xl font-bolder my-10">Latest Week</h1>
        <div className="grid grid-cosl-1 md:grid-cols-3 gap-5 mx-4 md:mx-14">
        {latestData?.map((val) => {
          return (
            <div className="text-left leading-loose">
              <img src={val.Image} alt="" />
              <div className="text text-stone-400 my-4">{val.heading}</div>
              <div className="text-2xl mb-4">{val.subHeading}</div>
              <div className="mb-4">{val.para}</div>
              <div className="my-4">{val.btn}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Latest;
