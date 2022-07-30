import React from "react";
import { ServiceData } from "./ServiceData";
const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-14">
      {ServiceData?.map((val, i) => {
        return (
          <div
            key={i}
            className={`flex flex-col items-center ${
              i === ServiceData.length - 1 ? "" : "md:border-r-2"
            }`}
          >
            <img src={val.Image} className="h-14 w-14 my-4 " alt="" />
            <div>{val.heading}</div>
            <div>{val.subHeading}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
