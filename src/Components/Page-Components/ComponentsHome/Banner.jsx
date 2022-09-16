import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const Banner = () => {
  const [banner, setBanner] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/banners?populate=*")
      .then((response) => {
        setBanner(response.data.data);
      });
  }, []);
  return (
    <div>
      {banner?.map((val, i) => {
        return (
          <div key={i}>
            <div
              className="h-screen grid grid-cols-1 md:justify-center items-center"
              style={{
                backgroundImage: `url(http://localhost:1337${val.attributes.bannerImage.data.attributes.formats.thumbnail.url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="px-8 font-sans ">
                <h2 className="font-script text-red-500 text-xl md:text-3xl">
                  {val.attributes.title}
                </h2>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-mono font-bold text-2xl md:text-5xl my-4"
                >
                  {val.attributes.subTitle}
                </motion.h1>
                <motion.p
                  initial={{ y: 350 }}
                  animate={{ y: -10 }}
                  transition={{ duration: 1 }}
                  className=" text-md md:text-xl overflow-none"
                >
                  {val.attributes.description}
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
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
