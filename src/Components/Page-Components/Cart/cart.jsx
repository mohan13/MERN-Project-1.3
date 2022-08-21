import React, { useState } from "react";
import { FiShare2, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Cart = () => {
  let Location = useLocation();
  let CartData = Location.state.data;
  console.log(Location, Location.state.data);
  const [show, setShow] = useState(0);
  const FilterItem = (Index) => {
    setShow(Index);
  };
  return (
    <div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        exit={{ y: window.innerHeight, transition: { duration: 0.1 } }}
      >
        <div>
          {CartData?.map((val, i) => {
            return (
              <div key={i}>
                <div className="bg-red-500 md:pl-10 md:py-8 grid p-4 md:flex justify-center text-left">
                  <div>
                    <img src={val.Image} alt="" />
                  </div>
                  <div className="md:grid md:col-span-3 md:ml-10">
                    <div className="text-md md:text-4xl font-bold">
                      {val.title}
                    </div>
                    <div className="text-sm md:text-lg">{val.subTitle}</div>
                    <div>
                      <div className="text-md md:text-4xl font-bold">
                        {val.price}
                      </div>
                      <div className="flex mt-2">
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                      </div>
                    </div>
                    <div className="flex mt-2 items-center ">
                      <input
                        type="number"
                        value="1"
                        className="w-10 h-10 mr-4 rounded-m outline-none md:text-lg pl-2"
                      />
                      <button className="rounded-full bg-white px-4 md:px-10 py-2">
                        Add to cart
                      </button>
                      <div className=" rounded-full bg-white ml-4 p-4">
                        <FiShare2 className="md:w-5 md:h-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 px-2 md:gap-6 justify-between text-lg md:text-xl  border-b-2 ">
                  <button
                    onClick={() => FilterItem(0)}
                    className="hover:border-b-4 md:p-4 pb-6 hover:text-red-500 hover:border-red-500 "
                  >
                    Commnets
                  </button>
                  <button
                    onClick={() => FilterItem(1)}
                    className="hover:border-b-4 md:p-4 pb-6 hover:text-red-500 hover:border-red-500"
                  >
                    Description
                  </button>
                  <button
                    onClick={() => FilterItem(2)}
                    className="hover:border-b-4 md:p-4 pb-6 hover:text-red-500 hover:border-red-500"
                  >
                    Review
                  </button>
                </div>
                <div className="text-left text-md leading-6 md:text-xl my-4 p-8 md:p-10">
                  <motion.div className={show === 0 ? "" : "hidden"}>
                    {val.comment}
                  </motion.div>
                  <motion.div className={show === 1 ? "" : "hidden"}>
                    {val.review}
                  </motion.div>
                  <motion.div FclassName={show === 2 ? "" : "hidden"}>
                    {val.description}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
