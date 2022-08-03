import React, { useState } from "react";
import { CartData, productDetail } from "./CartData";
import { FiShare2, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
const Cart = () => {
  //   const [detail,setDetail] = useState(productDetail(0))
  //   const showDetail = ()=>{
  //     setDetail(0)
  //     console.log("yes i am working")
  //   }
  return (
    <div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        exit={{ x: window.innerHeight, transition: { duration: 0.2 } }}
      >
        <div className="bg-red-500 md:pl-10 md:py-8">
          {CartData?.map((val, i) => {
            return (
              <div
                key={i}
                className=" grid p-4 md:flex justify-center text-left"
              >
                <div>
                  <img src={val.image} alt="" />
                </div>
                <div className="md:grid md:col-span-3 md:ml-10">
                  <div className="text-md md:text-4xl font-bold">
                    {val.title}
                  </div>
                  <div className="text-sm md:text-md">{val.subTitle}</div>
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
            );
          })}
        </div>
        <div>
          <div className="flex h-10 mt-4 px-2  md:gap-6 justify-between text-md md:text-xl  border-b-2 ">
            <button className="hover:border-b-4 md:p-4 pb-6 hover:text-red-500 hover:border-red-500 ">
              Description
            </button>
            <button className="hover:border-b-4 md:p-4 pb-6 hover:text-red-500 hover:border-red-500">
              Comments
            </button>
            <button className="hover:border-b-4 md:p-4 pb-6 hover:text-red-500 hover:border-red-500 ">
              Spec.
            </button>
            <button className="hover:border-b-4 md:p-4 pb-6 hover:text-red-500 hover:border-red-500">
              Review
            </button>
          </div>
          {/* <p>{setDetail}</p> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
