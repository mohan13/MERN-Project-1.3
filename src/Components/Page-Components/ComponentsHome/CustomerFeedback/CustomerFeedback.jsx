import React, { useState } from "react";
import { CustomerData } from "./CustomerData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const CustomerFeedback = () => {
  const [index, setIndex] = useState(0);
  const nextImage = (i) => {
    if (i === CustomerData.length) {
      setIndex(0);
    } else {
      setIndex(i);
    }
  };
  const prevImage = (i) => {
    if (i <= 0) {
      setIndex(CustomerData.length - 1);
    } else {
      setIndex(i);
    }
  };
  return (
    <div className="bg-red-100 py-10 px-4 md:px-20">
      {CustomerData?.map((val, i) => {
        if (i === index)
          return (
            <div key={i} className='flex items-center justify-evenly'>
              <button onClick={() => prevImage(i - 1)}>
                <FaChevronLeft />
              </button>
              <div className=" flex flex-col font-sans items-center">
                <h1 className="text-4xl my-10">{val.Heading}</h1>
                <p className="text-sm md:text-lg leading-loose">{val.para}</p>
                <div className="flex gap-6 font-sans items-center my-4 ">
                  <img src={val.profile} alt="" />
                  <div className="text-left leading-loose">
                    <div className="text-sm">{val.pflName}</div>
                    <div className="text-stone-400 text-md">{val.post}</div>
                  </div>
                </div>
              </div>
              <button onClick={() => nextImage(i + 1)}>
                <FaChevronRight />
              </button>
            </div>
          );
      })}
    </div>
  );
};

export default CustomerFeedback;
