import React from "react";
import { motoData } from "./motoData";
const Moto = () => {
  const handleMouseEnter = () =>{
    // e.target.style.bottom = 28
    console.log("");
  }
  return (
    <div className="md:w-full grid grid-cols-1 md:grid-cols-3 p-2 my-4 md:px-10 md:py-4 gap-7 ">
      {motoData?.map((val) => {
        return (
          <div
            className=" h-80"
            style={{
              backgroundImage: `url(${val.Image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img src={val.Image} alt='' className="z-10"/>
            <div  className="font-sans  overflow-hidden hover:bottom-24 text-white font-bolder">
              <div className="text-3xl mb-4">{val.heading}</div>
              <div className="text-sm text-stone-500">{val.btn}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Moto;
