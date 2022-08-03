import React from "react";
import img1 from "../../Images/banner1.webp";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div
      className="h-screen grid grid-cols-1 md:justify-center items-center"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="px-8 font-sans ">
        <h2 className="font-script text-red-500 text-xl md:text-3xl">
          Fashion Sale
        </h2>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono font-bold text-2xl md:text-5xl my-4"
        >
          Minimal Male Size
        </motion.h1>
        <motion.p
          initial={{ y: 350 }}
          animate={{ y: -10 }}
          transition={{ duration: 1 }}
          className=" text-md md:text-xl overflow-none"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.button
          initial={{ y: 350 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm bg-black text-white px-14 py-4 my-4"
        >
          SHOP NOW
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
