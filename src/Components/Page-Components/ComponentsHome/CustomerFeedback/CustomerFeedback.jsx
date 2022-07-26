import React, { useState } from "react";
import { CustomerData } from "./CustomerData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
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
            <div key={i} className="flex items-center justify-between ">
              <button onClick={() => prevImage(i - 1)}>
                <FaChevronLeft />
              </button>
              <motion.div>
                <div className="  duration-300  font-sans items-center">
                  <h1 className="text-4xl my-10">{val.Heading}</h1>
                  <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.5 }} 
                    className="flex flex-col items-center"
                  >
                    <p className="text-sm md:text-lg leading-loose">
                      {val.para}
                    </p>
                    <div className="flex gap-4 font-sans items-center my-4 mx-4 ">
                      <img src={val.profile} alt="" />
                      <div className="text-left leading-loose">
                        <div className="text-sm">{val.pflName}</div>
                        <div className="text-stone-400 text-sm">{val.post}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
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
