import React from "react";
import { CustomerData } from "./CustomerData";
const CustomerFeedback = () => {
  return (
    <div className="bg-red-100 w-screen py-10 px-4 md:px-20">
      {CustomerData?.map((val) => {
        return (
          <div className="grid font-sans items-center mx-auto">
            <h1 className="text-xl md:text-4xl my-10">{val.Heading}</h1>
            <p className="text-sm md:text-xl leading-loose">{val.para}</p>
            <div className="flex items-center my-4 ">
              <img src={val.profile} alt="" />
              <div>
                <h1>{val.pflName}</h1>
                <div>{val.post}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerFeedback;
