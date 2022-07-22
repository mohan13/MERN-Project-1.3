import React from "react";
import img1 from "../../Images/banner1.webp";
const Banner = () => {
  return (
  
      <div
        className="h-screen grid grid-cols-1 md:justify-center items-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:'center',
          backgroundSize: "cover",
        }}
      >
       <div className="px-8 font-sans ">
       <h2 className="font- text-red-500 text-xl md:text-3xl">Fashion Sale</h2>
        <h1 className="font-mono font-bold text-2xl md:text-5xl my-4">Minimal Male Size</h1>
        <p className=" text-md md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <button className="text-sm bg-black text-white px-14 py-4 my-4">SHOP NOW</button>
       </div>
      </div>

  )
};

export default Banner;
